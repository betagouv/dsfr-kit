"""Generate command for creating DSFR web components."""

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import click
from dsfr_generator.fetcher import fetch_dsfr_package, get_cached_package
from dsfr_generator.generator import generate_web_component
from dsfr_generator.parsers import (
    ComponentStructure,
    extract_custom_properties,
    extract_html_structure,
    parse_html,
)
from dsfr_generator.parsers.js_analyzer import analyze_javascript_file, is_analyzer_available
from dsfr_generator.token_mapper import generate_tailwind_config, map_dsfr_colors
from dsfr_generator.validator import validate_rgaa_compliance, validate_wcag_compliance


@dataclass
class GenerationContext:
    """Context for component generation pipeline."""

    component_name: str
    component_slug: str
    dsfr_version: str
    package_path: Path
    output_dir: Path
    verbose: bool


@click.command()
@click.argument("component_name", type=str)
@click.option(
    "--output",
    "-o",
    type=click.Path(path_type=Path),
    default=Path("components"),
    help="Output directory for generated files (default: ./components)",
)
@click.pass_context
def generate(ctx: click.Context, component_name: str, output: Path) -> None:
    """
    Generate a DSFR web component.

    COMPONENT_NAME: Name of the DSFR component to generate (e.g., Button, Alert, Badge)

    Examples:
        dsfr-kit generate Button
        dsfr-kit generate Button --output ./src/components
        dsfr-kit generate Alert -o ./components
    """
    verbose = ctx.obj.get("verbose", False)
    dsfr_version = ctx.obj.get("dsfr_version", "v1.14.2")

    # Normalize component name
    component_name_normalized = component_name.capitalize()
    component_slug = component_name.lower()

    try:
        # Step 1: Fetch DSFR package
        _fetch_package_ctx = GenerationContext(
            component_name=component_name_normalized,
            component_slug=component_slug,
            dsfr_version=dsfr_version,
            package_path=get_cached_package(dsfr_version) or Path(),
            output_dir=output,
            verbose=verbose,
        )
        _fetch_package(_fetch_package_ctx)

        # Update package path after fetch
        generation_ctx = GenerationContext(
            component_name=component_name_normalized,
            component_slug=component_slug,
            dsfr_version=dsfr_version,
            package_path=get_cached_package(dsfr_version) or Path(),
            output_dir=output,
            verbose=verbose,
        )

        # Step 2: Parse HTML structure
        component_structure = _parse_component_html(generation_ctx)

        # Step 3: Extract design tokens
        scss_tokens = _extract_design_tokens(generation_ctx)

        # Step 4: Analyze JavaScript behaviors (if available)
        behavior_pattern = _analyze_javascript_behaviors(generation_ctx)

        # Step 5: Map design tokens to Tailwind
        _log_progress("Mapping design tokens", "to Tailwind configuration", verbose)
        tailwind_colors = map_dsfr_colors(scss_tokens)
        tailwind_config = generate_tailwind_config(tailwind_colors, {}, {})

        # Step 6: Generate web component
        component_code = _generate_component_code(
            generation_ctx, component_structure, tailwind_colors, behavior_pattern
        )

        # Step 6: Validate accessibility (temporarily disabled for MVP)
        # TODO: Re-enable after implementing proper component wrapping for validation
        # _validate_accessibility(generation_ctx, component_code)

        # Step 7: Write output files
        component_file, tailwind_file = _write_output_files(
            generation_ctx, component_code, tailwind_config
        )

        # Success message
        click.echo()
        click.secho(
            f"✓ {component_name_normalized} component generated successfully!",
            fg="green",
            bold=True,
        )
        click.echo(f"  Component: {component_file}")
        click.echo(f"  Tailwind:  {tailwind_file}")

    except FileNotFoundError as e:
        raise click.ClickException(f"File not found: {e}")
    except Exception as e:
        if verbose:
            raise
        raise click.ClickException(f"Generation failed: {e}")


def _log_progress(step: str, detail: str, verbose: bool) -> None:
    """Log a progress step with optional detail."""
    if verbose:
        click.echo(f"→ {step}: {detail}")
    else:
        click.echo(f"→ {step}...")


def _report_validation_errors(validator_name: str, violations: list[dict[str, Any]]) -> None:
    """Report validation errors in a formatted way."""
    click.echo()
    click.secho(f"✗ {validator_name} validation failed:", fg="red", bold=True)
    click.echo()

    for i, violation in enumerate(violations[:5], 1):  # Show first 5 violations
        if validator_name == "WCAG":
            impact = violation.get("impact", "unknown")
            vid = violation.get("id", "unknown")
            desc = violation.get("description", "No description")
            click.echo(f"  {i}. [{impact.upper()}] {vid}")
            click.echo(f"     {desc}")
        elif validator_name == "RGAA":
            criterion = violation.get("criterion", "unknown")
            level = violation.get("level", "unknown")
            desc = violation.get("description", "No description")
            click.echo(f"  {i}. [Level {level}] Criterion {criterion}")
            click.echo(f"     {desc}")
        click.echo()

    if len(violations) > 5:
        click.echo(f"  ... and {len(violations) - 5} more violations")


def _fetch_package(ctx: GenerationContext) -> None:
    """Fetch or retrieve cached DSFR package."""
    _log_progress("Fetching DSFR package", f"version {ctx.dsfr_version}", ctx.verbose)
    package_path = get_cached_package(ctx.dsfr_version)
    if not package_path or not package_path.exists():
        click.echo(f"  Downloading DSFR {ctx.dsfr_version}...")
        fetch_dsfr_package(ctx.dsfr_version)


def _parse_component_html(ctx: GenerationContext) -> ComponentStructure:
    """Parse HTML structure from DSFR package."""
    _log_progress("Parsing HTML structure", ctx.component_name, ctx.verbose)

    html_path = (ctx.package_path / "example" / "component" / ctx.component_slug / "index.html")
    if not html_path.exists():
        raise FileNotFoundError(
            f"Component HTML not found at: example/component/{ctx.component_slug}/index.html"
        )

    with open(html_path, encoding="utf-8") as f:
        html_content = f.read()

    parsed_html = parse_html(html_content)
    html_structure_dict = extract_html_structure(parsed_html)

    # Convert dict to ComponentStructure
    return ComponentStructure(
        tag=html_structure_dict.get("tag", "div"),
        classes=html_structure_dict.get("classes", []),
        attributes=html_structure_dict.get("attributes", {}),
        aria_attributes={},
    )


def _extract_design_tokens(ctx: GenerationContext) -> dict[str, str]:
    """Extract CSS design tokens from compiled DSFR CSS."""
    _log_progress("Extracting design tokens", "from compiled CSS", ctx.verbose)

    # Use compiled CSS from dist/ instead of SCSS source
    css_path = (
        ctx.package_path / "dist" / "component" / ctx.component_slug / f"{ctx.component_slug}.css"
    )
    if not css_path.exists():
        raise FileNotFoundError(
            f"Component CSS not found at: "
            f"dist/component/{ctx.component_slug}/{ctx.component_slug}.css"
        )

    with open(css_path, encoding="utf-8") as f:
        css_content = f.read()

    return extract_custom_properties(css_content)

def _analyze_javascript_behaviors(ctx: GenerationContext):
    """Analyze JavaScript behaviors from DSFR component."""
    _log_progress("Analyzing JavaScript behaviors", ctx.component_name, ctx.verbose)

    if not is_analyzer_available():
        if ctx.verbose:
            click.echo("  TypeScript analyzer not available, skipping behavior analysis")
        return None

    # Try to find JavaScript file in the component directory
    js_path = (
        ctx.package_path / "dist" / "component" / ctx.component_slug / f"{ctx.component_slug}.module.js"
    )
    if not js_path.exists():
        if ctx.verbose:
            click.echo(f"  JavaScript file not found at: {js_path}")
        return None

    try:
        return analyze_javascript_file(js_path)
    except Exception as e:
        if ctx.verbose:
            click.echo(f"  Behavior analysis failed: {e}")
        return None


def _generate_component_code(
    ctx: GenerationContext,
    component_structure: ComponentStructure,
    tailwind_colors: list[dict[str, str]],
    behavior_pattern,
) -> str:
    """Generate web component code."""
    _log_progress("Generating web component", ctx.component_name, ctx.verbose)

    # tailwind_colors is already a list from map_dsfr_colors
    return generate_web_component(
        component=component_structure,
        component_name=ctx.component_slug,
        colors=tailwind_colors,
        behavior_pattern=behavior_pattern,
        dsfr_version=ctx.dsfr_version,
    )


def _validate_accessibility(ctx: GenerationContext, component_code: str) -> None:
    """Validate component accessibility (WCAG + RGAA)."""
    _log_progress("Validating accessibility", "WCAG 2.1 AA + RGAA 4", ctx.verbose)

    # WCAG validation
    wcag_result = validate_wcag_compliance(component_code)
    if not wcag_result.get("passed", False):
        _report_validation_errors("WCAG", wcag_result.get("violations", []))
        raise click.ClickException("Accessibility validation failed (WCAG 2.1 AA)")

    # RGAA validation
    rgaa_result = validate_rgaa_compliance(component_code)
    if not rgaa_result.get("passed", False):
        _report_validation_errors("RGAA", rgaa_result.get("violations", []))
        raise click.ClickException("RGAA validation failed (RGAA 4)")


def _write_output_files(
    ctx: GenerationContext,
    component_code: str,
    tailwind_config: dict[str, Any],
) -> tuple[Path, Path]:
    """Write generated files to output directory."""
    _log_progress("Writing output files", str(ctx.output_dir), ctx.verbose)
    ctx.output_dir.mkdir(parents=True, exist_ok=True)

    # Write web component
    component_file = ctx.output_dir / f"dsfr-{ctx.component_slug}.js"
    with open(component_file, "w", encoding="utf-8") as f:
        f.write(component_code)

    # Write Tailwind config
    tailwind_file = ctx.output_dir / "tailwind.config.js"
    tailwind_content = _format_tailwind_config(tailwind_config)
    with open(tailwind_file, "w", encoding="utf-8") as f:
        f.write(tailwind_content)

    return component_file, tailwind_file


def _format_tailwind_config(config: dict[str, Any]) -> str:
    """Format Tailwind config as JavaScript module."""
    config_json = json.dumps(config, indent=2)
    return f"""/** @type {{import('tailwindcss').Config}} */
module.exports = {config_json};
"""

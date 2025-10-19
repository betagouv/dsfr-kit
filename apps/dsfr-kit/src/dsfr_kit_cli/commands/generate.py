"""Generate command for creating DSFR web components."""

from pathlib import Path
from typing import Any

import click
from dsfr_generator.fetcher import fetch_dsfr_package, get_cached_package
from dsfr_generator.generator import generate_web_component
from dsfr_generator.parsers import (
    compile_scss,
    extract_html_structure,
    extract_scss_variables,
    parse_html,
)
from dsfr_generator.token_mapper import generate_tailwind_config, map_dsfr_colors
from dsfr_generator.validator import validate_rgaa_compliance, validate_wcag_compliance


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
        _log_progress("Fetching DSFR package", f"version {dsfr_version}", verbose)
        package_path = get_cached_package(dsfr_version)
        if not package_path or not package_path.exists():
            click.echo(f"  Downloading DSFR {dsfr_version}...")
            fetch_dsfr_package(dsfr_version)
            package_path = get_cached_package(dsfr_version)

        # Step 2: Parse HTML structure
        _log_progress("Parsing HTML structure", component_name_normalized, verbose)
        html_path = package_path / "example" / f"{component_slug}.html"
        if not html_path.exists():
            # Try with different naming conventions
            html_path = package_path / "example" / f"{component_slug}s.html"
            if not html_path.exists():
                raise FileNotFoundError(
                    f"Component HTML not found: {component_slug}.html or {component_slug}s.html"
                )

        with open(html_path, encoding="utf-8") as f:
            html_content = f.read()

        parsed_html = parse_html(html_content)
        component_structure = extract_html_structure(parsed_html, f"fr-{component_slug}")

        # Step 3: Compile SCSS and extract tokens
        _log_progress("Compiling SCSS", "extracting design tokens", verbose)
        scss_path = package_path / "src" / "component" / component_slug / f"{component_slug}.scss"
        if not scss_path.exists():
            # Try main scss file
            scss_path = package_path / "src" / "component" / component_slug / "main.scss"
            if not scss_path.exists():
                raise FileNotFoundError(f"Component SCSS not found: {component_slug}.scss")

        with open(scss_path, encoding="utf-8") as f:
            scss_content = f.read()

        # Compile SCSS to validate syntax (CSS output not used in current implementation)
        _ = compile_scss(scss_content, str(package_path / "src"))
        scss_tokens = extract_scss_variables(scss_content)

        # Step 4: Map design tokens to Tailwind
        _log_progress("Mapping design tokens", "to Tailwind configuration", verbose)
        tailwind_colors = map_dsfr_colors(scss_tokens)
        tailwind_config = generate_tailwind_config(tailwind_colors, {}, {})

        # Step 5: Generate web component
        _log_progress("Generating web component", component_name_normalized, verbose)
        component_code = generate_web_component(
            component_name=component_name_normalized,
            structure=component_structure,
            tokens=scss_tokens,
            tailwind_config=tailwind_config,
        )

        # Step 6: Validate accessibility
        _log_progress("Validating accessibility", "WCAG 2.1 AA + RGAA 4", verbose)

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

        # Step 7: Write output files
        _log_progress("Writing output files", str(output), verbose)
        output.mkdir(parents=True, exist_ok=True)

        # Write web component
        component_file = output / f"dsfr-{component_slug}.js"
        with open(component_file, "w", encoding="utf-8") as f:
            f.write(component_code)

        # Write Tailwind config
        tailwind_file = output / "tailwind.config.js"
        tailwind_content = _format_tailwind_config(tailwind_config)
        with open(tailwind_file, "w", encoding="utf-8") as f:
            f.write(tailwind_content)

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


def _format_tailwind_config(config: dict[str, Any]) -> str:
    """Format Tailwind config as JavaScript module."""
    import json

    config_json = json.dumps(config, indent=2)
    return f"""/** @type {{import('tailwindcss').Config}} */
module.exports = {config_json};
"""

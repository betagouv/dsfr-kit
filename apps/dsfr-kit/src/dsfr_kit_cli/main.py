"""CLI entry point for dsfr-kit."""

import click
from dsfr_generator.config import DSFR_VERSION


@click.group()
@click.version_option(version="0.1.0", prog_name="dsfr-kit")
@click.option("--verbose", "-v", is_flag=True, help="Enable verbose output")
@click.pass_context
def cli(ctx: click.Context, verbose: bool) -> None:
    """
    DSFR Kit - Generate DSFR-compliant web components.

    Transform official DSFR (French government design system) assets into
    framework-agnostic web components with Tailwind styling.
    """
    ctx.ensure_object(dict)
    ctx.obj["verbose"] = verbose
    ctx.obj["dsfr_version"] = DSFR_VERSION


@cli.command()
@click.pass_context
def version(ctx: click.Context) -> None:
    """Show DSFR version and tool version."""
    click.echo("dsfr-kit version: 0.1.0")
    click.echo(f"Target DSFR version: {ctx.obj['dsfr_version']}")


if __name__ == "__main__":
    cli()

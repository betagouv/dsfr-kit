"""Storybook story generator using Jinja2 templates."""

from pathlib import Path

from jinja2 import Environment, FileSystemLoader

from ..config import DSFR_VERSION
from ..parsers.types import ComponentStructure
from .web_component import _to_kebab_case, _to_pascal_case


def generate_storybook_story(
    component: ComponentStructure,
    component_name: str,
    component_js_filename: str,
    dsfr_version: str = DSFR_VERSION,
) -> str:
    """
    Generate a Storybook story file for a web component.

    Args:
        component: Parsed component structure
        component_name: Name of the component (e.g., 'button')
        component_js_filename: Filename of the generated web component JS file (e.g., 'dsfr-button.js')
        dsfr_version: DSFR version string

    Returns:
        Generated Storybook JS code
    """
    # Get template directory
    template_dir = Path(__file__).parent / "templates"
    env = Environment(loader=FileSystemLoader(str(template_dir)))
    template = env.get_template("story.j2")

    # Prepare template context
    custom_element_name = f"dsfr-{_to_kebab_case(component_name)}"

    # Determine default variant
    default_variant = component.variants[0] if component.variants else "default"

    context = {
        "component_name": component_name,
        "custom_element_name": custom_element_name,
        "component_js_filename": component_js_filename.replace(".js", ""), # import path excludes .js usually, but relative imports might need it.
                                              # Actually in standard JS imports, explicit extension is recommended for ESM but Storybook/Webpack might handle it.
                                              # The template uses "./{{ component_js_filename }}".
                                              # If I pass "dsfr-button.js", it becomes "./dsfr-button.js".
        "attributes": component.attributes,
        "aria_attributes": component.aria_attributes,
        "variants": component.variants,
        "default_variant": default_variant,
        "default_text": component.text or "Content",
        "dsfr_version": dsfr_version,
    }

    # Render template
    return template.render(**context)

"""Web component generator using Jinja2 templates."""

import re
from pathlib import Path

from jinja2 import Environment, FileSystemLoader

from ..config import DSFR_VERSION
from ..parsers.js_analyzer import BehaviorPattern
from ..parsers.types import ComponentStructure


def render_template(template_str: str, context: dict) -> str:
    """
    Render a Jinja2 template string with context.

    Args:
        template_str: Jinja2 template string
        context: Dictionary of template variables

    Returns:
        Rendered template string
    """
    from jinja2 import Template

    template = Template(template_str)
    return template.render(**context)


def _to_pascal_case(name: str) -> str:
    """
    Convert string to PascalCase.

    Args:
        name: String to convert (e.g., 'button', 'my-button')

    Returns:
        PascalCase string (e.g., 'Button', 'MyButton')
    """
    # Replace hyphens and underscores with spaces, then title case
    words = re.sub(r"[-_]", " ", name).split()
    return "".join(word.capitalize() for word in words)


def _to_kebab_case(name: str) -> str:
    """
    Convert string to kebab-case.

    Args:
        name: String to convert (e.g., 'Button', 'MyButton')

    Returns:
        kebab-case string (e.g., 'button', 'my-button')
    """
    # Insert hyphen before uppercase letters and convert to lowercase
    s1 = re.sub("(.)([A-Z][a-z]+)", r"\1-\2", name)
    return re.sub("([a-z0-9])([A-Z])", r"\1-\2", s1).lower()


def _map_dsfr_to_tailwind_classes(dsfr_classes: list[str]) -> list[str]:
    """
    Map DSFR CSS classes to Tailwind utility classes.

    Args:
        dsfr_classes: List of DSFR class names

    Returns:
        List of Tailwind class names
    """
    # Basic mapping for common DSFR classes
    # This is a simplified version - full mapping would be more comprehensive
    tailwind_classes = []

    for cls in dsfr_classes:
        if "fr-btn" in cls:
            tailwind_classes.append("px-4")
            tailwind_classes.append("py-2")
            tailwind_classes.append("rounded")
            tailwind_classes.append("font-medium")

            if "--primary" in cls:
                tailwind_classes.append("bg-dsfr-blue-france")
                tailwind_classes.append("text-white")
            elif "--secondary" in cls:
                tailwind_classes.append("bg-dsfr-red-marianne")
                tailwind_classes.append("text-white")
            elif "--tertiary" in cls:
                tailwind_classes.append("bg-transparent")
                tailwind_classes.append("border")
                tailwind_classes.append("border-dsfr-blue-france")

    return tailwind_classes if tailwind_classes else ["inline-block"]


def generate_web_component(
    component: ComponentStructure,
    component_name: str,
    colors: list[dict[str, str]],
    behavior_pattern: BehaviorPattern | None = None,
    dsfr_version: str = DSFR_VERSION,
) -> str:
    """
    Generate a web component from ComponentStructure.

    Args:
        component: Parsed component structure
        component_name: Name of the component (e.g., 'button')
        colors: List of color mappings
        dsfr_version: DSFR version string

    Returns:
        Generated web component JavaScript code
    """
    # Get template directory
    template_dir = Path(__file__).parent / "templates"
    env = Environment(loader=FileSystemLoader(str(template_dir)))
    template = env.get_template("web_component.j2")

    # Prepare template context
    class_name = f"Dsfr{_to_pascal_case(component_name)}"
    custom_element_name = f"dsfr-{_to_kebab_case(component_name)}"

    # Map DSFR classes to Tailwind
    tailwind_classes = _map_dsfr_to_tailwind_classes(component.classes)

    # Determine default variant
    default_variant = component.variants[0] if component.variants else "default"

    # Extract behavior patterns if available
    event_listeners = []
    state_variables = []
    dom_manipulations = []
    aria_changes = []
    state_transitions = []

    if behavior_pattern:
        event_listeners = behavior_pattern.event_listeners
        state_variables = behavior_pattern.state_variables
        dom_manipulations = behavior_pattern.dom_manipulations
        aria_changes = behavior_pattern.aria_changes
        state_transitions = behavior_pattern.state_transitions

    context = {
        "component_name": component_name,
        "class_name": class_name,
        "custom_element_name": custom_element_name,
        "tag": component.tag,
        "attributes": component.attributes,
        "aria_attributes": component.aria_attributes,
        "tailwind_classes": tailwind_classes,
        "variants": component.variants,
        "default_variant": default_variant,
        "default_text": component.text,
        "slot_content": component.text or "Content",
        "colors": colors,
        "dsfr_version": dsfr_version,
        # Behavior pattern data
        "event_listeners": event_listeners,
        "state_variables": state_variables,
        "dom_manipulations": dom_manipulations,
        "aria_changes": aria_changes,
        "state_transitions": state_transitions,
        "has_behaviors": behavior_pattern is not None,
    }

    # Render template
    return template.render(**context)

"""CSS parser using tinycss2."""

import re

import tinycss2


def parse_css(css_content: str) -> list[dict]:
    """
    Parse CSS content into structured rules.

    Args:
        css_content: CSS string to parse

    Returns:
        List of dictionaries representing CSS rules with selectors and declarations
    """
    if not css_content or css_content.strip() == "":
        return []

    rules = []

    try:
        # Parse CSS into tokens
        stylesheet = tinycss2.parse_stylesheet(css_content)

        for rule in stylesheet:
            if rule.type == "qualified-rule":
                # Extract selector
                selector = tinycss2.serialize(rule.prelude).strip()

                # Extract declarations
                declarations = []
                content = tinycss2.parse_declaration_list(rule.content)

                for item in content:
                    if item.type == "declaration":
                        prop_name = item.name
                        prop_value = tinycss2.serialize(item.value).strip()
                        declarations.append({"property": prop_name, "value": prop_value})

                rules.append({"selector": selector, "declarations": declarations})

    except Exception:
        # Handle parsing errors gracefully
        pass

    return rules


def extract_custom_properties(css_content: str) -> dict[str, str]:
    """
    Extract CSS custom properties (CSS variables) from CSS content.

    Extracts properties in the format: --property-name: value;

    Args:
        css_content: CSS string to parse

    Returns:
        Dictionary mapping custom property names to their values
    """
    if not css_content or css_content.strip() == "":
        return {}

    custom_properties = {}

    try:
        # Parse CSS
        stylesheet = tinycss2.parse_stylesheet(css_content)

        for rule in stylesheet:
            if rule.type == "qualified-rule":
                # Parse declarations in this rule
                content = tinycss2.parse_declaration_list(rule.content)

                for item in content:
                    if item.type == "declaration" and item.name.startswith("--"):
                        prop_name = item.name
                        prop_value = tinycss2.serialize(item.value).strip()
                        custom_properties[prop_name] = prop_value

    except Exception:
        # Fallback to regex if tinycss2 fails
        pattern = r"(--[a-zA-Z0-9_-]+)\s*:\s*([^;]+);"
        matches = re.finditer(pattern, css_content)

        for match in matches:
            prop_name = match.group(1)
            prop_value = match.group(2).strip()
            custom_properties[prop_name] = prop_value

    return custom_properties

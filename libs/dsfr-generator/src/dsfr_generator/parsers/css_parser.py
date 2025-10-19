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


def extract_global_tokens(css_content: str) -> dict[str, str]:
    """
    Extract all DSFR design tokens from global CSS files.

    This function extracts CSS custom properties from core CSS and utility CSS files,
    providing a comprehensive set of DSFR design tokens including colors, spacing,
    typography, shadows, and more.

    Args:
        css_content: CSS string to parse (from core.css, utility files, etc.)

    Returns:
        Dictionary mapping token names to their values

    Example:
        >>> css = ":root { --blue-france: #000091; --spacing-2: 0.5rem; }"
        >>> tokens = extract_global_tokens(css)
        >>> tokens["--blue-france"]
        '#000091'
    """
    # Use the existing extract_custom_properties function
    # It already handles all CSS custom properties from any selector
    return extract_custom_properties(css_content)


def categorize_tokens(tokens: dict[str, str]) -> dict[str, dict[str, str]]:
    """
    Categorize DSFR design tokens by type (colors, spacing, typography, etc.).

    Analyzes token names and values to automatically categorize them into:
    - colors: Color values (hex, rgb, rgba, named colors, or color-related vars)
    - spacing: Spacing values (margins, paddings, gaps)
    - typography: Font-related properties (family, size, weight, line-height)
    - shadows: Shadow and elevation properties
    - borderRadius: Border radius properties

    Args:
        tokens: Dictionary of token names to values

    Returns:
        Dictionary with categorized tokens

    Example:
        >>> tokens = {
        ...     "--blue-france": "#000091",
        ...     "--spacing-2": "0.5rem",
        ...     "--font-family-marianne": "Marianne, sans-serif"
        ... }
        >>> categorized = categorize_tokens(tokens)
        >>> "--blue-france" in categorized["colors"]
        True
    """
    categorized = {
        "colors": {},
        "spacing": {},
        "typography": {},
        "shadows": {},
        "borderRadius": {},
    }

    for name, value in tokens.items():
        name_lower = name.lower()
        value_lower = value.lower()

        # Categorize by token name patterns
        # Check more specific patterns first to avoid misclassification
        if _is_border_radius_token(name_lower):
            categorized["borderRadius"][name] = value
        elif _is_shadow_token(name_lower, value_lower):
            categorized["shadows"][name] = value
        elif _is_spacing_token(name_lower):
            categorized["spacing"][name] = value
        elif _is_typography_token(name_lower):
            categorized["typography"][name] = value
        elif _is_color_token(name_lower, value_lower):
            categorized["colors"][name] = value
        # If no category matches, it might be a utility token - skip or add to "other"

    return categorized


def _is_color_token(name: str, value: str) -> bool:
    """Check if a token is a color token."""
    # Color-related keywords in name
    color_keywords = [
        "color",
        "blue",
        "red",
        "green",
        "grey",
        "gray",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "beige",
        "background",
        "text",
        "border",
    ]

    # Check if name contains color keywords
    if any(keyword in name for keyword in color_keywords):
        # Exclude shadow-related tokens (they have rgba but aren't color tokens)
        if "shadow" not in name:
            return True

    # Check if value is a color (hex, rgb, rgba, hsl, or color name)
    if value.startswith("#") or value.startswith("rgb") or value.startswith("hsl"):
        return True

    # Check if value references another color variable
    if value.startswith("var(--") and any(
        keyword in value for keyword in color_keywords
    ):
        return True

    return False


def _is_spacing_token(name: str) -> bool:
    """Check if a token is a spacing token."""
    spacing_keywords = ["spacing", "margin", "padding", "gap", "inset"]
    return any(keyword in name for keyword in spacing_keywords)


def _is_typography_token(name: str) -> bool:
    """Check if a token is a typography token."""
    typography_keywords = [
        "font",
        "text-size",
        "line-height",
        "letter-spacing",
        "weight",
    ]
    return any(keyword in name for keyword in typography_keywords)


def _is_shadow_token(name: str, value: str) -> bool:
    """Check if a token is a shadow token."""
    shadow_keywords = ["shadow", "elevation"]
    # Check if name contains shadow keywords
    if any(keyword in name for keyword in shadow_keywords):
        return True
    # Check if value contains shadow-related properties
    if "rgba" in value and any(keyword in value for keyword in ["shadow", "inset"]):
        return True
    return False


def _is_border_radius_token(name: str) -> bool:
    """Check if a token is a border-radius token."""
    return "radius" in name or "rounded" in name

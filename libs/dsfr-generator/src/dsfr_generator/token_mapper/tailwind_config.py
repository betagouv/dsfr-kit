"""Generate Tailwind configuration from DSFR tokens."""

import json


def generate_tailwind_theme(
    colors: list[dict[str, str]] | None = None,
    spacing: dict[str, str] | None = None,
    typography: dict[str, str] | None = None,
) -> dict:
    """
    Generate Tailwind theme configuration from DSFR tokens.

    Args:
        colors: List of color mappings with name, value, and tailwind_class
        spacing: Dictionary of spacing tokens
        typography: Dictionary of typography tokens

    Returns:
        Dictionary representing Tailwind theme configuration
    """
    theme = {}

    # Add colors
    if colors is not None:
        theme["colors"] = {}
        for color in colors:
            theme["colors"][color["tailwind_class"]] = color["value"]
    else:
        theme["colors"] = {}

    # Add spacing
    if spacing:
        theme["spacing"] = spacing

    # Add typography
    if typography:
        if "font-family" in typography:
            theme["fontFamily"] = {"dsfr": typography["font-family"]}
        if "font-size" in typography:
            theme["fontSize"] = {"dsfr": typography["font-size"]}

    return theme


def generate_tailwind_config(
    colors: list[dict[str, str]] | None = None,
    spacing: dict[str, str] | None = None,
    typography: dict[str, str] | None = None,
    as_string: bool = False,
) -> dict | str:
    """
    Generate complete Tailwind configuration file.

    Args:
        colors: List of color mappings
        spacing: Dictionary of spacing tokens
        typography: Dictionary of typography tokens
        as_string: If True, return as JavaScript string, else return dict

    Returns:
        Tailwind config as dictionary or JavaScript string
    """
    # Generate theme
    theme = generate_tailwind_theme(colors=colors, spacing=spacing, typography=typography)

    # Build config structure
    config = {
        "content": [
            "./src/**/*.{js,jsx,ts,tsx,html}",
            "./components/**/*.{js,jsx,ts,tsx,html}",
        ],
        "theme": {"extend": theme},
        "plugins": [],
    }

    if as_string:
        return _config_to_javascript(config)

    return config


def _config_to_javascript(config: dict) -> str:
    """
    Convert config dictionary to JavaScript module.exports format.

    Args:
        config: Configuration dictionary

    Returns:
        JavaScript string
    """
    # Convert to JSON with proper formatting
    json_str = json.dumps(config, indent=2)

    # Wrap in module.exports
    js_str = f"module.exports = {json_str};\n"

    return js_str

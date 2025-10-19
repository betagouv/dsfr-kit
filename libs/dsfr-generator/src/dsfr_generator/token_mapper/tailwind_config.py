"""Generate Tailwind configuration from DSFR tokens."""

import json


def generate_tailwind_theme(
    colors: list[dict[str, str]] | None = None,
    spacing: dict[str, str] | None = None,
    typography: dict[str, str] | None = None,
    shadows: dict[str, str] | None = None,
    border_radius: dict[str, str] | None = None,
) -> dict:
    """
    Generate Tailwind theme configuration from DSFR tokens (T078).

    Args:
        colors: List of color mappings with name, value, and tailwind_class
        spacing: Dictionary of spacing tokens
        typography: Dictionary of typography tokens (can include fontFamily, fontSize, fontWeight, lineHeight)
        shadows: Dictionary of shadow/elevation tokens (T079)
        border_radius: Dictionary of border radius tokens (T080)

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

    # Add typography - handle both old format and new comprehensive format
    if typography:
        # New comprehensive format with fontFamily, fontSize, fontWeight, lineHeight
        if "fontFamily" in typography:
            theme["fontFamily"] = typography["fontFamily"]
        if "fontSize" in typography:
            theme["fontSize"] = typography["fontSize"]
        if "fontWeight" in typography:
            theme["fontWeight"] = typography["fontWeight"]
        if "lineHeight" in typography:
            theme["lineHeight"] = typography["lineHeight"]

        # Legacy format support (old tests)
        if "font-family" in typography and "fontFamily" not in theme:
            theme["fontFamily"] = {"dsfr": typography["font-family"]}
        if "font-size" in typography and "fontSize" not in theme:
            theme["fontSize"] = {"dsfr": typography["font-size"]}

    # Add shadows (T079)
    if shadows:
        theme["boxShadow"] = shadows

    # Add border radius (T080)
    if border_radius:
        theme["borderRadius"] = border_radius

    return theme


def generate_tailwind_config(
    colors: list[dict[str, str]] | None = None,
    spacing: dict[str, str] | None = None,
    typography: dict[str, str] | None = None,
    shadows: dict[str, str] | None = None,
    border_radius: dict[str, str] | None = None,
    as_string: bool = False,
) -> dict | str:
    """
    Generate complete Tailwind configuration file.

    Args:
        colors: List of color mappings
        spacing: Dictionary of spacing tokens
        typography: Dictionary of typography tokens
        shadows: Dictionary of shadow tokens
        border_radius: Dictionary of border radius tokens
        as_string: If True, return as JavaScript string, else return dict

    Returns:
        Tailwind config as dictionary or JavaScript string
    """
    # Generate theme
    theme = generate_tailwind_theme(
        colors=colors,
        spacing=spacing,
        typography=typography,
        shadows=shadows,
        border_radius=border_radius,
    )

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

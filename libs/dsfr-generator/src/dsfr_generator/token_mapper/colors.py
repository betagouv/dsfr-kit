"""Map DSFR color tokens to Tailwind color utilities."""


def map_dsfr_color_to_tailwind(dsfr_color: str, dsfr_value: str) -> dict[str, str]:
    """
    Map a single DSFR color to Tailwind format.

    Args:
        dsfr_color: DSFR color name (e.g., '--blue-france-sun-113')
        dsfr_value: Color value (e.g., '#000091')

    Returns:
        Dictionary with name, value, and tailwind_class
    """
    # Remove -- prefix if present
    color_name = dsfr_color.lstrip("-")

    # Generate Tailwind class name
    tailwind_class = f"dsfr-{color_name}"

    return {
        "name": color_name,
        "value": dsfr_value,
        "tailwind_class": tailwind_class,
    }


def map_dsfr_colors(dsfr_colors: dict[str, str]) -> list[dict[str, str]]:
    """
    Map DSFR color tokens to Tailwind color utilities.

    Args:
        dsfr_colors: Dictionary of DSFR color names to values

    Returns:
        List of color mappings with name, value, and tailwind_class
    """
    if not dsfr_colors:
        return []

    mapped_colors = []

    for color_name, color_value in dsfr_colors.items():
        mapped_color = map_dsfr_color_to_tailwind(color_name, color_value)
        mapped_colors.append(mapped_color)

    return mapped_colors

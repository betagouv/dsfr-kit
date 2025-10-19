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


def categorize_dsfr_colors(dsfr_colors: dict[str, str]) -> dict[str, dict[str, str]]:
    """
    Categorize DSFR colors by type (T072).

    Categorizes colors into:
    - primary: Blue France and Red Marianne (main brand colors)
    - grey: Grey scale colors
    - semantic: Success, error, warning, info colors
    - theme: Background, text, and border colors
    - extended: Extended palette colors (green, purple, pink, etc.)

    Args:
        dsfr_colors: Dictionary of DSFR color names to values

    Returns:
        Dictionary with categorized colors

    Example:
        >>> colors = {
        ...     "--blue-france-sun-113-625": "#000091",
        ...     "--grey-200-850": "#3A3A3A",
        ...     "--success-425-625": "#18753C"
        ... }
        >>> categorized = categorize_dsfr_colors(colors)
        >>> "--blue-france-sun-113-625" in categorized["primary"]
        True
    """
    categorized = {
        "primary": {},
        "grey": {},
        "semantic": {},
        "theme": {},
        "extended": {},
    }

    for name, value in dsfr_colors.items():
        name_lower = name.lower()

        # Primary brand colors
        if "blue-france" in name_lower or "red-marianne" in name_lower:
            categorized["primary"][name] = value
        # Semantic colors
        elif any(
            keyword in name_lower
            for keyword in ["success", "error", "warning", "info"]
        ):
            categorized["semantic"][name] = value
        # Theme colors (backgrounds, text, borders) - check before grey
        elif any(
            keyword in name_lower for keyword in ["background", "text", "border"]
        ):
            categorized["theme"][name] = value
        # Grey scale (check after theme to avoid misclassifying background-default-grey)
        elif "grey" in name_lower or "gray" in name_lower:
            categorized["grey"][name] = value
        # Extended palette (other named colors)
        elif any(
            keyword in name_lower
            for keyword in [
                "green",
                "purple",
                "pink",
                "yellow",
                "orange",
                "brown",
                "beige",
            ]
        ):
            categorized["extended"][name] = value
        # Default to extended if no other category matches
        else:
            categorized["extended"][name] = value

    return categorized

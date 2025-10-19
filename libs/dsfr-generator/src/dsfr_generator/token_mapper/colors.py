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
    Categorize DSFR colors by official DSFR taxonomy.

    Uses official DSFR color categories from:
    https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs-palette

    Categories:
    - primary: Blue France and Red Marianne (Couleurs primaires)
    - neutral: Grey scale, backgrounds, text, borders (Couleurs neutres)
    - system: Success, error, warning, info (Couleurs système)
    - illustrative: Extended palette - green, purple, pink, etc. (Couleurs illustratives)

    Note: DSFR categorizes by color family, not usage context.
    E.g., --background-default-grey is "neutral", not a separate "theme" category.

    Args:
        dsfr_colors: Dictionary of DSFR color names to values

    Returns:
        Dictionary with categorized colors using official DSFR categories

    Example:
        >>> colors = {
        ...     "--blue-france-sun-113-625": "#000091",
        ...     "--grey-200-850": "#3A3A3A",
        ...     "--success-425-625": "#18753C"
        ... }
        >>> categorized = categorize_dsfr_colors(colors)
        >>> "--blue-france-sun-113-625" in categorized["primary"]
        True
        >>> "--grey-200-850" in categorized["neutral"]
        True
        >>> "--success-425-625" in categorized["system"]
        True
    """
    categorized = {
        "primary": {},
        "neutral": {},
        "system": {},
        "illustrative": {},
    }

    for name, value in dsfr_colors.items():
        name_lower = name.lower()

        # Primary: Blue France and Red Marianne (official DSFR primary colors)
        if "blue-france" in name_lower or "red-marianne" in name_lower:
            categorized["primary"][name] = value
        # System: Semantic/functional colors (success, error, warning, info)
        elif any(
            keyword in name_lower
            for keyword in ["success", "error", "warning", "info"]
        ):
            categorized["system"][name] = value
        # Neutral: Grey scale and all grey-based tokens (backgrounds, text, borders)
        # Note: Includes tokens like --background-default-grey, --text-title-grey
        # DSFR categorizes by color family, not usage context
        elif "grey" in name_lower or "gray" in name_lower:
            categorized["neutral"][name] = value
        # Illustrative: Extended palette (decorative and accent colors)
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
            categorized["illustrative"][name] = value
        # Default to illustrative if no other category matches
        else:
            categorized["illustrative"][name] = value

    return categorized

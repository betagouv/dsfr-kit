"""Map DSFR typography tokens to Tailwind typography utilities (T075-T077)."""


def extract_font_families(typography_tokens: dict[str, str]) -> dict[str, str]:
    """
    Extract font family tokens (T076).

    Args:
        typography_tokens: Dictionary of typography tokens

    Returns:
        Dictionary mapping font family names to values

    Example:
        >>> tokens = {"--font-family-marianne": "Marianne, sans-serif"}
        >>> result = extract_font_families(tokens)
        >>> result["marianne"]
        'Marianne, sans-serif'
    """
    font_families = {}

    for name, value in typography_tokens.items():
        name_lower = name.lower()
        if "font-family" in name_lower:
            # Extract font name (e.g., "marianne" from "--font-family-marianne")
            key = name_lower.split("font-family-")[-1].lstrip("-")
            font_families[key] = value

    return font_families


def extract_font_sizes(typography_tokens: dict[str, str]) -> dict[str, str]:
    """
    Extract font size tokens (T077).

    Args:
        typography_tokens: Dictionary of typography tokens

    Returns:
        Dictionary mapping font size names to values
    """
    font_sizes = {}

    for name, value in typography_tokens.items():
        name_lower = name.lower()
        if "font-size" in name_lower or "text-size" in name_lower:
            # Extract size name (e.g., "base" from "--font-size-base")
            key = name_lower.split("size-")[-1].lstrip("-")
            font_sizes[key] = value

    return font_sizes


def extract_font_weights(typography_tokens: dict[str, str]) -> dict[str, str]:
    """
    Extract font weight tokens (T077).

    Args:
        typography_tokens: Dictionary of typography tokens

    Returns:
        Dictionary mapping font weight names to values
    """
    font_weights = {}

    for name, value in typography_tokens.items():
        name_lower = name.lower()
        if "font-weight" in name_lower or "weight" in name_lower:
            # Extract weight name (e.g., "bold" from "--font-weight-bold")
            parts = name_lower.split("weight-")
            if len(parts) > 1:
                key = parts[-1].lstrip("-")
                font_weights[key] = value

    return font_weights


def extract_line_heights(typography_tokens: dict[str, str]) -> dict[str, str]:
    """
    Extract line height tokens (T077).

    Args:
        typography_tokens: Dictionary of typography tokens

    Returns:
        Dictionary mapping line height names to values
    """
    line_heights = {}

    for name, value in typography_tokens.items():
        name_lower = name.lower()
        if "line-height" in name_lower:
            # Extract line height name (e.g., "normal" from "--line-height-normal")
            key = name_lower.split("line-height-")[-1].lstrip("-")
            line_heights[key] = value

    return line_heights


def map_dsfr_typography_to_tailwind(typography_tokens: dict[str, str]) -> dict:
    """
    Map DSFR typography tokens to Tailwind typography configuration (T075).

    Args:
        typography_tokens: Dictionary of DSFR typography tokens

    Returns:
        Dictionary with Tailwind typography configuration

    Example:
        >>> tokens = {
        ...     "--font-family-marianne": "Marianne, sans-serif",
        ...     "--font-size-base": "1rem",
        ...     "--font-weight-bold": "700"
        ... }
        >>> result = map_dsfr_typography_to_tailwind(tokens)
        >>> "fontFamily" in result
        True
    """
    tailwind_typography = {}

    # Extract font families (Marianne, Spectral)
    font_families = extract_font_families(typography_tokens)
    if font_families:
        tailwind_typography["fontFamily"] = font_families

    # Extract font sizes
    font_sizes = extract_font_sizes(typography_tokens)
    if font_sizes:
        tailwind_typography["fontSize"] = font_sizes

    # Extract font weights
    font_weights = extract_font_weights(typography_tokens)
    if font_weights:
        tailwind_typography["fontWeight"] = font_weights

    # Extract line heights
    line_heights = extract_line_heights(typography_tokens)
    if line_heights:
        tailwind_typography["lineHeight"] = line_heights

    return tailwind_typography

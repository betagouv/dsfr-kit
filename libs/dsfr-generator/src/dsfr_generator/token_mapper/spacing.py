"""Map DSFR spacing tokens to Tailwind spacing utilities (T073-T074)."""


def normalize_spacing_value(value: str) -> str:
    """
    Normalize spacing value to consistent format.

    Args:
        value: Spacing value (e.g., "1rem", "16px", "0")

    Returns:
        Normalized spacing value
    """
    # Keep the value as-is for now
    # Could add px to rem conversion if needed
    return value


def map_dsfr_spacing_to_tailwind(spacing_tokens: dict[str, str]) -> dict[str, str]:
    """
    Map DSFR spacing tokens to Tailwind spacing scale (T074).

    Converts DSFR spacing tokens to Tailwind-compatible spacing scale.
    Extracts numeric keys from token names (e.g., "--spacing-2" -> "2").

    Args:
        spacing_tokens: Dictionary of DSFR spacing token names to values

    Returns:
        Dictionary mapping Tailwind spacing keys to values

    Example:
        >>> tokens = {
        ...     "--spacing-1": "0.25rem",
        ...     "--spacing-2": "0.5rem",
        ...     "--spacing-4": "1rem"
        ... }
        >>> result = map_dsfr_spacing_to_tailwind(tokens)
        >>> result["2"]
        '0.5rem'
    """
    if not spacing_tokens:
        return {}

    tailwind_spacing = {}

    for name, value in spacing_tokens.items():
        name_lower = name.lower().lstrip("-")

        # Extract key from token name
        # Handle patterns like: spacing-2, margin-sm, padding-4, gap-2
        if "spacing-" in name_lower:
            # Extract number after "spacing-"
            key = name_lower.split("spacing-")[-1]
            tailwind_spacing[key] = normalize_spacing_value(value)
        elif "margin-" in name_lower:
            key = name_lower.split("margin-")[-1]
            tailwind_spacing[f"margin-{key}"] = normalize_spacing_value(value)
        elif "padding-" in name_lower:
            key = name_lower.split("padding-")[-1]
            tailwind_spacing[f"padding-{key}"] = normalize_spacing_value(value)
        elif "gap-" in name_lower:
            key = name_lower.split("gap-")[-1]
            tailwind_spacing[key] = normalize_spacing_value(value)
        else:
            # Use the full name (without --) as key
            tailwind_spacing[name_lower] = normalize_spacing_value(value)

    return tailwind_spacing

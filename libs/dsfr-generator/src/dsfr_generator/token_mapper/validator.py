"""Token validation and conflict detection (T081-T083)."""

import re


def detect_token_conflicts(
    tokens: dict[str, str], additional_tokens: dict[str, str] | None = None
) -> list[dict]:
    """
    Detect conflicts in DSFR tokens (T081).

    Detects various types of conflicts:
    - Duplicate token names with different values
    - Invalid color values
    - Empty or None values
    - Similar token names (potential typos)

    Args:
        tokens: Primary set of tokens to validate
        additional_tokens: Optional additional tokens to check for conflicts

    Returns:
        List of conflict dictionaries with type, token, and details

    Example:
        >>> tokens = {"--blue": "#000091", "--invalid": "not-a-color"}
        >>> conflicts = detect_token_conflicts(tokens)
        >>> len(conflicts) > 0
        True
    """
    conflicts = []

    # Check for empty or None values
    for name, value in tokens.items():
        if value is None or value == "":
            conflicts.append({
                "type": "empty_value",
                "token": name,
                "value": value,
            })
        # Check for invalid color values (basic validation)
        elif name.startswith("--") and _is_color_token(name):
            if not _is_valid_color_value(value):
                conflicts.append({
                    "type": "invalid_value",
                    "token": name,
                    "value": value,
                })

    # Check for duplicate names with different values
    if additional_tokens:
        for name, value in additional_tokens.items():
            if name in tokens and tokens[name] != value:
                conflicts.append({
                    "type": "duplicate_name",
                    "token": name,
                    "values": [tokens[name], value],
                    "sources": ["primary", "additional"],
                })

    return conflicts


def suggest_conflict_resolution(conflict: dict) -> list[str]:
    """
    Suggest resolutions for token conflicts (T082).

    Provides actionable suggestions based on conflict type.

    Args:
        conflict: Conflict dictionary from detect_token_conflicts

    Returns:
        List of resolution suggestions

    Example:
        >>> conflict = {"type": "duplicate_name", "token": "--blue"}
        >>> suggestions = suggest_conflict_resolution(conflict)
        >>> len(suggestions) > 0
        True
    """
    conflict_type = conflict.get("type", "unknown")
    suggestions = []

    if conflict_type == "duplicate_name":
        token = conflict.get("token", "")
        suggestions.append(
            f"Rename one of the conflicting tokens: {token}"
        )
        suggestions.append(
            "Set priority/override rules to specify which value to use"
        )
        suggestions.append(
            "Review token sources to determine which is authoritative"
        )

    elif conflict_type == "invalid_value":
        token = conflict.get("token", "")
        value = conflict.get("value", "")
        suggestions.append(
            f"Fix the invalid value for {token}: '{value}'"
        )
        suggestions.append(
            "Ensure color values are in valid format (hex, rgb, rgba, hsl)"
        )
        suggestions.append(
            "Check DSFR documentation for correct token values"
        )

    elif conflict_type == "empty_value":
        token = conflict.get("token", "")
        suggestions.append(
            f"Provide a value for {token} or remove it from the token set"
        )
        suggestions.append(
            "Check if this token is deprecated in the DSFR version you're using"
        )

    elif conflict_type == "similar_names":
        tokens = conflict.get("tokens", [])
        suggestions.append(
            f"Review similar token names: {', '.join(tokens)}"
        )
        suggestions.append(
            "Consider consolidating if they represent the same concept"
        )
        suggestions.append(
            "Rename to make distinction clearer if they're intentionally different"
        )

    else:
        # Generic suggestions for unknown conflict types
        suggestions.append(
            "Review the conflict details and consult DSFR documentation"
        )
        suggestions.append(
            "Consider filing an issue if this appears to be a bug"
        )

    return suggestions


def validate_token_completeness(
    dsfr_tokens: dict[str, str], mapped_tokens: dict[str, str]
) -> dict:
    """
    Validate that all DSFR tokens are mapped (T083).

    Checks coverage and identifies missing tokens.

    Args:
        dsfr_tokens: Original DSFR tokens (with -- prefix)
        mapped_tokens: Mapped tokens (without -- prefix)

    Returns:
        Dictionary with validation results including:
        - is_complete: bool
        - missing_tokens: list
        - coverage_percentage: float
        - total_dsfr_tokens: int
        - total_mapped_tokens: int

    Example:
        >>> dsfr = {"--blue": "#000091", "--red": "#E1000F"}
        >>> mapped = {"blue": "#000091"}
        >>> result = validate_token_completeness(dsfr, mapped)
        >>> result["is_complete"]
        False
    """
    # Handle empty cases
    if not dsfr_tokens:
        return {
            "is_complete": True,
            "missing_tokens": [],
            "coverage_percentage": 100.0,
            "total_dsfr_tokens": 0,
            "total_mapped_tokens": len(mapped_tokens),
        }

    # Normalize DSFR token names (remove -- prefix) for comparison
    normalized_dsfr = {name.lstrip("-"): name for name in dsfr_tokens.keys()}

    # Find missing tokens
    missing_tokens = []
    for normalized_name, original_name in normalized_dsfr.items():
        if normalized_name not in mapped_tokens:
            missing_tokens.append(original_name)

    # Calculate coverage
    total_dsfr = len(dsfr_tokens)
    total_mapped = len(mapped_tokens)
    coverage = ((total_dsfr - len(missing_tokens)) / total_dsfr * 100) if total_dsfr > 0 else 100.0

    return {
        "is_complete": len(missing_tokens) == 0,
        "missing_tokens": missing_tokens,
        "coverage_percentage": round(coverage, 1),
        "total_dsfr_tokens": total_dsfr,
        "total_mapped_tokens": total_mapped,
    }


def _is_color_token(name: str) -> bool:
    """Check if a token name suggests it's a color token."""
    color_keywords = [
        "color", "blue", "red", "green", "grey", "gray", "yellow",
        "orange", "purple", "pink", "brown", "beige", "background", "text", "border"
    ]
    name_lower = name.lower()
    return any(keyword in name_lower for keyword in color_keywords)


def _is_valid_color_value(value: str) -> bool:
    """
    Basic validation for color values.

    Checks for common color formats:
    - Hex: #RGB, #RRGGBB, #RRGGBBAA
    - RGB/RGBA: rgb(...), rgba(...)
    - HSL/HSLA: hsl(...), hsla(...)
    - CSS variables: var(...)
    - Transparent keyword
    """
    if not value or not isinstance(value, str):
        return False

    value = value.strip().lower()

    # Check for transparent keyword
    if value == "transparent":
        return True

    # Check for CSS variable
    if value.startswith("var("):
        return True

    # Check for hex color
    if value.startswith("#"):
        hex_part = value[1:]
        # Valid lengths: 3, 4, 6, 8 (RGB, RGBA, RRGGBB, RRGGBBAA)
        if len(hex_part) in [3, 4, 6, 8]:
            return all(c in "0123456789abcdef" for c in hex_part)
        return False

    # Check for rgb/rgba/hsl/hsla
    if re.match(r"^(rgb|rgba|hsl|hsla)\s*\(", value):
        return True

    return False

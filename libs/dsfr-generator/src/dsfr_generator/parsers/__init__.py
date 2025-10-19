"""DSFR asset parsers."""

from .css_parser import (
    categorize_tokens,
    extract_custom_properties,
    extract_dark_theme_tokens,
    extract_global_tokens,
    merge_light_dark_tokens,
    parse_css,
)
from .html_parser import (
    detect_variants,
    extract_aria_attributes,
    extract_html_structure,
    parse_html,
)
from .types import ComponentStructure, DesignTokens

__all__ = [
    "ComponentStructure",
    "DesignTokens",
    "categorize_tokens",
    "detect_variants",
    "extract_aria_attributes",
    "extract_custom_properties",
    "extract_dark_theme_tokens",
    "extract_global_tokens",
    "extract_html_structure",
    "merge_light_dark_tokens",
    "parse_css",
    "parse_html",
]

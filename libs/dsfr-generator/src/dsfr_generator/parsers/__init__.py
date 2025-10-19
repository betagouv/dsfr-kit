"""DSFR asset parsers."""

from .css_parser import (
    categorize_tokens,
    extract_custom_properties,
    extract_global_tokens,
    parse_css,
)
from .html_parser import (
    detect_variants,
    extract_aria_attributes,
    extract_html_structure,
    parse_html,
)
from .scss_parser import compile_scss, extract_scss_variables
from .types import ComponentStructure, DesignTokens

__all__ = [
    "ComponentStructure",
    "DesignTokens",
    "categorize_tokens",
    "compile_scss",
    "detect_variants",
    "extract_aria_attributes",
    "extract_custom_properties",
    "extract_global_tokens",
    "extract_html_structure",
    "extract_scss_variables",
    "parse_css",
    "parse_html",
]

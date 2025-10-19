"""DSFR asset parsers."""

from .css_parser import extract_custom_properties, parse_css
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
    "compile_scss",
    "detect_variants",
    "extract_aria_attributes",
    "extract_custom_properties",
    "extract_html_structure",
    "extract_scss_variables",
    "parse_css",
    "parse_html",
]

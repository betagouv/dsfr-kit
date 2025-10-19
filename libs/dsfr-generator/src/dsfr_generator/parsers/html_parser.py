"""HTML parser for DSFR components using Beautiful Soup 4."""

from bs4 import BeautifulSoup, Tag


def parse_html(html: str) -> BeautifulSoup:
    """
    Parse HTML string into BeautifulSoup object.

    Args:
        html: HTML string to parse

    Returns:
        BeautifulSoup object representing the parsed HTML
    """
    return BeautifulSoup(html, "html.parser")


def extract_aria_attributes(element: Tag) -> dict[str, str]:
    """
    Extract ARIA attributes and role from an HTML element.

    Args:
        element: BeautifulSoup Tag element

    Returns:
        Dictionary of ARIA attributes (aria-* and role)
    """
    aria_attrs = {}

    if element and hasattr(element, "attrs"):
        for attr, value in element.attrs.items():
            if attr.startswith("aria-") or attr == "role":
                aria_attrs[attr] = value

    return aria_attrs


def detect_variants(classes: list[str]) -> list[str]:
    """
    Detect DSFR component variants from CSS classes.

    Extracts variant modifiers from DSFR BEM-style classes (e.g., fr-btn--secondary).
    Supports multiple variant patterns:
    - Size variants: --sm, --lg, --xl
    - Style variants: --secondary, --tertiary, --tertiary-no-outline
    - Icon variants: --icon-left, --icon-right
    - State variants: --disabled (though typically handled via attributes)

    Args:
        classes: List of CSS class names

    Returns:
        List of detected variant names (without the -- prefix)

    Examples:
        >>> detect_variants(["fr-btn", "fr-btn--secondary", "fr-btn--lg"])
        ['secondary', 'lg']
        >>> detect_variants(["fr-btn", "fr-icon-checkbox-circle-line", "fr-btn--icon-left"])
        ['icon-left']
    """
    variants = []

    for cls in classes:
        # Look for DSFR modifier pattern: component--variant
        if "--" in cls:
            # Split on -- and take the variant part
            parts = cls.split("--")
            if len(parts) >= 2:
                # Get the variant name (everything after the first --)
                variant = "--".join(parts[1:])
                if variant and variant not in variants:
                    variants.append(variant)

    return variants


def extract_html_structure(soup: BeautifulSoup | Tag) -> dict:
    """
    Extract HTML structure from BeautifulSoup object.

    Recursively extracts the DOM tree structure including:
    - Tag name
    - CSS classes
    - HTML attributes (excluding class and aria-*)
    - Child elements

    Args:
        soup: BeautifulSoup object or Tag to extract structure from

    Returns:
        Dictionary representing the HTML structure
    """
    # Find the root element if soup is a BeautifulSoup object
    if isinstance(soup, BeautifulSoup):
        # Get the first non-NavigableString element
        root = None
        for child in soup.children:
            if isinstance(child, Tag):
                root = child
                break
        if root is None:
            return {}
        element = root
    else:
        element = soup

    # Extract basic information
    classes = element.get("class", [])
    structure = {
        "tag": element.name,
        "classes": classes,
        "attributes": {},
        "children": [],
        "variants": detect_variants(classes),
    }

    # Extract non-class, non-aria attributes
    if hasattr(element, "attrs"):
        for attr, value in element.attrs.items():
            if attr != "class" and not attr.startswith("aria-") and attr != "role":
                structure["attributes"][attr] = value

    # Extract children recursively
    for child in element.children:
        if isinstance(child, Tag):
            child_structure = extract_html_structure(child)
            structure["children"].append(child_structure)

    return structure

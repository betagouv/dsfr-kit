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
    structure = {
        "tag": element.name,
        "classes": element.get("class", []),
        "attributes": {},
        "children": [],
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

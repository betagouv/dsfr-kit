"""Data types for parsed DSFR components."""

from dataclasses import dataclass, field


@dataclass
class ComponentStructure:
    """Represents the structure of a parsed HTML component.

    Attributes:
        tag: HTML tag name (e.g., 'button', 'div')
        classes: List of CSS classes
        attributes: Dictionary of HTML attributes (excluding class and aria-*)
        aria_attributes: Dictionary of ARIA attributes and role
        children: List of child ComponentStructure objects
        text: Text content of the element
        variants: List of detected component variants (e.g., ['primary', 'lg'])
    """

    tag: str
    classes: list[str] = field(default_factory=list)
    attributes: dict[str, str] = field(default_factory=dict)
    aria_attributes: dict[str, str] = field(default_factory=dict)
    children: list["ComponentStructure"] = field(default_factory=list)
    text: str = ""
    variants: list[str] = field(default_factory=list)


@dataclass
class DesignTokens:
    """Represents extracted design tokens from DSFR CSS/SCSS.

    Attributes:
        colors: Dictionary of color tokens (name -> value)
        spacing: Dictionary of spacing tokens (name -> value)
        typography: Dictionary of typography tokens (name -> value)
        shadows: Dictionary of shadow tokens (name -> value)
        borders: Dictionary of border tokens (name -> value)
        custom_properties: Dictionary of CSS custom properties (--var-name -> value)
    """

    colors: dict[str, str] = field(default_factory=dict)
    spacing: dict[str, str] = field(default_factory=dict)
    typography: dict[str, str] = field(default_factory=dict)
    shadows: dict[str, str] = field(default_factory=dict)
    borders: dict[str, str] = field(default_factory=dict)
    custom_properties: dict[str, str] = field(default_factory=dict)

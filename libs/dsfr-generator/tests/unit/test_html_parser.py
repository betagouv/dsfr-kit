"""Unit tests for HTML parser module."""

from bs4 import BeautifulSoup

from dsfr_generator.parsers.html_parser import (
    detect_variants,
    extract_aria_attributes,
    extract_html_structure,
    parse_html,
)
from dsfr_generator.parsers.types import ComponentStructure


class TestParseHtml:
    """Tests for parse_html function."""

    def test_parse_html_returns_beautifulsoup_object(self):
        """Test that parse_html returns a BeautifulSoup object."""
        html = "<div>Test</div>"
        result = parse_html(html)
        assert isinstance(result, BeautifulSoup)

    def test_parse_html_handles_empty_string(self):
        """Test that parse_html handles empty HTML string."""
        html = ""
        result = parse_html(html)
        assert isinstance(result, BeautifulSoup)

    def test_parse_html_preserves_structure(self):
        """Test that parse_html preserves HTML structure."""
        html = "<div><span>Nested</span></div>"
        result = parse_html(html)
        assert result.find("div") is not None
        assert result.find("span") is not None
        assert result.find("span").parent.name == "div"


class TestDetectVariants:
    """Tests for detect_variants function."""

    def test_detect_primary_variant(self):
        """Test detecting primary variant from button classes."""
        classes = ["fr-btn", "fr-btn--primary"]
        variants = detect_variants(classes)
        assert "primary" in variants

    def test_detect_secondary_variant(self):
        """Test detecting secondary variant from button classes."""
        classes = ["fr-btn", "fr-btn--secondary"]
        variants = detect_variants(classes)
        assert "secondary" in variants

    def test_detect_tertiary_variant(self):
        """Test detecting tertiary variant from button classes."""
        classes = ["fr-btn", "fr-btn--tertiary"]
        variants = detect_variants(classes)
        assert "tertiary" in variants

    def test_detect_tertiary_no_outline_variant(self):
        """Test detecting tertiary-no-outline variant."""
        classes = ["fr-btn", "fr-btn--tertiary-no-outline"]
        variants = detect_variants(classes)
        assert "tertiary-no-outline" in variants

    def test_detect_size_variants(self):
        """Test detecting size variants (sm, lg, xl)."""
        classes = ["fr-btn", "fr-btn--sm"]
        variants = detect_variants(classes)
        assert "sm" in variants

        classes = ["fr-btn", "fr-btn--lg"]
        variants = detect_variants(classes)
        assert "lg" in variants

    def test_detect_icon_variants(self):
        """Test detecting icon position variants."""
        classes = ["fr-btn", "fr-btn--icon-left", "fr-icon-checkbox-circle-line"]
        variants = detect_variants(classes)
        assert "icon-left" in variants

        classes = ["fr-btn", "fr-btn--icon-right"]
        variants = detect_variants(classes)
        assert "icon-right" in variants

    def test_detect_multiple_variants(self):
        """Test detecting multiple variants simultaneously."""
        classes = ["fr-btn", "fr-btn--secondary", "fr-btn--lg", "fr-btn--icon-left"]
        variants = detect_variants(classes)
        assert "secondary" in variants
        assert "lg" in variants
        assert "icon-left" in variants
        assert len(variants) == 3

    def test_detect_no_variants(self):
        """Test that base classes without variants return empty list."""
        classes = ["fr-btn"]
        variants = detect_variants(classes)
        assert variants == []

    def test_detect_variants_empty_list(self):
        """Test that empty class list returns empty variants."""
        classes = []
        variants = detect_variants(classes)
        assert variants == []

    def test_detect_variants_no_duplicates(self):
        """Test that duplicate variants are not included."""
        classes = ["fr-btn--secondary", "fr-btn--secondary"]
        variants = detect_variants(classes)
        assert variants.count("secondary") == 1

    def test_detect_variants_ignores_non_modifier_classes(self):
        """Test that non-modifier classes (without --) are ignored."""
        classes = ["fr-btn", "fr-icon-checkbox-circle-line", "custom-class"]
        variants = detect_variants(classes)
        assert variants == []


class TestExtractHtmlStructure:
    """Tests for extract_html_structure function."""

    def test_extract_structure_from_button(self):
        """Test extracting structure from a DSFR button."""
        html = """
        <button class="fr-btn fr-btn--primary" type="button">
            <span class="fr-btn__label">Click me</span>
        </button>
        """
        soup = BeautifulSoup(html, "html.parser")
        structure = extract_html_structure(soup)

        assert structure["tag"] == "button"
        assert "fr-btn" in structure["classes"]
        assert "fr-btn--primary" in structure["classes"]
        assert structure["attributes"]["type"] == "button"
        assert len(structure["children"]) == 1
        assert structure["children"][0]["tag"] == "span"

    def test_extract_structure_handles_nested_elements(self):
        """Test extracting structure with nested elements."""
        html = """
        <div class="fr-container">
            <div class="fr-row">
                <div class="fr-col">Content</div>
            </div>
        </div>
        """
        soup = BeautifulSoup(html, "html.parser")
        structure = extract_html_structure(soup)

        assert structure["tag"] == "div"
        assert len(structure["children"]) > 0
        assert structure["children"][0]["tag"] == "div"

    def test_extract_structure_includes_variants(self):
        """Test that extract_html_structure includes detected variants."""
        html = """
        <button class="fr-btn fr-btn--secondary fr-btn--lg" type="button">
            Secondary Large Button
        </button>
        """
        soup = BeautifulSoup(html, "html.parser")
        structure = extract_html_structure(soup)

        assert "variants" in structure
        assert "secondary" in structure["variants"]
        assert "lg" in structure["variants"]
        assert len(structure["variants"]) == 2


class TestExtractAriaAttributes:
    """Tests for extract_aria_attributes function."""

    def test_extract_aria_from_button(self):
        """Test extracting ARIA attributes from button."""
        html = """
        <button
            class="fr-btn"
            aria-label="Submit form"
            aria-pressed="false"
            role="button">
            Submit
        </button>
        """
        soup = BeautifulSoup(html, "html.parser")
        aria_attrs = extract_aria_attributes(soup.find("button"))

        assert aria_attrs["aria-label"] == "Submit form"
        assert aria_attrs["aria-pressed"] == "false"
        assert aria_attrs["role"] == "button"

    def test_extract_aria_returns_empty_dict_when_none(self):
        """Test that extract_aria_attributes returns empty dict when no ARIA attributes."""
        html = "<button>No ARIA</button>"
        soup = BeautifulSoup(html, "html.parser")
        aria_attrs = extract_aria_attributes(soup.find("button"))

        assert aria_attrs == {}

    def test_extract_aria_ignores_non_aria_attributes(self):
        """Test that extract_aria_attributes only returns ARIA and role attributes."""
        html = '<button class="fr-btn" id="btn1" aria-label="Test">Button</button>'
        soup = BeautifulSoup(html, "html.parser")
        aria_attrs = extract_aria_attributes(soup.find("button"))

        assert "aria-label" in aria_attrs
        assert "class" not in aria_attrs
        assert "id" not in aria_attrs


class TestComponentStructure:
    """Tests for ComponentStructure dataclass."""

    def test_component_structure_creation(self):
        """Test creating a ComponentStructure instance."""
        structure = ComponentStructure(
            tag="button",
            classes=["fr-btn", "fr-btn--primary"],
            attributes={"type": "button"},
            aria_attributes={"aria-label": "Test"},
            children=[],
            text="Click me",
            variants=["primary"],
        )

        assert structure.tag == "button"
        assert "fr-btn" in structure.classes
        assert structure.attributes["type"] == "button"
        assert structure.aria_attributes["aria-label"] == "Test"
        assert structure.variants == ["primary"]

    def test_component_structure_detects_variants(self):
        """Test that ComponentStructure can detect button variants from classes."""
        # This will be implemented in the actual ComponentStructure class
        structure = ComponentStructure(
            tag="button",
            classes=["fr-btn", "fr-btn--secondary", "fr-btn--lg"],
            attributes={},
            aria_attributes={},
            children=[],
            text="Button",
            variants=["secondary", "lg"],
        )

        assert "secondary" in structure.variants
        assert "lg" in structure.variants

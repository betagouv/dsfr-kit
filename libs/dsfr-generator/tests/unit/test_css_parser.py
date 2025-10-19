"""Unit tests for CSS parser module."""

from dsfr_generator.parsers.css_parser import extract_custom_properties, parse_css


class TestParseCss:
    """Tests for parse_css function."""

    def test_parse_css_basic(self):
        """Test basic CSS parsing."""
        css = """
        .button {
            color: red;
            padding: 1rem;
        }
        """
        rules = parse_css(css)
        assert len(rules) > 0
        assert any(rule["selector"] == ".button" for rule in rules)

    def test_parse_css_multiple_rules(self):
        """Test parsing multiple CSS rules."""
        css = """
        .button { color: red; }
        .link { color: blue; }
        """
        rules = parse_css(css)
        assert len(rules) >= 2
        selectors = [rule["selector"] for rule in rules]
        assert ".button" in selectors
        assert ".link" in selectors

    def test_parse_css_empty_string(self):
        """Test parsing empty CSS string."""
        css = ""
        rules = parse_css(css)
        assert rules == []

    def test_parse_css_with_media_queries(self):
        """Test parsing CSS with media queries."""
        css = """
        @media (min-width: 768px) {
            .button { font-size: 18px; }
        }
        """
        rules = parse_css(css)
        # Should handle media queries gracefully
        assert isinstance(rules, list)


class TestExtractCustomProperties:
    """Tests for extract_custom_properties function."""

    def test_extract_custom_properties_basic(self):
        """Test extracting CSS custom properties."""
        css = """
        :root {
            --primary-color: #1212FF;
            --secondary-color: #E1000F;
            --spacing-unit: 8px;
        }
        """
        properties = extract_custom_properties(css)
        assert properties["--primary-color"] == "#1212FF"
        assert properties["--secondary-color"] == "#E1000F"
        assert properties["--spacing-unit"] == "8px"

    def test_extract_custom_properties_from_class(self):
        """Test extracting custom properties from class selectors."""
        css = """
        .button {
            --button-bg: blue;
            --button-padding: 1rem;
        }
        """
        properties = extract_custom_properties(css)
        assert properties["--button-bg"] == "blue"
        assert properties["--button-padding"] == "1rem"

    def test_extract_custom_properties_empty_css(self):
        """Test extracting from empty CSS."""
        css = ""
        properties = extract_custom_properties(css)
        assert properties == {}

    def test_extract_custom_properties_no_custom_props(self):
        """Test CSS without custom properties."""
        css = """
        .button {
            color: red;
            padding: 1rem;
        }
        """
        properties = extract_custom_properties(css)
        assert properties == {}

    def test_extract_custom_properties_with_fallback(self):
        """Test custom properties with var() fallback values."""
        css = """
        :root {
            --color: var(--primary, blue);
        }
        """
        properties = extract_custom_properties(css)
        assert "--color" in properties

    def test_extract_custom_properties_multiline(self):
        """Test extracting multiline custom property values."""
        css = """
        :root {
            --shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
                      0 4px 8px rgba(0, 0, 0, 0.1);
        }
        """
        properties = extract_custom_properties(css)
        assert "--shadow" in properties
        assert "rgba" in properties["--shadow"]

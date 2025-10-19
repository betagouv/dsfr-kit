"""Unit tests for CSS parser module."""

from dsfr_generator.parsers.css_parser import (
    categorize_tokens,
    extract_custom_properties,
    extract_global_tokens,
    parse_css,
)


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


class TestExtractGlobalTokens:
    """Tests for extract_global_tokens function (T065)."""

    def test_extract_global_tokens_from_core_css(self):
        """Test extracting global tokens from DSFR core CSS."""
        css = """
        :root {
            --blue-france-sun-113-625: #000091;
            --red-marianne-425-625: #E1000F;
            --grey-200-850: #3A3A3A;
            --spacing-1: 0.25rem;
            --spacing-2: 0.5rem;
            --text-title-grey: #161616;
            --shadow-overlap: 0 8px 16px 0 rgba(0, 0, 0, 0.16);
        }
        """
        tokens = extract_global_tokens(css)

        # Should extract all custom properties
        assert len(tokens) >= 7
        assert "--blue-france-sun-113-625" in tokens
        assert "--red-marianne-425-625" in tokens
        assert "--grey-200-850" in tokens
        assert "--spacing-1" in tokens
        assert "--text-title-grey" in tokens
        assert "--shadow-overlap" in tokens

    def test_extract_global_tokens_from_utility_css(self):
        """Test extracting tokens from utility CSS files."""
        css = """
        .fr-background-default--grey {
            background-color: var(--background-default-grey);
            --idle: transparent;
            --hover: var(--background-default-grey-hover);
            --active: var(--background-default-grey-active);
        }
        """
        tokens = extract_global_tokens(css)

        # Should extract custom properties from utility classes
        assert "--idle" in tokens
        assert "--hover" in tokens
        assert "--active" in tokens

    def test_extract_global_tokens_empty_css(self):
        """Test extracting from empty CSS."""
        tokens = extract_global_tokens("")
        assert tokens == {}

    def test_extract_global_tokens_filters_component_specific(self):
        """Test that component-specific tokens can be optionally filtered."""
        css = """
        :root {
            --blue-france: #000091;
            --spacing-unit: 8px;
        }
        .fr-btn {
            --button-padding: 1rem;
            --text-spacing: 0;
        }
        """
        tokens = extract_global_tokens(css)

        # Should include all tokens by default
        assert "--blue-france" in tokens
        assert "--spacing-unit" in tokens
        assert "--button-padding" in tokens
        assert "--text-spacing" in tokens


class TestCategorizeTokens:
    """Tests for categorize_tokens function (T065)."""

    def test_categorize_color_tokens(self):
        """Test categorizing color tokens."""
        tokens = {
            "--blue-france-sun-113-625": "#000091",
            "--red-marianne-425-625": "#E1000F",
            "--grey-200-850": "#3A3A3A",
            "--background-default-grey": "var(--grey-200-850)",
            "--text-title-grey": "#161616",
        }
        categorized = categorize_tokens(tokens)

        assert "colors" in categorized
        assert len(categorized["colors"]) >= 5
        assert "--blue-france-sun-113-625" in categorized["colors"]
        assert "--red-marianne-425-625" in categorized["colors"]

    def test_categorize_spacing_tokens(self):
        """Test categorizing spacing tokens."""
        tokens = {
            "--spacing-1": "0.25rem",
            "--spacing-2": "0.5rem",
            "--spacing-4": "1rem",
            "--gap-2": "0.5rem",
        }
        categorized = categorize_tokens(tokens)

        assert "spacing" in categorized
        assert len(categorized["spacing"]) >= 4
        assert "--spacing-1" in categorized["spacing"]
        assert "--gap-2" in categorized["spacing"]

    def test_categorize_typography_tokens(self):
        """Test categorizing typography tokens."""
        tokens = {
            "--font-family-marianne": "Marianne, sans-serif",
            "--font-size-sm": "0.875rem",
            "--font-weight-bold": "700",
            "--line-height-base": "1.5",
            "--text-title-grey": "#161616",
        }
        categorized = categorize_tokens(tokens)

        assert "typography" in categorized
        # Font-related tokens should be in typography
        assert "--font-family-marianne" in categorized["typography"]
        assert "--font-size-sm" in categorized["typography"]
        assert "--font-weight-bold" in categorized["typography"]
        assert "--line-height-base" in categorized["typography"]

    def test_categorize_shadow_tokens(self):
        """Test categorizing shadow/elevation tokens."""
        tokens = {
            "--shadow-overlap": "0 8px 16px 0 rgba(0, 0, 0, 0.16)",
            "--shadow-raised": "0 16px 16px -16px rgba(0, 0, 0, 0.32)",
            "--box-shadow-inset": "inset 0 -2px 0 0 var(--border-plain-grey)",
        }
        categorized = categorize_tokens(tokens)

        assert "shadows" in categorized
        assert len(categorized["shadows"]) >= 3
        assert "--shadow-overlap" in categorized["shadows"]
        assert "--shadow-raised" in categorized["shadows"]

    def test_categorize_border_radius_tokens(self):
        """Test categorizing border-radius tokens."""
        tokens = {
            "--border-radius-sm": "0.25rem",
            "--border-radius-md": "0.5rem",
            "--radius-lg": "1rem",
        }
        categorized = categorize_tokens(tokens)

        assert "borderRadius" in categorized
        assert "--border-radius-sm" in categorized["borderRadius"]
        assert "--radius-lg" in categorized["borderRadius"]

    def test_categorize_mixed_tokens(self):
        """Test categorizing a mix of different token types."""
        tokens = {
            "--blue-france": "#000091",
            "--spacing-2": "0.5rem",
            "--font-family-marianne": "Marianne, sans-serif",
            "--shadow-overlap": "0 8px 16px 0 rgba(0, 0, 0, 0.16)",
            "--border-radius-md": "0.5rem",
        }
        categorized = categorize_tokens(tokens)

        # Should have all categories
        assert "colors" in categorized
        assert "spacing" in categorized
        assert "typography" in categorized
        assert "shadows" in categorized
        assert "borderRadius" in categorized

        # Each token should be in the right category
        assert "--blue-france" in categorized["colors"]
        assert "--spacing-2" in categorized["spacing"]
        assert "--font-family-marianne" in categorized["typography"]
        assert "--shadow-overlap" in categorized["shadows"]
        assert "--border-radius-md" in categorized["borderRadius"]

    def test_categorize_empty_tokens(self):
        """Test categorizing empty token dict."""
        categorized = categorize_tokens({})

        # Should return structure with empty categories
        assert "colors" in categorized
        assert "spacing" in categorized
        assert "typography" in categorized
        assert "shadows" in categorized
        assert "borderRadius" in categorized
        assert len(categorized["colors"]) == 0

"""Unit tests for typography mapping (T075-T077)."""

from dsfr_generator.token_mapper.typography import (
    extract_font_families,
    extract_font_sizes,
    extract_font_weights,
    extract_line_heights,
    map_dsfr_typography_to_tailwind,
)


class TestExtractFontFamilies:
    """Tests for extract_font_families function (T076)."""

    def test_extract_marianne_font(self):
        """Test extracting Marianne font family."""
        tokens = {
            "--font-family-marianne": "Marianne, Arial, sans-serif",
        }
        result = extract_font_families(tokens)

        assert "marianne" in result
        assert "Marianne" in result["marianne"]

    def test_extract_spectral_font(self):
        """Test extracting Spectral font family."""
        tokens = {
            "--font-family-spectral": "Spectral, Georgia, serif",
        }
        result = extract_font_families(tokens)

        assert "spectral" in result
        assert "Spectral" in result["spectral"]

    def test_extract_multiple_fonts(self):
        """Test extracting multiple font families."""
        tokens = {
            "--font-family-marianne": "Marianne, sans-serif",
            "--font-family-spectral": "Spectral, serif",
        }
        result = extract_font_families(tokens)

        assert len(result) >= 2
        assert "marianne" in result
        assert "spectral" in result

    def test_extract_empty_fonts(self):
        """Test extracting from empty tokens."""
        result = extract_font_families({})
        assert result == {}


class TestExtractFontSizes:
    """Tests for extract_font_sizes function (T077)."""

    def test_extract_font_sizes(self):
        """Test extracting font size tokens."""
        tokens = {
            "--font-size-xs": "0.75rem",
            "--font-size-sm": "0.875rem",
            "--font-size-base": "1rem",
            "--font-size-lg": "1.125rem",
            "--font-size-xl": "1.25rem",
        }
        result = extract_font_sizes(tokens)

        assert "xs" in result
        assert "sm" in result
        assert "base" in result
        assert result["base"] == "1rem"

    def test_extract_empty_font_sizes(self):
        """Test extracting from empty tokens."""
        result = extract_font_sizes({})
        assert result == {}


class TestExtractFontWeights:
    """Tests for extract_font_weights function (T077)."""

    def test_extract_font_weights(self):
        """Test extracting font weight tokens."""
        tokens = {
            "--font-weight-light": "300",
            "--font-weight-regular": "400",
            "--font-weight-medium": "500",
            "--font-weight-bold": "700",
        }
        result = extract_font_weights(tokens)

        assert "light" in result
        assert "regular" in result or "normal" in result
        assert "bold" in result
        assert result["bold"] == "700"

    def test_extract_empty_font_weights(self):
        """Test extracting from empty tokens."""
        result = extract_font_weights({})
        assert result == {}


class TestExtractLineHeights:
    """Tests for extract_line_heights function (T077)."""

    def test_extract_line_heights(self):
        """Test extracting line height tokens."""
        tokens = {
            "--line-height-tight": "1.25",
            "--line-height-normal": "1.5",
            "--line-height-relaxed": "1.75",
        }
        result = extract_line_heights(tokens)

        assert "tight" in result
        assert "normal" in result
        assert "relaxed" in result
        assert result["normal"] == "1.5"

    def test_extract_empty_line_heights(self):
        """Test extracting from empty tokens."""
        result = extract_line_heights({})
        assert result == {}


class TestMapDsfrTypographyToTailwind:
    """Tests for map_dsfr_typography_to_tailwind function (T075)."""

    def test_map_complete_typography(self):
        """Test mapping complete typography tokens."""
        tokens = {
            "--font-family-marianne": "Marianne, sans-serif",
            "--font-size-base": "1rem",
            "--font-weight-bold": "700",
            "--line-height-normal": "1.5",
        }
        result = map_dsfr_typography_to_tailwind(tokens)

        assert "fontFamily" in result
        assert "fontSize" in result
        assert "fontWeight" in result
        assert "lineHeight" in result

    def test_map_partial_typography(self):
        """Test mapping partial typography tokens."""
        tokens = {
            "--font-family-marianne": "Marianne, sans-serif",
        }
        result = map_dsfr_typography_to_tailwind(tokens)

        assert "fontFamily" in result
        # Other keys may or may not be present

    def test_map_empty_typography(self):
        """Test mapping empty typography tokens."""
        result = map_dsfr_typography_to_tailwind({})

        # Should return structure with empty values
        assert isinstance(result, dict)

    def test_map_preserves_marianne_spectral(self):
        """Test that Marianne and Spectral fonts are properly mapped."""
        tokens = {
            "--font-family-marianne": "Marianne, Arial, sans-serif",
            "--font-family-spectral": "Spectral, Georgia, serif",
        }
        result = map_dsfr_typography_to_tailwind(tokens)

        assert "fontFamily" in result
        assert "marianne" in result["fontFamily"]
        assert "spectral" in result["fontFamily"]

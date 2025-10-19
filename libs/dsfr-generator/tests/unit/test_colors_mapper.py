"""Unit tests for color mapping enhancements (T071-T072)."""

from dsfr_generator.token_mapper.colors import (
    categorize_dsfr_colors,
    map_dsfr_color_to_tailwind,
    map_dsfr_colors,
)


class TestMapDsfrColorToTailwind:
    """Tests for map_dsfr_color_to_tailwind function."""

    def test_map_basic_color(self):
        """Test mapping a basic DSFR color."""
        result = map_dsfr_color_to_tailwind("--blue-france", "#000091")
        assert result["name"] == "blue-france"
        assert result["value"] == "#000091"
        assert result["tailwind_class"] == "dsfr-blue-france"

    def test_map_color_removes_double_dash(self):
        """Test that double dash prefix is removed."""
        result = map_dsfr_color_to_tailwind("--red-marianne-425-625", "#E1000F")
        assert result["name"] == "red-marianne-425-625"
        assert not result["name"].startswith("--")


class TestMapDsfrColors:
    """Tests for map_dsfr_colors function."""

    def test_map_multiple_colors(self):
        """Test mapping multiple colors."""
        colors = {
            "--blue-france": "#000091",
            "--red-marianne": "#E1000F",
            "--grey-200": "#3A3A3A",
        }
        result = map_dsfr_colors(colors)
        assert len(result) == 3
        assert any(c["name"] == "blue-france" for c in result)
        assert any(c["name"] == "red-marianne" for c in result)

    def test_map_empty_colors(self):
        """Test mapping empty color dict."""
        result = map_dsfr_colors({})
        assert result == []


class TestCategorizeDsfrColors:
    """Tests for categorize_dsfr_colors function (T072)."""

    def test_categorize_primary_colors(self):
        """Test categorizing primary brand colors."""
        colors = {
            "--blue-france-sun-113-625": "#000091",
            "--red-marianne-425-625": "#E1000F",
        }
        categorized = categorize_dsfr_colors(colors)

        assert "primary" in categorized
        assert "--blue-france-sun-113-625" in categorized["primary"]
        assert "--red-marianne-425-625" in categorized["primary"]

    def test_categorize_neutral_colors(self):
        """Test categorizing neutral colors (grey scale)."""
        colors = {
            "--grey-50-1000": "#FFFFFF",
            "--grey-200-850": "#3A3A3A",
            "--grey-950-100": "#161616",
        }
        categorized = categorize_dsfr_colors(colors)

        assert "neutral" in categorized
        assert len(categorized["neutral"]) == 3

    def test_categorize_system_colors(self):
        """Test categorizing system colors (success, error, warning, info)."""
        colors = {
            "--success-425-625": "#18753C",
            "--error-425-625": "#CE0500",
            "--warning-425-625": "#B34000",
            "--info-425-625": "#0063CB",
        }
        categorized = categorize_dsfr_colors(colors)

        assert "system" in categorized
        assert "--success-425-625" in categorized["system"]
        assert "--error-425-625" in categorized["system"]
        assert "--warning-425-625" in categorized["system"]
        assert "--info-425-625" in categorized["system"]

    def test_categorize_neutral_usage_tokens(self):
        """Test that background/text/border grey tokens are categorized as neutral."""
        colors = {
            "--background-default-grey": "#F6F6F6",
            "--text-title-grey": "#161616",
            "--border-default-grey": "#DDDDDD",
        }
        categorized = categorize_dsfr_colors(colors)

        # These should be neutral (grey-based), not a separate "theme" category
        # DSFR categorizes by color family, not usage context
        assert "neutral" in categorized
        assert "--background-default-grey" in categorized["neutral"]
        assert "--text-title-grey" in categorized["neutral"]
        assert "--border-default-grey" in categorized["neutral"]

    def test_categorize_illustrative_palette(self):
        """Test categorizing illustrative palette colors."""
        colors = {
            "--green-tilleul-verveine-sun-418": "#B7A73F",
            "--green-bourgeon-sun-425": "#68A532",
            "--purple-glycine-sun-319": "#A558A0",
            "--pink-macaron-sun-406": "#E18B76",
        }
        categorized = categorize_dsfr_colors(colors)

        assert "illustrative" in categorized
        assert len(categorized["illustrative"]) == 4

    def test_categorize_mixed_colors(self):
        """Test categorizing a mix of different color types."""
        colors = {
            "--blue-france": "#000091",
            "--grey-200": "#3A3A3A",
            "--success-425": "#18753C",
            "--background-default-grey": "#F6F6F6",
            "--green-tilleul-verveine": "#B7A73F",
        }
        categorized = categorize_dsfr_colors(colors)

        # All official DSFR categories should be present
        assert "primary" in categorized
        assert "neutral" in categorized
        assert "system" in categorized
        assert "illustrative" in categorized

        # Verify correct categorization
        assert "--blue-france" in categorized["primary"]
        assert "--grey-200" in categorized["neutral"]
        assert "--success-425" in categorized["system"]
        assert "--background-default-grey" in categorized["neutral"]  # Grey-based, not theme
        assert "--green-tilleul-verveine" in categorized["illustrative"]

    def test_categorize_empty_colors(self):
        """Test categorizing empty color dict."""
        categorized = categorize_dsfr_colors({})

        # Should return structure with all official DSFR categories
        assert "primary" in categorized
        assert "neutral" in categorized
        assert "system" in categorized
        assert "illustrative" in categorized
        assert len(categorized["primary"]) == 0
        assert len(categorized["neutral"]) == 0
        assert len(categorized["system"]) == 0
        assert len(categorized["illustrative"]) == 0

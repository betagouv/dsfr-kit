"""Unit tests for color token mapping."""

from dsfr_generator.token_mapper.colors import map_dsfr_color_to_tailwind, map_dsfr_colors


class TestMapDsfrColorToTailwind:
    """Tests for map_dsfr_color_to_tailwind function."""

    def test_map_blue_france_color(self):
        """Test mapping DSFR blue-france color to Tailwind."""
        dsfr_color = "--blue-france-sun-113"
        dsfr_value = "#000091"
        result = map_dsfr_color_to_tailwind(dsfr_color, dsfr_value)

        assert result["name"] == "blue-france-sun-113"
        assert result["value"] == "#000091"
        assert result["tailwind_class"] == "dsfr-blue-france-sun-113"

    def test_map_red_marianne_color(self):
        """Test mapping DSFR red-marianne color to Tailwind."""
        dsfr_color = "--red-marianne-425"
        dsfr_value = "#E1000F"
        result = map_dsfr_color_to_tailwind(dsfr_color, dsfr_value)

        assert result["name"] == "red-marianne-425"
        assert result["value"] == "#E1000F"
        assert result["tailwind_class"] == "dsfr-red-marianne-425"

    def test_map_grey_color(self):
        """Test mapping DSFR grey color to Tailwind."""
        dsfr_color = "--grey-950-100"
        dsfr_value = "#F6F6F6"
        result = map_dsfr_color_to_tailwind(dsfr_color, dsfr_value)

        assert result["name"] == "grey-950-100"
        assert result["value"] == "#F6F6F6"

    def test_map_color_without_prefix(self):
        """Test mapping color name without -- prefix."""
        dsfr_color = "primary-color"
        dsfr_value = "#1212FF"
        result = map_dsfr_color_to_tailwind(dsfr_color, dsfr_value)

        assert result["name"] == "primary-color"
        assert result["value"] == "#1212FF"


class TestMapDsfrColors:
    """Tests for map_dsfr_colors function."""

    def test_map_button_colors(self):
        """Test mapping Button-specific DSFR colors."""
        dsfr_colors = {
            "--blue-france-sun-113": "#000091",
            "--red-marianne-425": "#E1000F",
            "--grey-950-100": "#F6F6F6",
        }
        result = map_dsfr_colors(dsfr_colors)

        assert len(result) == 3
        assert any(c["name"] == "blue-france-sun-113" for c in result)
        assert any(c["name"] == "red-marianne-425" for c in result)
        assert any(c["name"] == "grey-950-100" for c in result)

    def test_map_empty_colors(self):
        """Test mapping empty color dictionary."""
        dsfr_colors = {}
        result = map_dsfr_colors(dsfr_colors)

        assert result == []

    def test_map_colors_preserves_values(self):
        """Test that color values are preserved correctly."""
        dsfr_colors = {
            "--primary": "#1212FF",
            "--secondary": "#E1000F",
        }
        result = map_dsfr_colors(dsfr_colors)

        primary = next(c for c in result if c["name"] == "primary")
        secondary = next(c for c in result if c["name"] == "secondary")

        assert primary["value"] == "#1212FF"
        assert secondary["value"] == "#E1000F"

    def test_map_colors_generates_tailwind_classes(self):
        """Test that Tailwind class names are generated."""
        dsfr_colors = {
            "--blue-france": "#000091",
        }
        result = map_dsfr_colors(dsfr_colors)

        assert result[0]["tailwind_class"] == "dsfr-blue-france"

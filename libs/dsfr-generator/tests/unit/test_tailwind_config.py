"""Unit tests for Tailwind config generation."""

from dsfr_generator.token_mapper.tailwind_config import (
    generate_tailwind_config,
    generate_tailwind_theme,
)


class TestGenerateTailwindTheme:
    """Tests for generate_tailwind_theme function."""

    def test_generate_theme_with_colors(self):
        """Test generating Tailwind theme with colors."""
        colors = [
            {"name": "blue-france", "value": "#000091", "tailwind_class": "dsfr-blue-france"},
            {"name": "red-marianne", "value": "#E1000F", "tailwind_class": "dsfr-red-marianne"},
        ]
        theme = generate_tailwind_theme(colors=colors)

        assert "colors" in theme
        assert "dsfr-blue-france" in theme["colors"]
        assert theme["colors"]["dsfr-blue-france"] == "#000091"
        assert "dsfr-red-marianne" in theme["colors"]
        assert theme["colors"]["dsfr-red-marianne"] == "#E1000F"

    def test_generate_theme_empty_colors(self):
        """Test generating theme with empty colors."""
        theme = generate_tailwind_theme(colors=[])

        assert "colors" in theme
        assert theme["colors"] == {}

    def test_generate_theme_with_spacing(self):
        """Test generating theme with spacing values."""
        spacing = {"sm": "0.5rem", "md": "1rem", "lg": "2rem"}
        theme = generate_tailwind_theme(spacing=spacing)

        assert "spacing" in theme
        assert theme["spacing"]["sm"] == "0.5rem"
        assert theme["spacing"]["md"] == "1rem"
        assert theme["spacing"]["lg"] == "2rem"

    def test_generate_theme_with_typography(self):
        """Test generating theme with typography."""
        typography = {"font-family": "Marianne, sans-serif", "font-size": "16px"}
        theme = generate_tailwind_theme(typography=typography)

        assert "fontFamily" in theme or "fontSize" in theme


class TestGenerateTailwindConfig:
    """Tests for generate_tailwind_config function."""

    def test_generate_basic_config(self):
        """Test generating basic Tailwind config."""
        colors = [
            {"name": "primary", "value": "#1212FF", "tailwind_class": "dsfr-primary"},
        ]
        config = generate_tailwind_config(colors=colors)

        assert "theme" in config
        assert "extend" in config["theme"]
        assert "colors" in config["theme"]["extend"]

    def test_generate_config_as_string(self):
        """Test generating config as JavaScript string."""
        colors = [
            {"name": "primary", "value": "#1212FF", "tailwind_class": "dsfr-primary"},
        ]
        config_str = generate_tailwind_config(colors=colors, as_string=True)

        assert isinstance(config_str, str)
        assert "module.exports" in config_str
        assert "theme" in config_str
        assert "extend" in config_str

    def test_generate_config_includes_content_paths(self):
        """Test that config includes content paths."""
        config = generate_tailwind_config(colors=[])

        assert "content" in config
        assert isinstance(config["content"], list)

    def test_generate_config_with_plugins(self):
        """Test that config can include plugins."""
        config = generate_tailwind_config(colors=[])

        assert "plugins" in config
        assert isinstance(config["plugins"], list)

    def test_generate_config_empty_theme(self):
        """Test generating config with empty theme."""
        config = generate_tailwind_config()

        assert "theme" in config
        assert "extend" in config["theme"]

    def test_generate_config_string_format(self):
        """Test that generated string is valid JavaScript."""
        colors = [
            {"name": "blue", "value": "#0000FF", "tailwind_class": "dsfr-blue"},
        ]
        config_str = generate_tailwind_config(colors=colors, as_string=True)

        # Check for valid JavaScript structure
        assert config_str.startswith("module.exports")
        assert "{" in config_str
        assert "}" in config_str
        assert "dsfr-blue" in config_str
        assert "#0000FF" in config_str

"""Unit tests for dark theme support."""

from dsfr_generator.parsers.css_parser import (
    extract_dark_theme_tokens,
    merge_light_dark_tokens,
)


class TestExtractDarkThemeTokens:
    """Tests for extracting dark theme tokens from scheme.css."""

    def test_extract_dark_theme_from_scheme_css(self):
        """Test extracting dark theme tokens from :root[data-fr-theme=dark]."""
        css = """
        :root[data-fr-theme=dark] {
            --grey-200-850: #CECECE;
            --blue-france-sun-113-625: #8585F6;
            --success-425-625: #27A658;
        }
        """
        tokens = extract_dark_theme_tokens(css)

        assert len(tokens) == 3
        assert tokens["--grey-200-850"] == "#CECECE"
        assert tokens["--blue-france-sun-113-625"] == "#8585F6"
        assert tokens["--success-425-625"] == "#27A658"

    def test_extract_dark_theme_ignores_light_theme(self):
        """Test that light theme tokens are ignored."""
        css = """
        :root {
            --grey-200-850: #3A3A3A;
        }
        :root[data-fr-theme=dark] {
            --grey-200-850: #CECECE;
        }
        """
        tokens = extract_dark_theme_tokens(css)

        # Should only extract dark theme
        assert len(tokens) == 1
        assert tokens["--grey-200-850"] == "#CECECE"

    def test_extract_dark_theme_empty_css(self):
        """Test extracting from empty CSS."""
        tokens = extract_dark_theme_tokens("")
        assert tokens == {}

    def test_extract_dark_theme_no_dark_selector(self):
        """Test CSS without dark theme selector."""
        css = """
        :root {
            --grey-200-850: #3A3A3A;
        }
        """
        tokens = extract_dark_theme_tokens(css)
        assert tokens == {}


class TestMergeLightDarkTokens:
    """Tests for merging light and dark theme tokens."""

    def test_merge_light_dark_tokens(self):
        """Test merging light and dark tokens into Tailwind format."""
        light_tokens = {
            "--grey-200-850": "#3A3A3A",
            "--blue-france": "#000091",
        }
        dark_tokens = {
            "--grey-200-850": "#CECECE",
            "--blue-france": "#8585F6",
        }

        merged = merge_light_dark_tokens(light_tokens, dark_tokens)

        assert "--grey-200-850" in merged
        assert merged["--grey-200-850"]["light"] == "#3A3A3A"
        assert merged["--grey-200-850"]["dark"] == "#CECECE"
        assert merged["--blue-france"]["light"] == "#000091"
        assert merged["--blue-france"]["dark"] == "#8585F6"

    def test_merge_light_only_tokens(self):
        """Test tokens that only exist in light theme."""
        light_tokens = {
            "--grey-200-850": "#3A3A3A",
            "--light-only": "#FFFFFF",
        }
        dark_tokens = {
            "--grey-200-850": "#CECECE",
        }

        merged = merge_light_dark_tokens(light_tokens, dark_tokens)

        assert "--light-only" in merged
        assert merged["--light-only"]["light"] == "#FFFFFF"
        assert merged["--light-only"]["dark"] == "#FFFFFF"  # Fallback to light

    def test_merge_dark_only_tokens(self):
        """Test tokens that only exist in dark theme."""
        light_tokens = {
            "--grey-200-850": "#3A3A3A",
        }
        dark_tokens = {
            "--grey-200-850": "#CECECE",
            "--dark-only": "#000000",
        }

        merged = merge_light_dark_tokens(light_tokens, dark_tokens)

        assert "--dark-only" in merged
        assert merged["--dark-only"]["light"] == "#000000"  # Fallback to dark
        assert merged["--dark-only"]["dark"] == "#000000"

    def test_merge_empty_dark_tokens(self):
        """Test merging when dark tokens are empty."""
        light_tokens = {
            "--grey-200-850": "#3A3A3A",
        }
        dark_tokens = {}

        merged = merge_light_dark_tokens(light_tokens, dark_tokens)

        assert "--grey-200-850" in merged
        assert merged["--grey-200-850"]["light"] == "#3A3A3A"
        assert merged["--grey-200-850"]["dark"] == "#3A3A3A"  # Fallback

    def test_merge_empty_light_tokens(self):
        """Test merging when light tokens are empty."""
        light_tokens = {}
        dark_tokens = {
            "--grey-200-850": "#CECECE",
        }

        merged = merge_light_dark_tokens(light_tokens, dark_tokens)

        assert "--grey-200-850" in merged
        assert merged["--grey-200-850"]["light"] == "#CECECE"  # Fallback
        assert merged["--grey-200-850"]["dark"] == "#CECECE"

    def test_merge_preserves_all_tokens(self):
        """Test that all unique tokens from both themes are preserved."""
        light_tokens = {
            "--token-1": "#111",
            "--token-2": "#222",
        }
        dark_tokens = {
            "--token-2": "#DDD",
            "--token-3": "#333",
        }

        merged = merge_light_dark_tokens(light_tokens, dark_tokens)

        assert len(merged) == 3
        assert "--token-1" in merged
        assert "--token-2" in merged
        assert "--token-3" in merged

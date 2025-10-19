"""
Integration tests for Phase 4: Complete Token Extraction Pipeline (T088-T092).

Tests the end-to-end flow from DSFR CSS to Tailwind configuration.
"""

import pytest

from dsfr_generator.parsers.css_parser import categorize_tokens, extract_global_tokens
from dsfr_generator.token_mapper.colors import map_dsfr_colors
from dsfr_generator.token_mapper.spacing import map_dsfr_spacing_to_tailwind
from dsfr_generator.token_mapper.tailwind_config import generate_tailwind_config
from dsfr_generator.token_mapper.typography import map_dsfr_typography_to_tailwind
from dsfr_generator.token_mapper.validator import (
    detect_token_conflicts,
    validate_token_completeness,
)


@pytest.fixture
def sample_dsfr_css():
    """Sample DSFR CSS with comprehensive design tokens."""
    return """
    :root {
        /* Blue France family - 4 colors */
        --blue-france-sun-113: #000091;
        --blue-france-sun-113-hover: #1212FF;
        --blue-france-main-525: #000091;
        --blue-france-main-525-hover: #1212FF;

        /* Red Marianne family - 2 colors */
        --red-marianne-main-472: #E1000F;
        --red-marianne-main-472-hover: #F93F3F;

        /* Grey family - 23 colors */
        --grey-1000-50: #161616;
        --grey-950-100: #242424;
        --grey-900-175: #383838;
        --grey-850-200: #3A3A3A;
        --grey-800-225: #4C4C4C;
        --grey-750-250: #5E5E5E;
        --grey-700-300: #6A6A6A;
        --grey-650-350: #7C7C7C;
        --grey-600-400: #8E8E8E;
        --grey-550-425: #929292;
        --grey-500-450: #9C9C9C;
        --grey-450-500: #ABABAB;
        --grey-425-525: #B0B0B0;
        --grey-400-550: #B5B5B5;
        --grey-350-600: #BEBEBE;
        --grey-300-650: #C8C8C8;
        --grey-250-700: #D2D2D2;
        --grey-200-750: #DCDCDC;
        --grey-175-800: #E3E3E3;
        --grey-150-850: #E5E5E5;
        --grey-100-900: #EEEEEE;
        --grey-50-950: #F6F6F6;
        --grey-0-1000: #FFFFFF;

        /* Spacing - 10 values */
        --spacing-1v: 0.25rem;
        --spacing-2v: 0.5rem;
        --spacing-3v: 0.75rem;
        --spacing-4v: 1rem;
        --spacing-5v: 1.25rem;
        --spacing-6v: 1.5rem;
        --spacing-8v: 2rem;
        --spacing-10v: 2.5rem;
        --spacing-12v: 3rem;
        --spacing-16v: 4rem;

        /* Typography */
        --font-family-marianne: "Marianne", arial, sans-serif;
        --font-family-spectral: "Spectral", georgia, serif;
        --font-size-xs: 0.75rem;
        --font-size-sm: 0.875rem;
        --font-size-md: 1rem;
        --font-size-lg: 1.125rem;
        --font-size-xl: 1.25rem;
        --font-weight-regular: 400;
        --font-weight-medium: 500;
        --font-weight-bold: 700;
        --line-height-tight: 1.25;
        --line-height-normal: 1.5;
        --line-height-relaxed: 1.75;
    }
    """


class TestT088ColorExtraction:
    """T088: Test token extraction produces 50+ color values."""

    def test_extracts_minimum_23_colors_from_sample(self, sample_dsfr_css):
        """Verify sample has 23+ colors (full DSFR has 50+)."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)

        colors = categorized.get("colors", {})

        # Sample has 29 colors (4 blue-france + 2 red-marianne + 23 grey)
        assert len(colors) >= 23, f"Expected at least 23 colors, got {len(colors)}"

        # Verify all are valid hex colors
        for name, value in colors.items():
            assert value.startswith("#"), f"Color {name} has invalid value: {value}"

    def test_color_values_are_valid_hex(self, sample_dsfr_css):
        """Verify all color values are valid hex codes."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        colors = categorized.get("colors", {})

        for name, value in colors.items():
            # Should start with #
            assert value.startswith("#")
            # Should be 4, 7, or 9 characters (#RGB, #RRGGBB, #RRGGBBAA)
            assert len(value) in [4, 7, 9], f"Invalid hex length for {name}: {value}"

    def test_maps_colors_to_tailwind_classes(self, sample_dsfr_css):
        """Verify colors are mapped to Tailwind utility classes."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        colors = categorized.get("colors", {})

        mapped = map_dsfr_colors(colors)

        assert len(mapped) > 0
        for color in mapped:
            assert "tailwind_class" in color
            assert color["tailwind_class"].startswith("dsfr-")


class TestT089SpacingExtraction:
    """T089: Test spacing scale matches DSFR specifications."""

    def test_extracts_spacing_tokens(self, sample_dsfr_css):
        """Verify spacing tokens are extracted."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)

        spacing = categorized.get("spacing", {})

        # Sample has 10 spacing values
        assert len(spacing) >= 10, f"Expected at least 10 spacing values, got {len(spacing)}"

    def test_spacing_uses_rem_units(self, sample_dsfr_css):
        """Verify spacing values use rem units."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        spacing = categorized.get("spacing", {})

        for name, value in spacing.items():
            assert "rem" in value, f"Spacing {name} should use rem: {value}"

    def test_maps_spacing_to_tailwind(self, sample_dsfr_css):
        """Verify spacing is mapped to Tailwind format."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        spacing = categorized.get("spacing", {})

        mapped = map_dsfr_spacing_to_tailwind(spacing)

        assert len(mapped) > 0
        for key, value in mapped.items():
            assert isinstance(key, str)
            assert isinstance(value, str)


class TestT090TypographyExtraction:
    """T090: Test typography definitions (Marianne, Spectral)."""

    def test_extracts_marianne_font_family(self, sample_dsfr_css):
        """Verify Marianne font family is extracted."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        typography = categorized.get("typography", {})

        # Check for Marianne
        has_marianne = any("marianne" in name.lower() for name in typography.keys())
        assert has_marianne, "Marianne font family not found"

    def test_extracts_spectral_font_family(self, sample_dsfr_css):
        """Verify Spectral font family is extracted."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        typography = categorized.get("typography", {})

        # Check for Spectral
        has_spectral = any("spectral" in name.lower() for name in typography.keys())
        assert has_spectral, "Spectral font family not found"

    def test_extracts_font_sizes(self, sample_dsfr_css):
        """Verify font sizes are extracted."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        typography = categorized.get("typography", {})

        font_sizes = {k: v for k, v in typography.items() if "font-size" in k}
        assert len(font_sizes) >= 5, f"Expected at least 5 font sizes, got {len(font_sizes)}"

        # Verify they use rem
        for name, value in font_sizes.items():
            assert "rem" in value, f"Font size {name} should use rem: {value}"

    def test_maps_typography_to_tailwind(self, sample_dsfr_css):
        """Verify typography is mapped to Tailwind config."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        typography = categorized.get("typography", {})

        mapped = map_dsfr_typography_to_tailwind(typography)

        assert "fontFamily" in mapped
        assert "fontSize" in mapped
        assert "fontWeight" in mapped
        assert "lineHeight" in mapped


class TestT091TailwindConfigGeneration:
    """T091: Test generated Tailwind config is valid and usable."""

    def test_generates_valid_config_structure(self, sample_dsfr_css):
        """Verify config has correct Tailwind structure."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)

        colors = map_dsfr_colors(categorized.get("colors", {}))
        spacing = map_dsfr_spacing_to_tailwind(categorized.get("spacing", {}))
        typography = map_dsfr_typography_to_tailwind(categorized.get("typography", {}))

        config = generate_tailwind_config(colors=colors, spacing=spacing, typography=typography)

        # Verify structure
        assert "theme" in config
        assert "extend" in config["theme"]
        assert "colors" in config["theme"]["extend"]
        assert "spacing" in config["theme"]["extend"]

    def test_config_includes_dsfr_colors(self, sample_dsfr_css):
        """Verify config includes DSFR-prefixed colors."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        colors = map_dsfr_colors(categorized.get("colors", {}))

        config = generate_tailwind_config(colors=colors)

        theme_colors = config["theme"]["extend"]["colors"]
        has_dsfr_colors = any("dsfr" in key for key in theme_colors.keys())
        assert has_dsfr_colors, "No DSFR-prefixed colors in config"

    def test_config_can_be_serialized_as_javascript(self, sample_dsfr_css):
        """Verify config can be exported as JavaScript module."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)
        colors = map_dsfr_colors(categorized.get("colors", {}))

        # Generate as JavaScript string
        config_str = generate_tailwind_config(colors=colors, as_string=True)

        assert isinstance(config_str, str)
        assert "module.exports" in config_str
        assert "theme" in config_str


class TestT092ConflictDetection:
    """T092: Test conflict detection identifies and reports token conflicts."""

    def test_detects_no_conflicts_in_valid_css(self, sample_dsfr_css):
        """Verify no conflicts in well-formed CSS."""
        tokens = extract_global_tokens(sample_dsfr_css)
        conflicts = detect_token_conflicts(tokens)

        # Sample CSS should have no conflicts
        assert len(conflicts) == 0, f"Unexpected conflicts found: {conflicts}"

    def test_validates_token_completeness(self, sample_dsfr_css):
        """Verify completeness validation reports on token categories."""
        tokens = extract_global_tokens(sample_dsfr_css)
        categorized = categorize_tokens(tokens)

        # Create mapped tokens (simplified for test)
        colors = map_dsfr_colors(categorized.get("colors", {}))
        mapped_tokens = {color["name"]: color["value"] for color in colors}

        completeness = validate_token_completeness(tokens, mapped_tokens)

        # Should report on completeness metrics
        assert "coverage_percentage" in completeness or "total_dsfr_tokens" in completeness
        assert isinstance(completeness, dict)


class TestPhase4CompletePipeline:
    """Integration test for complete Phase 4 token extraction pipeline."""

    def test_end_to_end_pipeline(self, sample_dsfr_css):
        """Test complete pipeline from CSS to Tailwind config."""
        # Step 1: Extract tokens
        tokens = extract_global_tokens(sample_dsfr_css)
        assert len(tokens) > 0, "No tokens extracted"

        # Step 2: Categorize tokens
        categorized = categorize_tokens(tokens)
        assert "colors" in categorized
        assert "spacing" in categorized
        assert "typography" in categorized

        # Step 3: Map to Tailwind
        colors = map_dsfr_colors(categorized["colors"])
        spacing = map_dsfr_spacing_to_tailwind(categorized["spacing"])
        typography = map_dsfr_typography_to_tailwind(categorized["typography"])

        # Step 4: Generate config
        config = generate_tailwind_config(colors=colors, spacing=spacing, typography=typography)

        # Step 5: Validate
        conflicts = detect_token_conflicts(tokens)
        mapped_tokens = {color["name"]: color["value"] for color in colors}
        completeness = validate_token_completeness(tokens, mapped_tokens)

        # Verify complete pipeline
        assert config is not None
        assert len(config["theme"]["extend"]["colors"]) > 0
        assert len(config["theme"]["extend"]["spacing"]) > 0
        assert len(conflicts) == 0
        assert isinstance(completeness, dict)

"""Unit tests for spacing mapping (T073-T074)."""

from dsfr_generator.token_mapper.spacing import (
    map_dsfr_spacing_to_tailwind,
    normalize_spacing_value,
)


class TestNormalizeSpacingValue:
    """Tests for normalize_spacing_value function."""

    def test_normalize_rem_value(self):
        """Test normalizing rem values."""
        assert normalize_spacing_value("1rem") == "1rem"
        assert normalize_spacing_value("0.5rem") == "0.5rem"

    def test_normalize_px_to_rem(self):
        """Test converting px to rem (optional)."""
        # 16px = 1rem (assuming 16px base)
        result = normalize_spacing_value("16px")
        assert result == "16px" or result == "1rem"

    def test_normalize_unitless_value(self):
        """Test handling unitless values."""
        result = normalize_spacing_value("0")
        assert result == "0"


class TestMapDsfrSpacingToTailwind:
    """Tests for map_dsfr_spacing_to_tailwind function (T074)."""

    def test_map_spacing_scale(self):
        """Test mapping DSFR spacing scale to Tailwind."""
        spacing_tokens = {
            "--spacing-0": "0",
            "--spacing-1": "0.25rem",
            "--spacing-2": "0.5rem",
            "--spacing-4": "1rem",
            "--spacing-8": "2rem",
        }
        result = map_dsfr_spacing_to_tailwind(spacing_tokens)

        assert "0" in result
        assert "1" in result
        assert "2" in result
        assert "4" in result
        assert "8" in result
        assert result["2"] == "0.5rem"
        assert result["4"] == "1rem"

    def test_map_margin_tokens(self):
        """Test mapping margin tokens."""
        tokens = {
            "--margin-sm": "0.5rem",
            "--margin-md": "1rem",
            "--margin-lg": "2rem",
        }
        result = map_dsfr_spacing_to_tailwind(tokens)

        assert "margin-sm" in result or "sm" in result
        assert len(result) >= 3

    def test_map_padding_tokens(self):
        """Test mapping padding tokens."""
        tokens = {
            "--padding-1": "0.25rem",
            "--padding-2": "0.5rem",
        }
        result = map_dsfr_spacing_to_tailwind(tokens)

        assert len(result) >= 2

    def test_map_gap_tokens(self):
        """Test mapping gap tokens."""
        tokens = {
            "--gap-2": "0.5rem",
            "--gap-4": "1rem",
        }
        result = map_dsfr_spacing_to_tailwind(tokens)

        assert len(result) >= 2

    def test_map_empty_spacing(self):
        """Test mapping empty spacing dict."""
        result = map_dsfr_spacing_to_tailwind({})
        assert result == {}

    def test_map_preserves_tailwind_scale(self):
        """Test that mapping creates Tailwind-compatible scale."""
        tokens = {
            "--spacing-1": "0.25rem",  # Should map to 1
            "--spacing-2": "0.5rem",   # Should map to 2
            "--spacing-4": "1rem",     # Should map to 4
            "--spacing-8": "2rem",     # Should map to 8
        }
        result = map_dsfr_spacing_to_tailwind(tokens)

        # Tailwind uses numeric keys for spacing scale
        assert isinstance(result, dict)
        assert len(result) >= 4

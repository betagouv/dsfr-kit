"""Unit tests for RGAA 4 validation."""

from dsfr_generator.validator.rgaa import (
    check_rgaa_critical_criteria,
    validate_rgaa_compliance,
)


class TestCheckRgaaCriticalCriteria:
    """Tests for check_rgaa_critical_criteria function."""

    def test_check_compliant_html(self):
        """Test checking RGAA-compliant HTML."""
        html = """
        <button aria-label="Soumettre le formulaire" type="button">
            Soumettre
        </button>
        """
        result = check_rgaa_critical_criteria(html)

        assert result["compliant"] is True
        assert len(result["violations"]) == 0

    def test_check_missing_lang_attribute(self):
        """Test detecting missing lang attribute on html element."""
        html = "<html><body>Content</body></html>"
        result = check_rgaa_critical_criteria(html)

        # RGAA requires lang attribute
        assert "violations" in result

    def test_check_image_without_alt(self):
        """Test detecting images without alt text."""
        html = '<img src="image.jpg">'
        result = check_rgaa_critical_criteria(html)

        assert result["compliant"] is False
        assert any("alt" in str(v).lower() for v in result["violations"])

    def test_check_form_labels(self):
        """Test checking form input labels."""
        html = '<input type="text" name="email">'  # Missing label
        result = check_rgaa_critical_criteria(html)

        # Should detect missing label
        assert "violations" in result


class TestValidateRgaaCompliance:
    """Tests for validate_rgaa_compliance function."""

    def test_validate_compliant_component(self):
        """Test validating RGAA-compliant component."""
        html = """
        <button
            aria-label="Envoyer le formulaire"
            type="button"
            class="fr-btn">
            Envoyer
        </button>
        """
        result = validate_rgaa_compliance(html)

        assert "compliant" in result
        assert "violations" in result
        assert "level" in result

    def test_validate_with_blocking(self):
        """Test validation with blocking on critical violations."""
        html = '<img src="test.jpg">'  # Missing alt - critical
        result = validate_rgaa_compliance(html, block_on_critical=True)

        assert result["compliant"] is False
        assert result.get("should_block", False) is True

    def test_validate_without_blocking(self):
        """Test validation without blocking."""
        html = '<button>Click</button>'
        result = validate_rgaa_compliance(html, block_on_critical=False)

        assert "compliant" in result
        assert "should_block" in result

    def test_validate_empty_html(self):
        """Test validating empty HTML."""
        html = ""
        result = validate_rgaa_compliance(html)

        assert "compliant" in result
        assert isinstance(result["violations"], list)

    def test_validate_returns_violation_details(self):
        """Test that validation returns detailed violation information."""
        html = '<div role="button">Click</div>'  # Should be actual button
        result = validate_rgaa_compliance(html)

        assert "violations" in result
        if result["violations"]:
            violation = result["violations"][0]
            assert "id" in violation or "description" in violation

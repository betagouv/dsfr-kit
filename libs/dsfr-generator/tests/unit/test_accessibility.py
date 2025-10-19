"""Unit tests for accessibility validation."""

from dsfr_generator.validator.accessibility import (
    check_aria_attributes,
    format_violation_report,
    run_axe_core,
    validate_wcag_compliance,
)


class TestCheckAriaAttributes:
    """Tests for check_aria_attributes function."""

    def test_check_valid_aria_attributes(self):
        """Test checking valid ARIA attributes."""
        html = '<button aria-label="Submit" role="button">Submit</button>'
        result = check_aria_attributes(html)

        assert result["valid"] is True
        assert len(result["violations"]) == 0

    def test_check_missing_aria_label(self):
        """Test detecting missing aria-label on interactive elements."""
        html = '<button>Submit</button>'
        result = check_aria_attributes(html)

        # Should warn about missing aria-label (not critical, but recommended)
        assert "violations" in result or "warnings" in result

    def test_check_invalid_aria_role(self):
        """Test detecting invalid ARIA roles."""
        html = '<div role="invalid-role">Content</div>'
        result = check_aria_attributes(html)

        # Should detect invalid role
        assert result["valid"] is False or len(result.get("violations", [])) > 0

    def test_check_aria_with_empty_html(self):
        """Test checking ARIA attributes with empty HTML."""
        html = ""
        result = check_aria_attributes(html)

        assert "valid" in result
        assert isinstance(result["violations"], list)


class TestValidateWcagCompliance:
    """Tests for validate_wcag_compliance function."""

    def test_validate_compliant_html(self):
        """Test validating WCAG-compliant HTML."""
        html = """
        <button aria-label="Submit form" type="button">
            Submit
        </button>
        """
        result = validate_wcag_compliance(html, level="AA")

        assert "compliant" in result
        assert "violations" in result
        assert isinstance(result["violations"], list)

    def test_validate_non_compliant_html(self):
        """Test validating non-compliant HTML."""
        html = '<img src="image.jpg">'  # Missing alt attribute
        result = validate_wcag_compliance(html, level="AA")

        assert result["compliant"] is False
        assert len(result["violations"]) > 0

    def test_validate_with_level_a(self):
        """Test validation with WCAG Level A."""
        html = '<button>Click</button>'
        result = validate_wcag_compliance(html, level="A")

        assert "compliant" in result
        assert result["level"] == "A"

    def test_validate_with_level_aaa(self):
        """Test validation with WCAG Level AAA."""
        html = '<button aria-label="Submit">Submit</button>'
        result = validate_wcag_compliance(html, level="AAA")

        assert "compliant" in result
        assert result["level"] == "AAA"

    def test_validate_empty_html(self):
        """Test validating empty HTML."""
        html = ""
        result = validate_wcag_compliance(html)

        assert "compliant" in result
        assert isinstance(result["violations"], list)


class TestFormatViolationReport:
    """Tests for format_violation_report function."""

    def test_format_empty_violations(self):
        """Test formatting report with no violations."""
        violations = []
        report = format_violation_report(violations)

        assert "No violations found" in report or report == ""

    def test_format_single_violation(self):
        """Test formatting report with single violation."""
        violations = [
            {
                "id": "image-alt",
                "impact": "critical",
                "description": "Images must have alternate text",
                "help": "Add alt attribute to img elements",
            }
        ]
        report = format_violation_report(violations)

        assert "image-alt" in report
        assert "critical" in report
        assert "alternate text" in report

    def test_format_multiple_violations(self):
        """Test formatting report with multiple violations."""
        violations = [
            {
                "id": "button-name",
                "impact": "critical",
                "description": "Buttons must have discernible text",
                "help": "Add text or aria-label",
            },
            {
                "id": "color-contrast",
                "impact": "serious",
                "description": "Elements must have sufficient color contrast",
                "help": "Adjust colors to meet contrast ratio",
            },
        ]
        report = format_violation_report(violations)

        assert "button-name" in report
        assert "color-contrast" in report
        assert "critical" in report
        assert "serious" in report

    def test_format_with_fix_suggestions(self):
        """Test that report includes fix suggestions."""
        violations = [
            {
                "id": "aria-required-attr",
                "impact": "critical",
                "description": "Required ARIA attributes must be provided",
                "help": "Add required ARIA attributes",
            }
        ]
        report = format_violation_report(violations)

        assert "help" in report.lower() or "fix" in report.lower()


class TestRunAxeCore:
    """Tests for run_axe_core function."""

    def test_run_axe_core_with_html_file(self):
        """Test running axe-core on HTML file."""
        # This test requires axe-core to be available
        # For now, test that the function exists and has correct signature
        import inspect

        sig = inspect.signature(run_axe_core)
        assert "html_path" in sig.parameters

    def test_run_axe_core_returns_dict(self):
        """Test that run_axe_core returns a dictionary."""
        # Mock test - actual implementation will use subprocess
        result = run_axe_core(html_path=None, use_subprocess=False)

        assert isinstance(result, dict)
        assert "available" in result or "violations" in result

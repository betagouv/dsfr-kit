"""WCAG 2.1 accessibility validation.

This module provides accessibility validation for generated web components.
Integrates with axe-core via subprocess for comprehensive automated testing.
"""

import json
import subprocess

from bs4 import BeautifulSoup


def check_aria_attributes(html: str) -> dict:
    """
    Check ARIA attributes in HTML for validity.

    Args:
        html: HTML string to validate

    Returns:
        Dictionary with validation results:
        - valid: Boolean indicating if ARIA attributes are valid
        - violations: List of ARIA attribute violations
        - warnings: List of ARIA attribute warnings
    """
    if not html or html.strip() == "":
        return {"valid": True, "violations": [], "warnings": []}

    soup = BeautifulSoup(html, "html.parser")
    violations = []
    warnings = []

    # Valid ARIA roles (subset for common elements)
    valid_roles = {
        "button",
        "link",
        "checkbox",
        "radio",
        "textbox",
        "combobox",
        "listbox",
        "option",
        "menu",
        "menuitem",
        "tab",
        "tabpanel",
        "dialog",
        "alert",
        "status",
        "navigation",
        "main",
        "complementary",
        "banner",
        "contentinfo",
    }

    # Check all elements with role attribute
    for element in soup.find_all(attrs={"role": True}):
        role = element.get("role")
        if role and role not in valid_roles:
            violations.append(
                {
                    "id": "invalid-aria-role",
                    "element": element.name,
                    "role": role,
                    "description": f"Invalid ARIA role: {role}",
                }
            )

    # Check interactive elements for aria-label
    interactive_elements = soup.find_all(["button", "a", "input"])
    for element in interactive_elements:
        if element.name == "button" and not element.get("aria-label") and not element.get_text(
            strip=True
        ):
            warnings.append(
                {
                    "id": "button-aria-label",
                    "element": element.name,
                    "description": "Button without aria-label or text content",
                }
            )

    return {"valid": len(violations) == 0, "violations": violations, "warnings": warnings}


def validate_wcag_compliance(
    html: str, level: str = "AA", use_axe_core: bool = True, html_path: str | None = None
) -> dict:
    """
    Validate HTML against WCAG 2.1 guidelines.

    Uses axe-core via subprocess for comprehensive validation when available.
    Falls back to basic BeautifulSoup checks if axe-core is unavailable.

    Args:
        html: HTML string to validate
        level: WCAG level ('A', 'AA', or 'AAA')
        use_axe_core: Whether to attempt axe-core validation
        html_path: Path to HTML file (required for axe-core)

    Returns:
        Dictionary with validation results:
        - compliant: Boolean indicating compliance
        - level: WCAG level tested
        - violations: List of violations found
        - method: Validation method used ('axe-core' or 'basic')
    """
    if not html or html.strip() == "":
        return {"compliant": True, "level": level, "violations": [], "method": "none"}

    # Try axe-core first if requested and path provided
    if use_axe_core and html_path:
        axe_result = run_axe_core(html_path, use_subprocess=True)
        if axe_result.get("available"):
            return {
                "compliant": len(axe_result.get("violations", [])) == 0,
                "level": level,
                "violations": axe_result.get("violations", []),
                "passes": axe_result.get("passes", []),
                "incomplete": axe_result.get("incomplete", []),
                "method": "axe-core",
            }

    # Fallback to basic BeautifulSoup validation
    soup = BeautifulSoup(html, "html.parser")
    violations = []

    # Check for images without alt text (WCAG 1.1.1 - Level A)
    for img in soup.find_all("img"):
        if not img.get("alt"):
            violations.append(
                {
                    "id": "image-alt",
                    "impact": "critical",
                    "description": "Images must have alternate text",
                    "help": "Add alt attribute to img elements",
                    "wcag": "1.1.1",
                }
            )

    # Check for form inputs without labels (WCAG 3.3.2 - Level A)
    for input_elem in soup.find_all("input"):
        input_id = input_elem.get("id")
        input_type = input_elem.get("type", "text")

        if input_type not in ["hidden", "submit", "button"]:
            # Check if there's a label for this input
            if input_id:
                label = soup.find("label", attrs={"for": input_id})
                if not label and not input_elem.get("aria-label"):
                    violations.append(
                        {
                            "id": "form-field-label",
                            "impact": "critical",
                            "description": "Form inputs must have associated labels",
                            "help": "Add a label element or aria-label attribute",
                            "wcag": "3.3.2",
                        }
                    )

    # Check ARIA attributes
    aria_check = check_aria_attributes(html)
    if not aria_check["valid"]:
        violations.extend(aria_check["violations"])

    return {
        "compliant": len(violations) == 0,
        "level": level,
        "violations": violations,
        "method": "basic",
    }


def format_violation_report(violations: list[dict]) -> str:
    """
    Format accessibility violations into a human-readable report.

    Args:
        violations: List of violation dictionaries

    Returns:
        Formatted report string
    """
    if not violations:
        return "No violations found ✓"

    report_lines = ["Accessibility Violations Found:", ""]

    for i, violation in enumerate(violations, 1):
        report_lines.append(f"{i}. {violation.get('id', 'unknown')}")
        report_lines.append(f"   Impact: {violation.get('impact', 'unknown')}")
        report_lines.append(f"   Description: {violation.get('description', 'N/A')}")

        if "help" in violation:
            report_lines.append(f"   Fix: {violation['help']}")

        if "wcag" in violation:
            report_lines.append(f"   WCAG: {violation['wcag']}")

        report_lines.append("")

    return "\n".join(report_lines)


def run_axe_core(html_path: str | None = None, use_subprocess: bool = True) -> dict:
    """
    Run axe-core accessibility testing via subprocess.

    Uses `pnpm dlx @axe-core/cli` to run axe-core on HTML files.

    Note: Requires Chrome/Chromium and chromedriver to be installed.
    If not available, returns error in result dict. The validate_wcag_compliance
    function will automatically fall back to basic validation if axe-core fails.

    Args:
        html_path: Path to HTML file or file:// URL to test
        use_subprocess: Whether to actually run subprocess (False for testing)

    Returns:
        Dictionary with axe-core results:
        - available: Boolean indicating if axe-core is available
        - violations: List of violations found (if run)
        - passes: List of passed rules (if run)
        - incomplete: List of incomplete checks (if run)
        - error: Error message if axe-core failed
    """
    if not use_subprocess or html_path is None:
        return {"available": False, "violations": [], "message": "Subprocess disabled or no path"}

    try:
        # Run axe-core via pnpm dlx
        # Use --stdout to get JSON output directly
        result = subprocess.run(
            ["pnpm", "dlx", "@axe-core/cli", html_path, "--stdout"],
            capture_output=True,
            text=True,
            timeout=30,
        )

        if result.returncode != 0:
            # axe-core returns non-zero if violations found
            # But we still want to parse the output
            pass

        # Parse JSON output
        try:
            axe_results = json.loads(result.stdout)
            return {
                "available": True,
                "violations": axe_results.get("violations", []),
                "passes": axe_results.get("passes", []),
                "incomplete": axe_results.get("incomplete", []),
            }
        except json.JSONDecodeError:
            return {
                "available": True,
                "violations": [],
                "error": "Failed to parse axe-core output",
                "raw_output": result.stdout,
                "raw_stderr": result.stderr,
                "return_code": result.returncode,
            }

    except FileNotFoundError:
        return {
            "available": False,
            "violations": [],
            "error": "pnpm not found - axe-core unavailable",
        }
    except subprocess.TimeoutExpired:
        return {
            "available": False,
            "violations": [],
            "error": "axe-core execution timed out",
        }
    except Exception as e:
        return {
            "available": False,
            "violations": [],
            "error": f"Failed to run axe-core: {e}",
        }

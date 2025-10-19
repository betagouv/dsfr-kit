"""RGAA 4 (French accessibility) validation.

RGAA (Référentiel Général d'Amélioration de l'Accessibilité) is the French
government's accessibility standard, based on WCAG 2.1 with additional requirements.
"""

from bs4 import BeautifulSoup

from .accessibility import validate_wcag_compliance


def check_rgaa_critical_criteria(html: str) -> dict:
    """
    Check critical RGAA 4 criteria.

    RGAA critical criteria include:
    - Images must have alt text
    - Form inputs must have labels
    - HTML must have lang attribute
    - Interactive elements must be keyboard accessible

    Args:
        html: HTML string to validate

    Returns:
        Dictionary with validation results:
        - compliant: Boolean indicating compliance
        - violations: List of violations found
    """
    if not html or html.strip() == "":
        return {"compliant": True, "violations": []}

    soup = BeautifulSoup(html, "html.parser")
    violations = []

    # RGAA 8.2: HTML element must have lang attribute
    html_elem = soup.find("html")
    if html_elem and not html_elem.get("lang"):
        violations.append(
            {
                "id": "rgaa-8.2",
                "impact": "critical",
                "description": "HTML element must have a lang attribute",
                "help": "Add lang='fr' or appropriate language code to <html> tag",
                "rgaa": "8.2",
            }
        )

    # RGAA 1.1: Images must have alt text
    for img in soup.find_all("img"):
        if not img.get("alt"):
            violations.append(
                {
                    "id": "rgaa-1.1",
                    "impact": "critical",
                    "description": "Images must have alternate text",
                    "help": "Add alt attribute to img elements",
                    "rgaa": "1.1",
                }
            )

    # RGAA 11.1: Form inputs must have labels
    for input_elem in soup.find_all("input"):
        input_type = input_elem.get("type", "text")
        if input_type not in ["hidden", "submit", "button"]:
            input_id = input_elem.get("id")
            if input_id:
                label = soup.find("label", attrs={"for": input_id})
                if not label and not input_elem.get("aria-label"):
                    violations.append(
                        {
                            "id": "rgaa-11.1",
                            "impact": "critical",
                            "description": "Form inputs must have associated labels",
                            "help": "Add a label element or aria-label attribute",
                            "rgaa": "11.1",
                        }
                    )

    # RGAA 7.1: Interactive elements should be actual buttons/links
    for div in soup.find_all("div", attrs={"role": "button"}):
        violations.append(
            {
                "id": "rgaa-7.1",
                "impact": "moderate",
                "description": "Use semantic button elements instead of div with role='button'",
                "help": "Replace <div role='button'> with <button>",
                "rgaa": "7.1",
            }
        )

    return {"compliant": len(violations) == 0, "violations": violations}


def validate_rgaa_compliance(html: str, block_on_critical: bool = True) -> dict:
    """
    Validate HTML against RGAA 4 guidelines.

    RGAA 4 is based on WCAG 2.1 Level AA with additional French requirements.

    Args:
        html: HTML string to validate
        block_on_critical: Whether to block generation on critical violations

    Returns:
        Dictionary with validation results:
        - compliant: Boolean indicating compliance
        - level: RGAA level (based on WCAG AA)
        - violations: List of violations found
        - should_block: Boolean indicating if generation should be blocked
    """
    if not html or html.strip() == "":
        return {
            "compliant": True,
            "level": "RGAA 4 (WCAG 2.1 AA)",
            "violations": [],
            "should_block": False,
        }

    # Run WCAG validation first (RGAA is based on WCAG)
    wcag_result = validate_wcag_compliance(html, level="AA")

    # Run RGAA-specific checks
    rgaa_result = check_rgaa_critical_criteria(html)

    # Combine violations
    all_violations = wcag_result["violations"] + rgaa_result["violations"]

    # Determine if we should block
    critical_violations = [v for v in all_violations if v.get("impact") == "critical"]
    should_block = block_on_critical and len(critical_violations) > 0

    return {
        "compliant": len(all_violations) == 0,
        "level": "RGAA 4 (WCAG 2.1 AA)",
        "violations": all_violations,
        "should_block": should_block,
    }

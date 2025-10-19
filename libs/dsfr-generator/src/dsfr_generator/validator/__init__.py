"""DSFR accessibility validators."""

from .accessibility import (
    check_aria_attributes,
    format_violation_report,
    run_axe_core,
    validate_wcag_compliance,
)
from .rgaa import check_rgaa_critical_criteria, validate_rgaa_compliance

__all__ = [
    "check_aria_attributes",
    "check_rgaa_critical_criteria",
    "format_violation_report",
    "run_axe_core",
    "validate_rgaa_compliance",
    "validate_wcag_compliance",
]

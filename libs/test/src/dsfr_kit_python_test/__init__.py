"""Test Python package demonstrating workspace dependencies."""

from dsfr_kit_python_core import hello, get_version

__version__ = "0.1.0"


def greet() -> str:
    """Return a greeting using the core package."""
    return f"{hello()} - Test package using core v{get_version()}"


def test_workspace() -> bool:
    """Verify we can import from workspace package."""
    return callable(hello) and callable(get_version)

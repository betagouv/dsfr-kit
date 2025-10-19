"""Integration tests for JavaScript behavior analyzer."""

from pathlib import Path

import pytest

from dsfr_generator.parsers import (
    BehaviorPattern,
    analyze_javascript_file,
    is_analyzer_available,
)


@pytest.mark.skipif(
    not is_analyzer_available(),
    reason="TypeScript analyzer not available",
)
def test_analyzer_available():
    """Test that the analyzer is available."""
    assert is_analyzer_available()


@pytest.mark.skipif(
    not is_analyzer_available(),
    reason="TypeScript analyzer not available",
)
def test_analyze_sample_button():
    """Test analyzing a sample DSFR button JavaScript file."""
    # Use the sample file from the TypeScript package
    repo_root = Path(__file__).parent.parent.parent.parent.parent
    sample_file = (
        repo_root
        / "packages"
        / "dsfr-js-analyzer"
        / "tests"
        / "fixtures"
        / "sample-button.js"
    )

    if not sample_file.exists():
        pytest.skip(f"Sample file not found: {sample_file}")

    result = analyze_javascript_file(sample_file)

    assert result is not None
    assert isinstance(result, BehaviorPattern)
    assert result.component_name == "sample-button"

    # Verify event listeners detected
    assert len(result.event_listeners) == 3
    event_types = {listener["eventType"] for listener in result.event_listeners}
    assert event_types == {"click", "focus", "blur"}

    # Verify DOM manipulations detected
    assert len(result.dom_manipulations) > 0

    # Verify ARIA changes detected
    assert len(result.aria_changes) > 0
    aria_attrs = {change["attribute"] for change in result.aria_changes}
    assert "aria-expanded" in aria_attrs


@pytest.mark.skipif(
    not is_analyzer_available(),
    reason="TypeScript analyzer not available",
)
def test_analyze_nonexistent_file():
    """Test that analyzing a nonexistent file raises FileNotFoundError."""
    with pytest.raises(FileNotFoundError):
        analyze_javascript_file(Path("/nonexistent/file.js"))


def test_behavior_pattern_repr():
    """Test BehaviorPattern string representation."""
    data = {
        "componentName": "test-component",
        "filePath": "/path/to/file.js",
        "eventListeners": [{"eventType": "click"}],
        "stateVariables": [],
        "domManipulations": [{"type": "setAttribute"}],
        "ariaChanges": [{"attribute": "aria-expanded"}],
        "stateTransitions": [],
        "analyzedAt": "2025-01-01T00:00:00Z",
        "warnings": [],
    }

    pattern = BehaviorPattern(data)
    repr_str = repr(pattern)

    assert "test-component" in repr_str
    assert "listeners=1" in repr_str
    assert "dom_ops=1" in repr_str
    assert "aria=1" in repr_str

"""
JavaScript behavior analyzer integration.

This module provides Python integration with the TypeScript-based JavaScript analyzer.
It calls the analyzer as a subprocess and parses the JSON output.
"""

import json
import logging
import subprocess
from pathlib import Path
from typing import Any

logger = logging.getLogger(__name__)


class BehaviorPattern:
    """Represents analyzed JavaScript behavior patterns."""

    def __init__(self, data: dict[str, Any]) -> None:
        """Initialize from analyzer JSON output."""
        self.component_name: str = data.get("componentName", "")
        self.file_path: str = data.get("filePath", "")
        self.event_listeners: list[dict[str, Any]] = data.get("eventListeners", [])
        self.state_variables: list[dict[str, Any]] = data.get("stateVariables", [])
        self.dom_manipulations: list[dict[str, Any]] = data.get("domManipulations", [])
        self.aria_changes: list[dict[str, Any]] = data.get("ariaChanges", [])
        self.state_transitions: list[dict[str, Any]] = data.get("stateTransitions", [])
        self.analyzed_at: str = data.get("analyzedAt", "")
        self.warnings: list[str] = data.get("warnings", [])

    def __repr__(self) -> str:
        return (
            f"BehaviorPattern(component={self.component_name}, "
            f"listeners={len(self.event_listeners)}, "
            f"dom_ops={len(self.dom_manipulations)}, "
            f"aria={len(self.aria_changes)})"
        )


def analyze_javascript_file(file_path: Path) -> BehaviorPattern | None:
    """
    Analyze a JavaScript file for DSFR component behaviors.

    Args:
        file_path: Path to the JavaScript file to analyze

    Returns:
        BehaviorPattern object with analysis results, or None if analyzer unavailable

    Raises:
        FileNotFoundError: If the JavaScript file doesn't exist
        ValueError: If the analyzer output is invalid
    """
    if not file_path.exists():
        raise FileNotFoundError(f"JavaScript file not found: {file_path}")

    # Find the analyzer executable
    analyzer_path = _find_analyzer()
    if not analyzer_path:
        logger.warning(
            "TypeScript JavaScript analyzer not found. "
            "Behavior analysis will be skipped. "
            "To enable, run: pnpm install && pnpm --filter @dsfr-kit/js-analyzer build"
        )
        return None

    try:
        # Run the analyzer as a subprocess
        result = subprocess.run(
            ["node", str(analyzer_path), str(file_path)],
            capture_output=True,
            text=True,
            check=True,
            timeout=30,
        )

        # Parse JSON output
        data = json.loads(result.stdout)
        return BehaviorPattern(data)

    except subprocess.CalledProcessError as e:
        logger.error(f"Analyzer failed: {e.stderr}")
        raise ValueError(f"Failed to analyze {file_path}: {e.stderr}") from e

    except subprocess.TimeoutExpired:
        logger.error(f"Analyzer timeout for {file_path}")
        raise ValueError(f"Analyzer timeout for {file_path}")

    except json.JSONDecodeError as e:
        logger.error(f"Invalid JSON from analyzer: {e}")
        raise ValueError(f"Invalid analyzer output: {e}") from e


def _find_analyzer() -> Path | None:
    """
    Find the TypeScript analyzer executable.

    Returns:
        Path to the analyzer, or None if not found
    """
    # Try to find the analyzer in the monorepo
    repo_root = Path(__file__).parent.parent.parent.parent.parent
    analyzer_path = repo_root / "packages" / "dsfr-js-analyzer" / "dist" / "index.js"

    if analyzer_path.exists():
        return analyzer_path

    # Try to find via pnpm
    try:
        result = subprocess.run(
            ["pnpm", "list", "--json", "--filter", "@dsfr-kit/js-analyzer"],
            capture_output=True,
            text=True,
            check=False,
        )
        if result.returncode == 0:
            data = json.loads(result.stdout)
            if data and len(data) > 0:
                pkg_path = Path(data[0].get("path", ""))
                dist_path = pkg_path / "dist" / "index.js"
                if dist_path.exists():
                    return dist_path
    except (subprocess.SubprocessError, json.JSONDecodeError, KeyError):
        pass

    return None


def is_analyzer_available() -> bool:
    """
    Check if the TypeScript analyzer is available.

    Returns:
        True if analyzer is available, False otherwise
    """
    return _find_analyzer() is not None

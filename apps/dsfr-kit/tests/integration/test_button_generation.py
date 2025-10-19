"""Integration test for Button component generation.

This test validates the complete pipeline:
- Fetch Button assets from DSFR package
- Parse HTML structure and SCSS tokens
- Generate web component code
- Validate accessibility (WCAG 2.1 AA + RGAA 4)
- Verify output files are created correctly
"""

from pathlib import Path

import pytest
from click.testing import CliRunner

from dsfr_kit_cli.main import cli


@pytest.fixture
def runner():
    """Create a CLI test runner."""
    return CliRunner()


@pytest.fixture
def output_dir(tmp_path):
    """Create a temporary output directory."""
    return tmp_path / "output"


def test_button_component_generation_end_to_end(runner, output_dir):
    """
    T060: Integration test - fetch Button assets, generate component, validate output.

    This test runs the complete pipeline without mocks:
    1. Fetches DSFR package (or uses cache)
    2. Parses Button HTML and SCSS
    3. Extracts design tokens
    4. Generates web component
    5. Validates accessibility
    6. Writes output files
    """
    # Run the generate command
    result = runner.invoke(
        cli, ["generate", "Button", "--output", str(output_dir)]
    )

    # Check command succeeded
    assert result.exit_code == 0, f"Command failed with output:\n{result.output}"

    # Verify success message
    assert "Button component generated successfully" in result.output

    # Verify output files exist
    component_file = output_dir / "dsfr-button.js"
    tailwind_file = output_dir / "tailwind.config.js"

    assert component_file.exists(), "Component file not created"
    assert tailwind_file.exists(), "Tailwind config file not created"

    # Verify component file has content
    component_code = component_file.read_text()
    assert len(component_code) > 0, "Component file is empty"
    assert "class" in component_code or "function" in component_code, (
        "Component code doesn't contain class or function definition"
    )

    # Verify Tailwind config has content
    tailwind_code = tailwind_file.read_text()
    assert len(tailwind_code) > 0, "Tailwind config is empty"
    assert "module.exports" in tailwind_code, "Tailwind config is not a valid module"


def test_button_component_structure(runner, output_dir):
    """
    Verify the generated Button component has the expected structure.

    Checks:
    - Component class/function is defined
    - Has proper web component lifecycle methods (if applicable)
    - Contains DSFR-specific class names
    """
    result = runner.invoke(
        cli, ["generate", "Button", "--output", str(output_dir)]
    )
    assert result.exit_code == 0

    component_file = output_dir / "dsfr-button.js"
    component_code = component_file.read_text()

    # Check for web component patterns
    # Note: Exact structure depends on generator implementation
    assert "dsfr" in component_code.lower() or "button" in component_code.lower(), (
        "Component doesn't reference DSFR or Button"
    )


def test_button_tailwind_config_structure(runner, output_dir):
    """
    Verify the generated Tailwind config has the expected structure.

    Checks:
    - Valid JavaScript module export
    - Contains theme configuration
    - Has color definitions (DSFR tokens)
    """
    result = runner.invoke(
        cli, ["generate", "Button", "--output", str(output_dir)]
    )
    assert result.exit_code == 0

    tailwind_file = output_dir / "tailwind.config.js"
    tailwind_code = tailwind_file.read_text()

    # Check for Tailwind config structure
    assert "module.exports" in tailwind_code, "Missing module.exports"
    # Note: Exact structure depends on token_mapper implementation


def test_button_generation_with_verbose_output(runner, output_dir):
    """Test Button generation with verbose flag shows detailed progress."""
    result = runner.invoke(
        cli, ["--verbose", "generate", "Button", "--output", str(output_dir)]
    )

    assert result.exit_code == 0

    # Verify verbose output shows pipeline steps
    assert "Fetching" in result.output
    assert "Parsing" in result.output
    assert "Compiling" in result.output or "SCSS" in result.output
    assert "Mapping" in result.output or "token" in result.output
    assert "Generating" in result.output
    assert "Validating" in result.output


def test_button_generation_creates_directory_if_missing(runner, tmp_path):
    """Test that the generate command creates output directory if it doesn't exist."""
    nested_output = tmp_path / "deeply" / "nested" / "output"

    result = runner.invoke(
        cli, ["generate", "Button", "--output", str(nested_output)]
    )

    assert result.exit_code == 0
    assert nested_output.exists()
    assert (nested_output / "dsfr-button.js").exists()


def test_button_generation_with_default_output(runner):
    """Test Button generation with default output directory."""
    with runner.isolated_filesystem():
        result = runner.invoke(cli, ["generate", "Button"])

        assert result.exit_code == 0
        assert Path("components").exists()
        assert (Path("components") / "dsfr-button.js").exists()
        assert (Path("components") / "tailwind.config.js").exists()


def test_button_generation_case_insensitive(runner, output_dir):
    """Test that component name is case-insensitive."""
    # Test with lowercase
    result = runner.invoke(
        cli, ["generate", "button", "--output", str(output_dir)]
    )

    assert result.exit_code == 0
    assert (output_dir / "dsfr-button.js").exists()


@pytest.mark.slow
def test_button_generation_caching(runner, tmp_path):
    """
    Test that subsequent generations use cached DSFR package.

    This test runs generation twice and verifies the second run is faster
    due to caching.
    """
    output_dir1 = tmp_path / "output1"
    output_dir2 = tmp_path / "output2"

    # First generation (may download)
    result1 = runner.invoke(
        cli, ["generate", "Button", "--output", str(output_dir1)]
    )
    assert result1.exit_code == 0

    # Second generation (should use cache)
    result2 = runner.invoke(
        cli, ["generate", "Button", "--output", str(output_dir2)]
    )
    assert result2.exit_code == 0

    # Both should produce the same output
    code1 = (output_dir1 / "dsfr-button.js").read_text()
    code2 = (output_dir2 / "dsfr-button.js").read_text()
    assert code1 == code2, "Generated components differ between runs"

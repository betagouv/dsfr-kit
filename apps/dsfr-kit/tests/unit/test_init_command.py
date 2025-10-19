"""Unit tests for dsfr init command (T084-T087)."""

import json
from pathlib import Path
from unittest.mock import Mock, patch

import pytest

from dsfr_kit_cli.commands.init import (
    create_project_structure,
    generate_dsfr_config,
    generate_tailwind_config,
    init_command,
)


class TestCreateProjectStructure:
    """Tests for create_project_structure function (T085)."""

    def test_create_basic_structure(self, tmp_path):
        """Test creating basic project structure."""
        project_dir = tmp_path / "my-project"

        create_project_structure(project_dir)

        # Check directories are created
        assert (project_dir / "components").exists()
        assert (project_dir / "styles").exists()

    def test_create_structure_with_framework(self, tmp_path):
        """Test creating structure with framework-specific directories."""
        project_dir = tmp_path / "my-project"

        create_project_structure(project_dir, framework="react")

        assert (project_dir / "components").exists()
        assert (project_dir / "styles").exists()

    def test_create_structure_existing_directory(self, tmp_path):
        """Test creating structure in existing directory."""
        project_dir = tmp_path / "existing"
        project_dir.mkdir()

        # Should not raise error
        create_project_structure(project_dir)

        assert (project_dir / "components").exists()


class TestGenerateDsfrConfig:
    """Tests for generate_dsfr_config function (T086)."""

    def test_generate_config_with_version(self, tmp_path):
        """Test generating dsfr-kit.config.json with DSFR version."""
        config_path = tmp_path / "dsfr-kit.config.json"

        generate_dsfr_config(config_path, dsfr_version="1.14.2")

        assert config_path.exists()

        with open(config_path) as f:
            config = json.load(f)

        assert config["dsfrVersion"] == "1.14.2"
        assert "framework" in config
        assert "components" in config

    def test_generate_config_with_framework(self, tmp_path):
        """Test generating config with framework option."""
        config_path = tmp_path / "dsfr-kit.config.json"

        generate_dsfr_config(config_path, dsfr_version="1.14.2", framework="web-components")

        with open(config_path) as f:
            config = json.load(f)

        assert config["framework"] == "web-components"

    def test_generate_config_default_values(self, tmp_path):
        """Test config has sensible defaults."""
        config_path = tmp_path / "dsfr-kit.config.json"

        generate_dsfr_config(config_path)

        with open(config_path) as f:
            config = json.load(f)

        assert "dsfrVersion" in config
        assert "framework" in config
        assert "components" in config
        assert isinstance(config["components"], list)


class TestGenerateTailwindConfig:
    """Tests for generate_tailwind_config function (T085)."""

    def test_generate_tailwind_config_file(self, tmp_path):
        """Test generating tailwind.config.js file."""
        config_path = tmp_path / "tailwind.config.js"

        generate_tailwind_config(config_path)

        assert config_path.exists()

        content = config_path.read_text()
        assert "module.exports" in content
        assert "theme" in content
        assert "extend" in content

    def test_generate_tailwind_config_with_dsfr_tokens(self, tmp_path):
        """Test generating config with DSFR tokens."""
        config_path = tmp_path / "tailwind.config.js"

        generate_tailwind_config(config_path, include_dsfr_tokens=True)

        content = config_path.read_text()
        assert "dsfr" in content.lower()

    def test_generate_tailwind_config_with_dark_mode(self, tmp_path):
        """Test generating config with dark mode support."""
        config_path = tmp_path / "tailwind.config.js"

        generate_tailwind_config(config_path, dark_mode=True)

        content = config_path.read_text()
        assert "darkMode" in content


class TestInitCommand:
    """Tests for init_command function (T084, T087)."""

    def test_init_command_creates_all_files(self, tmp_path):
        """Test init command creates all necessary files."""
        project_dir = tmp_path / "my-project"

        init_command(project_dir)

        # Check structure
        assert (project_dir / "components").exists()
        assert (project_dir / "styles").exists()

        # Check config files
        assert (project_dir / "dsfr-kit.config.json").exists()
        assert (project_dir / "tailwind.config.js").exists()

    def test_init_command_with_framework_option(self, tmp_path):
        """Test init command with --framework option."""
        project_dir = tmp_path / "my-project"

        init_command(project_dir, framework="web-components")

        config_path = project_dir / "dsfr-kit.config.json"
        with open(config_path) as f:
            config = json.load(f)

        assert config["framework"] == "web-components"

    def test_init_command_with_dsfr_version(self, tmp_path):
        """Test init command with specific DSFR version."""
        project_dir = tmp_path / "my-project"

        init_command(project_dir, dsfr_version="1.14.2")

        config_path = project_dir / "dsfr-kit.config.json"
        with open(config_path) as f:
            config = json.load(f)

        assert config["dsfrVersion"] == "1.14.2"

    def test_init_command_prints_success_message(self, tmp_path, capsys):
        """Test init command prints success message."""
        project_dir = tmp_path / "my-project"

        init_command(project_dir)

        captured = capsys.readouterr()
        assert "initialized" in captured.out.lower() or "success" in captured.out.lower()

    def test_init_command_handles_existing_project(self, tmp_path):
        """Test init command handles existing project gracefully."""
        project_dir = tmp_path / "existing"
        project_dir.mkdir()
        (project_dir / "dsfr-kit.config.json").write_text("{}")

        # Should handle gracefully (either skip or prompt)
        # For now, let's assume it proceeds
        init_command(project_dir)

        assert (project_dir / "dsfr-kit.config.json").exists()

"""Tests for AssetManager."""

import shutil
from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest
from dsfr_generator.generator.assets import AssetManager

@pytest.fixture
def mock_package_path(tmp_path):
    """Create a mock DSFR package structure."""
    package_path = tmp_path / "dsfr-package"
    package_path.mkdir()

    # Create icons
    icons_dir = package_path / "dist" / "icons" / "user"
    icons_dir.mkdir(parents=True)
    (icons_dir / "user-fill.svg").write_text("<svg>user-fill</svg>")
    (icons_dir / "user-line.svg").write_text("<svg>user-line</svg>")

    # Create fonts
    fonts_dir = package_path / "dist" / "fonts"
    fonts_dir.mkdir(parents=True)
    (fonts_dir / "Marianne-Bold.woff2").write_text("font-data")

    return package_path

def test_find_icon_path(mock_package_path):
    manager = AssetManager(mock_package_path)

    assert manager.find_icon_path("user-fill") is not None
    assert manager.find_icon_path("non-existent") is None

def test_copy_icon(mock_package_path, tmp_path):
    manager = AssetManager(mock_package_path)
    output_dir = tmp_path / "output"

    rel_path = manager.copy_icon("user-fill", output_dir)

    assert rel_path == Path("assets/icons/user/user-fill.svg")
    assert (output_dir / "assets/icons/user/user-fill.svg").exists()

def test_copy_fonts(mock_package_path, tmp_path):
    manager = AssetManager(mock_package_path)
    output_dir = tmp_path / "output"

    manager.copy_fonts(output_dir)

    assert (output_dir / "assets/fonts/Marianne-Bold.woff2").exists()

def test_generate_icon_css(mock_package_path, tmp_path):
    manager = AssetManager(mock_package_path)
    output_dir = tmp_path / "output"

    css = manager.generate_icon_css(["user-fill"], output_dir)

    assert ".fr-icon-user-fill::before" in css
    assert 'mask-image: url("assets/icons/user/user-fill.svg")' in css
    assert (output_dir / "assets/icons/user/user-fill.svg").exists()

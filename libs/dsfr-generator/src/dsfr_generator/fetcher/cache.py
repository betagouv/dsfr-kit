"""Local caching for DSFR assets."""

import io
import shutil
import tarfile
from pathlib import Path

from ..config import CACHE_DIR


def get_cache_dir() -> Path:
    """
    Get the cache directory path, creating it if necessary.

    Returns:
        Path to cache directory
    """
    cache_path = Path.cwd() / CACHE_DIR
    cache_path.mkdir(parents=True, exist_ok=True)
    return cache_path


def get_cached_package(version: str) -> Path | None:
    """
    Check if a DSFR package version is cached locally.

    Args:
        version: DSFR version to check

    Returns:
        Path to cached package directory, or None if not cached
    """
    cache_path = get_cache_dir() / f"dsfr-{version}"
    if cache_path.exists() and cache_path.is_dir():
        # Verify package directory has expected structure
        package_dir = cache_path / "package"
        if package_dir.exists():
            return package_dir
    return None


def cache_package(tarball_bytes: io.BytesIO, version: str) -> Path:
    """
    Extract and cache a DSFR package tarball.

    Args:
        tarball_bytes: Tarball content as BytesIO
        version: DSFR version being cached

    Returns:
        Path to extracted package directory

    Raises:
        tarfile.TarError: If extraction fails
    """
    cache_path = get_cache_dir() / f"dsfr-{version}"

    # Remove existing cache if present
    if cache_path.exists():
        shutil.rmtree(cache_path)

    # Create cache directory
    cache_path.mkdir(parents=True, exist_ok=True)

    # Extract tarball
    with tarfile.open(fileobj=tarball_bytes, mode="r:gz") as tar:
        tar.extractall(path=cache_path)

    # Return path to package directory (NPM tarballs extract to "package/")
    package_dir = cache_path / "package"
    if not package_dir.exists():
        raise RuntimeError(f"Extracted tarball missing 'package/' directory: {cache_path}")

    return package_dir


def clear_cache(version: str | None = None) -> None:
    """
    Clear cached DSFR packages.

    Args:
        version: Specific version to clear, or None to clear all
    """
    cache_dir = get_cache_dir()

    if version:
        # Clear specific version
        version_cache = cache_dir / f"dsfr-{version}"
        if version_cache.exists():
            shutil.rmtree(version_cache)
    else:
        # Clear all cached versions
        if cache_dir.exists():
            shutil.rmtree(cache_dir)
            cache_dir.mkdir(parents=True, exist_ok=True)

"""Fetch DSFR assets from NPM registry or GitHub."""

import io
import tarfile
import time
from pathlib import Path

import requests

from ..config import DSFR_VERSION, NPM_REGISTRY_URL


def fetch_dsfr_package(version: str = DSFR_VERSION, use_cache: bool = True) -> Path:
    """
    Fetch DSFR package from NPM registry with caching and retry logic.

    Args:
        version: DSFR version to fetch (default: from config)
        use_cache: Whether to use cached version if available

    Returns:
        Path to extracted package directory

    Raises:
        RuntimeError: If download or extraction fails after retries
    """
    from .cache import get_cached_package

    # Check cache first
    if use_cache:
        cached_path = get_cached_package(version)
        if cached_path:
            return cached_path

    # Fetch from NPM registry with retry logic
    registry_url = f"{NPM_REGISTRY_URL}/{version}"
    max_retries = 3
    retry_delay = 2  # seconds

    for attempt in range(max_retries):
        try:
            # Get package metadata
            response = requests.get(registry_url, timeout=30)
            response.raise_for_status()
            package_info = response.json()

            # Get tarball URL
            tarball_url = package_info["dist"]["tarball"]

            # Download tarball
            tarball_response = requests.get(tarball_url, timeout=60)
            tarball_response.raise_for_status()

            # Extract to cache directory
            from .cache import cache_package

            tarball_bytes = io.BytesIO(tarball_response.content)
            cache_path = cache_package(tarball_bytes, version)

            return cache_path

        except requests.HTTPError as e:
            if e.response.status_code == 429:  # Rate limiting
                if attempt < max_retries - 1:
                    wait_time = retry_delay * (2**attempt)
                    time.sleep(wait_time)
                    continue
                raise RuntimeError(
                    "Rate limited by NPM registry. Please try again later."
                ) from e
            elif e.response.status_code == 404:
                raise RuntimeError(
                    f"DSFR version {version} not found in NPM registry"
                ) from e
            else:
                raise RuntimeError(f"HTTP error fetching DSFR package v{version}: {e}") from e

        except requests.RequestException as e:
            if attempt < max_retries - 1:
                time.sleep(retry_delay)
                continue
            # Check if cached version available as fallback
            if use_cache:
                cached_path = get_cached_package(version)
                if cached_path:
                    return cached_path
            raise RuntimeError(
                f"Network error fetching DSFR package v{version} after {max_retries} attempts: {e}"
            ) from e

        except (KeyError, tarfile.TarError) as e:
            raise RuntimeError(f"Failed to process DSFR package v{version}: {e}") from e

    raise RuntimeError(f"Failed to fetch DSFR package v{version} after {max_retries} attempts")


def get_npm_tarball_url(version: str = DSFR_VERSION) -> str:
    """
    Get the NPM tarball URL for a specific DSFR version.

    Args:
        version: DSFR version

    Returns:
        Tarball download URL
    """
    return f"{NPM_REGISTRY_URL}/-/dsfr-{version}.tgz"

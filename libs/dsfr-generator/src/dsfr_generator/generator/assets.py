"""Asset manager for DSFR web components."""

import shutil
from pathlib import Path

class AssetManager:
    """Manages extraction and copying of DSFR assets."""

    def __init__(self, package_path: Path):
        """
        Initialize AssetManager.

        Args:
            package_path: Path to the DSFR package directory
        """
        self.package_path = package_path
        self.icons_dir = package_path / "dist" / "icons"
        self.fonts_dir = package_path / "dist" / "fonts"

    def find_icon_path(self, icon_name: str) -> Path | None:
        """
        Find the path to an icon SVG file.

        Args:
            icon_name: Name of the icon (e.g., 'user-fill')

        Returns:
            Path to the SVG file, or None if not found
        """
        if not self.icons_dir.exists():
            return None

        # Search recursively for the icon file
        # Note: icon_name usually matches filename without extension
        matches = list(self.icons_dir.rglob(f"{icon_name}.svg"))
        if matches:
            return matches[0]
        return None

    def copy_icon(self, icon_name: str, output_dir: Path) -> Path | None:
        """
        Copy an icon to the output directory.

        Args:
            icon_name: Name of the icon
            output_dir: Root output directory

        Returns:
            Relative path to the copied icon (from output_dir), or None
        """
        src_path = self.find_icon_path(icon_name)
        if not src_path:
            return None

        # Create destination directory: output_dir/assets/icons/{category}/
        # We preserve the category folder structure to avoid collisions
        rel_path = src_path.relative_to(self.icons_dir)
        dest_path = output_dir / "assets" / "icons" / rel_path

        dest_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_path, dest_path)

        return Path("assets") / "icons" / rel_path

    def copy_fonts(self, output_dir: Path) -> None:
        """
        Copy all font files to the output directory.

        Args:
            output_dir: Root output directory
        """
        if not self.fonts_dir.exists():
            return

        dest_dir = output_dir / "assets" / "fonts"
        dest_dir.mkdir(parents=True, exist_ok=True)

        for font_file in self.fonts_dir.glob("*.woff2"):
            shutil.copy2(font_file, dest_dir / font_file.name)

    def generate_icon_css(self, icons: list[str], output_dir: Path) -> str:
        """
        Generate CSS for icons.

        Args:
            icons: List of icon names
            output_dir: Output directory (to resolve relative paths)

        Returns:
            CSS string defining the icons
        """
        css_lines = []
        for icon in icons:
            rel_path = self.copy_icon(icon, output_dir)
            if rel_path:
                # Determine legacy prefix vs new prefix based on naming convention?
                # Actually html_parser stripped the prefix.
                # We need to support both .fr-icon-name and .fr-fi-name

                # We simply create a class for the icon name that sets the mask-image
                # The generic .fr-icon class handles size/mask-repeat etc.
                # We assume the user also includes dsfr.css or we generated base styles.

                # But wait, generated components use Shadow DOM.
                # Global CSS classes won't apply inside shadow DOM unless we inject them.
                # 'fr-icon-name' style:
                # .fr-icon-name::before, .fr-icon-name::after {
                #    -webkit-mask-image: url("path/to/icon.svg");
                #    mask-image: url("path/to/icon.svg");
                # }

                css = f"""
.fr-icon-{icon}::before, .fr-icon-{icon}::after,
.fr-fi-{icon}::before, .fr-fi-{icon}::after {{
    -webkit-mask-image: url("{rel_path}");
    mask-image: url("{rel_path}");
}}"""
                css_lines.append(css)

        return "\n".join(css_lines)

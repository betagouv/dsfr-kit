"""Initialize a new DSFR project (T084-T087)."""

import json
from pathlib import Path
from typing import Optional


def create_project_structure(
    project_dir: Path,
    components_dir: str = "components",
    styles_dir: str = "styles",
) -> None:
    """
    Create project directory structure (T085).

    Args:
        project_dir: Path to project directory
        components_dir: Relative path for components directory
        styles_dir: Relative path for styles directory
    """
    project_dir = Path(project_dir)
    project_dir.mkdir(parents=True, exist_ok=True)

    # Create .dsfr directory for internal state
    dsfr_dir = project_dir / ".dsfr"
    dsfr_dir.mkdir(exist_ok=True)

    # Create user-specified directories
    (project_dir / components_dir).mkdir(parents=True, exist_ok=True)
    (project_dir / styles_dir).mkdir(parents=True, exist_ok=True)

    print(f"✓ Created project structure in {project_dir}")
    print(f"  - Components: {components_dir}/")
    print(f"  - Styles: {styles_dir}/")


def generate_dsfr_config(
    config_path: Path,
    dsfr_version: str = "1.14.2",
    framework: str = "web-components",
    components_dir: str = "components",
    styles_dir: str = "styles",
    package_name: Optional[str] = None,
) -> None:
    """
    Generate .dsfr/config.json file (T086).

    Args:
        config_path: Path to config file
        dsfr_version: DSFR version to use
        framework: Target framework
        components_dir: Relative path for components directory
        styles_dir: Relative path for styles directory
        package_name: Optional package name for monorepo mode
    """
    config = {
        "dsfrVersion": dsfr_version,
        "framework": framework,
        "paths": {
            "components": components_dir,
            "styles": styles_dir,
            "assets": "public/assets",
        },
        "components": [],
        "darkMode": True,
        "categories": ["primary", "neutral", "system", "illustrative"],
    }

    # Add package info for monorepo mode
    if package_name:
        config["package"] = package_name

    config_path = Path(config_path)
    config_path.parent.mkdir(parents=True, exist_ok=True)
    with open(config_path, "w") as f:
        json.dump(config, f, indent=2)

    print(f"✓ Generated {config_path.relative_to(config_path.parent.parent)}")


def generate_tailwind_config(
    config_path: Path,
    dark_mode: bool = True,
) -> None:
    """
    Generate tailwind.config.js file (T085).

    Args:
        config_path: Path to Tailwind config file
        dark_mode: Whether to enable dark mode
    """
    dark_mode_config = "'class'" if dark_mode else "false"

    config_content = f"""/** @type {{import('tailwindcss').Config}} */
module.exports = {{
  darkMode: {dark_mode_config},
  content: [
    "./components/**/*.{{js,ts,jsx,tsx,html}}",
    "./src/**/*.{{js,ts,jsx,tsx,html}}",
  ],
  theme: {{
    extend: {{
      // DSFR tokens will be added here when you generate components
      colors: {{}},
      spacing: {{}},
      fontFamily: {{}},
      fontSize: {{}},
      boxShadow: {{}},
      borderRadius: {{}},
    }},
  }},
  plugins: [],
}};
"""

    config_path = Path(config_path)
    with open(config_path, "w") as f:
        f.write(config_content)

    print(f"✓ Generated {config_path.name}")


def create_package_json(
    package_dir: Path,
    package_name: str,
    framework: str,
) -> None:
    """
    Create package.json for a monorepo package.

    Args:
        package_dir: Path to package directory
        package_name: Name of the package
        framework: Target framework
    """
    package_json = {
        "name": f"@dsfr-kit/{package_name}",
        "version": "0.1.0",
        "type": "module",
        "description": f"DSFR components for {framework}",
        "main": "./src/index.js",
        "types": "./src/index.d.ts",
        "exports": {
            ".": {
                "import": "./src/index.js",
                "types": "./src/index.d.ts",
            }
        },
        "scripts": {
            "dev": "vite",
            "build": "tsc && vite build",
            "lint": "biome check .",
            "format": "biome format --write .",
        },
        "peerDependencies": {
            "tailwindcss": "^3.4.0",
        },
    }

    package_path = package_dir / "package.json"
    with open(package_path, "w") as f:
        json.dump(package_json, f, indent=2)

    print(f"✓ Generated {package_path.name}")


def init_command(
    project_dir: Path = Path.cwd(),
    package_name: Optional[str] = None,
    components_dir: str = "components",
    styles_dir: str = "styles",
    framework: str = "web-components",
    dsfr_version: str = "1.14.2",
) -> None:
    """
    Initialize a new DSFR project (T084, T087).

    Creates project structure, generates configuration files, and sets up
    Tailwind config with DSFR token support.

    Supports two modes:
    1. Monorepo mode: --package <name> creates packages/<name>/
    2. User project mode: Initializes current directory with custom paths

    Args:
        project_dir: Path to project directory (default: current directory)
        package_name: Package name for monorepo mode (e.g., "web-components")
        components_dir: Relative path for components directory
        styles_dir: Relative path for styles directory
        framework: Target framework (web-components, react, vue, etc.)
        dsfr_version: DSFR version to use

    Examples:
        # User project with default paths
        >>> init_command()

        # User project with custom paths
        >>> init_command(components_dir="src/components", styles_dir="src/styles")

        # Monorepo package
        >>> init_command(package_name="web-components")
    """
    # Determine target directory
    if package_name:
        # Monorepo mode: Create in packages/<name>/
        target_dir = Path("packages") / package_name
        # Use src/components convention for packages
        components_dir = "src/components"
        styles_dir = "src/styles"
        mode = "package"
    else:
        # User project mode: Use provided directory
        target_dir = Path(project_dir)
        mode = "project"

    print(f"\n🇫🇷 Initializing DSFR {mode} in {target_dir}...\n")

    # Create project structure
    create_project_structure(
        target_dir,
        components_dir=components_dir,
        styles_dir=styles_dir,
    )

    # Generate .dsfr/config.json
    config_path = target_dir / ".dsfr" / "config.json"
    generate_dsfr_config(
        config_path,
        dsfr_version=dsfr_version,
        framework=framework,
        components_dir=components_dir,
        styles_dir=styles_dir,
        package_name=package_name,
    )

    # Generate tailwind.config.js
    tailwind_path = target_dir / "tailwind.config.js"
    generate_tailwind_config(tailwind_path, dark_mode=True)

    # Create package.json for monorepo packages
    if package_name:
        create_package_json(target_dir, package_name, framework)

    print("\n✅ Initialization complete!")
    print("\nNext steps:")
    if package_name:
        print(f"  1. dsfr generate button --package {package_name}")
        print("  2. View in Storybook: just storybook")
    else:
        print(f"  1. cd {target_dir}")
        print("  2. dsfr generate button")
        print("  3. Start building with DSFR components!")
    print()

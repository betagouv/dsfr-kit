"""Initialize a new DSFR project (T084-T087)."""

import json
from pathlib import Path


def create_project_structure(project_dir: Path, framework: str | None = None) -> None:
    """
    Create project directory structure (T085).

    Args:
        project_dir: Path to project directory
        framework: Optional framework name (web-components, react, vue, etc.)
    """
    project_dir = Path(project_dir)
    project_dir.mkdir(parents=True, exist_ok=True)

    # Create standard directories
    (project_dir / "components").mkdir(exist_ok=True)
    (project_dir / "styles").mkdir(exist_ok=True)

    print(f"✓ Created project structure in {project_dir}")


def generate_dsfr_config(
    config_path: Path,
    dsfr_version: str = "1.14.2",
    framework: str = "web-components",
) -> None:
    """
    Generate dsfr-kit.config.json file (T086).

    Args:
        config_path: Path to config file
        dsfr_version: DSFR version to use
        framework: Target framework
    """
    config = {
        "dsfrVersion": dsfr_version,
        "framework": framework,
        "components": [],
        "darkMode": True,
        "categories": ["primary", "neutral", "system", "illustrative"],
    }

    config_path = Path(config_path)
    with open(config_path, "w") as f:
        json.dump(config, f, indent=2)

    print(f"✓ Generated {config_path.name}")


def generate_tailwind_config(
    config_path: Path,
    include_dsfr_tokens: bool = True,
    dark_mode: bool = True,
) -> None:
    """
    Generate tailwind.config.js file (T085).

    Args:
        config_path: Path to Tailwind config file
        include_dsfr_tokens: Whether to include DSFR token placeholders
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


def init_command(
    project_dir: Path,
    framework: str = "web-components",
    dsfr_version: str = "1.14.2",
) -> None:
    """
    Initialize a new DSFR project (T084, T087).

    Creates project structure, generates configuration files, and sets up
    Tailwind config with DSFR token support.

    Args:
        project_dir: Path to project directory
        framework: Target framework (web-components, react, vue, etc.)
        dsfr_version: DSFR version to use

    Example:
        >>> init_command(Path("./my-project"), framework="react")
    """
    project_dir = Path(project_dir)

    print(f"\n🇫🇷 Initializing DSFR project in {project_dir}...\n")

    # Create project structure
    create_project_structure(project_dir, framework=framework)

    # Generate dsfr-kit.config.json
    config_path = project_dir / "dsfr-kit.config.json"
    generate_dsfr_config(config_path, dsfr_version=dsfr_version, framework=framework)

    # Generate tailwind.config.js
    tailwind_path = project_dir / "tailwind.config.js"
    generate_tailwind_config(tailwind_path, dark_mode=True)

    print("\n✅ Project initialized successfully!")
    print("\nNext steps:")
    print(f"  1. cd {project_dir}")
    print("  2. dsfr generate button")
    print("  3. Start building with DSFR components!\n")

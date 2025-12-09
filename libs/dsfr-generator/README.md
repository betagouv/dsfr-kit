# DSFR Generator

Core library for parsing DSFR assets and generating web components.

## Features

- **Asset Fetching**: Downloads and caches DSFR assets from NPM registry (`dsfr_generator.fetcher`).
- **Parsing**: Extracts structure and tokens from HTML, CSS, and SCSS (`dsfr_generator.parsers`).
  - **HTML**: DOM structure, ARIA attributes, variants, icons.
  - **CSS**: Design tokens (colors, spacing, typography) from compiled CSS.
  - **JS**: Behavioral patterns (events, state) via TypeScript analyzer.
- **Generation**: Creates Web Components and Storybook stories (`dsfr_generator.generator`).
  - **Web Components**: Custom Element definition using Shadow DOM and Tailwind CSS.
  - **Storybook**: Auto-generated stories with controls and documentation.
  - **Assets**: Management of icons and fonts.
- **Validation**: Checks accessibility compliance (WCAG 2.1 AA, RGAA 4) (`dsfr_generator.validator`).
- **Token Mapping**: Maps DSFR design tokens to Tailwind CSS configuration (`dsfr_generator.token_mapper`).

## Installation

This package is part of the dsfr-kit monorepo and is used internally by the `dsfr-kit` CLI tool. It is not currently published as a standalone package.

## Module Overview

### 1. Parsers

```python
from dsfr_generator.parsers import extract_html_structure, parse_html, detect_icons
from dsfr_generator.parsers.js_analyzer import analyze_javascript_file

# Parse HTML
html = "<button class='fr-btn fr-btn--primary'>Label</button>"
soup = parse_html(html)
structure = extract_html_structure(soup)
# structure.variants -> ['primary']

# Analyze Logic
behavior = analyze_javascript_file(Path("dsfr-button.module.js"))
# behavior.event_listeners -> [{'event': 'click', ...}]
```

### 2. Generator

```python
from dsfr_generator.generator import generate_web_component, generate_storybook_story
from dsfr_generator.generator.assets import AssetManager

# Generate properties
component_code = generate_web_component(
    component=structure,
    component_name="button",
    colors=tailwind_colors,
    behavior_pattern=behavior
)

# Manage Assets
assets = AssetManager(package_path)
assets.copy_icon("user-fill", output_dir)
```

### 3. Validator

```python
from dsfr_generator.validator import validate_rgaa_compliance

report = validate_rgaa_compliance(component_code)
if not report["passed"]:
    print(report["violations"])
```

## Testing

The library includes a comprehensive test suite:
- **Unit Tests**: Parsers, generation logic, asset manager.
- **Behavioral Tests**: Verifies JS analysis against fixtures.

```bash
uv run pytest libs/dsfr-generator
```

# DSFR Generator

Core library for parsing DSFR assets and generating web components.

## Features

- Fetch DSFR assets from NPM registry
- Parse HTML, CSS, and JavaScript from DSFR components
- Map DSFR design tokens to Tailwind configuration
- Generate framework-agnostic web components
- Validate accessibility compliance (WCAG 2.1 AA, RGAA 4)

## Installation

This package is part of the dsfr-kit monorepo and is used internally by the `dsfr-kit` CLI tool.

## Usage

```python
from dsfr_generator.fetcher import fetch_dsfr_package
from dsfr_generator.config import DSFR_VERSION

# Fetch DSFR assets
package_path = fetch_dsfr_package(DSFR_VERSION)
```

## Development

See the main repository README for development setup instructions.

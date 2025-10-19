# `dsfr init` Command Design

## Overview

The `dsfr init` command supports two distinct workflows:

1. **Monorepo Mode**: Initialize framework packages within the dsfr-kit monorepo
2. **User Project Mode**: Initialize DSFR in end-user projects with flexible paths

## Architecture

### File Structure

All DSFR-managed state lives in `.dsfr/` directory:

```
project/
├── .dsfr/                    # DSFR internal state
│   ├── config.json          # Configuration with paths
│   └── cache/               # Cached DSFR assets
├── components/              # User-owned components (configurable)
├── styles/                  # User-owned styles (configurable)
└── tailwind.config.js       # Tailwind config with DSFR tokens
```

### Configuration Format

`.dsfr/config.json`:

```json
{
  "dsfrVersion": "1.14.2",
  "framework": "web-components",
  "paths": {
    "components": "src/components",
    "styles": "src/styles",
    "assets": "public/assets"
  },
  "components": [],
  "darkMode": true,
  "categories": ["primary", "neutral", "system", "illustrative"],
  "package": "web-components"  // Only in monorepo mode
}
```

## Usage Examples

### Monorepo Mode (dsfr-kit developers)

```bash
# Initialize web-components package
dsfr init --package web-components

# Creates:
# packages/web-components/
# ├── src/components/
# ├── src/styles/
# ├── .dsfr/
# │   └── config.json
# ├── tailwind.config.js
# └── package.json

# Initialize React package
dsfr init --package react --framework react

# Creates:
# packages/react/
# ├── src/components/
# ├── src/styles/
# ├── .dsfr/
# │   └── config.json
# ├── tailwind.config.js
# └── package.json
```

### User Project Mode (end users)

```bash
# Default paths (components/ at root)
dsfr init

# Creates:
# .dsfr/
# ├── config.json
# └── cache/
# components/
# styles/
# tailwind.config.js

# Next.js project (custom paths)
dsfr init --components-dir app/components --framework nextjs

# Creates:
# .dsfr/
# ├── config.json
# └── cache/
# app/components/
# styles/
# tailwind.config.js

# Vite/React project
dsfr init --components-dir src/components --styles-dir src/styles --framework react

# Creates:
# .dsfr/
# ├── config.json
# └── cache/
# src/components/
# src/styles/
# tailwind.config.js

# Custom structure
dsfr init --components-dir lib/ui --styles-dir lib/styles

# Creates:
# .dsfr/
# ├── config.json
# └── cache/
# lib/ui/
# lib/styles/
# tailwind.config.js
```

## Workflow Integration

### Monorepo Development Workflow

```bash
# 1. Initialize package
dsfr init --package web-components

# 2. Generate components into package
dsfr generate button --package web-components
# → Creates packages/web-components/src/components/button/

# 3. View in Storybook
just storybook
# → Discovers stories from packages/*/src/components/**/*.stories.js

# 4. Initialize another framework
dsfr init --package react --framework react
dsfr generate button --package react
```

### End User Workflow

```bash
# 1. Initialize project
cd my-nextjs-app
dsfr init --components-dir app/components --framework nextjs

# 2. Generate components
dsfr generate button
# → Creates app/components/button/ (reads path from .dsfr/config.json)

# 3. Use in code
import { Button } from '@/components/button'
```

## Command Signature

```python
def init_command(
    project_dir: Path = Path.cwd(),
    package_name: Optional[str] = None,      # --package web-components
    components_dir: str = "components",      # --components-dir src/components
    styles_dir: str = "styles",              # --styles-dir src/styles
    framework: str = "web-components",       # --framework react
    dsfr_version: str = "1.14.2",
) -> None:
```

## Key Design Decisions

### 1. `.dsfr/` for Internal State

- **Rationale**: Keeps DSFR-managed files separate from user code
- **Contents**: Config and cache only
- **User owns**: Components, styles, Tailwind config

### 2. Configurable Paths

- **Rationale**: Different frameworks have different conventions
- **Flexibility**: Users can match their existing project structure
- **Persistence**: Paths stored in config for subsequent commands

### 3. Monorepo Detection

- **Trigger**: `--package` flag presence
- **Behavior**: Creates in `packages/<name>/` with standard structure
- **Convention**: Always uses `src/components/` for packages

### 4. Framework-Specific Defaults

Future enhancement - different defaults per framework:

```python
FRAMEWORK_DEFAULTS = {
    "nextjs": {"components": "app/components", "styles": "app/styles"},
    "react": {"components": "src/components", "styles": "src/styles"},
    "vue": {"components": "components", "styles": "assets/styles"},
    "web-components": {"components": "components", "styles": "styles"},
}
```

## Storybook Integration

### Monorepo Storybook Config

`.storybook/main.js`:

```js
export default {
  stories: [
    '../packages/*/src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/web-components-vite',
}
```

### Generated Story Files

Each component gets a `.stories.js` file:

```
packages/web-components/src/components/button/
├── button.js
├── button.stories.js
└── README.md
```

## Future Enhancements

1. **Auto-detect framework**: Inspect package.json to determine framework
2. **Migration command**: `dsfr migrate` to update existing projects
3. **Validation**: Check for conflicts with existing files
4. **Templates**: Framework-specific templates for package.json, tsconfig.json
5. **Workspace detection**: Auto-detect monorepo vs standalone project

## Related Tasks

- T084: Implement `dsfr init` command ✅
- T085: Add project initialization ✅
- T086: Add `dsfr-kit.config.json` generation ✅ (now `.dsfr/config.json`)
- T087: Add framework option ✅

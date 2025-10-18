# DSFR Kit CLI

Command-line tool for generating DSFR-compliant web components.

## Installation

```bash
# Install from repository
uv tool install --from git+https://github.com/betagouv/dsfr-kit.git dsfr-kit-cli

# Or for development
uv tool install --editable apps/dsfr-kit
```

## Usage

```bash
# Show version
dsfr-kit --version

# Generate a component (coming soon)
dsfr-kit generate button --output ./components

# Initialize a project (coming soon)
dsfr-kit init --framework web-components
```

## Commands

- `dsfr-kit generate <component>` - Generate a DSFR component
- `dsfr-kit init` - Initialize a new project with DSFR configuration
- `dsfr-kit config` - Manage DSFR Kit configuration
- `dsfr-kit version` - Show DSFR version and tool version

## Development

See the main repository README for development setup instructions.

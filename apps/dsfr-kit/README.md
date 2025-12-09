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

### General

```bash
# Show version
dsfr-kit --version

# Show help
dsfr-kit --help
```

### Generator Command

The `generate` command creates a fully functional web component from a DSFR component name.

```bash
dsfr-kit generate <component_name> [OPTIONS]
```

**Arguments:**

- `COMPONENT_NAME`: Name of the DSFR component (e.g., `Button`, `Alert`, `Badge`, `Tag`).

**Options:**

- `--output`, `-o <PATH>`: Output directory for generated files (default: `./components`).
- `--with-story`: Generate a Storybook story file (`.stories.js`) for documentation.
- `--icons <MODE>`: Strategy for handling icons (`copy`, `cdn`, `none`). Default: `none`.
  - `copy`: Copies used SVG icons to `assets/icons/`.
  - `cdn`: (Coming soon) Uses CDN links.
  - `none`: Does not include icon styles.
- `--fonts`: Copy DSFR fonts (Marianne, Spectral, etc.) to `assets/fonts/`.
- `--verbose`: Enable verbose logging.

**Examples:**

1. **Basic Generation**:
   Generates `dsfr-button.js` and `tailwind.config.js` in `./components`.
   ```bash
   dsfr-kit generate Button
   ```

2. **Full Documentation Setup**:
   Generates component, Storybook story, copies icons, and fonts.
   ```bash
   dsfr-kit generate Button --output ./src/components --with-story --icons copy --fonts
   ```

3. **Custom Output**:
   ```bash
   dsfr-kit generate Alert -o ./my-lib
   ```

## Development

See the main repository README for development setup instructions.

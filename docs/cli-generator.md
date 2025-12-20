# DSFR CLI Generator

This tool automates the creation of Lit-based Web Components from the upstream DSFR (Direction Interministérielle du Numérique) source files.

## Overview

The generator works by "heuristic scaffolding":
1.  **Locates** the original DSFR component source (EJS templates, SCSS/CSS, JS) from `node_modules`.
2.  **Parses** the EJS template to extract properties (inputs) and HTML structure.
3.  **Generates** a TypeScript file containing a `LitElement` class with:
    *   Reactive `@property` definitions.
    *   A `render()` method matching the official HTML structure.
    *   Scoped CSS imports (using Vite `?inline` imports).
    *   Basic interactive logic (e.g., toggle state for accordions) inferred from ARIA attributes.

## Usage

The CLI is located in `apps/cli`.

### Build

```bash
pnpm install
pnpm build
```

### Generate a Component

Run the CLI usage the `generate` command:

```bash
# General syntax
node apps/cli/dist/index.js generate <component-name> --output <output-dir>

# Example: Generate the Accordion component
node apps/cli/dist/index.js generate accordion --output src/components
```

## Architecture

The project is split into two workspaces:

### `apps/cli`
A thin command-line wrapper using [Commander.js](https://github.com/tj/commander.js). It handles argument parsing and file writing.

### `packages/generator`
Contains the core logic, designed purely functionally:
*   **`SourceLocator`**: Finds DSFR source files in `node_modules`.
*   **`EjsParser`**: Regex-based parser for extraction component metadata and template cleaning.
*   **`LitGenerator`**: Transforms parsed data into LitElement code strings.
*   **`StyleResolver`**: Identifies component-specific CSS bundles.

## Supported Features (Prototype)
*   **Property Extraction**: Types (`string`, `boolean`, `number`) are mapped to Lit props.
*   **Template Transformation**: EJS variables (`<%= foo %>`) are converted to Lit bindings (`${this.foo}`).
*   **Logic Heuristics**:
    *   Detects `aria-expanded` to scaffold `toggle()` methods.
    *   Injects default `prefix` property.
*   **Style Injection**: Automatically imports `core.min.css`, `scheme.min.css`, and component-specific styles (e.g., `accordion.min.css`).

## Extending
To support more complex components:
1.  Update `packages/generator/src/lit-generator.ts` to handle more EJS helpers (e.g., `includeAttrs` logic).
2.  Refine `StyleResolver` to handle complex dependency graphs (e.g., components requiring multiple CSS modules).

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
Contains the core logic, designed purely functionally. It uses a **Hybrid AST Strategy** to avoid the fragility of regex-based parsing:

1.  **`SourceLocator`**: Finds DSFR source files in `node_modules` (EJS templates, etc.).
2.  **`EjsParser`**: Extracts component metadata (props, default values) from JSDoc headers using **`comment-parser`**.
3.  **`JsParser` (Advanced Logic)**: Tokenizes EJS templates and creates a **Masked JS AST** using **`@babel/parser`**.
    *   *Mechanism*: Replaces HTML content with whitespace (preserving line numbers) and wraps EJS output tags to create valid JavaScript.
    *   *Purpose*: Validates syntax and enables semantic analysis of variable usage and control flow.
4.  **`LitGenerator`**: Transforms the template using **`node-html-parser`** (HTML AST).
    *   Traverses the DOM to safely inject Lit bindings and event listeners (e.g., `@click`).
    *   Handles EJS helpers by pre-processing them into `data-ejs-*` attributes before parsing.
5.  **`StyleResolver`**: Identifies component-specific CSS bundles.

## Parsing Strategy
The generator employs a robust three-stage parsing pipeline:
*   **Stage 1: Metadata (JSDoc)** - The "API contract" (inputs) is derived from the structured comments at the top of EJS files.
*   **Stage 2: Structure (HTML AST)** - The visual structure is manipulated as a DOM tree, allowing precise attribute modification without regex side-effects.
*   **Stage 3: Logic (JS AST)** - The dynamic behavior (EJS scriptlets) is parsed as JavaScript, ensuring only syntactically valid logic is processed.

## Supported Features (Prototype)
*   **Property Extraction**: Types (`string`, `boolean`, `number`) are mapped to Lit props.
*   **Template Transformation**: EJS variables (`<%= foo %>`) are converted to Lit bindings (`${this.foo}`) via **HTML AST**, ensuring valid attribute placement.
*   **Logic Analysis**: Embedded JS is validated via **Babel**, creating a foundation for complex control flow generation.
*   **Logic Heuristics**:
    *   Detects `aria-expanded` to scaffold `toggle()` methods.
    *   Injects default `prefix` property.
*   **Style Injection**: Automatically imports `core.min.css`, `scheme.min.css`, and component-specific styles (e.g., `accordion.min.css`).

## Extending
To support more complex components:
1.  Update `packages/generator/src/lit-generator.ts` to handle more EJS helpers (e.g., `includeAttrs` logic).
2.  Refine `StyleResolver` to handle complex dependency graphs (e.g., components requiring multiple CSS modules).

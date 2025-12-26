# @dsfr-kit/lit

> [!WARNING]
> This package is currently in **Work-In-Progress (WIP)** state. APIs may change.

Official DSFR components implemented as **Lit** components using [Lit](https://lit.dev/).

## Features

- 🚀 **Framework Agnostic**: Works in React, Vue, Angular, Svelte, or vanilla HTML.
- 🎨 **Scoped Styles**: CSS is encapsulated within the Shadow DOM.
- ♿ **Accessible**: Follows RGAA 4 and DSFR accessibility patterns.
- 📦 **Open Code**: Designed to be copied into your project for full control.

## Installation

```bash
pnpm add @dsfr-kit/lit
```

## Basic Usage

### Via CDN (Vanilla HTML)

```html
<script type="module" src="https://unpkg.com/@dsfr-kit/lit/dist/dsfr-lit.es.js"></script>

<dsfr-accordion label="Comment ça marche ?">
  C'est très simple : vous copiez le code, et vous l'utilisez !
</dsfr-accordion>
```

### Via Bundler (Vite, Webpack, etc.)

```ts
import '@dsfr-kit/lit';

// Now use in your HTML/JSX/etc.
```

## Open Code: "Copy-Paste" Usage

Instead of installing the package as a dependency, you can copy specific component folders directly into your project:

1. Browse to `packages/lit/src/components`.
2. Copy the component folder (e.g., `accordion/`) to your project.
3. Install the peer dependencies (`lit`, `@gouvfr/dsfr`).
4. Import and use!

## Implemented Components

The following components are currently available:

- ✅ Accordion (`dsfr-accordion`)
- ✅ Alert (`dsfr-alert`)
- ✅ Badge (`dsfr-badge`)
- ✅ Button (`dsfr-button`)
- ✅ Card (`dsfr-card`)
- ✅ Footer (`dsfr-footer`)
- ✅ Header (`dsfr-header`)
- ✅ Input (`dsfr-input`)
- ✅ Link (`dsfr-link`)
- ✅ Tag (`dsfr-tag`)
- ... (See `src/components` for the full list)

## Development

```bash
# Start development mode
pnpm run dev

# Run Storybook
just storybook
```

# @dsfr-kit/cli

This is the command-line interface for `dsfr-kit`.

> [!IMPORTANT]
> Currently, the CLI serves as an **Internal Component Generator**. In the future, it will also serve as a **Distribution Tool** (similar to `shadcn-ui`) to help users add components to their projects.

## Current Role: Component Generator (Internal)

The CLI uses the `@dsfr-kit/generator` package to scaffold Web Components from official DSFR source files.

### Usage

```bash
# Build the CLI
pnpm run build

# Generate a component
pnpm run generate accordion --output ../../packages/web-components/src/components/accordion
```

## Future Role: Component Distributor (Roadmap)

We plan to implement an `add` command that will allow users to quickly pull components into their own codebases:

```bash
# Roadmap Goal:
npx dsfr-kit add button
```

## Development

The CLI is built with [Commander.js](https://github.com/tj/commander.js).

### Structure

- `src/index.ts`: Entry point and command definitions.
- Uses `@dsfr-kit/generator` for all heavy lifting.

### Local Run

```bash
pnpm --filter @dsfr-kit/cli run generate <component>
```

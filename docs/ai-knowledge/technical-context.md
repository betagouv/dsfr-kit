# Technical Context & Tooling Standards

This document defines the strictly enforced technical standards and tooling workflows for the `dsfr-kit` repository. AI agents and contributors MUST adhere to these practices to maintain repository integrity.

## 1. Package Management

### JavaScript / TypeScript
- **Tool**: **`pnpm`** (NOT `npm` or `yarn`)
- **Version**: `10.25.0` (Enforced via `package.json` > `engines` & `packageManager`)
- **Usage**:
  - Install dependencies: `pnpm install`
  - Add dependency: `pnpm add <pkg> --filter <workspace>`
  - **NEVER** use `npm install` as it generates a `package-lock.json` ensuring conflict with `pnpm-lock.yaml`.

### Python
- **Tool**: **`uv`** (NOT `pip` or `poetry`)
- **Version**: Latest stable
- **Usage**:
  - Sync environment: `uv sync`
  - Add dependency: `uv add <pkg> --package <workspace-name>`
  - Run commands in venv: `uv run <command>`

## 2. Task Execution (Moonrepo)
The repository uses **Moonrepo** (`moon`) as the single source of truth for task execution, caching, and dependency graph management.

- **Primary Command**: `moon run :<task>`
- **NPM Script Aliases**: The root `package.json` provides convenience aliases (e.g., `npm run lint` -> `moon run :lint`).
- **Standard Tasks**:
  - `build`: Builds the package (if applicable).
  - `test`: Runs tests.
  - `lint`: Runs all linters (Biome + Ruff).
  - `format`: Runs all formatters (Biome + Ruff).

## 3. Linting & Formatting Standards

### JavaScript / TypeScript
- **Tool**: **Biome**
- **Config**: Root `biome.json`
- **Execution**:
  - via Moon: `moon run :lint-biome` / `moon run :format-biome`
  - via NPM Alias: `npm run lint:biome` / `npm run format:biome`

### Python
- **Tool**: **Ruff**
- **Config**: Root `pyproject.toml` (`[tool.ruff]`)
- **Execution**:
  - via Moon: `moon run :lint-ruff` / `moon run :format-ruff`
  - via NPM Alias: `npm run lint:ruff` / `npm run format:ruff`

## 4. Repository Structure
- **Root Configuration**:
  - `.moon/`: Moonrepo task definitions (`tasks.yml`) and configuration.
  - `package.json`: Root Node configuration and script aliases.
  - `pyproject.toml`: Root Python configuration and workspace definition.
  - `pnpm-workspace.yaml`: JS/TS workspace definitions.
- **Source Directories**:
  - `apps/`: Deployable applications.
  - `packages/`: Shared JS/TS libraries (published to npm).
  - `libs/`: Shared Python libraries (published to PyPI).

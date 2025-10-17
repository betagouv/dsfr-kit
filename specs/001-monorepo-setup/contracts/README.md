# Configuration Contracts

This directory contains the configuration file schemas and examples for the monorepo setup.

## Files

### Core Configuration

#### `turbo.json`
Turborepo pipeline configuration defining build orchestration, task dependencies, and caching rules.

**Key Features**:
- **Pipeline tasks**: `build`, `lint`, `format`, `test`, `test:coverage`, `dev`
- **Dependency graph**: `build` depends on workspace dependencies (`^build`)
- **Caching strategy**: Build outputs cached, linting/testing not cached
- **Remote cache**: Disabled by default, can be enabled for Vercel or S3

#### `package.json` (workspace root)
pnpm workspace root configuration.

**Key Features**:
- Private workspace (not publishable)
- Package manager enforcement (`pnpm@8.15.0`)
- Node.js version requirement (>=20.0.0)
- Workspace-wide scripts that delegate to Turborepo

#### `pnpm-workspace.yaml`
pnpm workspace package definitions.

**Key Features**:
- Includes `apps/*` for deployable applications
- Includes `packages/*` for shared libraries

#### `pyproject.toml` (workspace root)
uv workspace root configuration for Python packages.

**Key Features**:
- Python version requirement (>=3.11)
- Workspace members mirror pnpm structure (`apps/*/`, `packages/*/`)
- uv workspace configuration

### Supporting Configuration

#### `.npmrc`
pnpm configuration file for workspace behavior.

**Key Features**:
- **Engine enforcement**: Ensures pnpm is used
- **Workspace linking**: Automatic linking of workspace packages
- **Hoisting control**: Strict hoisting with exceptions for linters/formatters
- **Peer dependencies**: Auto-install with relaxed strictness

#### `.gitignore`
Git ignore patterns for monorepo.

**Key Features**:
- Ignores `node_modules/`, `.turbo/`, build outputs
- Ignores Python artifacts (`__pycache__/`, `.venv/`)
- Ignores IDE and OS files
- Ignores environment files

## Usage

These configuration files should be copied to the repository root during implementation. They define the contracts between:

1. **Turborepo** ↔ **Packages**: Task execution and caching
2. **pnpm** ↔ **Packages**: Dependency management and workspace linking
3. **uv** ↔ **Python Packages**: Python dependency management
4. **Git** ↔ **Repository**: Version control ignore patterns

## Validation

Configuration files can be validated using:

```bash
# Validate turbo.json schema
npx turbo --version  # Will validate turbo.json on load

# Validate package.json
npm pkg fix

# Validate pnpm workspace
pnpm list --depth 0

# Validate uv workspace
uv sync --dry-run
```

## Customization Points

### Remote Cache

To enable remote cache in `turbo.json`:

```json
{
  "remoteCache": {
    "enabled": true,
    "signature": true
  }
}
```

Then configure authentication:
- **Vercel**: `npx turbo login`
- **Custom**: Set `TURBO_TOKEN` and `TURBO_TEAM` environment variables

### Task Variants

Add task variants in `turbo.json` pipeline:

```json
{
  "pipeline": {
    "test:watch": {
      "cache": false,
      "persistent": true
    },
    "lint:fix": {
      "cache": false
    }
  }
}
```

### Hoisting Exceptions

Add more hoisting patterns in `.npmrc`:

```ini
public-hoist-pattern[]=*biome*
public-hoist-pattern[]=*ruff*
```

## References

- [Turborepo Configuration](https://turbo.build/repo/docs/reference/configuration)
- [pnpm Workspace Configuration](https://pnpm.io/pnpm-workspace_yaml)
- [uv Workspace Configuration](https://docs.astral.sh/uv/concepts/workspaces/)

# Data Model: Monorepo Setup

**Feature**: 001-monorepo-setup  
**Date**: October 17, 2025  
**Purpose**: Define the structure and relationships of monorepo configuration entities

## Overview

This feature establishes configuration files and directory structures rather than traditional data entities. The "data model" describes the workspace configuration schema and relationships between packages.

## Configuration Entities

### 1. Workspace Root Configuration

**Entity**: Workspace Root  
**Purpose**: Define the monorepo workspace boundaries and global settings

**Attributes**:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Workspace name (e.g., "dsfr-kit") |
| `version` | string | Yes | Workspace version (semver) |
| `packageManager` | string | Yes | Package manager with version (e.g., "pnpm@8.15.0") |
| `workspaces` | string[] | Yes | Glob patterns for package locations |
| `private` | boolean | Yes | Must be `true` for workspace root |

**Files**:
- `package.json` (pnpm workspace root)
- `pnpm-workspace.yaml` (pnpm workspace definition)
- `pyproject.toml` (uv workspace root)

**Validation Rules**:
- Workspace root must not be publishable (`private: true`)
- Package manager version must be specified for reproducibility
- Workspace patterns must include `apps/*`, `packages/*` (TypeScript/JavaScript), and `libs/*` (Python)

**Example** (`package.json`):
```json
{
  "name": "dsfr-kit",
  "version": "0.1.0",
  "private": true,
  "packageManager": "pnpm@8.15.0",
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

**Example** (`pnpm-workspace.yaml`):
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

**Example** (`pyproject.toml`):
```toml
[tool.uv.workspace]
members = ["libs/*"]
```

### 2. Build Pipeline Configuration

**Entity**: Turborepo Pipeline  
**Purpose**: Define build orchestration, task dependencies, and caching rules

**Attributes**:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `$schema` | string | Yes | JSON schema URL for validation |
| `pipeline` | object | Yes | Task definitions and dependencies |
| `globalDependencies` | string[] | No | Files that invalidate all caches |
| `globalEnv` | string[] | No | Environment variables affecting all tasks |

**Task Attributes**:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `dependsOn` | string[] | No | Task dependencies (`^build` = workspace deps) |
| `outputs` | string[] | No | Cacheable output directories/files |
| `cache` | boolean | No | Whether to cache task results (default: true) |
| `inputs` | string[] | No | Input files/globs for cache invalidation |

**Files**:
- `turbo.json` (Turborepo configuration)

**Validation Rules**:
- Tasks with `^` prefix must reference workspace dependencies
- Output paths must be relative to package root
- Circular task dependencies are rejected by Turborepo

**Example** (`turbo.json`):
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "build/**", ".next/**"]
    },
    "build:py": {
      "dependsOn": ["^build:py"],
      "outputs": ["dist/**", "build/**"]
    },
    "lint": {
      "cache": false
    },
    "test": {
      "cache": false,
      "dependsOn": ["build"]
    }
  }
}
```

### 3. Package Configuration

**Entity**: Package  
**Purpose**: Individual workspace member (app or library)

**Attributes** (JavaScript/TypeScript):

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Package name (scoped: `@dsfr-kit/package-name`) |
| `version` | string | Yes | Package version (semver) |
| `main` | string | No | Entry point for CommonJS |
| `module` | string | No | Entry point for ESM |
| `types` | string | No | TypeScript declarations entry |
| `scripts` | object | No | Build/test/lint commands |
| `dependencies` | object | No | Runtime dependencies |
| `devDependencies` | object | No | Development dependencies |
| `peerDependencies` | object | No | Peer dependencies (for libraries) |

**Attributes** (Python):

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Package name (e.g., "dsfr-kit-core") |
| `version` | string | Yes | Package version (semver) |
| `dependencies` | string[] | No | Runtime dependencies |
| `dev-dependencies` | string[] | No | Development dependencies |

**Files**:
- `package.json` (Node.js packages)
- `pyproject.toml` (Python packages)

**Validation Rules**:
- Package names must be unique within workspace
- Workspace dependencies must use `workspace:*` protocol (pnpm)
- Python packages must use path references for workspace deps
- Circular dependencies between packages are rejected

**Example** (JavaScript package):
```json
{
  "name": "@dsfr-kit/core",
  "version": "0.1.0",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "scripts": {
    "build": "tsup",
    "lint": "biome check .",
    "test": "vitest"
  },
  "dependencies": {},
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

**Example** (Python package):
```toml
[project]
name = "dsfr-kit-core"
version = "0.1.0"
dependencies = []

[tool.uv]
dev-dependencies = [
    "ruff>=0.1.0",
]
```

### 4. Dependency Graph

**Entity**: Dependency Graph (Virtual)  
**Purpose**: Represent relationships between packages for build ordering

**Attributes**:
- **Nodes**: Packages in the workspace
- **Edges**: Dependency relationships (A depends on B)
- **Properties**: Topological ordering, cycle detection

**Validation Rules**:
- Graph must be acyclic (no circular dependencies)
- All dependencies must resolve to workspace packages or external packages
- Build order follows topological sort of dependency graph

**State Transitions**:
1. **Unresolved** → Package dependencies declared but not installed
2. **Resolved** → Dependencies installed and linked
3. **Built** → Package built successfully
4. **Cached** → Build outputs cached for reuse

### 5. Cache Configuration

**Entity**: Build Cache  
**Purpose**: Store and retrieve build artifacts to avoid redundant work

**Attributes**:

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `location` | string | Yes | Local cache directory (`.turbo/`) |
| `remoteCache` | object | No | Remote cache configuration (optional) |
| `signature` | string | Yes | Hash of inputs (files, env vars, dependencies) |
| `outputs` | string[] | Yes | Cached output files/directories |

**Files**:
- `.turbo/cache/` (local cache storage, gitignored)

**Validation Rules**:
- Cache keys are deterministic (same inputs = same hash)
- Cache invalidation on input changes (file content, dependencies, env vars)
- Remote cache requires authentication (API token)

**Example** (Remote cache config in `turbo.json`):
```json
{
  "remoteCache": {
    "enabled": false,
    "signature": true
  }
}
```

## Relationships

```
Workspace Root
    ├── contains → Package (apps/*)
    ├── contains → Package (packages/*) [TypeScript/JavaScript]
    ├── contains → Package (libs/*) [Python]
    └── defines → Build Pipeline

Package
    ├── depends on → Package (workspace dependency)
    ├── depends on → External Package (npm/PyPI)
    └── produces → Build Artifacts

Build Pipeline
    ├── orchestrates → Tasks
    └── manages → Cache

Dependency Graph
    ├── derived from → Package dependencies
    └── determines → Build Order

Cache
    ├── stores → Build Artifacts
    └── keyed by → Input Signature
```

## Constraints

1. **Single Version Enforcement**: Each external dependency must have exactly one version across the workspace
2. **No Circular Dependencies**: Dependency graph must be acyclic at both package and task levels
3. **Workspace Protocol**: Internal dependencies must use `workspace:*` (pnpm) or path references (uv)
4. **Directory Structure**: Packages must be in `apps/`, `packages/` (TypeScript/JavaScript), or `libs/` (Python) directories
5. **Cache Isolation**: Each task's cache is isolated by input signature

## Lifecycle

### Package Creation
1. Create directory in `apps/`, `packages/` (TypeScript/JavaScript), or `libs/` (Python)
2. Initialize `package.json` (TypeScript/JavaScript) or `pyproject.toml` (Python)
3. Run `pnpm install` (TypeScript/JavaScript) or `uv sync` (Python) to register in workspace
4. Verify package appears in workspace list

### Dependency Addition
1. Add dependency to `package.json` or `pyproject.toml`
2. Run `pnpm install` or `uv sync`
3. Verify single version constraint (dedupe if needed)
4. Update lockfile (`pnpm-lock.yaml` or `uv.lock`)

### Build Execution
1. Turborepo analyzes dependency graph
2. Determines build order (topological sort)
3. Checks cache for each task
4. Executes tasks in parallel where possible
5. Caches outputs for future runs

### Cache Invalidation
1. File changes detected (git diff or file hash)
2. Dependency changes detected (lockfile diff)
3. Environment variable changes detected
4. Cache signature recomputed
5. Affected tasks re-executed

## Summary

The monorepo data model centers on configuration files that define workspace structure, build pipelines, and package relationships. Unlike traditional data models with database entities, this model describes the declarative configuration that Turborepo, pnpm, and uv use to manage the monorepo.

**Key Entities**:
- Workspace Root (configuration)
- Build Pipeline (task orchestration)
- Package (workspace member)
- Dependency Graph (virtual, derived)
- Cache (build artifacts)

**Key Relationships**:
- Workspace contains packages
- Packages depend on other packages
- Build pipeline orchestrates tasks
- Cache stores build outputs

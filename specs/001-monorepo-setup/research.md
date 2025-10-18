# Research: Monorepo Setup

**Feature**: 001-monorepo-setup  
**Date**: October 17, 2025  
**Purpose**: Resolve technical unknowns and establish best practices for Turborepo + pnpm + uv monorepo setup

## Research Tasks

### 1. Remote Cache Provider Selection

**Question**: Which remote cache provider should be used for Turborepo?

**Options Evaluated**:

1. **Vercel Remote Cache** (Turborepo's official cloud offering)
   - Pros: Native integration, zero configuration, generous free tier
   - Cons: Vendor lock-in, requires Vercel account
   - Cost: Free for open source, $20/month for teams

2. **Self-Hosted S3-Compatible Storage**
   - Pros: Full control, works with AWS S3, MinIO, Cloudflare R2
   - Cons: Requires infrastructure setup and maintenance
   - Cost: Variable (AWS S3 ~$0.023/GB/month)

3. **GitHub Actions Cache**
   - Pros: Free for public repos, integrated with CI
   - Cons: Limited to CI environment, not for local dev
   - Cost: Free for public repos

4. **Local-Only (No Remote Cache)**
   - Pros: Simplest setup, no external dependencies
   - Cons: No cache sharing across team/CI
   - Cost: Free

**Decision**: **Start with local-only cache, design for remote cache extensibility**

**Rationale**:
- Local cache provides immediate value for individual developers
- Remote cache can be added later without breaking changes
- Turborepo supports multiple remote cache backends via configuration
- For open source project, can evaluate Vercel free tier when team grows
- Configuration will include commented examples for Vercel and S3

**Implementation Notes**:
- `turbo.json` will include `"remoteCache"` configuration (initially disabled)
- Documentation will explain how to enable Vercel or custom remote cache
- `.gitignore` will exclude `.turbo/` local cache directory

### 2. Turborepo Best Practices for Multi-Language Monorepos

**Question**: How should Turborepo pipelines be configured for mixed JavaScript/Python packages?

**Research Findings**:

**Pipeline Organization**:
- Turborepo executes tasks based on `scripts` defined in each package's `package.json`
- Tasks are language-agnostic - Turborepo doesn't care what the scripts do
- Python packages can define scripts in `package.json` that wrap Python commands
- Use consistent task names across all packages for unified execution

**Best Practices** (from Turborepo docs and community):
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
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

**Decision**: Use consistent task names (`build`, `lint`, `test`) across all packages regardless of language

**Rationale**:
- **Turborepo's multi-language approach**: Turborepo runs scripts from `package.json` regardless of what those scripts execute (ref: [Turborepo Multi-Language Guide](https://turbo.build/repo/docs/guides/multi-language))
- **Unified execution**: `turbo run build` executes the `build` script in all packages that define it
- **Package-level control**: Each package's `package.json` defines what `build` means for that package (e.g., `tsc` for TypeScript, `python -m build` for Python)
- **Industry practice**: Monorepo naming conventions emphasize phase-based naming (`lint`, `test`, `build`) with optional modifiers for variants (e.g., `test:quick`, `lint:staged`) rather than language suffixes (ref: [RingCentral Monorepo Scripts Conventions](https://medium.com/disdj/monorepo-scripts-strategies-naming-conventions-691c64b51acb))

**Alternative Considered**: Language suffixes (`:py`, `:js`) were considered but rejected because:
- Turborepo's design assumes uniform task names across packages
- Adds complexity without clear benefit (packages already self-identify their language)
- Breaks the "run all builds" pattern (`turbo run build` should build everything)

### 3. pnpm Workspace Configuration

**Question**: What pnpm workspace settings optimize for DSFR-kit's multi-package structure?

**Research Findings**:

**Key Configuration** (`pnpm-workspace.yaml`):
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

**Best Practices**:
- Use `workspace:*` protocol for internal dependencies (ensures local linking)
- Configure `shamefully-hoist=false` to enforce strict dependency isolation
- Use `strict-peer-dependencies=false` for compatibility with React ecosystem
- Enable `auto-install-peers=true` for convenience

**Decision**: Strict workspace configuration with explicit hoisting control

**Rationale**:
- Prevents phantom dependencies (packages using deps they don't declare)
- Aligns with constitutional Principle V (Code Quality & Consistency)
- Supports the single-version-per-dependency requirement from spec

### 4. uv Workspace Configuration for Python Packages

**Question**: How should uv workspaces be configured for Python packages in the monorepo?

**Research Findings**:

**uv Workspace Structure**:
- uv uses `pyproject.toml` at workspace root with `[tool.uv.workspace]` section
- Python packages declare workspace dependencies via path references
- uv automatically creates virtual environments per package

**Configuration** (`pyproject.toml` at root):
```toml
[tool.uv.workspace]
members = [
    "apps/*/",
    "packages/*/",
]
```

**Best Practices**:
- Use `uv sync` to install all workspace dependencies
- Use `uv run` to execute commands in package context
- Configure shared Python version requirement across workspace

**Decision**: Mirror pnpm workspace structure for Python packages

**Rationale**:
- Consistency between JS and Python package organization
- uv's workspace features align well with pnpm's approach
- Simplifies mental model for developers working across both ecosystems

### 5. Dependency Version Enforcement Strategy

**Question**: How to enforce single version per dependency across the workspace?

**Research Findings**:

**pnpm Approach**:
- Use `pnpm dedupe` to consolidate duplicate dependencies
- Configure `resolution` overrides in root `package.json` for conflicts
- Use `pnpm list --depth=Infinity` to audit dependency tree

**uv Approach**:
- uv automatically resolves to single version per dependency
- Use `uv lock` to generate lockfile with resolved versions
- Conflicts surface as resolution errors during `uv sync`

**Turborepo Integration**:
- No built-in version enforcement (relies on package managers)
- Can add custom lint task to validate dependency versions

**Decision**: Rely on package manager native features + CI validation

**Rationale**:
- pnpm and uv both support single-version resolution
- Adding custom tooling would duplicate package manager functionality
- CI can run `pnpm dedupe --check` and `uv lock --check` to catch violations

### 6. Command Runner (just)

**Question**: How should `just` be integrated as a command runner for the monorepo?

**Research Findings**:

**What is just**:
- A command runner similar to `make` but simpler and cross-platform
- Uses a `justfile` with recipe-based commands
- Supports variables, dependencies between recipes, and cross-platform commands
- Written in Rust, single binary, no runtime dependencies

**Integration Strategy**:
- `justfile` at repository root provides common developer commands
- Wraps Turborepo, pnpm, and uv commands for consistency
- Provides discoverable commands via `just --list`
- Simplifies onboarding (developers run `just` instead of remembering complex commands)

**Example Recipes**:
```justfile
# Install all dependencies
install:
    pnpm install
    uv sync

# Build all packages
build:
    turbo run build

# Run development mode
dev:
    turbo run dev

# Lint and format
lint:
    turbo run lint

format:
    turbo run format
```

**Decision**: Use `just` as the primary command runner interface

**Rationale**:
- **Simplicity**: Single entry point for all common commands
- **Discoverability**: `just --list` shows all available commands
- **Cross-platform**: Works consistently on macOS, Linux, Windows
- **Documentation as code**: Justfile serves as executable documentation
- **Flexibility**: Easy to add custom scripts without modifying package.json
- **Multi-language friendly**: Can orchestrate both Node.js and Python commands

**Installation**:
- Developers install via package manager (Homebrew, Cargo, etc.)
- CI can install via GitHub Actions or direct download
- Documented in quickstart guide

### 7. Circular Dependency Detection

**Question**: How to detect and prevent circular dependencies in the monorepo?

**Research Findings**:

**Turborepo**:
- Automatically detects circular task dependencies
- Fails with clear error message showing cycle path
- No additional configuration needed

**Package-Level Cycles**:
- pnpm detects circular package dependencies during install
- uv detects circular dependencies during resolution
- Both fail fast with error messages

**Decision**: Rely on built-in tooling, no custom detection needed

**Rationale**:
- Package managers and Turborepo already provide robust cycle detection
- Errors are clear and actionable
- Aligns with specification requirement (FR-004)

## Summary of Decisions

| Area | Decision | Rationale |
|------|----------|-----------|
| Remote Cache | Local-only initially, extensible to Vercel/S3 | Simplest start, easy to add later |
| Task Organization | Consistent task names (`build`, `lint`, `test`) across all packages | Turborepo's language-agnostic design, unified execution pattern |
| Command Runner | just with justfile at repository root | Simple, discoverable, cross-platform command interface |
| pnpm Config | Strict workspace with controlled hoisting | Prevents phantom deps, enforces quality |
| uv Config | Mirror pnpm structure for Python | Consistency across ecosystems |
| Version Enforcement | Package manager native + CI checks | Leverages existing tooling |
| Cycle Detection | Built-in tooling (Turborepo, pnpm, uv) | Already robust, no custom code needed |

## References

### Official Documentation
- [Turborepo Documentation](https://turbo.build/repo/docs) - Official Turborepo documentation
- [Turborepo Multi-Language Support](https://turbo.build/repo/docs/guides/multi-language) - Guide for using Turborepo with non-JavaScript languages
- [pnpm Workspaces](https://pnpm.io/workspaces) - pnpm workspace configuration and features
- [uv Workspaces](https://docs.astral.sh/uv/concepts/workspaces/) - uv Python workspace documentation
- [Turborepo Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) - Remote cache configuration options
- [just Command Runner](https://just.systems/) - Official just documentation and installation guide

### Community Best Practices
- [Monorepo Scripts Strategies & Naming Conventions](https://medium.com/disdj/monorepo-scripts-strategies-naming-conventions-691c64b51acb) by Kirill Konshin (RingCentral) - Comprehensive guide to monorepo task naming conventions emphasizing phase-based naming (`lint`, `test`, `build`) with modifiers (`:quick`, `:staged`)
- [Python and Typescript in a Monorepo](https://medium.com/@julien.barbay/python-and-typescript-in-a-monorepo-c862a3bacddb) by Julien Barbay - Real-world example of multi-language monorepo with Python, TypeScript, and Rust

### Key Insights
- **Turborepo is language-agnostic**: It executes scripts from `package.json` without caring about the underlying language or tooling
- **Consistent task names**: Industry practice favors uniform task names (`build`, `lint`, `test`) across all packages regardless of language
- **Package-level customization**: Each package defines what these tasks mean in its own context (TypeScript compilation, Python building, etc.)
- **Modifier suffixes for variants**: Use modifiers like `:quick`, `:watch`, `:coverage` for task variants, not language identifiers

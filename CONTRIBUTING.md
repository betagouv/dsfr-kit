# Contributing to DSFR Kit

Thank you for your interest in contributing to DSFR Kit! This document provides guidelines for contributing to this monorepo.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Adding New Packages](#adding-new-packages)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Constitution](#constitution)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 22+
- **pnpm** 10+
- **Python** 3.12+
- **uv** (latest)
- **just** (latest) - [Installation](https://github.com/casey/just#installation)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/betagouv/dsfr-kit.git
cd dsfr-kit

# Install dependencies for both ecosystems
just install

# Build all packages
just build

# Verify everything works
just verify
```

## Project Structure

The monorepo is organized into three top-level directories:

```
dsfr-kit/
├── apps/       # Deployable applications (any language)
├── packages/   # TypeScript/JavaScript libraries
└── libs/       # Python libraries
```

### Directory Guidelines

- **apps/**: Place deployable applications here (web apps, CLIs, etc.)
- **packages/**: TypeScript/JavaScript shared libraries and components
- **libs/**: Python shared libraries and components

## Adding New Packages

### TypeScript/JavaScript Package

1. Create package directory:
   ```bash
   mkdir -p packages/my-package/src
   ```

2. Initialize `package.json`:
   ```json
   {
     "name": "@dsfr-kit/my-package",
     "version": "0.1.0",
     "type": "module",
     "exports": {
       ".": {
         "types": "./dist/index.d.ts",
         "import": "./dist/index.js"
       }
     },
     "scripts": {
       "build": "tsc --build",
       "dev": "tsc --build --watch",
       "clean": "tsc --build --clean && rm -rf dist"
     },
     "devDependencies": {
       "typescript": "^5.0.0"
     }
   }
   ```

3. Create `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "ES2020",
       "module": "ESNext",
       "lib": ["ES2020"],
       "moduleResolution": "bundler",
       "declaration": true,
       "declarationMap": true,
       "sourceMap": true,
       "outDir": "./dist",
       "rootDir": "./src",
       "composite": true,
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules", "dist"]
   }
   ```

4. Add to root `tsconfig.json` references:
   ```json
   {
     "references": [
       { "path": "./packages/my-package" }
     ]
   }
   ```

5. Install and verify:
   ```bash
   pnpm install
   just build
   ```

### Python Package

1. Create package directory:
   ```bash
   mkdir -p libs/my-lib/src/my_lib
   ```

2. Create `pyproject.toml`:
   ```toml
   [project]
   name = "dsfr-kit-my-lib"
   version = "0.1.0"
   description = "My Python library"
   requires-python = ">=3.12"
   dependencies = []

   [build-system]
   requires = ["hatchling"]
   build-backend = "hatchling.build"

   [tool.hatch.build.targets.wheel]
   packages = ["src/my_lib"]
   ```

3. Create `package.json` for Turborepo integration:
   ```json
   {
     "name": "@dsfr-kit/py-my-lib",
     "version": "0.1.0",
     "private": true,
     "scripts": {
       "build": "echo 'Python package - no build needed'",
       "clean": "rm -rf dist build *.egg-info"
     }
   }
   ```

4. Create `src/my_lib/__init__.py`:
   ```python
   """My Python library."""
   
   __version__ = "0.1.0"
   ```

5. Install and verify:
   ```bash
   uv sync
   just build
   ```

### Workspace Dependencies

#### TypeScript/JavaScript

Use the `workspace:*` protocol:

```json
{
  "dependencies": {
    "@dsfr-kit/core": "workspace:*"
  }
}
```

#### Python

Use workspace sources in `pyproject.toml`:

```toml
[project]
dependencies = [
    "dsfr-kit-core",
]

[tool.uv.sources]
dsfr-kit-core = { workspace = true }
```

## Code Quality

### TypeScript/JavaScript

- **Linter**: ESLint (future)
- **Formatter**: Prettier (future)
- **Type checking**: TypeScript strict mode

### Python

- **Linter**: Ruff (future)
- **Formatter**: Ruff (future)
- **Type checking**: mypy (future)

### Running Quality Checks

```bash
# Lint all packages
just lint

# Format all packages
just format

# Type check
just build  # TypeScript compilation includes type checking
```

## Testing

```bash
# Run all tests
just test

# Run tests with coverage
just test-coverage

# Run tests for specific package
just run-in @dsfr-kit/my-package test
```

## Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make your changes** following the code quality guidelines

3. **Test your changes**:
   ```bash
   just build
   just test
   just verify
   ```

4. **Commit your changes** with clear, descriptive messages:
   ```bash
   git commit -m "feat: add new component X"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/my-feature
   ```

6. **Create a Pull Request** with:
   - Clear description of changes
   - Link to related issues
   - Screenshots (if UI changes)
   - Test results

### Commit Message Convention

Follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `refactor:` - Code refactoring
- `test:` - Test additions or changes
- `chore:` - Build process or tooling changes

## Constitution

All contributions must align with our [Constitution](.specify/memory/constitution.md), which defines:

- **Principle I**: Multi-Framework Support
- **Principle II**: Open Code Distribution
- **Principle III**: Tailwind-First Styling
- **Principle IV**: Monorepo Architecture
- **Principle V**: Code Quality Standards
- **Principle VI**: Package Independence
- **Principle VII**: Source Alignment
- **Principle VIII**: Behavioral Fidelity
- **Principle IX**: RGAA 4 Compliance
- **Principle X**: Public Good Inspiration

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions or ideas
- Check existing issues and discussions first

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to DSFR Kit! 🎉

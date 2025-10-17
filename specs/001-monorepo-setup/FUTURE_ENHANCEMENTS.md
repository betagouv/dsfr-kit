# Future Enhancements

This document tracks potential improvements and features to be implemented after the initial monorepo setup is complete.

## Package Template Scaffolding

**Priority**: High  
**Status**: Planned  
**Related**: `justfile` `add-package` command

### Description

Enhance the `just add-package` command to automatically scaffold new packages from templates instead of just creating empty directories.

### Requirements

1. **Template Types**:
   - Node.js/TypeScript library template
   - Node.js/TypeScript application template
   - Python library template
   - Python application template

2. **Template Contents**:
   - Pre-configured `package.json` or `pyproject.toml`
   - Basic directory structure (`src/`, `tests/`)
   - TypeScript configuration (for TS packages)
   - Build configuration (tsup, vite, etc.)
   - Test setup (vitest, pytest)
   - Linting/formatting configuration
   - README template with package-specific info

3. **Command Enhancement**:
   ```bash
   # Current (basic):
   just add-package lib my-package
   
   # Future (with templates):
   just add-package lib my-package --lang=typescript
   just add-package app my-app --lang=python
   just add-package lib my-lib --template=react-component
   ```

4. **Template Variables**:
   - Package name
   - Package description
   - Author information
   - License
   - Dependencies based on template type

### Implementation Approach

1. Create `templates/` directory in repository root
2. Store template files for each package type
3. Use variable substitution (e.g., `{{PACKAGE_NAME}}`)
4. Extend `add-package` recipe to:
   - Prompt for language/template type
   - Copy template files
   - Replace variables
   - Run initial setup (pnpm install, etc.)

### Benefits

- **Faster onboarding**: New packages start with best practices
- **Consistency**: All packages follow the same structure
- **Reduced errors**: Pre-configured settings prevent common mistakes
- **Documentation**: Templates serve as examples

### Related Features

- Template versioning (update templates as best practices evolve)
- Custom template support (allow project-specific templates)
- Interactive prompts (ask for package details)
- Validation (ensure package name follows conventions)

## Other Future Enhancements

### 1. Automated Dependency Updates

**Description**: Automated PR creation for dependency updates using Renovate or Dependabot

**Benefits**: Keep dependencies up-to-date with minimal manual effort

### 2. Pre-commit Hooks

**Description**: Git hooks for linting, formatting, and testing before commits

**Tools**: husky, lint-staged

### 3. CI/CD Pipeline Templates

**Description**: GitHub Actions workflows for testing, building, and deploying

**Features**: Matrix builds, caching, deployment automation

### 4. Monorepo Documentation Site

**Description**: Auto-generated documentation site for all packages

**Tools**: VitePress, Docusaurus, or similar

### 5. Package Dependency Visualization

**Description**: Visual graph of package dependencies

**Tools**: Custom script or existing visualization tools

---

**Note**: These enhancements should be tracked as separate feature specifications once the initial monorepo setup is complete and stable.

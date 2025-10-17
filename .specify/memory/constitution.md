<!--
Sync Impact Report:
- Version: 1.0.0 (initial constitution)
- Created: 2025-10-17
- Principles: 7 core principles established
- Templates status:
  ✅ plan-template.md - Constitution Check section aligns with principles
  ✅ spec-template.md - Requirements structure supports multi-framework approach
  ✅ tasks-template.md - Task organization supports monorepo structure
- Follow-up: None - all templates compatible with initial constitution
-->

# dsfr-kit Constitution

## Core Principles

### I. Multi-Framework Component Generation

The dsfr-kit project MUST generate DSFR-compliant components for multiple target frameworks from a single source of truth. Target frameworks include but are not limited to: Web Components, Next.js, Solid, Streamlit, and Reflex.

**Rationale**: Maintaining consistency across multiple framework implementations requires a unified generation approach that ensures all components adhere to DSFR specifications while respecting framework-specific idioms.

**Requirements**:
- All components MUST derive from official DSFR assets at https://github.com/GouvernementFR/dsfr
- All components MUST conform to official DSFR documentation at https://www.systeme-de-design.gouv.fr/
- Component generators MUST be framework-agnostic in their core logic
- Framework-specific adapters MUST handle target-specific rendering and behavior

### II. Extensibility Architecture

All generated components MUST be architected for extensibility, allowing developers to extend base DSFR components with custom functionality while maintaining design system compliance.

**Rationale**: Real-world applications require components that can be extended beyond standard DSFR specifications (e.g., custom icons, additional props, composed behaviors) without forking or duplicating component code.

**Requirements**:
- Components MUST follow composition patterns similar to Radix UI's extensible architecture
- Components MUST expose extension points through well-defined props and slots
- Custom extensions MUST NOT break DSFR compliance for core functionality
- Documentation MUST provide clear examples of extension patterns for each framework

### III. Hybrid Styling Strategy

Styling MUST leverage DSFR CSS as the foundation while supporting Tailwind CSS utility classes for extensions and customizations.

**Rationale**: DSFR CSS ensures design system compliance, while Tailwind CSS provides a standardized approach for custom styling needs and rapid prototyping.

**Requirements**:
- Base components MUST use official DSFR CSS classes
- Components MUST accept additional Tailwind CSS utility classes via className/class props
- DSFR colors MUST be mapped to Tailwind color tokens for consistency
- Alternative approach: DaisyUI components MAY be used as a starting point with Tailwind adjustments
- Style conflicts between DSFR and Tailwind MUST be documented and resolved in favor of DSFR

### IV. Monorepo Architecture (NON-NEGOTIABLE)

The codebase MUST be structured as a Turborepo monorepo supporting both Node.js (TypeScript) and Python packages in a unified workspace.

**Rationale**: Supporting multiple frameworks and languages requires a monorepo structure that enables code sharing, consistent tooling, and coordinated releases across all packages.

**Requirements**:
- MUST use Turborepo for build orchestration and caching
- MUST use pnpm workspaces for Node.js/TypeScript packages
- MUST use uv workspaces for Python packages
- Package dependencies MUST be explicitly declared in workspace configuration
- Shared utilities and types MUST be extracted to dedicated packages
- Build tasks MUST be cacheable and parallelizable via Turborepo

### V. Code Quality & Consistency

All code MUST adhere to automated linting and formatting standards appropriate to its language ecosystem.

**Rationale**: Consistent code style and quality checks prevent bugs, improve maintainability, and reduce cognitive load across a multi-language codebase.

**Requirements**:
- TypeScript/JavaScript code MUST be linted and formatted with Biome
- Python code MUST be linted and formatted with Ruff
- All packages MUST include lint and format scripts in their package.json/pyproject.toml
- CI MUST enforce linting and formatting checks before merge
- Pre-commit hooks SHOULD be configured to run formatters automatically

### VI. Package Independence

Each framework-specific package MUST be independently publishable and usable without requiring the entire monorepo.

**Rationale**: Consumers should be able to install only the framework-specific package they need (e.g., @dsfr-kit/react) without pulling in unrelated dependencies.

**Requirements**:
- Each package MUST have its own package.json/pyproject.toml with complete dependency declarations
- Packages MUST be publishable to npm (Node.js) or PyPI (Python) independently
- Shared code MUST be published as separate packages and declared as dependencies
- Documentation MUST provide installation instructions for each package independently

### VII. Source of Truth Alignment

All component implementations MUST remain synchronized with official DSFR releases and documentation.

**Rationale**: The DSFR design system evolves over time; dsfr-kit components must track these changes to maintain compliance and provide up-to-date implementations.

**Requirements**:
- Component generation MUST reference specific DSFR version numbers
- Breaking changes in DSFR MUST trigger major version bumps in affected packages
- Component documentation MUST link to corresponding DSFR documentation pages
- Automated checks SHOULD detect when DSFR assets are updated

## Technology Stack

### Required Tools

- **Monorepo**: Turborepo (build orchestration, caching, task running)
- **Node.js Package Manager**: pnpm (workspaces mode)
- **Python Package Manager**: uv (workspaces mode)
- **TypeScript Linting/Formatting**: Biome
- **Python Linting/Formatting**: Ruff
- **Version Control**: Git

### Target Frameworks

- Web Components (vanilla JavaScript)
- Next.js (React framework)
- Solid.js
- Streamlit (Python)
- Reflex (Python)
- Additional frameworks MAY be added following the same extensibility patterns

### Styling Dependencies

- DSFR CSS (official design system styles)
- Tailwind CSS (utility classes for extensions)
- Optional: DaisyUI (Tailwind component library as alternative starting point)

## Development Workflow

### Component Development Lifecycle

1. **Research**: Identify DSFR component from official documentation
2. **Specification**: Define component API and extension points
3. **Core Implementation**: Build framework-agnostic component logic
4. **Framework Adapters**: Implement framework-specific renderers
5. **Testing**: Verify DSFR compliance and extensibility
6. **Documentation**: Provide usage examples and extension patterns

### Package Structure

```
packages/
├── core/              # Shared types, utilities, DSFR asset processing
├── web-components/    # Web Components implementation
├── nextjs/           # Next.js/React components
├── solid/            # Solid.js components
├── streamlit/        # Streamlit components (Python)
└── reflex/           # Reflex components (Python)
```

### Quality Gates

- All code MUST pass linting (Biome/Ruff) before commit
- All packages MUST build successfully in Turborepo pipeline
- Breaking changes MUST be documented in CHANGELOG.md
- New components MUST include usage examples

## Governance

This constitution supersedes all other development practices and guidelines. Any deviation from these principles MUST be explicitly justified and documented.

**Amendment Process**:
- Amendments require written proposal with rationale
- Breaking changes to principles require MAJOR version bump
- New principles or sections require MINOR version bump
- Clarifications and corrections require PATCH version bump

**Compliance**:
- All pull requests MUST verify compliance with constitution principles
- Architecture decisions MUST reference relevant constitutional principles
- Complexity that violates principles MUST be justified in implementation plans
- Use `.specify/memory/constitution.md` as the authoritative reference

**Version**: 1.0.0 | **Ratified**: 2025-10-17 | **Last Amended**: 2025-10-17

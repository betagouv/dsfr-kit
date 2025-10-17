<!--
Sync Impact Report:
- Version: 1.1.0 (minor amendment - added 3 new principles)
- Previous: 1.0.0 (2025-10-17)
- Amended: 2025-10-17
- Changes:
  * Added Principle VIII: Behavioral Fidelity (preserve DSFR JavaScript behavior)
  * Added Principle IX: Accessibility Compliance (NON-NEGOTIABLE - preserve DSFR a11y)
  * Added Principle X: Public Good Design System Inspiration (methodology reference)
- Principles: 10 core principles (was 7)
- Templates status:
  ✅ plan-template.md - Constitution Check section aligns with principles
  ✅ spec-template.md - Requirements structure supports multi-framework approach
  ✅ tasks-template.md - Task organization supports monorepo structure
  ⚠️  Testing requirements now include behavioral and accessibility testing
- Follow-up: Update task templates to include a11y and behavior test categories
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

### VIII. Behavioral Fidelity

All component implementations MUST preserve the JavaScript behaviors defined in official DSFR assets, ensuring consistent interaction patterns across all target frameworks.

**Rationale**: DSFR components include JavaScript that defines interactions, animations, state management, and dynamic behaviors. These behaviors are integral to the design system and must be faithfully reproduced in all framework implementations.

**Requirements**:
- All DSFR JavaScript behaviors MUST be analyzed and documented before implementation
- Framework-specific implementations MUST replicate DSFR behavior semantics, not just visual appearance
- Behavioral tests MUST verify that component interactions match DSFR reference implementations
- Event handling, state transitions, and side effects MUST align with DSFR specifications
- Deviations from DSFR behavior MUST be explicitly documented with justification

### IX. Accessibility Compliance (NON-NEGOTIABLE)

All component implementations MUST preserve and test the accessibility (a11y) practices encoded in DSFR, ensuring RGAA compliance and inclusive user experiences across all target frameworks.

**Rationale**: DSFR embeds accessibility best practices including ARIA attributes, keyboard navigation, screen reader support, and semantic HTML. These practices are non-negotiable requirements for government digital services and must be preserved in all implementations.

**Requirements**:
- All DSFR accessibility features MUST be documented and preserved in generated components
- Components MUST maintain ARIA roles, properties, and states as defined in DSFR
- Keyboard navigation patterns MUST match DSFR specifications
- Screen reader announcements MUST be tested and verified
- Automated accessibility tests MUST be included for all components (e.g., axe-core, pa11y)
- Manual accessibility testing MUST be performed for complex interactive components
- Accessibility regressions MUST block releases
- Documentation MUST include accessibility usage guidance for each component

### X. Public Good Design System Inspiration

The dsfr-kit project draws methodological inspiration from the Public Good Design System (https://github.com/joelparkerhenderson/public-good-design-system), which demonstrates how to create framework-specific implementations from government design systems (GOV.UK, NHS UK, NHS Wales).

**Rationale**: The Public Good Design System provides proven patterns for "spinning off" design system implementations across multiple frameworks while maintaining fidelity to the source design system. These patterns inform dsfr-kit's approach to multi-framework component generation.

**Inspiration Areas**:
- **Spinoff Methodology**: Techniques for adapting government design systems to new frameworks
- **AI-Assisted Conversion**: Strategies for using AI to generate framework-specific implementations
- **Public Good Principles**: Commitment to open source, accessibility, and government service design
- **Multi-Framework Approach**: Patterns for maintaining consistency across framework boundaries

**Requirements**:
- Component generation strategies SHOULD reference Public Good Design System patterns where applicable
- Documentation MAY cite Public Good Design System examples for methodology guidance
- The project MUST maintain the same commitment to accessibility and public service as its inspirations

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
- All components MUST pass automated accessibility tests (axe-core/pa11y)
- Behavioral tests MUST verify DSFR interaction patterns
- Breaking changes MUST be documented in CHANGELOG.md
- New components MUST include usage examples and accessibility guidance

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

**Version**: 1.1.0 | **Ratified**: 2025-10-17 | **Last Amended**: 2025-10-17

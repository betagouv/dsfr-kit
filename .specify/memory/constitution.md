<!--
Sync Impact Report:
- Version: 1.2.0 (minor - updated styling strategy with shadcn/ui principles)
- Previous: 1.1.1 (2025-10-17) - Clarified RGAA legal requirement
- Previous: 1.1.0 (2025-10-17) - Added 3 new principles
- Previous: 1.0.0 (2025-10-17) - Initial constitution
- Amended: 2025-10-17
- Changes in 1.2.0:
  * Updated Principle II (Extensibility Architecture) to reference shadcn/ui instead of Radix UI
  * Expanded Principle III (Hybrid Styling Strategy) with shadcn/ui Open Code principles
  * Added Open Code approach: components are copied into codebase for full customization
  * Added Composition principle: common, composable interface across all components
  * Removed DaisyUI as alternative approach (superseded by shadcn/ui methodology)
  * Clarified Tailwind CSS as primary styling layer with DSFR CSS for base compliance
- Changes in 1.1.1:
  * Clarified Principle IX with RGAA 4 legal context and requirements
- Changes in 1.1.0:
  * Added Principle VIII: Behavioral Fidelity (preserve DSFR JavaScript behavior)
  * Added Principle IX: Accessibility Compliance (NON-NEGOTIABLE - preserve DSFR a11y)
  * Added Principle X: Public Good Design System Inspiration (methodology reference)
- Principles: 10 core principles
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

### II. Extensibility Architecture (Open Code)

All generated components MUST follow the shadcn/ui Open Code approach, where component source code is copied into the consuming project for full customization and extension while maintaining DSFR design system compliance.

**Rationale**: Real-world applications require components that can be extended beyond standard DSFR specifications (e.g., custom icons, additional props, composed behaviors). Following shadcn/ui's Open Code model, components are not installed as dependencies but as source code that developers own and can modify directly, eliminating the need for workarounds, style overrides, or wrapper components.

**Reference**: https://ui.shadcn.com/ - shadcn/ui demonstrates this approach with React components built on Radix UI primitives and Tailwind CSS.

**Open Code Principles**:
- **Full Transparency**: Developers see exactly how each component is built
- **Direct Modification**: Components can be edited directly in the project without overrides
- **No Black Boxes**: All component logic is visible and modifiable
- **AI-Friendly**: Open code allows LLMs to read, understand, and improve components

**Requirements**:
- Components MUST be distributed as source code files, not as npm/PyPI packages (except for core utilities)
- Components MUST follow a common, composable interface pattern across all frameworks
- Components MUST expose extension points through well-defined props, slots, and composition patterns
- Component APIs MUST be predictable and consistent across the design system
- Custom extensions MUST NOT break DSFR compliance for core functionality
- Documentation MUST provide clear examples of how to customize and extend each component
- A CLI tool SHOULD be provided to copy components into projects (similar to `npx shadcn@latest add`)

### III. Styling Strategy (Tailwind-First with DSFR Compliance)

Styling MUST follow the shadcn/ui approach: Tailwind CSS as the primary styling layer with DSFR design tokens mapped to Tailwind configuration, ensuring DSFR compliance through carefully chosen defaults while enabling full customization.

**Rationale**: Following shadcn/ui's proven model, Tailwind CSS provides a utility-first approach that enables rapid customization without fighting against pre-built styles. DSFR design tokens (colors, spacing, typography, shadows) are mapped into Tailwind configuration, ensuring components are DSFR-compliant by default while remaining fully customizable.

**Reference**: shadcn/ui demonstrates this approach with Tailwind CSS + CSS variables for theming, providing beautiful defaults that are easily customizable.

**Styling Principles**:
- **Tailwind-First**: All component styling uses Tailwind utility classes
- **DSFR Token Mapping**: DSFR design tokens mapped to Tailwind theme configuration
- **Beautiful Defaults**: Components look DSFR-compliant out-of-the-box
- **Easy Customization**: Developers can override any style by editing component code
- **CSS Variables for Theming**: Use CSS custom properties for dynamic theming (colors, spacing)

**Requirements**:
- Components MUST be styled primarily with Tailwind CSS utility classes
- DSFR design tokens (colors, spacing, typography, shadows, borders) MUST be mapped to Tailwind theme configuration
- DSFR color palette MUST be available as Tailwind color classes (e.g., `bg-dsfr-blue-france`, `text-dsfr-grey`)
- Components MUST use CSS variables for theme values to enable dynamic theming
- Components MUST accept additional Tailwind classes via `className`/`class` props for extension
- Default component styles MUST produce DSFR-compliant visual output
- Official DSFR CSS MAY be referenced for complex components but should be minimized
- Style customizations MUST NOT break DSFR compliance for core visual identity (colors, typography, spacing)
- Documentation MUST show how to customize component styles using Tailwind classes

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

All component implementations MUST preserve and test the accessibility (a11y) practices encoded in DSFR, ensuring compliance with RGAA 4 (Référentiel Général d'Amélioration de l'Accessibilité) and inclusive user experiences across all target frameworks.

**Rationale**: DSFR embeds accessibility best practices mandated by French law through RGAA 4, the official French accessibility standard published by DINUM (Direction Interministérielle du Numérique). RGAA 4 defines 106 criteria for digital accessibility compliance, incorporating WCAG 2.1 Level AA requirements adapted for French legal context. These practices include ARIA attributes, keyboard navigation, screen reader support, and semantic HTML, and are non-negotiable requirements for French government digital services.

**Legal Context**:
- RGAA 4 is the French legal framework for digital accessibility (published September 16, 2019, updated April 18, 2023)
- Reference: https://accessibilite.numerique.gouv.fr/
- RGAA 4 incorporates and extends WCAG 2.1 Level AA for French government requirements
- All French public sector websites and services must comply with RGAA

**Requirements**:
- All DSFR accessibility features MUST be documented and preserved in generated components
- Components MUST maintain ARIA roles, properties, and states as defined in DSFR
- Components MUST comply with RGAA 4 criteria applicable to their functionality
- Keyboard navigation patterns MUST match DSFR specifications and RGAA requirements
- Screen reader announcements MUST be tested and verified
- Automated accessibility tests MUST be included for all components (e.g., axe-core, pa11y, RGAA-specific validators)
- Manual accessibility testing MUST be performed for complex interactive components against RGAA criteria
- Accessibility regressions MUST block releases
- Documentation MUST include accessibility usage guidance referencing relevant RGAA criteria for each component
- Components SHOULD link to applicable RGAA 4 criteria in their documentation

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

- **Tailwind CSS** (primary styling layer, utility-first approach)
- **DSFR Design Tokens** (mapped to Tailwind theme configuration)
- **CSS Variables** (for dynamic theming and token values)
- **DSFR CSS** (reference only, minimal usage for complex legacy components)

## Development Workflow

### Component Development Lifecycle

1. **Research**: Identify DSFR component from official documentation and analyze behavior/styling
2. **Token Mapping**: Map DSFR design tokens to Tailwind configuration
3. **Specification**: Define component API with composable interface and extension points
4. **Core Implementation**: Build framework-agnostic component logic with Tailwind styling
5. **Framework Adapters**: Implement framework-specific renderers following Open Code principles
6. **Testing**: Verify DSFR compliance, extensibility, and customization capabilities
7. **Documentation**: Provide usage examples, customization patterns, and extension guides
8. **Distribution**: Package as copyable source code with CLI distribution support

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

**Version**: 1.2.0 | **Ratified**: 2025-10-17 | **Last Amended**: 2025-10-17

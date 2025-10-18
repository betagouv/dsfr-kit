# Feature Specification: Web Components Generator Foundation

**Feature Branch**: `002-web-components-generator`  
**Created**: October 18, 2025  
**Status**: Draft  
**Input**: User description: "Web Components Generator Foundation - Build the core generator infrastructure and first web component implementation from DSFR assets"

## Clarifications

### Session 2025-10-18

- **Q**: How should the generator handle DSFR version management and asset retrieval? **A**: Pin to specific DSFR version (e.g., v1.12.0) with manual updates. This provides stability and predictable output, allowing us to test DSFR updates before upgrading the pinned version.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Generate DSFR Button Component (Priority: P1)

As a component library developer, I need to generate a fully functional DSFR-compliant Button web component from official DSFR assets, so that I can validate the generator architecture and establish patterns for all future components.

**Why this priority**: This is the foundational proof-of-concept that validates the entire generator architecture. The Button component is simple enough to implement quickly but complex enough (variants, states, accessibility) to test all critical generator capabilities. Without this working, we cannot proceed with any other components.

**Independent Test**: Can be fully tested by running the generator against DSFR Button assets and verifying the output web component renders correctly in a browser with all DSFR variants (primary, secondary, tertiary), maintains RGAA 4 compliance, and matches DSFR visual specifications.

**Acceptance Scenarios**:

1. **Given** official DSFR Button HTML/CSS/JS assets, **When** the generator processes these assets, **Then** a web component file is created with correct custom element definition
2. **Given** the generated Button component, **When** rendered in a browser, **Then** it displays with DSFR-compliant styling using Tailwind classes mapped from DSFR tokens
3. **Given** the generated Button component, **When** tested with accessibility tools, **Then** it passes RGAA 4 criteria for interactive controls (keyboard navigation, ARIA attributes, focus management)
4. **Given** the generated Button component, **When** different variants are specified (primary, secondary, tertiary), **Then** each variant renders with correct DSFR styling
5. **Given** the generated Button component, **When** disabled state is applied, **Then** the component correctly prevents interaction and displays disabled styling per DSFR specifications

---

### User Story 2 - Extract and Map DSFR Design Tokens (Priority: P2)

As a component library developer, I need the generator to automatically extract DSFR design tokens (colors, spacing, typography, shadows) and map them to Tailwind configuration, so that all generated components use consistent, DSFR-compliant styling without manual token management.

**Why this priority**: Design token mapping is essential for maintaining DSFR compliance across all components. This must work before we can generate multiple components, as it establishes the styling foundation. It's P2 because we can manually verify tokens for the first Button component, but automation is required for scaling.

**Independent Test**: Can be fully tested by running the token extraction against DSFR CSS assets and verifying the generated Tailwind config contains all DSFR color palette entries, spacing scale values, typography definitions, and shadow specifications that match official DSFR documentation.

**Acceptance Scenarios**:

1. **Given** official DSFR CSS files with design token definitions, **When** the token extractor processes these files, **Then** all DSFR color values are extracted and categorized (blue-france, red-marianne, grey scale, etc.)
2. **Given** extracted DSFR tokens, **When** the token mapper generates Tailwind configuration, **Then** each DSFR color is available as a Tailwind utility class (e.g., `bg-dsfr-blue-france`, `text-dsfr-grey-950`)
3. **Given** DSFR spacing scale, **When** mapped to Tailwind, **Then** DSFR spacing values are available as Tailwind spacing utilities matching DSFR specifications
4. **Given** DSFR typography definitions, **When** mapped to Tailwind, **Then** font families, sizes, weights, and line heights match DSFR specifications
5. **Given** generated Tailwind config, **When** used in component generation, **Then** components reference DSFR tokens via Tailwind classes rather than hardcoded values

---

### User Story 3 - Parse DSFR Component Behaviors (Priority: P3)

As a component library developer, I need the generator to analyze and document JavaScript behaviors from official DSFR components, so that I can understand interaction patterns, state management, and event handling that must be replicated in generated web components.

**Why this priority**: Behavioral fidelity is required by the constitution (Principle VIII), but for the Button component, behaviors are simple (click handling, disabled state). This becomes more critical for complex components like modals, accordions, or navigation. It's P3 because we can manually implement Button behaviors while building the automated analysis infrastructure.

**Independent Test**: Can be fully tested by running the behavior analyzer against DSFR JavaScript files and verifying it produces documentation listing all event handlers, state transitions, DOM manipulations, and accessibility announcements for each component.

**Acceptance Scenarios**:

1. **Given** official DSFR JavaScript files, **When** the behavior analyzer processes these files, **Then** it identifies all event listeners attached to components (click, focus, blur, keydown, etc.)
2. **Given** analyzed DSFR component behaviors, **When** documented, **Then** each behavior includes trigger conditions, state changes, and expected outcomes
3. **Given** DSFR component with state management, **When** analyzed, **Then** all state variables and their valid values are documented
4. **Given** DSFR component with accessibility features, **When** analyzed, **Then** ARIA attribute changes and screen reader announcements are documented
5. **Given** behavior documentation, **When** used for component generation, **Then** developers can implement equivalent behaviors in web component lifecycle methods

---

### User Story 4 - Document Generated Components with Storybook (Priority: P4)

As a component library developer, I need generated web components to be automatically documented in Storybook with interactive examples showing all variants and states, so that I can visually verify DSFR compliance and provide living documentation for component users.

**Why this priority**: Interactive documentation is required by the constitution (Principle XI) and essential for visual verification and developer experience. It's P4 because we can manually create initial Storybook stories while building the automation. This becomes more valuable as we generate more components.

**Independent Test**: Can be fully tested by generating a component, running Storybook, and verifying that all component variants, states, and customization examples are visible and interactive in the Storybook UI.

**Acceptance Scenarios**:

1. **Given** a generated web component, **When** Storybook is launched, **Then** the component appears in the Storybook navigation with all variants listed
2. **Given** a component story in Storybook, **When** viewed, **Then** interactive controls allow toggling between all DSFR variants (primary, secondary, tertiary for Button)
3. **Given** a component story in Storybook, **When** viewed, **Then** all component states are demonstrated (default, hover, focus, active, disabled)
4. **Given** component documentation in Storybook, **When** viewed, **Then** accessibility annotations show ARIA attributes and keyboard navigation patterns
5. **Given** component examples in Storybook, **When** viewed, **Then** both basic usage and customization examples are provided with code snippets

---

### Edge Cases

- **DSFR version updates**: When DSFR releases a new version with token changes, the generator must detect differences and flag breaking changes in generated components
- **Missing DSFR assets**: When official DSFR assets are incomplete or unavailable for a component, the generator must provide clear error messages indicating which assets are missing
- **Conflicting token values**: When DSFR CSS contains conflicting token definitions (e.g., same color name with different values), the generator must detect and report conflicts with suggested resolution
- **Invalid DSFR markup**: When DSFR HTML contains non-standard or invalid markup, the parser must handle gracefully and log warnings without crashing
- **Complex component behaviors**: When DSFR components have intricate JavaScript behaviors (multiple state machines, async operations), the behavior analyzer must document all paths and edge cases
- **Accessibility regressions**: When generated components fail RGAA 4 compliance tests, the generator must block output and provide detailed accessibility violation reports
- **Tailwind class conflicts**: When DSFR styling requires CSS that cannot be expressed with Tailwind utilities, the generator must fall back to custom CSS while documenting the limitation

## Requirements *(mandatory)*

### Functional Requirements

#### Core Generator Infrastructure

- **FR-001**: System MUST fetch official DSFR assets from the GouvernementFR/dsfr GitHub repository at a specific pinned version (e.g., v1.12.0), including HTML templates, CSS files, and JavaScript files for specified components
- **FR-002**: System MUST parse DSFR HTML templates to extract component structure, class names, ARIA attributes, and semantic markup patterns
- **FR-003**: System MUST parse DSFR CSS files to extract design token definitions including colors, spacing, typography, shadows, borders, and breakpoints
- **FR-004**: System MUST analyze DSFR JavaScript files to identify component behaviors including event handlers, state management, DOM manipulations, and accessibility features
- **FR-005**: System MUST validate that all required DSFR assets are present before attempting component generation and provide clear error messages for missing assets

#### Design Token Mapping

- **FR-006**: System MUST map DSFR color palette to Tailwind color configuration, creating utility classes for all DSFR color values (e.g., `bg-dsfr-blue-france`, `text-dsfr-red-marianne`)
- **FR-007**: System MUST map DSFR spacing scale to Tailwind spacing configuration, ensuring DSFR spacing values are available as Tailwind utilities
- **FR-008**: System MUST map DSFR typography definitions (font families, sizes, weights, line heights) to Tailwind typography configuration
- **FR-009**: System MUST generate CSS custom properties for DSFR tokens to enable dynamic theming while maintaining Tailwind-first approach
- **FR-010**: System MUST detect and report conflicting token definitions when DSFR CSS contains multiple values for the same token name

#### Web Component Generation

- **FR-011**: System MUST generate web component class definitions with proper custom element registration following W3C Web Components standards
- **FR-012**: System MUST generate web component templates using DSFR HTML structure with Tailwind utility classes replacing DSFR CSS classes
- **FR-013**: System MUST preserve all ARIA attributes, roles, and properties from DSFR components in generated web components to maintain RGAA 4 compliance
- **FR-014**: System MUST implement DSFR component behaviors in web component lifecycle methods (connectedCallback, disconnectedCallback, attributeChangedCallback)
- **FR-015**: System MUST generate web components that accept props/attributes for all DSFR component variants and configuration options
- **FR-016**: System MUST generate web components with keyboard navigation patterns matching DSFR specifications (tab order, arrow keys, escape, enter)
- **FR-017**: System MUST generate web components that emit custom events for user interactions matching DSFR event patterns

#### Component Documentation

- **FR-018**: System MUST generate Storybook story files for each web component demonstrating all variants and states
- **FR-019**: System MUST include accessibility annotations in Storybook stories showing ARIA attributes and keyboard navigation patterns
- **FR-020**: System MUST provide code examples in Storybook stories for both basic usage and common customization patterns
- **FR-021**: System MUST link generated component documentation to corresponding DSFR official documentation pages

#### Quality Assurance

- **FR-022**: System MUST validate generated web components against RGAA 4 accessibility criteria using automated testing tools (axe-core or equivalent)
- **FR-023**: System MUST verify that generated components visually match DSFR reference implementations within acceptable tolerance
- **FR-024**: System MUST test generated components for behavioral fidelity by comparing interaction patterns against DSFR reference implementations
- **FR-025**: System MUST block component generation output if accessibility tests fail, providing detailed violation reports

### Key Entities

- **DSFR Asset**: Official design system files from GouvernementFR/dsfr repository including HTML templates, CSS stylesheets, JavaScript files, and documentation. Each asset has a version number, file path, and content type.

- **Design Token**: A named design value from DSFR (color, spacing, typography, shadow, etc.) with a semantic name, value, and category. Tokens are extracted from DSFR CSS and mapped to Tailwind configuration.

- **Component Specification**: Parsed representation of a DSFR component including structure (HTML elements and hierarchy), styling (CSS classes and tokens), behaviors (JavaScript interactions), accessibility features (ARIA attributes), and variants (different visual/functional modes).

- **Web Component**: Generated custom element class with template, styles, properties, methods, and lifecycle hooks. Implements DSFR component specification using web component standards and Tailwind styling.

- **Tailwind Configuration**: Generated configuration file mapping DSFR design tokens to Tailwind theme extensions. Includes colors, spacing, typography, shadows, and other design values.

- **Component Story**: Storybook documentation file for a generated component including interactive examples, variant demonstrations, accessibility annotations, and usage code snippets.

- **Behavior Pattern**: Documented interaction pattern from DSFR JavaScript including event triggers, state transitions, DOM updates, and accessibility announcements. Used as blueprint for implementing web component behaviors.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Developer can run the generator against DSFR Button assets and receive a functional web component file in under 30 seconds
- **SC-002**: Generated Button web component passes 100% of applicable RGAA 4 accessibility criteria when tested with automated tools (axe-core)
- **SC-003**: Generated Button web component renders all DSFR variants (primary, secondary, tertiary) with visual output matching DSFR reference implementation within 95% similarity
- **SC-004**: Tailwind configuration generated from DSFR tokens includes all DSFR color palette entries (minimum 50+ color values) with correct hex values
- **SC-005**: Generated web component demonstrates all required keyboard navigation patterns (tab, enter, space) matching DSFR specifications
- **SC-006**: Storybook documentation for generated Button component displays all variants and states with interactive controls functional on first load
- **SC-007**: Developer can customize generated Button component by editing source code and see changes reflected without breaking DSFR compliance
- **SC-008**: Generator produces clear, actionable error messages when DSFR assets are missing or invalid, allowing developer to resolve issues in under 5 minutes


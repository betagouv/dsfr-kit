# Implementation Tasks: Web Components Generator Foundation

**Feature**: Web Components Generator Foundation  
**Branch**: `002-web-components-generator`  
**Generated**: October 18, 2025

## Overview

This task breakdown implements a Python-first generator that transforms DSFR assets into framework-agnostic web components. Tasks are organized by user story priority (P1-P4) to enable incremental delivery and independent testing.

**MVP Scope**: User Story 1 (P1) - Generate DSFR Button Component

## Dependencies

```
Phase 1 (Setup) → Phase 2 (Foundational) → Phase 3 (US1: Button) → Phase 4 (US2: Tokens) → Phase 5 (US3: Behaviors) → Phase 6 (US4: Storybook) → Phase 7 (Polish)
```

**User Story Dependencies**:
- US1 (P1): No dependencies - can start after foundational phase
- US2 (P2): Independent of US1 - can run in parallel
- US3 (P3): Independent - TypeScript analyzer is optional
- US4 (P4): Depends on US1 (needs generated component to document)

## Implementation Strategy

**Incremental Delivery**:
1. **MVP** (Phase 1-3): Setup + Foundational + US1 → Working Button generator
2. **V2** (Phase 4): Add US2 → Automated token extraction
3. **V3** (Phase 5): Add US3 → JS behavior analysis
4. **V4** (Phase 6): Add US4 → Storybook automation

**Parallel Opportunities**:
- US1 and US2 can be developed in parallel (different modules)
- US3 (TypeScript) can be developed independently
- Tests can be written in parallel with implementation

---

## Phase 1: Setup & Project Initialization

**Goal**: Create monorepo structure, configure tooling, establish development environment

- [x] T001 Create `apps/dsfr-kit/` directory structure with src/, tests/, pyproject.toml
- [x] T002 Create `libs/dsfr-generator/` directory structure with src/, tests/, pyproject.toml
- [x] T003 Configure `apps/dsfr-kit/pyproject.toml` with dependencies (click/typer, requests)
- [x] T004 Configure `libs/dsfr-generator/pyproject.toml` with dependencies (beautifulsoup4, tinycss2, libsass, jinja2)
- [x] T005 [P] Add `apps/dsfr-kit` to root `pyproject.toml` workspace configuration
- [x] T006 [P] Add `libs/dsfr-generator` to root `pyproject.toml` workspace configuration
- [x] T007 [P] Configure Ruff linting/formatting for Python packages in pyproject.toml files
- [x] T008 Create `.dsfr-cache/` directory structure for asset caching
- [x] T009 Create `apps/dsfr-kit/src/__init__.py` and `libs/dsfr-generator/src/__init__.py`
- [x] T010 Install dependencies with `uv sync` and verify workspace setup

---

## Phase 2: Foundational Infrastructure

**Goal**: Build core modules needed by all user stories (fetcher, config, error handling)

### Configuration & Asset Fetching

- [x] T011 Implement `libs/dsfr-generator/src/config.py` with DSFR version constant (v1.14.2)
- [x] T012 Implement `libs/dsfr-generator/src/fetcher/__init__.py` with module exports
- [x] T013 Implement `libs/dsfr-generator/src/fetcher/github.py` to download NPM tarball from registry
- [x] T014 Implement `libs/dsfr-generator/src/fetcher/cache.py` for local asset caching in `.dsfr-cache/`
- [x] T015 Add error handling for network failures, rate limiting, missing assets in fetcher modules

### CLI Foundation

- [x] T016 Implement `apps/dsfr-kit/src/main.py` with Click/Typer CLI framework setup
- [x] T017 Implement `apps/dsfr-kit/src/commands/__init__.py` with command registration
- [x] T018 Configure console script entry point in `apps/dsfr-kit/pyproject.toml` for `dsfr-kit` command
- [x] T019 Add global CLI options (--verbose, --version, --help) in main.py

### Testing Infrastructure

- [x] T020 [P] Create `libs/dsfr-generator/tests/fixtures/` with sample DSFR Button assets (HTML, SCSS, JS)
- [x] T021 [P] Configure pytest in `libs/dsfr-generator/pyproject.toml` with test discovery
- [x] T022 [P] Create `apps/dsfr-kit/tests/` directory for CLI integration tests

---

## Phase 3: User Story 1 (P1) - Generate DSFR Button Component

**Goal**: Generate a fully functional DSFR-compliant Button web component from official assets

**Independent Test**: Run `dsfr-kit generate button --output ./test-output` and verify generated web component renders with all variants (primary, secondary, tertiary), passes RGAA 4 accessibility tests, and matches DSFR visual specifications.

### HTML Parsing

- [ ] T023 [US1] Implement `libs/dsfr-generator/src/parsers/__init__.py` with module exports
- [ ] T024 [US1] Implement `libs/dsfr-generator/src/parsers/html_parser.py` using Beautiful Soup 4
- [ ] T025 [US1] Add HTML structure extraction (DOM tree, element hierarchy) in html_parser.py
- [ ] T026 [US1] Add ARIA attribute extraction (roles, labels, properties) in html_parser.py
- [ ] T027 [US1] Add variant detection (primary, secondary, tertiary classes) in html_parser.py
- [ ] T028 [US1] Create ComponentStructure dataclass in `libs/dsfr-generator/src/parsers/types.py`

### CSS/SCSS Parsing

- [ ] T029 [P] [US1] Implement `libs/dsfr-generator/src/parsers/scss_parser.py` with libsass compilation
- [ ] T030 [P] [US1] Add SCSS → CSS compilation in scss_parser.py
- [ ] T031 [P] [US1] Implement `libs/dsfr-generator/src/parsers/css_parser.py` using tinycss2
- [ ] T032 [P] [US1] Add CSS custom property extraction in css_parser.py
- [ ] T033 [P] [US1] Add SCSS variable extraction in scss_parser.py
- [ ] T034 [P] [US1] Create DesignTokens dataclass in `libs/dsfr-generator/src/parsers/types.py`

### Token Mapping (Basic - for Button only)

**Note**: This phase implements minimal token mapping for Button component (MVP). Full token extraction (FR-006 to FR-010) is implemented in Phase 4 (US2). This intentional scoping allows us to validate the generator architecture with Button before scaling to all DSFR tokens.

- [ ] T035 [US1] Implement `libs/dsfr-generator/src/token_mapper/__init__.py` with module exports
- [ ] T036 [US1] Implement `libs/dsfr-generator/src/token_mapper/colors.py` to map DSFR colors to Tailwind
- [ ] T037 [US1] Add Button-specific color mappings (primary, secondary, tertiary) in colors.py
- [ ] T038 [US1] Implement `libs/dsfr-generator/src/token_mapper/tailwind_config.py` to generate tailwind.config.js
- [ ] T039 [US1] Add Tailwind config template with DSFR color extensions in tailwind_config.py

### Web Component Generation

- [ ] T040 [US1] Implement `libs/dsfr-generator/src/generator/__init__.py` with module exports
- [ ] T041 [US1] Create `libs/dsfr-generator/src/generator/templates/web_component.j2` Jinja2 template
- [ ] T042 [US1] Add custom element class definition to web_component.j2 template
- [ ] T043 [US1] Add lifecycle methods (connectedCallback, disconnectedCallback) to web_component.j2
- [ ] T044 [US1] Add ARIA attribute preservation to web_component.j2 template
- [ ] T045 [US1] Add variant prop handling (primary, secondary, tertiary) to web_component.j2
- [ ] T046 [US1] Implement `libs/dsfr-generator/src/generator/web_component.py` using Jinja2
- [ ] T047 [US1] Add template rendering with ComponentStructure data in web_component.py
- [ ] T048 [US1] Add Tailwind class injection (replace DSFR classes) in web_component.py

### Accessibility Validation

- [ ] T049 [US1] Implement `libs/dsfr-generator/src/validator/__init__.py` with module exports
- [ ] T050 [US1] Implement `libs/dsfr-generator/src/validator/accessibility.py` with axe-core integration via subprocess (use Node.js axe-core CLI: `npx @axe-core/cli`)
- [ ] T051 [US1] Add WCAG 2.1 AA compliance checks in accessibility.py
- [ ] T052 [US1] Implement `libs/dsfr-generator/src/validator/rgaa.py` for RGAA 4 validation
- [ ] T053 [US1] Add validation blocking (fail on critical violations) in validator modules
- [ ] T054 [US1] Add detailed violation reporting with fix suggestions in validator modules

### CLI Generate Command

- [ ] T055 [US1] Implement `apps/dsfr-kit/src/commands/generate.py` with `dsfr-kit generate` command
- [ ] T056 [US1] Add component name argument and output directory option in generate.py
- [ ] T057 [US1] Wire up fetcher → parsers → token_mapper → generator → validator pipeline in generate.py
- [ ] T058 [US1] Add progress indicators and error messages in generate.py
- [ ] T059 [US1] Add output file writing (dsfr-button.js, tailwind.config.js) in generate.py

### Integration & Testing

- [ ] T060 [US1] Create integration test: fetch Button assets, generate component, validate output
- [ ] T061 [US1] Test Button component renders in browser with all variants (primary, secondary, tertiary)
- [ ] T062 [US1] Test Button component passes axe-core accessibility validation
- [ ] T063 [US1] Test Button component matches DSFR visual specifications (manual verification)
- [ ] T064 [US1] Test disabled state prevents interaction and displays correct styling

---

## Phase 4: User Story 2 (P2) - Extract and Map DSFR Design Tokens

**Goal**: Automate extraction of all DSFR design tokens and map them to comprehensive Tailwind configuration

**Independent Test**: Run token extraction against DSFR CSS assets and verify generated Tailwind config contains all DSFR color palette (50+ colors), spacing scale, typography definitions, and shadows matching official DSFR documentation.

### Token Extraction Enhancement

- [ ] T065 [P] [US2] Enhance `libs/dsfr-generator/src/parsers/scss_parser.py` to extract all DSFR tokens (not just Button)
- [ ] T066 [P] [US2] Add comprehensive color extraction (blue-france, red-marianne, grey scale, etc.) in scss_parser.py
- [ ] T067 [P] [US2] Add spacing scale extraction (margins, paddings, gaps) in scss_parser.py
- [ ] T068 [P] [US2] Add typography extraction (font families, sizes, weights, line heights) in scss_parser.py
- [ ] T069 [P] [US2] Add shadow/elevation extraction in scss_parser.py
- [ ] T070 [P] [US2] Add border radius extraction in scss_parser.py

### Token Mapping Enhancement

- [ ] T071 [US2] Enhance `libs/dsfr-generator/src/token_mapper/colors.py` to map all DSFR colors
- [ ] T072 [US2] Add color categorization (primary, secondary, grey, semantic) in colors.py
- [ ] T073 [US2] Implement `libs/dsfr-generator/src/token_mapper/spacing.py` for spacing scale mapping
- [ ] T074 [US2] Add DSFR spacing → Tailwind spacing utilities in spacing.py
- [ ] T075 [US2] Implement `libs/dsfr-generator/src/token_mapper/typography.py` for font mapping
- [ ] T076 [US2] Add Marianne and Spectral font family configurations in typography.py
- [ ] T077 [US2] Add font size, weight, line height mappings in typography.py
- [ ] T078 [US2] Enhance `libs/dsfr-generator/src/token_mapper/tailwind_config.py` with complete theme
- [ ] T079 [US2] Add shadow/elevation utilities to Tailwind config
- [ ] T080 [US2] Add border radius utilities to Tailwind config

### Conflict Detection

- [ ] T081 [US2] Add token conflict detection in `libs/dsfr-generator/src/token_mapper/validator.py`
- [ ] T082 [US2] Add conflict resolution suggestions in validator.py
- [ ] T083 [US2] Add token completeness validation (ensure all DSFR tokens mapped) in validator.py

### CLI Init Command

- [ ] T084 [US2] Implement `apps/dsfr-kit/src/commands/init.py` with `dsfr-kit init` command
- [ ] T085 [US2] Add project initialization (create directories, generate Tailwind config) in init.py
- [ ] T086 [US2] Add `dsfr-kit.config.json` generation with DSFR version in init.py
- [ ] T087 [US2] Add framework option (--framework web-components) in init.py

### Integration & Testing

- [ ] T088 [US2] Test token extraction produces 50+ color values matching DSFR documentation
- [ ] T089 [US2] Test spacing scale matches DSFR specifications
- [ ] T090 [US2] Test typography definitions (Marianne, Spectral) are correctly configured
- [ ] T091 [US2] Test generated Tailwind config is valid and usable in projects
- [ ] T092 [US2] Test conflict detection identifies and reports token conflicts

---

## Phase 5: User Story 3 (P3) - Parse DSFR Component Behaviors

**Goal**: Analyze and document JavaScript behaviors from DSFR components for web component implementation

**Independent Test**: Run behavior analyzer against DSFR JavaScript files and verify it produces documentation listing all event handlers, state transitions, DOM manipulations, and accessibility announcements.

### TypeScript Package Setup

- [ ] T093 [P] [US3] Create `packages/dsfr-js-analyzer/` directory with src/, tests/, package.json
- [ ] T094 [P] [US3] Configure `packages/dsfr-js-analyzer/package.json` with TypeScript, @typescript/compiler-api
- [ ] T095 [P] [US3] Add `packages/dsfr-js-analyzer` to root `package.json` workspace
- [ ] T096 [P] [US3] Configure tsconfig.json for TypeScript compilation
- [ ] T097 [P] [US3] Configure Biome for linting/formatting in package.json

### JavaScript Analysis

- [ ] T098 [US3] Implement `packages/dsfr-js-analyzer/src/parser.ts` using TypeScript Compiler API
- [ ] T099 [US3] Add AST parsing for DSFR JavaScript files in parser.ts
- [ ] T100 [US3] Implement `packages/dsfr-js-analyzer/src/analyzer.ts` for behavior extraction
- [ ] T101 [US3] Add event listener detection (click, focus, blur, keydown) in analyzer.ts
- [ ] T102 [US3] Add state variable identification in analyzer.ts
- [ ] T103 [US3] Add DOM manipulation detection in analyzer.ts
- [ ] T104 [US3] Add ARIA attribute change detection in analyzer.ts
- [ ] T105 [US3] Implement `packages/dsfr-js-analyzer/src/types.ts` with BehaviorPattern interfaces
- [ ] T106 [US3] Add JSON output formatting for behavior documentation in analyzer.ts

### CLI Integration

- [ ] T107 [US3] Create CLI entry point in `packages/dsfr-js-analyzer/src/index.ts`
- [ ] T108 [US3] Add command-line argument parsing (file path input) in index.ts
- [ ] T109 [US3] Add JSON output to stdout in index.ts

### Python Integration

- [ ] T110 [US3] Add TypeScript analyzer subprocess call in `libs/dsfr-generator/src/parsers/js_analyzer.py`
- [ ] T111 [US3] Add fallback behavior (log warning if analyzer unavailable) in js_analyzer.py
- [ ] T112 [US3] Add JSON parsing of analyzer output in js_analyzer.py
- [ ] T113 [US3] Integrate behavior patterns into web component generation pipeline

### Integration & Testing

- [ ] T114 [US3] Test analyzer identifies all event listeners in DSFR Button JavaScript
- [ ] T115 [US3] Test analyzer documents state transitions correctly
- [ ] T116 [US3] Test analyzer detects ARIA attribute changes
- [ ] T117 [US3] Test Python-TypeScript integration via subprocess
- [ ] T118 [US3] Test fallback behavior when TypeScript analyzer unavailable

---

## Phase 6: User Story 4 (P4) - Document Generated Components with Storybook

**Goal**: Automatically generate Storybook stories for generated web components with all variants and states

**Independent Test**: Generate a component, run Storybook, and verify all component variants, states, and customization examples are visible and interactive in the Storybook UI.

### Storybook Story Generation

- [ ] T119 [US4] Create `libs/dsfr-generator/src/generator/templates/story.j2` Jinja2 template
- [ ] T120 [US4] Add Storybook story boilerplate to story.j2 template
- [ ] T121 [US4] Add variant controls (primary, secondary, tertiary) to story.j2
- [ ] T122 [US4] Add state demonstrations (default, hover, focus, active, disabled) to story.j2
- [ ] T123 [US4] Add accessibility annotations (ARIA attributes, keyboard nav) to story.j2
- [ ] T124 [US4] Add usage examples with code snippets to story.j2
- [ ] T125 [US4] Implement `libs/dsfr-generator/src/generator/storybook.py` using Jinja2
- [ ] T126 [US4] Add story rendering with ComponentStructure data in storybook.py
- [ ] T127 [US4] Add variant and state extraction from ComponentStructure in storybook.py

### CLI Integration

- [ ] T128 [US4] Add Storybook story generation to `apps/dsfr-kit/src/commands/generate.py`
- [ ] T129 [US4] Add `--with-story` flag to generate command in generate.py
- [ ] T130 [US4] Add story file output (Button.stories.js) in generate.py

### Storybook Configuration

- [ ] T131 [P] [US4] Create `.storybook/` directory with main.js and preview.js configuration
- [ ] T132 [P] [US4] Configure Storybook for web components in main.js
- [ ] T133 [P] [US4] Add Tailwind CSS integration in preview.js
- [ ] T134 [P] [US4] Add accessibility addon configuration in main.js

### Integration & Testing

- [ ] T135 [US4] Test generated story appears in Storybook navigation
- [ ] T136 [US4] Test interactive controls toggle between all variants
- [ ] T137 [US4] Test all states are demonstrated (default, hover, focus, active, disabled)
- [ ] T138 [US4] Test accessibility annotations are visible
- [ ] T139 [US4] Test usage examples with code snippets are provided

---

## Phase 7: Polish & Cross-Cutting Concerns

**Goal**: Add configuration management, improve error messages, add logging, documentation

### Configuration Management

- [ ] T140 Implement `apps/dsfr-kit/src/commands/config.py` with `dsfr-kit config` command
- [ ] T141 Add `dsfr-kit config set` subcommand for setting DSFR version
- [ ] T142 Add `dsfr-kit config get` subcommand for viewing configuration
- [ ] T143 Add configuration file reading/writing in `apps/dsfr-kit/src/config.py`

### Error Handling & Logging

- [ ] T144 [P] Add comprehensive error messages for all failure modes (network, parsing, validation)
- [ ] T145 [P] Add logging to `.dsfr-kit/logs/` with timestamps and context
- [ ] T146 [P] Add progress indicators for long-running operations (download, compilation)
- [ ] T147 [P] Add graceful degradation for non-critical failures

### Documentation

- [ ] T148 [P] Create `apps/dsfr-kit/README.md` with installation and usage instructions
- [ ] T149 [P] Create `libs/dsfr-generator/README.md` with API documentation
- [ ] T150 [P] Add inline code documentation (docstrings) to all public functions
- [ ] T151 [P] Create `CONTRIBUTING.md` with development setup instructions

### Testing & Quality

- [ ] T152 [P] Add unit tests for all parser modules (html, css, scss)
- [ ] T153 [P] Add unit tests for all token mapper modules (colors, spacing, typography)
- [ ] T154 [P] Add unit tests for generator modules (web_component, storybook)
- [ ] T155 [P] Add integration tests for full generation pipeline
- [ ] T156 [P] Configure CI/CD pipeline for automated testing

---

## Task Summary

**Total Tasks**: 156
- **Phase 1 (Setup)**: 10 tasks
- **Phase 2 (Foundational)**: 12 tasks
- **Phase 3 (US1 - Button)**: 42 tasks
- **Phase 4 (US2 - Tokens)**: 28 tasks
- **Phase 5 (US3 - Behaviors)**: 26 tasks
- **Phase 6 (US4 - Storybook)**: 21 tasks
- **Phase 7 (Polish)**: 17 tasks

**Parallel Opportunities**: 45 tasks marked [P] can be executed in parallel

**MVP Scope** (Phases 1-3): 64 tasks → Working Button generator
**Full Feature** (All phases): 156 tasks → Complete generator with all user stories

## Verification Checklist

After completing each phase:

- [ ] **Phase 1**: `uv sync` succeeds, workspace structure is correct
- [ ] **Phase 2**: `dsfr-kit --version` works, assets can be fetched and cached
- [ ] **Phase 3**: `dsfr-kit generate button` produces working web component with RGAA 4 compliance
- [ ] **Phase 4**: `dsfr-kit init` generates complete Tailwind config with 50+ DSFR colors
- [ ] **Phase 5**: Behavior analyzer documents Button interactions (optional - P3)
- [ ] **Phase 6**: Storybook displays Button with all variants and states
- [ ] **Phase 7**: All documentation complete, error handling robust, tests passing

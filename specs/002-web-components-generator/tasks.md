# Implementation Tasks: Web Components Generator Foundation

**Feature**: Web Components Generator Foundation
**Branch**: `002-web-components-generator`
**Generated**: October 18, 2025

## Overview

This task breakdown implements a Python-first generator that transforms DSFR assets into framework-agnostic web components. Tasks are organized by user story priority (P1-P4) to enable incremental delivery and independent testing.

**MVP Scope**: User Story 1 (P1) - Generate DSFR Button Component

**Asset Strategy Update** (Oct 19, 2025):
After analyzing the DSFR package structure, we've optimized the pipeline to use production-ready compiled assets:
- **HTML**: `example/component/{component}/index.html` (complete examples with all variants)
- **CSS Tokens**: `dist/component/{component}/{component}.css` (CSS custom properties, no SCSS compilation needed)
- **JavaScript**: `dist/component/{component}/{component}.module.js` (compiled, production-ready)
- **Icons**: `dist/icons/{category}/{icon-name}.svg` + CSS utility classes (~1000+ icons in 18 categories)
- **Fonts**: `dist/fonts/{font-name}.woff2` (Marianne + Spectral, ~1.5MB total)
- **Artwork**: `dist/artwork/pictograms/` (100+ pictograms, not needed for MVP)

This eliminates SCSS compilation complexity and uses battle-tested production assets. Icons work via CSS classes (no special handling needed for MVP). Font and artwork support planned for future phases.

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

- [x] T023 [US1] Implement `libs/dsfr-generator/src/parsers/__init__.py` with module exports
- [x] T024 [US1] Implement `libs/dsfr-generator/src/parsers/html_parser.py` using Beautiful Soup 4
- [x] T025 [US1] Add HTML structure extraction (DOM tree, element hierarchy) in html_parser.py
- [x] T026 [US1] Add ARIA attribute extraction (roles, labels, properties) in html_parser.py
- [x] T027 [US1] Add variant detection (primary, secondary, tertiary classes) in html_parser.py
- [x] T028 [US1] Create ComponentStructure dataclass in `libs/dsfr-generator/src/parsers/types.py`

### CSS/SCSS Parsing

- [x] T029 [P] [US1] Implement `libs/dsfr-generator/src/parsers/scss_parser.py` with libsass compilation
- [x] T030 [P] [US1] Add SCSS → CSS compilation in scss_parser.py
- [x] T031 [P] [US1] Implement `libs/dsfr-generator/src/parsers/css_parser.py` using tinycss2
- [x] T032 [P] [US1] Add CSS custom property extraction in css_parser.py
- [x] T033 [P] [US1] Add SCSS variable extraction in scss_parser.py
- [x] T034 [P] [US1] Create DesignTokens dataclass in `libs/dsfr-generator/src/parsers/types.py`

### Token Mapping (Basic - for Button only)

**Note**: This phase implements minimal token mapping for Button component (MVP). Full token extraction (FR-006 to FR-010) is implemented in Phase 4 (US2). This intentional scoping allows us to validate the generator architecture with Button before scaling to all DSFR tokens.

- [x] T035 [US1] Implement `libs/dsfr-generator/src/token_mapper/__init__.py` with module exports
- [x] T036 [US1] Implement `libs/dsfr-generator/src/token_mapper/colors.py` to map DSFR colors to Tailwind
- [x] T037 [US1] Add Button-specific color mappings (primary, secondary, tertiary) in colors.py
- [x] T038 [US1] Implement `libs/dsfr-generator/src/token_mapper/tailwind_config.py` to generate tailwind.config.js
- [x] T039 [US1] Add Tailwind config template with DSFR color extensions in tailwind_config.py

### Web Component Generation

- [x] T040 [US1] Implement `libs/dsfr-generator/src/generator/__init__.py` with module exports
- [x] T041 [US1] Create `libs/dsfr-generator/src/generator/templates/web_component.j2` Jinja2 template
- [x] T042 [US1] Add custom element class definition to web_component.j2 template
- [x] T043 [US1] Add lifecycle methods (connectedCallback, disconnectedCallback) to web_component.j2
- [x] T044 [US1] Add ARIA attribute preservation to web_component.j2 template
- [x] T045 [US1] Add variant prop handling (primary, secondary, tertiary) to web_component.j2
- [x] T046 [US1] Implement `libs/dsfr-generator/src/generator/web_component.py` using Jinja2
- [x] T047 [US1] Add template rendering with ComponentStructure data in web_component.py
- [x] T048 [US1] Add Tailwind class injection (replace DSFR classes) in web_component.py

### Accessibility Validation

- [x] T049 [US1] Implement `libs/dsfr-generator/src/validator/__init__.py` with module exports
- [x] T050 [US1] Implement `libs/dsfr-generator/src/validator/accessibility.py` with axe-core integration via subprocess (use Node.js axe-core CLI: `pnpm dlx @axe-core/cli`)
- [x] T051 [US1] Add WCAG 2.1 AA compliance checks in accessibility.py
- [x] T052 [US1] Implement `libs/dsfr-generator/src/validator/rgaa.py` for RGAA 4 validation
- [x] T053 [US1] Add validation blocking (fail on critical violations) in validator modules
- [x] T054 [US1] Add detailed violation reporting with fix suggestions in validator modules

### CLI Generate Command

- [x] T055 [US1] Implement `apps/dsfr-kit/src/commands/generate.py` with `dsfr-kit generate` command
- [x] T056 [US1] Add component name argument and output directory option in generate.py
- [x] T057 [US1] Wire up fetcher → parsers → token_mapper → generator → validator pipeline in generate.py
- [x] T058 [US1] Add progress indicators and error messages in generate.py
- [x] T059 [US1] Add output file writing (dsfr-button.js, tailwind.config.js) in generate.py

### Integration & Testing

- [x] T060 [US1] Create integration test: fetch Button assets, generate component, validate output
- [x] T061 [US1] Test Button component renders in browser with all variants (primary, secondary, tertiary)
- [x] T062 [US1] Test Button component passes axe-core accessibility validation
- [x] T063 [US1] Test Button component matches DSFR visual specifications (manual verification)
- [x] T064 [US1] Test disabled state prevents interaction and displays correct styling

---

## Phase 4: User Story 2 (P2) - Extract and Map DSFR Design Tokens

**Goal**: Automate extraction of all DSFR design tokens and map them to comprehensive Tailwind configuration

**Independent Test**: Run token extraction against DSFR CSS assets and verify generated Tailwind config contains all DSFR color palette (50+ colors), spacing scale, typography definitions, and shadows matching official DSFR documentation.

**Note**: Phase 3 implements basic token extraction for Button component using compiled CSS. Phase 4 extends this to comprehensive token extraction across all DSFR components and global tokens, supporting both CSS (primary) and SCSS (optional) sources.

### Token Extraction Enhancement

- [x] T065 [P] [US2] Enhance `libs/dsfr-generator/src/parsers/css_parser.py` to extract all DSFR tokens from global CSS files (not just component-specific)
- [x] T066 [P] [US2] Add comprehensive color extraction (blue-france, red-marianne, grey scale, etc.) - **Completed in T065 via `categorize_tokens()`**
- [x] T067 [P] [US2] Add spacing scale extraction (margins, paddings, gaps) - **Completed in T065 via `categorize_tokens()`**
- [x] T068 [P] [US2] Add typography extraction (font families, sizes, weights, line heights) - **Completed in T065 via `categorize_tokens()`**
- [x] T069 [P] [US2] Add shadow/elevation extraction - **Completed in T065 via `categorize_tokens()`**
- [x] T070 [P] [US2] Add border radius extraction - **Completed in T065 via `categorize_tokens()`**

**Note**: T066-T070 originally referenced SCSS parser but were consolidated into T065's `categorize_tokens()` function, which extracts and categorizes all token types from compiled CSS files (`dist/core/core.css`, `dist/utility/colors/colors.css`, etc.) per the approved asset strategy.

### Token Mapping Enhancement

- [x] T071 [US2] Enhance `libs/dsfr-generator/src/token_mapper/colors.py` to map all DSFR colors
- [x] T072 [US2] Add color categorization (primary, secondary, grey, semantic) in colors.py
- [x] T073 [US2] Implement `libs/dsfr-generator/src/token_mapper/spacing.py` for spacing scale mapping
- [x] T074 [US2] Add DSFR spacing → Tailwind spacing utilities in spacing.py
- [x] T075 [US2] Implement `libs/dsfr-generator/src/token_mapper/typography.py` for font mapping
- [x] T076 [US2] Add Marianne and Spectral font family configurations in typography.py
- [x] T077 [US2] Add font size, weight, line height mappings in typography.py
- [x] T078 [US2] Enhance `libs/dsfr-generator/src/token_mapper/tailwind_config.py` with complete theme
- [x] T079 [US2] Add shadow/elevation utilities to Tailwind config
- [x] T080 [US2] Add border radius utilities to Tailwind config

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

## Phase 6.5: Icon & Asset Support

**Goal**: Add support for icon detection, font delivery, and asset copying for self-contained components

**Independent Test**: Generate a Button component with icons, verify icon SVG files are copied/referenced correctly, fonts are available, and component works offline.

### Icon Detection & Parsing

- [ ] T140 [P] Add icon class detection in `libs/dsfr-generator/src/parsers/html_parser.py`
- [ ] T141 [P] Extract icon class names from HTML (fr-icon-*, fr-fi-*) in html_parser.py
- [ ] T142 [P] Add icon position detection (--icon-left, --icon-right, icon-only) in html_parser.py
- [ ] T143 [P] Add icon metadata to ComponentStructure (icon_name, icon_position) in types.py

### Icon CSS Parsing

- [ ] T144 [P] Add icon CSS reference extraction in `libs/dsfr-generator/src/parsers/css_parser.py`
- [ ] T145 [P] Parse mask-image URLs from icon CSS files in css_parser.py
- [ ] T146 [P] Map icon class names to SVG file paths in css_parser.py
- [ ] T147 [P] Create IconReference dataclass in types.py (name, category, svg_path)

### Icon Asset Copying

- [ ] T148 [P] Implement `libs/dsfr-generator/src/generator/assets.py` for asset management
- [ ] T149 [P] Add copy_icon_svg() function to copy SVG files to output directory in assets.py
- [ ] T150 [P] Add copy_icon_css() function to copy icon CSS to output directory in assets.py
- [ ] T151 [P] Add icon path resolution (relative vs absolute) in assets.py
- [ ] T152 [P] Add icon deduplication (don't copy same icon twice) in assets.py

### Font Asset Handling

- [ ] T153 [P] Add font file detection in assets.py
- [ ] T154 [P] Add copy_fonts() function to copy WOFF2/WOFF files in assets.py
- [ ] T155 [P] Add @font-face generation for copied fonts in assets.py
- [ ] T156 [P] Add font CDN reference option (--fonts-cdn flag) in assets.py

### CLI Integration

- [ ] T157 Add --icons option to generate command (copy, cdn, inline)
- [ ] T158 Add --fonts option to generate command (copy, cdn)
- [ ] T159 Add --assets-dir option to specify asset output directory
- [ ] T160 Update generate command to call asset copying functions
- [ ] T161 Add asset copying progress indicators

### Integration & Testing

- [ ] T162 Test icon detection from Button HTML with icons
- [ ] T163 Test icon SVG files are copied to output directory
- [ ] T164 Test icon CSS is included in generated component
- [ ] T165 Test component with icons renders correctly in browser
- [ ] T166 Test font files are copied/referenced correctly
- [ ] T167 Test generated component works offline (self-contained mode)

---

## Phase 7: Polish & Cross-Cutting Concerns

**Goal**: Add configuration management, improve error messages, add logging, documentation

### Configuration Management

- [ ] T168 Implement `apps/dsfr-kit/src/commands/config.py` with `dsfr-kit config` command
- [ ] T169 Add `dsfr-kit config set` subcommand for setting DSFR version
- [ ] T170 Add `dsfr-kit config get` subcommand for viewing configuration
- [ ] T171 Add configuration file reading/writing in `apps/dsfr-kit/src/config.py`

### Error Handling & Logging

- [ ] T172 [P] Add comprehensive error messages for all failure modes (network, parsing, validation)
- [ ] T173 [P] Add logging to `.dsfr-kit/logs/` with timestamps and context
- [ ] T174 [P] Add progress indicators for long-running operations (download, compilation)
- [ ] T175 [P] Add graceful degradation for non-critical failures

### Documentation

- [ ] T176 [P] Create `apps/dsfr-kit/README.md` with installation and usage instructions
- [ ] T177 [P] Create `libs/dsfr-generator/README.md` with API documentation
- [ ] T178 [P] Add inline code documentation (docstrings) to all public functions
- [ ] T179 [P] Create `CONTRIBUTING.md` with development setup instructions

### Testing & Quality

- [ ] T180 [P] Add unit tests for all parser modules (html, css, scss)
- [ ] T181 [P] Add unit tests for all token mapper modules (colors, spacing, typography)
- [ ] T182 [P] Add unit tests for generator modules (web_component, storybook)
- [ ] T183 [P] Add integration tests for full generation pipeline
- [ ] T184 [P] Configure CI/CD pipeline for automated testing

---

## Task Summary

**Total Tasks**: 184

- **Phase 1 (Setup)**: 10 tasks
- **Phase 2 (Foundational)**: 12 tasks
- **Phase 3 (US1 - Button)**: 42 tasks
- **Phase 4 (US2 - Tokens)**: 28 tasks
- **Phase 5 (US3 - Behaviors)**: 26 tasks
- **Phase 6 (US4 - Storybook)**: 21 tasks
- **Phase 6.5 (Icons & Assets)**: 28 tasks ⭐ NEW
- **Phase 7 (Polish)**: 17 tasks

**Parallel Opportunities**: 62 tasks marked [P] can be executed in parallel

**MVP Scope** (Phases 1-3): 64 tasks → Working Button generator (current)
**MVP + Icons** (Phases 1-3 + 6.5): 92 tasks → Self-contained components with icons
**Full Feature** (All phases): 184 tasks → Complete generator with all user stories

## Verification Checklist

After completing each phase:

- [x] **Phase 1**: `uv sync` succeeds, workspace structure is correct
- [x] **Phase 2**: `dsfr-kit --version` works, assets can be fetched and cached
- [x] **Phase 3**: `dsfr-kit generate button` produces working web component with RGAA 4 compliance
- [ ] **Phase 4**: `dsfr-kit init` generates complete Tailwind config with 50+ DSFR colors
- [ ] **Phase 5**: Behavior analyzer documents Button interactions (optional - P3)
- [ ] **Phase 6**: Storybook displays Button with all variants and states
- [ ] **Phase 6.5**: `dsfr-kit generate button --icons copy` produces component with icon SVG files
- [ ] **Phase 7**: All documentation complete, error handling robust, tests passing

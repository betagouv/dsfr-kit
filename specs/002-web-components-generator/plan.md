# Implementation Plan: Web Components Generator Foundation

**Branch**: `002-web-components-generator` | **Date**: October 18, 2025 | **Spec**: [link]
**Input**: Feature specification from `/specs/002-web-components-generator/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a code generator that transforms official DSFR (French government design system) assets into framework-agnostic web components with Tailwind styling. The generator will:
- Parse DSFR HTML/CSS/JS from GouvernementFR/dsfr repository (v1.12.0 pinned)
- Extract and map design tokens to Tailwind configuration
- Generate W3C-compliant web components with RGAA 4 accessibility
- Produce Storybook documentation for visual verification

The initial target is the DSFR Button component to validate the architecture before scaling to other components.

## Technical Context

**Language/Version**: Python 3.12+ (core generator), TypeScript 5.x (JS analysis)  
**Primary Dependencies**: 
- **Parsing**: Beautiful Soup 4 (HTML), tinycss2 (CSS), libsass/sass (SCSS compilation), EJS renderer (template processing)
- **Generation**: Jinja2 (code templates), TypeScript Compiler API (JS analysis - optional)
- **Validation**: axe-core (accessibility), pytest (testing)

**Storage**: File-based (DSFR assets cached locally in `.dsfr-cache/`, generated code output to filesystem)  
**Testing**: pytest (Python), vitest (TypeScript), axe-core (accessibility validation)  
**Target Platform**: Cross-platform (macOS, Linux, Windows) - Node.js + Python runtime required  
**Project Type**: Monorepo (Python libs + TypeScript packages)  
**Performance Goals**: Generate single component in <30s, full token extraction in <10s, SCSS compilation in <5s  
**Constraints**: Must preserve RGAA 4 accessibility, must target specific DSFR version (v1.12.0), must generate valid W3C web components, must handle EJS templates and SCSS compilation  
**Scale/Scope**: Initial target is 1 component (Button), architecture must scale to 50+ DSFR components, 100+ design tokens, global assets (fonts, icons, core CSS)

## Constitution Check

*GATE: Must be validated before Phase 0 research. Re-check after Phase 1 design.*

### Relevant Constitutional Principles

**Principle I - Multi-Framework Component Generation**: ✅ **PASS**
- Generator architecture is framework-agnostic at core
- Web components are first target, but architecture supports future frameworks (Next.js, Solid, etc.)
- DSFR assets are parsed once, can be transformed to any framework

**Principle II - Extensibility (Open Code)**: ✅ **PASS**
- Generated web components will be distributed as source code (not dependencies)
- Components will be copyable into projects via CLI tool
- Full customization possible by editing generated code

**Principle III - Tailwind-First Styling**: ✅ **PASS**
- DSFR tokens mapped to Tailwind configuration
- Generated components use Tailwind utility classes
- CSS variables for dynamic theming

**Principle IV - Monorepo Architecture**: ✅ **PASS**
- Generator lives in monorepo structure (libs/core for Python, packages/core for TypeScript)
- Uses existing Turborepo + pnpm + uv setup
- Follows established monorepo patterns

**Principle V - Code Quality**: ✅ **PASS**
- Python code will be linted/formatted with Ruff
- TypeScript code will be linted/formatted with Biome
- Tests required for all parsers and generators

**Principle VII - Source of Truth Alignment**: ✅ **PASS**
- Generator targets specific DSFR version (v1.12.0 pinned)
- DSFR version tracked in configuration
- DSFR assets fetched from official GouvernementFR/dsfr repository

**Principle VIII - Behavioral Fidelity**: ✅ **PASS**
- JS behavior analysis planned (P3 - TypeScript-based)
- Button behaviors will be preserved in web component lifecycle
- Behavior documentation will guide implementation

**Principle IX - Accessibility Compliance (NON-NEGOTIABLE)**: ✅ **PASS**
- ARIA attributes preserved from DSFR HTML
- RGAA 4 compliance testing with axe-core
- Accessibility violations block generation (FR-025)
- Keyboard navigation patterns preserved

**Principle X - Public Good Design System Inspiration**: ✅ **PASS**
- Methodology inspired by Public Good Design System approach
- Government design system adaptation patterns followed

**Principle XI - Interactive Component Documentation**: ✅ **PASS**
- Storybook story generation planned (P4)
- All variants and states will be documented
- Living documentation approach

### Constitution Compliance Summary

**Status**: ✅ **ALL GATES PASS** - No violations, no complexity justification required

All constitutional principles are satisfied by the proposed architecture. The Python-first approach with TypeScript for JS analysis aligns with the monorepo structure and leverages appropriate tools for each task.

## Project Structure

### Documentation (this feature)

```
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (in repository root)

**Structure**: Monorepo with Python libs and TypeScript packages following existing dsfr-kit structure

```
# CLI Application (apps/)
apps/
├── dsfr-kit/                 # NEW: CLI application (installable as `dsfr-kit`)
│   ├── src/
│   │   ├── __init__.py
│   │   ├── main.py          # CLI entry point (Click/Typer)
│   │   ├── commands/
│   │   │   ├── __init__.py
│   │   │   ├── generate.py  # `dsfr-kit generate button`
│   │   │   ├── init.py      # `dsfr-kit init` (setup project)
│   │   │   └── config.py    # `dsfr-kit config` (manage settings)
│   │   └── config.py        # DSFR version config (v1.12.0)
│   ├── tests/
│   └── pyproject.toml       # Defines `dsfr-kit` console script
│
└── [Future: docs/, playground/ apps can be added]

# Python Generator Core (libs/)
libs/
├── dsfr-generator/           # NEW: Core generator library (used by CLI)
│   ├── src/
│   │   ├── __init__.py
│   │   ├── fetcher/         # DSFR asset fetching
│   │   │   ├── __init__.py
│   │   │   ├── github.py    # Fetch from GouvernementFR/dsfr
│   │   │   └── cache.py     # Local asset caching
│   │   ├── parsers/         # Asset parsing
│   │   │   ├── __init__.py
│   │   │   ├── html_parser.py      # Beautiful Soup 4
│   │   │   └── css_parser.py       # tinycss2
│   │   ├── token_mapper/    # DSFR → Tailwind mapping
│   │   │   ├── __init__.py
│   │   │   ├── colors.py
│   │   │   ├── spacing.py
│   │   │   ├── typography.py
│   │   │   └── tailwind_config.py
│   │   ├── generator/       # Code generation
│   │   │   ├── __init__.py
│   │   │   ├── web_component.py    # Web component generator
│   │   │   ├── storybook.py        # Storybook story generator
│   │   │   └── templates/          # Jinja2 templates
│   │   │       ├── web_component.j2
│   │   │       └── story.j2
│   │   └── validator/       # Quality checks
│   │       ├── __init__.py
│   │       ├── accessibility.py    # axe-core integration
│   │       └── rgaa.py             # RGAA 4 validation
│   ├── tests/
│   │   ├── unit/
│   │   ├── integration/
│   │   └── fixtures/        # Sample DSFR assets
│   └── pyproject.toml
│
└── [Existing libs/core, libs/test remain unchanged]

# TypeScript for JS Analysis (packages/)
packages/
├── dsfr-js-analyzer/         # NEW: JS behavior analysis (P3 - optional initially)
│   ├── src/
│   │   ├── index.ts
│   │   ├── parser.ts        # TypeScript Compiler API
│   │   ├── analyzer.ts      # Extract behaviors
│   │   └── types.ts         # Behavior pattern types
│   ├── tests/
│   └── package.json
│
└── [Existing packages/core, packages/test-lib remain unchanged]

# Generated Output (not in repo, created by generator)
# These are the artifacts the generator produces:
# - Web component files (e.g., dsfr-button.js)
# - Tailwind config (tailwind.config.js with DSFR tokens)
# - Storybook stories (e.g., Button.stories.js)
```

**Structure Decision**: 
- **Python (`libs/dsfr-generator`)**: Core generator logic (HTML/CSS parsing, token mapping, code generation)
- **TypeScript (`packages/dsfr-js-analyzer`)**: JS behavior analysis (P3 - can be added later)
- **Rationale**: Python excels at text processing and templating; TypeScript excels at JavaScript AST analysis
- **Integration**: Python calls TypeScript tool via subprocess for JS analysis (JSON interface)

### Module Responsibilities

#### CLI Application (`apps/dsfr-kit`)

**`main.py`** - CLI entry point
- Defines the `dsfr-kit` command-line application using Click or Typer
- Registers all subcommands (generate, init, config)
- Handles global options (--verbose, --version, --help)
- **End-user installation**: `uv tool install dsfr-kit --from git+https://github.com/betagouv/dsfr-kit.git`
- **Development installation**: `uv tool install --editable apps/dsfr-kit` (monorepo contributors only)
- **One-time usage**: `uvx --from git+https://github.com/betagouv/dsfr-kit.git dsfr-kit generate button`

**`commands/generate.py`** - Component generation command
- Implements `dsfr-kit generate <component-name>` command
- Parses arguments (component name, output directory, framework target)
- Orchestrates the generation pipeline by calling `libs/dsfr-generator`
- Example: `dsfr-kit generate button --output ./src/components --framework web-components`

**`commands/init.py`** - Project initialization command
- Implements `dsfr-kit init` command
- Sets up new project with Tailwind config, directory structure
- Generates initial `dsfr-kit.config.json` with DSFR version
- Example: `dsfr-kit init --framework web-components`

**`commands/config.py`** - Configuration management command
- Implements `dsfr-kit config` command
- Manages DSFR version, cache settings, output preferences
- Example: `dsfr-kit config set dsfr-version 1.12.0`

**`config.py`** - Configuration file handling
- Reads/writes `dsfr-kit.config.json` in user projects
- Stores DSFR version (v1.12.0 pinned by default)
- Manages generator settings (cache location, output paths, framework preferences)
- Provides version compatibility checks

#### Core Generator Library (`libs/dsfr-generator`)

**`fetcher/`** - DSFR asset retrieval
- **`github.py`**: Fetches DSFR files from GouvernementFR/dsfr repository via GitHub API
  - Downloads HTML templates, CSS files, JS files for specified components
  - Handles authentication, rate limiting, error recovery
- **`cache.py`**: Local caching to avoid repeated downloads
  - Stores DSFR assets in `.dsfr-cache/` directory
  - Implements cache invalidation based on DSFR version
  - Speeds up subsequent generations

**`parsers/`** - Asset parsing and extraction
- **`html_parser.py`**: Parses DSFR HTML templates using Beautiful Soup 4
  - Extracts component structure (DOM tree)
  - Identifies ARIA attributes, semantic markup, class names
  - Detects component variants (e.g., primary/secondary buttons)
  - Output: Structured representation of component HTML
- **`css_parser.py`**: Parses DSFR CSS using tinycss2
  - Extracts design token definitions (CSS custom properties)
  - Identifies color values, spacing scales, typography rules
  - Maps CSS classes to their styles
  - Output: Token dictionary with semantic names and values

**`token_mapper/`** - DSFR → Tailwind translation
- **`colors.py`**: Maps DSFR color palette to Tailwind color utilities
  - Converts `--blue-france-sun-113` → `dsfr-blue-france-sun-113: #1212FF`
  - Handles color variants (base, hover, active states)
- **`spacing.py`**: Maps DSFR spacing scale to Tailwind spacing
  - Converts DSFR spacing units to rem/px values
  - Creates Tailwind spacing utilities (margin, padding, gap)
- **`typography.py`**: Maps DSFR typography to Tailwind font config
  - Font families (Marianne, Spectral)
  - Font sizes, weights, line heights
  - Letter spacing, text transforms
- **`tailwind_config.py`**: Generates complete Tailwind configuration file
  - Combines all token mappings into `tailwind.config.js`
  - Includes theme extensions, plugins, safelist
  - Output: Ready-to-use Tailwind config

**`generator/`** - Code generation
- **`web_component.py`**: Generates W3C web component code
  - Creates custom element class definition
  - Implements lifecycle methods (connectedCallback, etc.)
  - Converts DSFR HTML to web component template
  - Replaces DSFR CSS classes with Tailwind utilities
  - Preserves ARIA attributes and accessibility features
  - Output: JavaScript file with web component class
- **`storybook.py`**: Generates Storybook story files
  - Creates stories for all component variants
  - Adds interactive controls (args, actions)
  - Includes accessibility annotations
  - Provides usage examples
  - Output: `.stories.js` file for Storybook
- **`templates/`**: Jinja2 templates for code generation
  - **`web_component.j2`**: Template for web component boilerplate
  - **`story.j2`**: Template for Storybook story structure
  - Uses template variables for component-specific content

**`validator/`** - Quality assurance
- **`accessibility.py`**: Runs accessibility validation
  - Integrates with axe-core (via subprocess or Python bindings)
  - Tests generated components against WCAG 2.1 AA
  - Checks keyboard navigation, focus management, ARIA usage
  - Output: Accessibility violation reports
- **`rgaa.py`**: RGAA 4 compliance validation
  - Validates against French accessibility requirements
  - Checks DSFR-specific accessibility patterns
  - Blocks generation if critical violations found (FR-025)
  - Output: RGAA compliance report

#### TypeScript JS Analyzer (`packages/dsfr-js-analyzer`) - P3 Priority

**`parser.ts`** - JavaScript parsing
- Uses TypeScript Compiler API to parse DSFR JavaScript
- Creates Abstract Syntax Tree (AST) from JS files
- Handles modern JavaScript (ES6+, modules, async/await)

**`analyzer.ts`** - Behavior extraction
- Walks AST to identify component behaviors
- Extracts event listeners (click, focus, keydown, etc.)
- Identifies state variables and their transitions
- Documents DOM manipulations and side effects
- Finds ARIA attribute updates
- Output: JSON behavior documentation

**`types.ts`** - Type definitions
- Defines TypeScript interfaces for behavior patterns
- Event handler types, state machine types
- Ensures type safety across analyzer

**Integration Flow**: 
1. Python generator calls `dsfr-js-analyzer` via subprocess
2. Passes DSFR JS file path as argument
3. Receives JSON behavior documentation as output
4. Uses behavior docs to guide web component implementation

**Fallback Strategy (P3 - TypeScript Analyzer Optional)**:
- For P1 (Button component): Manual behavior documentation is acceptable
- Generator checks if `dsfr-js-analyzer` is available in PATH
- If not available: Logs warning, continues with manual behavior implementation
- If available: Runs analyzer, uses output to enhance generated component
- This allows P1-P2 implementation without TypeScript dependency

## Data Flow Architecture

### Generation Pipeline

```
1. FETCH PHASE
   User Command → CLI (apps/dsfr-kit)
   ├─→ Read config (DSFR version, component name)
   └─→ fetcher/github.py
       ├─→ GitHub API (GouvernementFR/dsfr v1.12.0)
       ├─→ Download component assets:
       │   ├─→ src/dsfr/component/button/template/ejs/*.ejs (EJS templates)
       │   ├─→ src/dsfr/component/button/style/*.scss (SCSS styles)
       │   └─→ src/dsfr/component/button/script/*.js (if exists)
       ├─→ Download global dependencies:
       │   ├─→ src/dsfr/core/style/ (core SCSS, design tokens)
       │   ├─→ dist/dsfr.min.css (compiled global CSS)
       │   ├─→ dist/fonts/ (Marianne, Spectral fonts)
       │   └─→ dist/icons/ (icon assets)
       └─→ cache.py (store in .dsfr-cache/)

2. PARSE PHASE
   Cached Assets → parsers/
   ├─→ ejs_parser.py (EJS → HTML rendering)
   │   ├─→ Render EJS templates to HTML
   │   └─→ Pass to html_parser.py (Beautiful Soup 4)
   │       └─→ Output: ComponentStructure (DOM tree, ARIA attrs, variants)
   ├─→ scss_parser.py (SCSS compilation + token extraction)
   │   ├─→ Compile SCSS to CSS (sass/libsass)
   │   ├─→ Extract CSS custom properties (design tokens)
   │   └─→ Pass to css_parser.py (tinycss2)
   │       └─→ Output: DesignTokens (colors, spacing, typography)
   └─→ [Optional] dsfr-js-analyzer (TypeScript)
       └─→ Output: BehaviorPatterns (events, state, DOM updates)

3. MAP PHASE
   DesignTokens → token_mapper/
   ├─→ colors.py → TailwindColors
   ├─→ spacing.py → TailwindSpacing
   ├─→ typography.py → TailwindTypography
   └─→ tailwind_config.py
       └─→ Output: tailwind.config.js

4. GENERATE PHASE
   ComponentStructure + TailwindConfig + BehaviorPatterns → generator/
   ├─→ web_component.py
   │   ├─→ templates/web_component.j2
   │   └─→ Output: dsfr-button.js (web component)
   └─→ storybook.py
       ├─→ templates/story.j2
       └─→ Output: Button.stories.js

5. VALIDATE PHASE
   Generated Component → validator/
   ├─→ accessibility.py (axe-core)
   │   └─→ WCAG 2.1 AA compliance check
   └─→ rgaa.py
       ├─→ RGAA 4 compliance check
       └─→ BLOCK if critical violations (FR-025)

6. OUTPUT PHASE
   ✓ Validated Component → User's project directory
   ├─→ dsfr-button.js
   ├─→ Button.stories.js
   └─→ tailwind.config.js (if init)
```

## Error Handling Strategy

### Fetch Phase Errors
- **GitHub API failure**: Retry with exponential backoff (3 attempts), fallback to cached version if available, fail with clear message if no cache
- **Rate limiting**: Wait for rate limit reset, show progress indicator, suggest GitHub token authentication
- **Missing component**: List available DSFR components, suggest closest match
- **Network timeout**: Retry once, fail with offline mode suggestion (use cached assets)

### Parse Phase Errors
- **Invalid HTML**: Log warning, attempt best-effort parsing, flag structural issues for manual review
- **Invalid CSS**: Skip malformed rules, log warnings, continue with valid tokens
- **Missing tokens**: Use DSFR defaults, log missing tokens, generate component with warnings
- **JS analyzer failure**: Log warning, continue without behavior analysis (fallback mode)

### Map Phase Errors
- **Conflicting tokens**: Report conflict, use first occurrence, log warning with suggested resolution
- **Unmappable CSS**: Generate custom CSS class, document in output, log Tailwind limitation
- **Invalid color values**: Skip invalid colors, log error, continue with valid palette

### Generate Phase Errors
- **Template rendering failure**: Fail fast with template error details, suggest template variable issues
- **File write failure**: Check permissions, suggest alternative output directory, fail with clear message
- **Invalid component name**: Sanitize name, suggest valid alternative, fail if unsanitizable

### Validate Phase Errors
- **Accessibility violations (critical)**: Block generation, output detailed violation report with fix suggestions, exit with error code
- **Accessibility violations (warnings)**: Generate component, output warning report, continue
- **Validator unavailable**: Log warning, skip validation, generate component with disclaimer

### General Error Principles
- **Fail fast**: Stop at first critical error, don't cascade failures
- **Clear messages**: Include error context, suggested fixes, relevant documentation links
- **Graceful degradation**: Continue with warnings when possible, block only on critical issues
- **Logging**: All errors logged to `.dsfr-kit/logs/` with timestamps and context

## Complexity Tracking

*No complexity violations - all constitutional principles satisfied*


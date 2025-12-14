# DSFR Development & Contribution

This guide details the internal structure and workflows of the DSFR itself. Useful for understanding how components are built or for contributing to the core system.

## Project Architecture
- **Monorepo**: Components uses `src/component`.
- **Tech Stack**: NodeJS, Sass, EJS, JavaScript (ES6).

## Component Structure
Each component package (e.g., `src/component/button`) follows this structure:

```text
/
├── example/            # EJS samples for documentation
├── style/              # SCSS files
│   ├── _module.scss    # Main styles (Required)
│   ├── _scheme.scss    # Theming/Colors (Optional)
│   ├── _setting.scss   # Variables (Optional)
│   ├── _tool.scss      # Mixins/Functions (Optional)
│   ├── _legacy.scss    # Browser support (Optional)
│   └── main.scss       # Entry point (Imports only)
├── template/           # HTML structure
│   └── ejs/            # EJS templates
├── script/             # JS functionality (if applicable)
└── .package.yml        # Dependencies and metadata
```

## Sass Architecture
- **main.scss**: Entry point, imports index and modules.
- **index.scss**: Imports settings, tools, and dependencies.
- **_module.scss**: Core styles.
- **_scheme.scss**: Color theme management.
- **_setting.scss**: Component-specific variables.
- **_tool.scss**: Component-specific mixins.

## JavaScript
- **api.js**: Imports core globals (classes, variables).
- **index.js**: Adds component definitions to global API.
- **main.js**: Initializes the component.
- **Transpilation**: Compiles to ES6 (module) and ES5 (nomodule).

## Build Commands
- `yarn release`: Full build (dist, examples, tests).
- `yarn build`: Fast build (CSS/JS/HTML only).
  - `-p [package]`: Build specific package.
  - `-h`: HTML only.
  - `--clean`: Rebuild icons.
- `yarn serve`: Local server at `localhost:8080`.

## Git Workflow
- **Branches**: `feat/name`, `fix/name`.
- **Commits**: Conventional Commits (`type(scope): description`).
  - Types: `fix`, `feat`, `build`, `chore`, `docs`, `style`, `refactor`.

# dsfr-kit - Agent Configuration

## Build/Lint/Test Commands

### Monorepo Commands (using `just`)
```bash
just install         # Install all dependencies (Node.js + Python)
just build           # Build all packages
just dev             # Start development mode
just lint            # Lint all packages
just format          # Format all packages
just test            # Run tests for all packages
just test-coverage   # Run tests with coverage
just clean           # Clean build outputs and caches
just verify          # Verify workspace configuration
```

### Package-Specific Commands
```bash
# Run commands for specific packages
just run-in <package-name> <command>

# Examples:
just run-in dsfr-js-analyzer test      # Run tests for dsfr-js-analyzer
just run-in dsfr-generator lint        # Lint dsfr-generator package
```

### Running Individual Tests
```bash
# TypeScript/JavaScript (using vitest)
cd packages/dsfr-js-analyzer && pnpm test
pnpm --filter @dsfr-kit/js-analyzer test

# Python (using pytest)
cd libs/dsfr-generator && uv run pytest tests/unit/test_colors.py
cd libs/dsfr-generator && uv run pytest tests/unit/test_colors.py::TestMapDsfrColorToTailwind::test_map_blue_france_color

# Run specific test files with coverage
uv run pytest tests/unit/test_colors.py -v
```

## Code Style Guidelines

### TypeScript/JavaScript (Biome)
- Indentation: 2 spaces
- Line width: 100 characters
- Quote style: Double quotes
- Semicolons: Always required
- Import organization: Automatic with Biome
- File format: ES Modules (.js/.ts)

### Python (Ruff)
- Indentation: 4 spaces
- Line length: 100 characters
- Import organization: Automatic with Ruff
- Naming conventions: snake_case for functions/variables, PascalCase for classes
- Type hints: Required for function signatures

### General Guidelines
- All components must follow DSFR design system compliance
- Accessibility (RGAA 4) is non-negotiable
- Components should be documented with interactive examples
- Code should be framework-agnostic where possible
- Follow the Open Code approach (components as source code, not dependencies)
- Use Tailwind CSS for styling with DSFR design tokens mapped to theme configuration

### Error Handling
- Use explicit error handling with try/catch for JavaScript
- Use proper exception handling for Python with try/except
- Always provide meaningful error messages
- Log errors appropriately for debugging

### Naming Conventions
- Variables: camelCase (JavaScript) / snake_case (Python)
- Functions: camelCase (JavaScript) / snake_case (Python)
- Classes: PascalCase
- Constants: UPPER_SNAKE_CASE
- Files: kebab-case

### Import Organization
- Group imports in order: built-in, external, internal
- Sort imports alphabetically within each group
- Use absolute imports when possible
- Avoid circular dependencies
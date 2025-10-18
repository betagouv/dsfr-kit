# dsfr-kit

> Multi-framework DSFR component library following the Open Code approach

**dsfr-kit** generates DSFR-compliant components for multiple frameworks from official French government design system assets. Components are distributed as customizable source code, not as locked dependencies.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![RGAA 4](https://img.shields.io/badge/RGAA-4.0-green.svg)](https://accessibilite.numerique.gouv.fr/)
[![DSFR](https://img.shields.io/badge/DSFR-Latest-blue.svg)](https://www.systeme-de-design.gouv.fr/)

## Philosophy

This is **not a component library**. It's how you build your DSFR component library.

Inspired by [shadcn/ui](https://ui.shadcn.com/), dsfr-kit provides components as **source code you own**. Copy components into your project, customize them freely, and maintain DSFR compliance through design tokens and beautiful defaults.

### Why Open Code?

Traditional component libraries lock you into their APIs. When you need customization, you fight with style overrides and wrapper components. With dsfr-kit:

- ✅ **Full Transparency** - See exactly how each component works
- ✅ **Direct Modification** - Edit components without workarounds
- ✅ **No Black Boxes** - All logic is visible and modifiable
- ✅ **AI-Friendly** - LLMs can read, understand, and improve your components

## Supported Frameworks

- **Web Components** - Vanilla JavaScript, framework-agnostic
- **Next.js** - React framework with server components
- **Solid.js** - Fine-grained reactive framework
- **Streamlit** - Python data app framework
- **Reflex** - Python web framework

## Key Features

### 🎨 Tailwind-First Styling

Components use Tailwind CSS with DSFR design tokens mapped to your theme configuration:

```tsx
// DSFR colors as Tailwind classes
<Button className="bg-dsfr-blue-france text-white hover:bg-dsfr-blue-france-sun-113">
  Action principale
</Button>
```

### ♿ RGAA 4 Compliance

All components preserve DSFR accessibility practices, ensuring compliance with French legal requirements:

- ARIA roles, properties, and states
- Keyboard navigation patterns
- Screen reader support
- Automated accessibility testing

**Reference**: [RGAA 4 - Référentiel Général d'Amélioration de l'Accessibilité](https://accessibilite.numerique.gouv.fr/)

### 🔧 Behavioral Fidelity

Components replicate official DSFR JavaScript behaviors across all frameworks:

- Interaction patterns
- State management
- Animations and transitions
- Event handling

### 🏗️ Monorepo Architecture

Built with Turborepo for efficient multi-framework development:

```
packages/
├── core/              # Shared utilities, DSFR token processing
├── web-components/    # Web Components implementation
├── nextjs/           # Next.js/React components
├── solid/            # Solid.js components
├── streamlit/        # Streamlit components (Python)
└── reflex/           # Reflex components (Python)
```

### 📚 Interactive Component Documentation

All components are documented with interactive examples using Storybook:

- **Living Documentation** - Examples stay synchronized with code
- **Interactive Playground** - Test components in isolation
- **Visual Verification** - Compare against DSFR reference implementations
- **All Variants** - See every component state and customization option
- **Accessibility Annotations** - ARIA states and keyboard navigation documented

```bash
# View component documentation
just storybook
```

## Installation

### Prerequisites

- **Node.js**: 22+ 
- **pnpm**: 10+ (package manager for TypeScript/JavaScript)
- **Python**: 3.12+
- **uv**: Latest (package manager for Python)
- **just**: Latest (command runner) - [Installation](https://github.com/casey/just#installation)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/betagouv/dsfr-kit.git
cd dsfr-kit

# Install all dependencies (Node.js + Python)
just install

# Build all packages
just build

# Verify workspace configuration
just verify
```

### Available Commands

Run `just` to see all available commands:

```bash
just                 # Show all commands
just install         # Install Node.js and Python dependencies
just build           # Build all packages
just dev             # Start development mode
just lint            # Lint all packages
just format          # Format all packages
just test            # Run tests
just test-coverage   # Run tests with coverage
just clean           # Clean build outputs and caches
just verify          # Verify workspace configuration
```

## Usage

### Adding Components

Components are copied into your project as source code:

```bash
# Add a button component
npx dsfr-kit add button --framework nextjs

# Add multiple components
npx dsfr-kit add button card alert --framework solid
```

### Customizing Components

Since components are in your codebase, customize them directly:

```tsx
// components/ui/button.tsx
export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        // DSFR defaults
        "bg-dsfr-blue-france text-white px-4 py-2 rounded",
        // Your customizations
        "hover:shadow-lg transition-all duration-200",
        className
      )}
      {...props}
    />
  )
}
```

### Tailwind Configuration

DSFR design tokens are mapped to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'dsfr-blue-france': '#000091',
        'dsfr-blue-france-sun-113': '#1212FF',
        'dsfr-red-marianne': '#E1000F',
        // ... all DSFR colors
      },
      spacing: {
        // DSFR spacing scale
      },
      typography: {
        // DSFR typography
      }
    }
  }
}
```

## Development

### Project Structure

```
dsfr-kit/
├── apps/                  # Deployable applications
│   ├── docs/             # Documentation site (future)
│   └── playground/       # Component playground (future)
├── packages/              # TypeScript/JavaScript libraries
│   ├── core/             # Shared TypeScript utilities
│   ├── test-lib/         # Test package (example)
│   ├── web-components/   # Web Components (future)
│   ├── nextjs/           # Next.js components (future)
│   └── solid/            # Solid.js components (future)
├── libs/                  # Python libraries
│   ├── core/             # Core Python utilities
│   ├── test/             # Test package (example)
│   ├── streamlit/        # Streamlit components (future)
│   └── reflex/           # Reflex components (future)
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspaces (TypeScript/JavaScript)
├── pyproject.toml        # uv workspace (Python)
├── justfile              # Command runner recipes
└── tsconfig.json         # TypeScript project references
```

### Development Workflow

```bash
# Start development mode (all packages)
just dev

# Run tests
just test

# Lint and format
just lint
just format

# Build all packages
just build

# Clean build outputs
just clean
```

### Code Quality

- **TypeScript/JavaScript**: Linted and formatted with [Biome](https://biomejs.dev/)
- **Python**: Linted and formatted with [Ruff](https://docs.astral.sh/ruff/)
- **Component Documentation**: Interactive examples with [Storybook](https://storybook.js.org/)
- **Accessibility**: Automated testing with axe-core and pa11y
- **Behavioral Tests**: Verify DSFR interaction patterns
- **Visual Regression**: Optional integration with Chromatic or Percy

## Component Development

### Lifecycle

1. **Research** - Analyze DSFR component from official documentation
2. **Token Mapping** - Map DSFR design tokens to Tailwind configuration
3. **Specification** - Define composable API and extension points
4. **Core Implementation** - Build framework-agnostic logic with Tailwind
5. **Framework Adapters** - Implement framework-specific renderers
6. **Interactive Documentation** - Create Storybook stories for all variants and states
7. **Testing** - Verify DSFR compliance, accessibility, and behavior
8. **Documentation** - Provide usage examples and customization guides
9. **Distribution** - Package as copyable source code

### Design Principles

1. **Multi-Framework** - Single source of truth for all frameworks
2. **Open Code** - Components as source code, not dependencies
3. **Tailwind-First** - Utility-first styling with DSFR tokens
4. **Monorepo** - Turborepo with pnpm + uv workspaces
5. **Code Quality** - Biome + Ruff for consistent style
6. **Package Independence** - Each framework package is independently publishable
7. **Source Alignment** - Synchronized with official DSFR releases
8. **Behavioral Fidelity** - Preserve DSFR JavaScript behaviors
9. **RGAA 4 Compliance** - Non-negotiable accessibility requirements
10. **Public Good** - Inspired by government design system adaptations
11. **Interactive Documentation** - Living documentation with Storybook for all components

## Accessibility

All components comply with **RGAA 4** (Référentiel Général d'Amélioration de l'Accessibilité), the French legal framework for digital accessibility:

- 106 criteria for compliance
- Incorporates WCAG 2.1 Level AA
- Mandatory for French public sector services

### Testing

```bash
# Run accessibility tests
pnpm test:a11y

# Manual testing checklist
pnpm test:a11y:manual
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Constitution

All development follows our [Constitution](.specify/memory/constitution.md), which defines:

- Core principles and rationale
- Technical requirements
- Quality gates
- Governance and compliance

## Inspiration

dsfr-kit draws inspiration from:

- **[shadcn/ui](https://ui.shadcn.com/)** - Open Code approach and Tailwind-first styling
- **[Public Good Design System](https://github.com/joelparkerhenderson/public-good-design-system)** - Multi-framework government design system adaptation
- **[DSFR](https://www.systeme-de-design.gouv.fr/)** - Official French government design system

## Resources

- **DSFR Documentation**: https://www.systeme-de-design.gouv.fr/
- **DSFR Assets**: https://github.com/GouvernementFR/dsfr
- **RGAA 4**: https://accessibilite.numerique.gouv.fr/
- **shadcn/ui**: https://ui.shadcn.com/
- **Storybook**: https://storybook.js.org/
- **Tailwind CSS**: https://tailwindcss.com/

## License

MIT License - see [LICENSE](LICENSE) for details.

## Acknowledgments

- **DINUM** (Direction Interministérielle du Numérique) for DSFR and RGAA
- **shadcn** for pioneering the Open Code component approach
- **Public Good Design System** for multi-framework adaptation patterns

---

**Built with ❤️ for the French public sector and beyond**

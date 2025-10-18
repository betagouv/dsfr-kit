# dsfr-kit monorepo commands
# Run `just --list` to see all available commands

# Default recipe (runs when you type `just`)
default:
    @just --list

# Install all dependencies (Node.js and Python)
install:
    @echo "📦 Installing Node.js dependencies..."
    pnpm install
    @echo "🐍 Installing Python dependencies..."
    uv sync
    @echo "✅ All dependencies installed"

# Build all packages
build:
    @echo "🔨 Building all packages..."
    turbo run build

# Run development mode for all packages
dev:
    @echo "🚀 Starting development mode..."
    turbo run dev

# Lint all packages
lint:
    @echo "🔍 Linting all packages..."
    turbo run lint

# Format all packages
format:
    @echo "✨ Formatting all packages..."
    turbo run format

# Run tests for all packages
test:
    @echo "🧪 Running tests..."
    turbo run test

# Run tests with coverage
test-coverage:
    @echo "🧪 Running tests with coverage..."
    turbo run test:coverage

# Clean all build outputs and caches
clean:
    @echo "🧹 Cleaning build outputs and caches..."
    turbo run clean
    rm -rf node_modules .turbo
    find apps packages -type d -name "node_modules" -prune -exec rm -rf {} +
    @echo "✅ Cleaned"

# Verify workspace configuration
verify:
    @echo "🔍 Verifying workspace configuration..."
    @echo "Node.js packages:"
    pnpm list --depth 0
    @echo "\nPython packages:"
    uv tree
    @echo "\n✅ Workspace verified"

# Show Turborepo cache status
cache-status:
    @echo "📊 Turborepo cache status:"
    turbo run build --dry-run

# Clear Turborepo cache
cache-clear:
    @echo "🗑️  Clearing Turborepo cache..."
    rm -rf .turbo/cache
    @echo "✅ Cache cleared"

# Run a command in a specific package
# Usage: just run-in <package-name> <command>
run-in package command:
    @echo "🎯 Running '{{command}}' in {{package}}..."
    turbo run {{command}} --filter={{package}}

# Add a new package
# Usage: just add-package <type> <name>
# Types: app (for apps/) or lib (for packages/)
# TODO: Future enhancement - scaffold from templates (Node.js/TypeScript or Python)
add-package type name:
    #!/usr/bin/env bash
    set -euo pipefail
    if [ "{{type}}" = "app" ]; then
        dir="apps/{{name}}"
    elif [ "{{type}}" = "lib" ]; then
        dir="packages/{{name}}"
    else
        echo "❌ Invalid type: {{type}}. Use 'app' or 'lib'"
        exit 1
    fi
    echo "📁 Creating package at $dir..."
    mkdir -p "$dir"
    echo "✅ Package directory created. Initialize with pnpm init or create pyproject.toml"
    echo "💡 Future: This will scaffold from templates automatically"

# Check for dependency updates
check-updates:
    @echo "🔍 Checking for dependency updates..."
    @echo "\nNode.js packages:"
    pnpm outdated
    @echo "\nPython packages:"
    uv pip list --outdated

# Update all dependencies
update:
    @echo "⬆️  Updating dependencies..."
    pnpm update
    uv sync --upgrade
    @echo "✅ Dependencies updated"

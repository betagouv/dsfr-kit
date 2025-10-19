# DSFR to Tailwind Mapping Strategy

**Date**: October 19, 2025  
**Status**: ✅ Implemented  
**Related**: Phase 4 (User Story 2) - Token Extraction and Mapping

## Overview

This document describes the strategy for mapping DSFR (Système de Design de l'État français) design tokens to Tailwind CSS configuration. The mapping process extracts tokens from compiled DSFR CSS files and transforms them into a comprehensive Tailwind theme.

## Architecture

```
DSFR CSS Files → Token Extraction → Categorization → Tailwind Mapping → tailwind.config.js
```

### Pipeline Stages

1. **Extraction** (`extract_global_tokens`): Extract all CSS custom properties from DSFR files
2. **Categorization** (`categorize_tokens`): Group tokens by type (colors, spacing, typography, etc.)
3. **Mapping**: Transform DSFR tokens to Tailwind-compatible format
4. **Generation**: Create complete Tailwind configuration

## Token Categories

### 1. Colors

DSFR provides 100+ color tokens. We categorize them into 5 groups for better organization:

#### Primary Colors
**Purpose**: Main French government brand colors  
**Pattern**: `--blue-france-*`, `--red-marianne-*`  
**Examples**:
- `--blue-france-sun-113-625: #000091`
- `--red-marianne-425-625: #E1000F`

**Tailwind Mapping**:
```javascript
colors: {
  'dsfr-blue-france-sun-113-625': '#000091',
  'dsfr-red-marianne-425-625': '#E1000F'
}
```

#### Grey Scale
**Purpose**: Neutral colors for UI elements  
**Pattern**: `--grey-*`, `--gray-*`  
**Examples**:
- `--grey-50-1000: #FFFFFF`
- `--grey-200-850: #3A3A3A`
- `--grey-950-100: #161616`

**Note**: Theme colors like `--background-default-grey` are categorized as "theme" (not grey) to avoid confusion.

#### Semantic Colors
**Purpose**: Status and feedback colors  
**Pattern**: `--success-*`, `--error-*`, `--warning-*`, `--info-*`  
**Examples**:
- `--success-425-625: #18753C` (green)
- `--error-425-625: #CE0500` (red)
- `--warning-425-625: #B34000` (orange)
- `--info-425-625: #0063CB` (blue)

**Tailwind Mapping**:
```javascript
colors: {
  'dsfr-success-425-625': '#18753C',
  'dsfr-error-425-625': '#CE0500'
}
```

#### Theme Colors
**Purpose**: Contextual colors for backgrounds, text, and borders  
**Pattern**: `--background-*`, `--text-*`, `--border-*`  
**Examples**:
- `--background-default-grey: #F6F6F6`
- `--text-title-grey: #161616`
- `--border-default-grey: #DDDDDD`

**Rationale**: These are checked before grey scale to properly categorize tokens like `--background-default-grey` as theme colors (not grey scale).

#### Extended Palette
**Purpose**: Decorative and accent colors  
**Pattern**: Named colors like `--green-*`, `--purple-*`, `--pink-*`, `--yellow-*`, `--orange-*`, `--brown-*`, `--beige-*`  
**Examples**:
- `--green-tilleul-verveine-sun-418: #B7A73F`
- `--purple-glycine-sun-319: #A558A0`
- `--pink-macaron-sun-406: #E18B76`

**DSFR Context**: These are part of DSFR's extended color palette, inspired by French culture and nature.

### 2. Spacing

**Source**: `--spacing-*`, `--margin-*`, `--padding-*`, `--gap-*` tokens  
**DSFR Format**: `--spacing-1: 0.25rem`, `--spacing-2: 0.5rem`, etc.

**Mapping Strategy**:
- Extract numeric suffix from token name
- Map to Tailwind's numeric spacing scale
- Preserve rem units

**Example**:
```javascript
// DSFR
--spacing-1: 0.25rem
--spacing-2: 0.5rem
--spacing-4: 1rem
--spacing-8: 2rem

// Tailwind
spacing: {
  '1': '0.25rem',
  '2': '0.5rem',
  '4': '1rem',
  '8': '2rem'
}
```

**Rationale**: Maintains consistency with Tailwind's default spacing scale while using DSFR values.

### 3. Typography

DSFR uses two official typefaces:
- **Marianne**: Sans-serif, primary UI font
- **Spectral**: Serif, display/heading font

#### Font Families
**Source**: `--font-family-*` tokens  
**Mapping**:
```javascript
fontFamily: {
  'marianne': ['Marianne', 'Arial', 'sans-serif'],
  'spectral': ['Spectral', 'Georgia', 'serif']
}
```

#### Font Sizes
**Source**: `--font-size-*` tokens  
**Pattern**: `--font-size-xs`, `--font-size-sm`, `--font-size-base`, etc.  
**Mapping**:
```javascript
fontSize: {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem'
}
```

#### Font Weights
**Source**: `--font-weight-*` tokens  
**Mapping**:
```javascript
fontWeight: {
  'light': '300',
  'regular': '400',
  'medium': '500',
  'bold': '700'
}
```

#### Line Heights
**Source**: `--line-height-*` tokens  
**Mapping**:
```javascript
lineHeight: {
  'tight': '1.25',
  'normal': '1.5',
  'relaxed': '1.75'
}
```

### 4. Shadows

**Source**: `--shadow-*`, `--elevation-*` tokens  
**DSFR Format**: Box shadow values with rgba colors

**Example**:
```javascript
// DSFR
--shadow-overlap: 0 8px 16px 0 rgba(0, 0, 0, 0.16)
--shadow-raised: 0 16px 16px -16px rgba(0, 0, 0, 0.32)

// Tailwind
boxShadow: {
  'overlap': '0 8px 16px 0 rgba(0, 0, 0, 0.16)',
  'raised': '0 16px 16px -16px rgba(0, 0, 0, 0.32)'
}
```

### 5. Border Radius

**Source**: `--border-radius-*`, `--radius-*` tokens  
**Mapping**:
```javascript
borderRadius: {
  'sm': '0.25rem',
  'md': '0.5rem',
  'lg': '1rem'
}
```

## Naming Conventions

### DSFR Token Format
DSFR uses BEM-inspired naming with semantic suffixes:
- `--{category}-{variant}-{lightness}-{opacity}`
- Example: `--blue-france-sun-113-625`
  - Category: `blue-france`
  - Variant: `sun` (light mode)
  - Lightness: `113` (HSL lightness)
  - Opacity: `625` (62.5%)

### Tailwind Class Format
We prefix all DSFR tokens with `dsfr-` to avoid conflicts:
- DSFR: `--blue-france-sun-113-625`
- Tailwind: `dsfr-blue-france-sun-113-625`
- Usage: `<div class="bg-dsfr-blue-france-sun-113-625">`

**Rationale**: 
- Prevents conflicts with Tailwind's default colors
- Makes DSFR tokens easily identifiable
- Allows mixing DSFR and standard Tailwind colors

## Categorization Logic

### Priority Order

The categorization checks patterns in this order (most specific first):

1. **Border Radius** (`radius`, `rounded`)
2. **Shadows** (`shadow`, `elevation`)
3. **Spacing** (`spacing`, `margin`, `padding`, `gap`)
4. **Typography** (`font`, `text-size`, `line-height`, `weight`)
5. **Colors** (all color-related tokens)

**Rationale**: More specific patterns are checked first to avoid misclassification. For example, `--border-radius-sm` should be categorized as borderRadius, not colors (even though "border" is a color keyword).

### Color Categorization Priority

Within colors, we check in this order:

1. **Primary** (`blue-france`, `red-marianne`)
2. **Semantic** (`success`, `error`, `warning`, `info`)
3. **Theme** (`background`, `text`, `border`)
4. **Grey** (`grey`, `gray`)
5. **Extended** (named colors: `green`, `purple`, `pink`, etc.)

**Rationale**: Theme colors like `--background-default-grey` should be categorized as "theme" (not "grey") because their primary purpose is theming, not providing a grey scale.

## Implementation

### Module Structure

```
libs/dsfr-generator/src/dsfr_generator/
├── parsers/
│   └── css_parser.py          # extract_global_tokens(), categorize_tokens()
└── token_mapper/
    ├── colors.py              # categorize_dsfr_colors(), map_dsfr_colors()
    ├── spacing.py             # map_dsfr_spacing_to_tailwind()
    ├── typography.py          # map_dsfr_typography_to_tailwind()
    └── tailwind_config.py     # generate_tailwind_theme(), generate_tailwind_config()
```

### Usage Example

```python
from dsfr_generator.parsers import extract_global_tokens, categorize_tokens
from dsfr_generator.token_mapper import (
    categorize_dsfr_colors,
    map_dsfr_colors,
    map_dsfr_spacing_to_tailwind,
    map_dsfr_typography_to_tailwind,
    generate_tailwind_config
)

# 1. Extract tokens from DSFR CSS
css_content = read_file("dist/core/core.css")
all_tokens = extract_global_tokens(css_content)

# 2. Categorize by type
categorized = categorize_tokens(all_tokens)

# 3. Map colors with categorization
color_categories = categorize_dsfr_colors(categorized["colors"])
mapped_colors = map_dsfr_colors(categorized["colors"])

# 4. Map other token types
spacing = map_dsfr_spacing_to_tailwind(categorized["spacing"])
typography = map_dsfr_typography_to_tailwind(categorized["typography"])

# 5. Generate Tailwind config
config = generate_tailwind_config(
    colors=mapped_colors,
    spacing=spacing,
    typography=typography,
    shadows=categorized["shadows"],
    border_radius=categorized["borderRadius"]
)
```

## Design Decisions

### Why Not Use SCSS Source Files?

**Decision**: Use compiled CSS from `dist/` instead of SCSS source files from `src/`

**Rationale**:
- ✅ No SCSS compilation required (simpler, faster)
- ✅ Production-tested assets
- ✅ Eliminates dependency on libsass/sass
- ✅ Faster execution (~5-8s improvement)
- ✅ More reliable (no compilation errors)

See [ASSET_STRATEGY.md](./ASSET_STRATEGY.md) for full details.

### Why Categorize Colors?

**Decision**: Create 5 color categories (primary, grey, semantic, theme, extended)

**Rationale**:
- Better organization and discoverability
- Enables selective inclusion/exclusion
- Improves generated documentation
- Aligns with common design system patterns
- Makes Tailwind config more maintainable

**Alternative Considered**: Flat list of all colors
- ❌ Harder to understand purpose of each color
- ❌ Difficult to document effectively
- ❌ No way to include/exclude groups

### Why Prefix with `dsfr-`?

**Decision**: Prefix all DSFR tokens with `dsfr-` in Tailwind classes

**Rationale**:
- Prevents conflicts with Tailwind defaults (e.g., `blue-500` vs `dsfr-blue-france`)
- Makes DSFR tokens easily identifiable in code
- Allows mixing DSFR and standard Tailwind colors
- Follows Tailwind plugin conventions

**Alternative Considered**: No prefix
- ❌ Risk of naming conflicts
- ❌ Harder to distinguish DSFR from Tailwind colors
- ❌ Could override Tailwind defaults unexpectedly

### Why Extract Numeric Keys for Spacing?

**Decision**: Extract numeric suffix from spacing tokens (`--spacing-2` → `"2"`)

**Rationale**:
- Maintains consistency with Tailwind's spacing scale
- Enables standard Tailwind utilities (`p-2`, `m-4`, etc.)
- Familiar to Tailwind users
- Easier to remember and use

**Alternative Considered**: Use full token names
- ❌ Verbose class names (`p-spacing-2` vs `p-2`)
- ❌ Inconsistent with Tailwind conventions
- ❌ Harder to learn for Tailwind users

## Future Enhancements

### Potential Improvements

1. **Custom Category Definitions**
   - Allow users to define their own color categories
   - Configuration file for category rules

2. **Selective Token Inclusion**
   - CLI flags to include/exclude categories
   - Example: `--colors=primary,semantic` (exclude extended palette)

3. **Token Aliases**
   - Shorter aliases for common tokens
   - Example: `--blue-france` → `primary-blue`

4. **Dark Mode Support**
   - Detect and map light/dark variants
   - Generate Tailwind dark mode configuration

5. **Token Documentation Generation**
   - Auto-generate color palette documentation
   - Visual swatches for each category

## References

- **DSFR Documentation**: https://www.systeme-de-design.gouv.fr/
- **DSFR Package**: v1.14.2
- **Tailwind CSS**: https://tailwindcss.com/docs/theme
- **Asset Strategy**: [ASSET_STRATEGY.md](./ASSET_STRATEGY.md)
- **Implementation**: Phase 4 (T065-T080)

## Critical Gaps & Limitations

### ✅ Dark Theme Support (IMPLEMENTED)

**Status**: ✅ Implemented (2025-10-19)  
**Impact**: High - Dark theme is a core DSFR feature

DSFR provides comprehensive dark theme support via `data-fr-theme="dark"` attribute and `dist/scheme/scheme.css`.

**Implementation Approach**: Tailwind Native Dark Mode
- ✅ Extracts light theme tokens from `core.css`
- ✅ Extracts dark theme tokens from `scheme.css` (`:root[data-fr-theme=dark]`)
- ✅ Merges light/dark tokens for Tailwind dark mode
- ✅ Framework-independent (works with React, Vue, Svelte, virtual DOM)
- ✅ Supports build-time optimization

**DSFR Dark Theme System**:
```css
/* Light theme (core.css) */
:root {
  --grey-200-850: #3A3A3A;
}

/* Dark theme (scheme.css) */
:root[data-fr-theme=dark] {
  --grey-200-850: #CECECE;  /* Same token, different value! */
}
```

**Our Tailwind Output**:
```javascript
{
  colors: {
    'dsfr-grey-200-850': {
      DEFAULT: '#3A3A3A',  // Light
      dark: '#CECECE'       // Dark
    }
  }
}
```

**Functions**:
- `extract_dark_theme_tokens(css)` - Extract from scheme.css
- `merge_light_dark_tokens(light, dark)` - Merge for Tailwind

**See**: [DSFR_ANALYSIS.md](./DSFR_ANALYSIS.md) for detailed analysis.

### ✅ Official DSFR Color Categories (IMPLEMENTED)

**Status**: ✅ Implemented (2025-10-19)  
**Impact**: Medium - Alignment with DSFR's official taxonomy

Categories renamed to match official DSFR documentation:
- ✅ **Primary** - Blue France, Red Marianne (Couleurs primaires)
- ✅ **Neutral** - Grey scale, backgrounds, text, borders (Couleurs neutres)
- ✅ **System** - Success, error, warning, info (Couleurs système)
- ✅ **Illustrative** - Extended palette (Couleurs illustratives)

**Key Insight**: DSFR categorizes by color family, not usage context.
Tokens like `--background-default-grey` are **Neutral** (grey-based), not a separate "theme" category.

**Source**: https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs-palette

### 🟡 Hover/Active State Tokens (PARTIALLY IMPLEMENTED)

**Status**: Tokens exist but not explicitly extracted  
**Impact**: Low - Can be added incrementally

DSFR provides `-hover` and `-active` variants for many tokens:
```css
--grey-200-850: #3A3A3A;
--grey-200-850-hover: #A8A8A8;
--grey-200-850-active: #939393;
```

These are currently extracted as separate tokens but not explicitly mapped to Tailwind's hover/active states.

## Changelog

- **2025-10-19**: Initial mapping strategy documented
- **2025-10-19**: Implemented T065-T080 (token extraction and mapping)
- **2025-10-19**: Identified critical gaps (dark theme, official categories) - see DSFR_ANALYSIS.md
- **2025-10-19**: ✅ Implemented dark theme support (extract_dark_theme_tokens, merge_light_dark_tokens)
- **2025-10-19**: ✅ Aligned categories with official DSFR taxonomy (Primary, Neutral, System, Illustrative)

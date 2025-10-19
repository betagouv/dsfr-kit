# DSFR System Analysis

**Date**: October 19, 2025  
**Status**: 🔴 Critical Gaps Identified  
**DSFR Version**: 1.14.2

## Critical Findings

### 1. Dark Theme Support (MISSING FROM IMPLEMENTATION)

**Discovery**: DSFR has comprehensive dark theme support that we haven't integrated.

#### Implementation Details

**Light Theme (Default)**:
```css
:root {
  --grey-200-850: #3A3A3A;
  --blue-france-sun-113-625: #000091;
  /* ... */
}
```

**Dark Theme**:
```css
:root[data-fr-theme=dark] {
  --grey-200-850: #CECECE;  /* Inverted! */
  --blue-france-sun-113-625: #8585F6;  /* Lighter! */
  /* ... */
}
```

**File Location**: `dist/scheme/scheme.css` (separate from core.css)

**Activation**: Via `data-fr-theme="dark"` attribute on `:root` (html element)

#### Token Naming Convention

DSFR uses a bidirectional naming system:
- `--grey-200-850`: Light mode uses 200 lightness, dark mode uses 850
- `--grey-950-100`: Light mode uses 950 lightness, dark mode uses 100
- Pattern: `--{color}-{light-value}-{dark-value}`

This allows the same token name to have different values based on theme!

#### Impact on Our Implementation

**Current State**: ❌ Not implemented
- We only extract tokens from `core.css` (light theme only)
- We don't handle `scheme.css` (dark theme overrides)
- Our Tailwind config doesn't support dark mode variants
- Token categorization doesn't account for theme-aware tokens

**Required Changes**:
1. Extract tokens from both `core.css` AND `scheme.css`
2. Map light/dark variants to Tailwind's dark mode
3. Update token extraction to handle theme-specific values
4. Generate Tailwind config with dark mode support
5. Document theme switching mechanism

### 2. Official DSFR Color Categories (NEEDS VERIFICATION)

**Discovery**: DSFR has official color categories documented on their website that we should align with.

#### Our Current Categories vs DSFR

**Our Categories** (internal abstraction):
1. Primary (Blue France, Red Marianne)
2. Grey (grey scale)
3. Semantic (success, error, warning, info)
4. Theme (background, text, border)
5. Extended (named colors)

**DSFR Official Categories** (from documentation - needs verification):
- Need to review: https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs-palette
- Likely includes: Brand colors, Semantic colors, Extended palette
- May have different groupings than our abstraction

**Action Required**:
- Review DSFR official documentation
- Align our categories with DSFR's official taxonomy
- Update MAPPING_STRATEGY.md to reflect official categories
- Add references to DSFR documentation

### 3. Token Naming Patterns

#### Observed Patterns

**Base Colors** (light mode):
```
--{color}-{lightness}
--blue-france-sun-113
--red-marianne-425
```

**Bidirectional Colors** (light/dark):
```
--{color}-{light-lightness}-{dark-lightness}
--grey-200-850        # Light: 200, Dark: 850
--grey-950-100        # Light: 950, Dark: 100
--blue-france-sun-113-625  # Light: 113, Dark: 625
```

**Hover/Active States**:
```
--{token}-hover
--{token}-active
--grey-200-850-hover
--grey-200-850-active
```

**Semantic Colors**:
```
--{semantic}-{lightness}-{dark-lightness}
--success-950-100
--error-425-625
--warning-950-100
--info-425-625
```

#### Implications

1. **Token values are theme-aware**: Same token name, different values
2. **Hover/active states**: Need to extract and map these too
3. **Lightness values**: The numbers indicate HSL lightness values
4. **Bidirectional naming**: Clever system for maintaining semantic meaning across themes

## DSFR File Structure

### Core Files
```
dist/
├── core/
│   └── core.css              # Base tokens (light theme)
├── scheme/
│   └── scheme.css            # Dark theme overrides
├── utility/
│   ├── colors/
│   │   └── colors.css        # Color utility classes
│   └── utility.css           # All utilities
└── component/
    └── {component}/
        └── {component}.css   # Component styles
```

### Token Sources

**Light Theme Tokens**:
- `dist/core/core.css` - Base definitions in `:root`

**Dark Theme Tokens**:
- `dist/scheme/scheme.css` - Overrides in `:root[data-fr-theme=dark]`

**Utility Classes**:
- `dist/utility/colors/colors.css` - Color utility classes (bg, text, border)

## Required Implementation Changes

### Phase 4 Enhancements Needed

#### 1. Dark Theme Token Extraction (NEW)

**Tasks**:
- [ ] Extract tokens from `scheme.css`
- [ ] Parse `:root[data-fr-theme=dark]` selector
- [ ] Map light/dark token pairs
- [ ] Identify theme-aware vs static tokens

**New Functions**:
```python
def extract_theme_tokens(light_css: str, dark_css: str) -> dict:
    """Extract both light and dark theme tokens."""
    
def categorize_theme_aware_tokens(tokens: dict) -> dict:
    """Identify which tokens change between themes."""
```

#### 2. Tailwind Dark Mode Integration (NEW)

**Tasks**:
- [ ] Generate Tailwind config with dark mode
- [ ] Map DSFR dark theme to Tailwind's `dark:` variant
- [ ] Handle `data-fr-theme` attribute vs Tailwind's class/media strategy
- [ ] Document theme switching approach

**Tailwind Config Output**:
```javascript
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        'dsfr-grey-200-850': {
          DEFAULT: '#3A3A3A',  // Light
          dark: '#CECECE'       // Dark
        }
      }
    }
  }
}
```

**Alternative Approach** (CSS variables):
```javascript
// Let CSS variables handle theme switching
colors: {
  'dsfr-grey-200-850': 'var(--grey-200-850)'
}
```

#### 3. Hover/Active State Extraction (NEW)

**Tasks**:
- [ ] Extract `-hover` and `-active` token variants
- [ ] Map to Tailwind's hover/active states
- [ ] Handle in token categorization

#### 4. Official Category Alignment (UPDATE)

**Tasks**:
- [ ] Review DSFR official documentation
- [ ] Update our categories to match DSFR's taxonomy
- [ ] Update MAPPING_STRATEGY.md
- [ ] Update color categorization logic

### Documentation Updates Needed

1. **MAPPING_STRATEGY.md**:
   - Add dark theme section
   - Document bidirectional token naming
   - Align categories with DSFR official taxonomy
   - Add theme switching strategies

2. **ASSET_STRATEGY.md**:
   - Add `scheme.css` to asset sources
   - Document dark theme file structure

3. **spec.md / plan.md / tasks.md**:
   - Add dark theme support tasks
   - Update token extraction scope
   - Add Tailwind dark mode integration tasks

## Recommended Approach

### Option 1: CSS Variables (Recommended)

**Pros**:
- Simpler implementation
- DSFR handles theme switching
- No Tailwind dark mode complexity
- Works with `data-fr-theme` attribute

**Implementation**:
```javascript
// Tailwind config
colors: {
  'dsfr-grey-200-850': 'var(--grey-200-850)',
  'dsfr-blue-france': 'var(--blue-france-sun-113-625)'
}
```

```html
<!-- User switches theme -->
<html data-fr-theme="dark">
  <!-- CSS variables automatically update -->
  <div class="bg-dsfr-grey-200-850">
    <!-- Background changes from #3A3A3A to #CECECE -->
  </div>
</html>
```

**Cons**:
- Requires including DSFR CSS files
- Less control over theme switching

### Option 2: Tailwind Dark Mode

**Pros**:
- Full Tailwind integration
- Can work without DSFR CSS
- More control over theme switching

**Implementation**:
```javascript
// Tailwind config
darkMode: 'class',
colors: {
  'dsfr-grey-200-850': {
    DEFAULT: '#3A3A3A',
    dark: '#CECECE'
  }
}
```

```html
<!-- Tailwind dark mode -->
<html class="dark">
  <div class="bg-dsfr-grey-200-850 dark:bg-dsfr-grey-200-850-dark">
    <!-- Manual dark variant -->
  </div>
</html>
```

**Cons**:
- More complex token extraction
- Duplicate token definitions
- Doesn't align with DSFR's `data-fr-theme` approach

### Option 3: Hybrid Approach

**Pros**:
- Best of both worlds
- Flexibility for different use cases

**Implementation**:
- Provide CSS variable references (Option 1)
- Also provide static color values for standalone use
- Let users choose their approach

## Next Steps

### Immediate Actions

1. **Pause T084-T087** (CLI init command)
2. **Update documentation** to reflect dark theme gap
3. **Review DSFR official documentation** for color categories
4. **Create new tasks** for dark theme support
5. **Update MAPPING_STRATEGY.md** with findings
6. **Decide on approach** (CSS variables vs Tailwind dark mode)

### New Tasks Required

**Dark Theme Support**:
- Extract tokens from `scheme.css`
- Parse theme-specific selectors
- Map light/dark token pairs
- Generate Tailwind config with dark mode
- Document theme switching

**Category Alignment**:
- Review DSFR official categories
- Update categorization logic
- Update documentation

**Hover/Active States**:
- Extract state variants
- Map to Tailwind states
- Update token extraction

## References

- **DSFR Package**: v1.14.2
- **Dark Theme File**: `dist/scheme/scheme.css`
- **Core File**: `dist/core/core.css`
- **Documentation**: https://www.systeme-de-design.gouv.fr/
- **Color Palette**: https://www.systeme-de-design.gouv.fr/version-courante/fr/fondamentaux/couleurs-palette

## Impact Assessment

**Severity**: 🔴 **Critical**

**Reason**: Dark theme is a core DSFR feature that we've completely missed. This affects:
- Token extraction completeness
- Tailwind config generation
- User experience (no dark mode support)
- Alignment with DSFR specifications

**Recommendation**: Address before considering Phase 4 complete.

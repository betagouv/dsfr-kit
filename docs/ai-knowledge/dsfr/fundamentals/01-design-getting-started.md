# DSFR Foundations - Designer Viewpoint

## Tools & Libraries
- **Tools**: Figma and Sketch are officially supported.
- **Organization**:
  - **Fundamental**: Colors, Text Styles, Grids, Spacings, Icons.
  - **Components**: The actual UI components.
  - **Pictograms**: Illustration sets.
- **Overrides**: Essential for dynamic components.

## Accessibility (Review)
- **Compliance**: RGAA Version 4 (mandatory).
- **Goal**: Equivalent access for all users (disabilities, dys-troubles, etc.).

## Visual Foundations

### Spacing System
- **Base Unit**: 8px (Multiples of 8 are the standard).
- **Exceptions**: `2px`, `4px`, `6px`, `12px`, `20px` (for specific cases).
- **Goal**: Guarantee consistency and facilitate dev handoff.

### Grid System
- **Columns**: 12-column grid.
- **Breakpoints**: 4 breakpoints.
- **Layouts**: 5 responsive layouts derived from the breakpoints.

### Text Styles (Typography)
- **Primary Font**: `Marianne` (State identity, sobriety, legibility).
  - **Weights**: **Regular**, **Medium**, **Bold** (only these 3 used).
- **Secondary Font**: `Spectral` (Contrast, history, quotes).
  - **Usage**: Parsimony (secondary content only).
- **Usage**: Mandatory usage of library text styles.
- **Benefits**: Ensures consistency and allows overrides in symbols.

### Layer Styles (Colors & Borders)
- **Palette**: 24 State colors, 4 families (Primary, Neutral, System, Illustrative).
- **Rules**:
  - **White Background**: **Mandatory** by default (Legal requirement).
  - **Alternative Backgrounds**:
    - Must be full width or 12-col.
    - Must include *all* elements of the section.
    - Must be separated by white (no consecutive colored sections).
  - **Interaction**: No interactive components (buttons, etc.) straddling background boundaries.
- **Usage**: Mandatory for shapes (fills, borders, shadows).
- **Compliance**: Ensures adherence to DSFR tokens.

### Elevation & Shadows
- **Principle**: Interface should be as "flat" as possible.
- **Usage**: Superpositions only for specific "conversion" zones.
- **Dark Mode**: Elevation rules are critical for Dark Mode visibility.

### Dark Mode
- **Native**: DSFR is designed for Light & Dark modes from the start.
- **Requirement**: strict adherence to tokens is required for automatic Dark Mode support.

## Icons
- **Source**: [Remix Icon](https://remixicon.com/) (Open Source).
- **Usage**: Selection included in libraries.
- **Custom Addition**: Can download from Remix Icon, but must respect the **4 imposed sizes**.

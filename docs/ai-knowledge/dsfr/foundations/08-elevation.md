# DSFR Elevation System (Shadows & Z-Index)

![Elevation Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765701030900.png)

## Concept
Elevation represents the position of an element on the Z-axis.
In DSFR, this is materialized by:
1.  **Shadows**: Visual depth.
2.  **Background Color**: Often lighter in Dark Mode to simulate closeness to the light source.

## The 4 Levels

### 1. Base (Default)
- **Description**: The background level. No visual manifestation.
- **Usage**: Standard page content.
- **Token**: `background-default-grey`

### 2. Surélevé (Raised)
- **Description**: Elements set slightly apart from the base.
- **Usage**: Interactive components, Cards, or Hover states.
- **Tokens**:
    - `background-raised-grey`
    - `background-raised-grey-hover`

### 3. Superposé (Overlap)
- **Description**: Elements passing *over* previous levels.
- **Usage**: Dropdown menus, sticky headers, navigation bars.
- **Tokens**:
    - `background-overlap-grey`
    - `background-contrast-overlap-grey` (for contrasting backgrounds)

### 4. Détaché (Lifted)
- **Description**: Elements passing *way over*. Background is often dimmed.
- **Usage**: Modals, Alerts, Pop-ins.
- **Tokens**:
    - `background-lifted-grey`

## Implementation
- **Shadows**: Handled automatically by the `background-` tokens in many components, or via specific utility classes if available (though DSFR prefers using the correct semantic background token which carries the shadow properties).
- **Dark Mode**: Crucial. In dark mode, shadows are less visible, so "Raised" and "Lifted" surfaces become *lighter* grey to indicate elevation. **Using the correct token is mandatory** for this to work.

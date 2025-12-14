# Badge

![Badge Presentation Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765736368764.png)

## Presentation

### Definition
The badge is a small distinct element used to highlight information (typically a **status** or **state**) associated with a parent element (card, title, etc.).

### Usage
- **Purpose**: Highlight a "status" or "state" (e.g., "New", "Sent", "Error").
- **Versus Tag**:
    - **Badge**: Status/State. Non-interactive usually.
    - **Tag**: Categorization/Keyword. Can be interactive (filter).

### Component Placement
The badge is versatile and can be used directly on or inside:
- **Titles**: Top of a page or article.
- **Navigation**: In menus or lists.
- **Cards & Tiles**: To indicate the status of the content.
- **Tables**: Inside cells.

### Editorial Rules
- **Conciseness**: Keep the label **short** and explicit (e.g., "Nouveau" is better than "Dernière nouveauté ajoutée").
- **Consistency**: Use the same badge text and color for the same status throughout the site.

## Design

![Badge Design Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765736814517.png)

### Variations
The badge exists in two main forms regarding icons:
1.  **With Icon**: Strongly recommended for promoting accessibility and quick recognition of the status (e.g. checkmark for success).
2.  **Without Icon**: Text only.

### Sizes
- **Medium (md)**: The default size.
- **Small (sm)**: A condensed version, ideal for dense interfaces like tables or lists.

### Colors & Semantics
The badge primarily uses the **System** functional palette to convey meaning:
- **Grey** (Info/Default): Neutral state.
- **Green** (Success): Completed, Valid, Success.
- **Red** (Error): Error, Failure, Critical.
- **Yellow** (New/Warning): New items ("Nouveau") or Warnings.
- **Blue** (Info): Informational but distinct from neutral.

> **Important**: Do not use "Accent" colors if they jeopardize legibility or semantic meaning. Stick to the functional `status` colors provided by the system.

## Code

![Badge Code Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765736941267.png)

### Basic Syntax
The badge uses the class `.fr-badge`. It is usually applied to a `<p>` tag (if standalone) or a `<span>` (if inline), though the documentation examples often use `<p>`.

```html
<p class="fr-badge">Label badge</p>
```

### Badge Group
When displaying multiple badges, wrap them in a `.fr-badge-group` container (usually a `<ul>`).

```html
<ul class="fr-badge-group">
    <li>
        <p class="fr-badge">Label badge</p>
    </li>
    <li>
        <p class="fr-badge fr-badge--success">Succès</p>
    </li>
</ul>
```

### Modifiers

#### System Variants (Colors + Icons)
These classes apply both the color and the corresponding icon automatically (unless suppressed).
- `.fr-badge--green-menthe` / `.fr-badge--success` : Success (Checkmark icon).
- `.fr-badge--error` : Error.
- `.fr-badge--warning` : Warning.
- `.fr-badge--info` : Information.
- `.fr-badge--new` : New item (typically yellow).

*(Note: Specific color tokens like `green-menthe` can also be used, but functional naming like `success` is preferred for logic).*

#### Size Modifiers
- Default: Medium size.
- `.fr-badge--sm`: Small size.

#### Icon Modifiers
- Default: Has an icon if a system class is used.
- `.fr-badge--no-icon`: Removes the icon.

### Example Combination
```html
<!-- Small Success Badge without Icon -->
<p class="fr-badge fr-badge--success fr-badge--no-icon fr-badge--sm">Succès</p>
```

## Accessibility

![Badge Accessibility Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765737034984.png)

### Key Rules
- **Non-interactive**: The badge is purely informational. It has no keyboard interaction.
- **Structure**: Use the `<p>` tag by default. Use `<span>` only if the badge is inserted within another text element (to avoid block-in-inline invalid HTML).
- **Icons**: Icons in badges are **decorative**. They are automatically handled by the DSFR CSS (or should be aria-hidden if manual). The screen reader relies on the text content to convey the status.

### Contrast
- The system tokens (e.g., `.fr-badge--success`) are guaranteed to meet the AA contrast ratio requirements (> 4.5:1 for text).
- **Warning**: If overriding colors, strictly ensure that the text/background contrast remains accessible.

### Screen Readers
- The badge text is read naturally as part of the content flow.
- Ensure the badge label is explicit enough to be understood without the visual color context (e.g., "Erreur" is clear, whereas a red badge named "Status 3" might not be).

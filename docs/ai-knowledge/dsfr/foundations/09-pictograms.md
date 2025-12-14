# DSFR Pictogram System

![Pictogram Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765701096507.png)

## Definition
Pictograms are **illustrative** elements, distinct from icons (which are functional).
- **Role**: Decorate, illustrate a theme, add visual rhythm.
- **Complexity**: More detailed than icons.
- **Context**: Used in "Tuiles" (Tiles), headers, or callouts.

## Construction & Style
- **Base Grid**: Constructed on a specific grid to ensure consistency.
- **Font**: The curves and strokes are derived from the **Spectral** font (the serif font of the DSFR), giving them a unique "French State" personality.
- **Angles**: Specific geometric rules (often 45° or specific curves) to match the brand.

## Colors & Tokens
Pictograms are multi-colored (unlike icons which are usually monochrome), typically using the **Artwork** palette.
- **Major Color**: The dominant stroke/fill (refers to `artwork-major-blue-france`, etc.).
- **Minor Color**: Secondary details (refers to `artwork-minor-red-marianne`, etc.).
- **Background**: Often placed on a specific background that highlights them.

## Integration (Development)
Pictograms are typically SVGs.

### Usage
- **Inline SVG**: For maximum control (especially coloring via CSS classes).
- **Use Tag**: `<use href="...">` can be used but styling shadow DOM might be trickier for multi-color support depending on browser coverage (DSFR often uses inline SVGs for full control).

### Classes
- `.fr-artwork`: Generic class for the container.
- `.fr-artwork-major`: Targets the primary path.
- `.fr-artwork-minor`: Targets the secondary path.
- `.fr-artwork-decorative`: Targets decorative background shapes.

**Example Structure:**
```html
<svg class="fr-artwork" viewBox="0 0 80 80">
    <use class="fr-artwork-decorative" href="#..."/>
    <use class="fr-artwork-minor" href="#..."/>
    <use class="fr-artwork-major" href="#..."/>
</svg>
```

## Accessibility
- **Decorative**: Pictograms are largely decorative. Use `aria-hidden="true"`.
- **Context**: The text content nearby usually provides the actual information.

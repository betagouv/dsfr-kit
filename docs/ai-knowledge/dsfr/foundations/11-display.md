# DSFR Display System (Utilities)

![Display Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765701156150.png)

## Accessibility Utilities
Classes to manage content for screen readers (Assistive Technologies).

### `fr-sr-only`
- **Effect**: Hides the element visually but **keeps it accessible** to screen readers.
- **Usage**: Labels for icons, supplementary context for buttons.

```html
<button>
    <span class="fr-icon-search-line" aria-hidden="true"></span>
    <span class="fr-sr-only">Search</span>
</button>
```

### Responsive Variants
- `fr-sr-only-[breakpoint]`: Applies the behavior starting from a specific breakpoint (`sm`, `md`, `lg`, `xl`).
- **Example**: `fr-sr-only-lg` (Visually hidden only on Desktop and larger).

## Visibility Utilities
Classes to completely hide/show content (Standard `display: none`).

### `fr-hidden`
- **Effect**: Hides the element completely (Visual + Screen Readers).
- **Usage**: Temporary states, mobile-only/desktop-only content.

### Responsive Hiding
- `fr-hidden-[breakpoint]`: Hides the element starting from a breakpoint.
- **Example**: `fr-hidden-lg` (Visible on mobile, hidden on desktop).

### Responsive Un-hiding
- `fr-unhidden-[breakpoint]`: **Restores** visibility starting from a breakpoint (overrides `fr-hidden`).
- **Example**: Combined with `fr-hidden`, allows for ranges.
```html
<!-- Hidden by default, appears on LG -->
<div class="fr-hidden fr-unhidden-lg">...</div>
```

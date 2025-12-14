# DSFR Grid System

![Grid Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765642898132.png)

## Breakpoints
The system is responsive mobile-first with **5 breakpoints**.

| Breakpoint | Width (px) | Grid Behavior |
| :--- | :--- | :--- |
| **xs** | < 576px | Mobile (Portrait) |
| **sm** | ≥ 576px | Mobile (Landscape) / Phablet |
| **md** | ≥ 768px | Tablet |
| **lg** | ≥ 992px | Desktop |
| **xl** | ≥ 1248px | Large Desktop |

## Grid Architecture
- **Columns**: 12 columns (at all breakpoints).
- **Gutters**: Defined by the system (typically varies by breakpoint, e.g., 16px mobile, 24px/32px desktop).
- **Margins**: Responsive side margins for the container.

## Containers
The grid must be wrapped in a container.

*   **Fixed Container** (`fr-container`): Centered, responsive width up to `xl`.
    *   Max-width at `xl`: ~1248px (implies content width).
*   **Fluid Container** (`fr-container--fluid`): Takes 100% of the viewport width.

## Grid Classes
HTML structure follows standard flexible grid logic.

```html
<div class="fr-container">
    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-12 fr-col-md-6">
            <!-- Content 50% on desktop, 100% on mobile -->
        </div>
        <div class="fr-col-12 fr-col-md-6">
            <!-- Content -->
        </div>
    </div>
</div>
```

### Rows (`fr-grid-row`)
- **Standard**: `fr-grid-row`
- **With Gutters**: `fr-grid-row--gutters` (Adds negative margins to handle column padding).
- **Alignment**:
    - `fr-grid-row--left`, `fr-grid-row--right`, `fr-grid-row--center` (Horizontal).
    - `fr-grid-row--top`, `fr-grid-row--bottom`, `fr-grid-row--middle` (Vertical).

### Columns (`fr-col`)
- **Syntax**: `fr-col-[breakpoint]-[size]`
- **Default (xs)**: `fr-col-[size]` (e.g., `fr-col-12`).
- **Targeted**:
    - `fr-col-md-6` (6 columns starting at `md`).
    - `fr-col-lg-4` (4 columns starting at `lg`).
- **Offsets**: `fr-col-offset-[breakpoint]-[size]` (e.g., `fr-col-offset-md-2`).

## Usage Rules
1.  **Nesting**: You can nest a `fr-grid-row` inside a `fr-col-*`.
2.  **Gutters**: Always use `fr-grid-row--gutters` if you want standard spacing between columns.
3.  **Full Width**: Use `fr-col-12` for full width elements.

# DSFR Accordion Component

## Overview
The Accordion component allows users to show or hide sections of related content on a page. It is useful for minimizing page length and reducing cognitive load.

## DSFR Specifications

### HTML Structure
The standard DSFR HTML structure for an accordion item is:

```html
<section class="fr-accordion">
    <h3 class="fr-accordion__title">
        <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-106">
            Intitulé de l'accordéon
        </button>
    </h3>
    <div class="fr-collapse" id="accordion-106">
        <!-- Content goes here -->
    </div>
</section>
```

### Key Classes
- `fr-accordion`: Wrapper for a single accordion item.
- `fr-accordion__title`: Wrapper for the button (usually a heading tag).
- `fr-accordion__btn`: The interactive toggle element.
- `fr-collapse`: The content container.

### Groups (Accordions-Group)
Multiple accordions can be grouped to create an "Accordion Group".
-   **Visuals**: Accordions in a group are stacked vertically with specific bordering logic (often adjoining borders merge).
-   **Behavior**: In a strict group, opening one accordion usually collapses the others (mutually exclusive). The demo highlights a `group` property that likely enables this "one-at-a-time" behavior.
-   **Structure**: Typically wrapped in a container (often `<div class="fr-accordions-group">`).

## Demo Page Insights
The DSFR Demo page highlights two distinct usage patterns:
1.  **Single Accordion**:
    -   Properties: `isExpanded` (boolean), `id` (string), `label` (string), `content` (slot/text).
    -   Default behavior: Can be toggled independently.
2.  **Accordions-Group**:
    -   Displays multiple accordions stacked.
    -   Confirms the need for a mechanism to manage state across multiple items (likely via a wrapper component or shared state logic).

## Accessibility (A11y) Requirements

1.  **Button Role**: The trigger must be a `<button type="button">`.
2.  **ARIA Controls**: The button must have `aria-controls="[ID]"` pointing to the content container's unique ID.
3.  **ARIA Expanded**: The button must have `aria-expanded="true/false"` reflecting the current state.
4.  **Headings**: The button should be wrapped in a heading tag (h1-h6) appropriate for the page structure. Default is often h3.

## Implementation Strategy for `dsfr-kit`

## Design Specs (from Design Page)
-   **Sizes**: The component exists in a **single size**. No variants for small/large.
-   **Anatomy**:
    -   Title/Label (left-aligned).
    -   Chevron Icon (right-aligned). Indicates state (rotates).
    -   Separators: Horizontal borders separating items.
-   **States**: Must support Default, Hover, and Focus states.
-   **Group Behavior**:
    -   **Interdependent**: Opening one closes others (standard accordion behavior).
    -   **Independent**: Multiple sections can be open simultaneously.

## Implementation Strategy for `dsfr-kit`

## Code Page Verification
-   **Structure Confirmed**: The nesting of `fr-accordion` > `fr-accordion__title` > `fr-accordion__btn` is mandatory.
-   **Content Wrapper**: The content must be wrapped in `fr-collapse`.
-   **State Management**:
    -   `aria-expanded` on the button is the source of truth.
    -   `fr-collapse--expanded` class is used for the CSS-based expansion (or `style` mapping).
-   **Unique IDs**: The link between `aria-controls` (on button) and `id` (on content) is critical for A11y.

## Accessibility Page Verification
-   **Keyboard Interactions**:
    -   `Enter` or `Space`: Toggles the accordion state.
    -   `Tab`: Navigates to the accordion button.
-   **A11y Rules**:
    -   **Headings**: The accordion button *must* be inside a heading tag (relevant to the page hierarchy).
    -   **State**: `aria-expanded` is mandatory.
    -   **Controls**: `aria-controls` is mandatory.
    -   **Focus**: Visible focus state is required on the button.
    -   **Screen Readers**: Must announce the state change (Expanded/Collapsed).

### Component: `dsfr-accordion`

We will implement a stand-alone accordion item.

#### Attributes / Properties
- **`label`** (string): The title text of the accordion.
- **`expanded`** (boolean): Reflects the open/closed state (maps to `isExpanded` from demo).
- **`heading-level`** (number/string): The heading level tag to use (h2, h3, h4, etc.). Default: `h3`.
- **`id`**: (Standard HTML prop) Used to generate unique IDs for aria-controls if not provided.

### Component: `dsfr-accordion-group` (Future/Planned)
 To support the "Accordions-Group" pattern shown in the demo, we should plan for a wrapper component.
-   **Role**: Manages the layout (stacking borders) and potentially the mutual exclusivity of its children.
-   **Usage**:
    ```html
    <dsfr-accordion-group>
      <dsfr-accordion label="Item 1">Content 1</dsfr-accordion>
      <dsfr-accordion label="Item 2">Content 2</dsfr-accordion>
    </dsfr-accordion-group>
    ```

#### Slots
- **(default)**: The content to be expanded/collapsed.

#### Shadow DOM Structure
```html
<section class="fr-accordion">
    <!-- Dynamic Heading Tag (e.g., h3) -->
    <h3 class="fr-accordion__title">
        <button
            type="button"
            class="fr-accordion__btn"
            aria-expanded="${this.expanded}"
            aria-controls="${this.uniqueId}"
            @click="${this.toggle}"
        >
            ${this.label}
        </button>
    </h3>

    <div
        class="fr-collapse ${this.expanded ? 'fr-collapse--expanded' : ''}"
        id="${this.uniqueId}"
        style="${this.expanded ? '' : 'max-height: 0; opacity: 0; overflow: hidden;'}"
    >
        <slot></slot>
    </div>
</section>
```
*Note: We may need to invoke DSFR's internal logic or replicate the collapse animation logic using CSS transitions for `max-height`.*

#### CSS
We will import:
-   `@gouvfr/dsfr/dist/component/accordion/accordion.min.css`
-   `@gouvfr/dsfr/dist/utility/utility.min.css` (if needed for spacers)

### Challenges & Solutions
1.  **Unique IDs**: We need to generate a unique ID for the content div to link it with `aria-controls`. We can use a random ID generator or rely on a user-provided ID.
2.  **Styles**: DSFR styles for `fr-collapse` rely on the global stylesheet. We need to ensure the animation works within Shadow DOM or reimplement the transition.
3.  **Icons**: The accordion arrow is usually a pseudo-element on `fr-accordion__btn`. We need to ensure the font/icon paths work or are inlined.

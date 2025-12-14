# DSFR Spacing System

![Spacing Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765642815757.png)

## The 8px Grid System
The system is built on multiples of **8px** (1rem = 16px in most browsers, but DSFR treats `1w` usually as 8px? *Wait, looking at the table inference*).
Actually, the tokens typically follow `n * 0.5rem`.

Scale Exceptions: `2px`, `4px`, `6px`, `12px`, `20px` exist for specific fine-tuning.

## Spacing Table (Values)
| Token / Name | Value (rem) | Value (px) |
| :--- | :--- | :--- |
| `0.5v` | 0.125rem | 2px |
| `1v` | 0.25rem | 4px |
| `1.5v` | 0.375rem | 6px |
| **1w** | **0.5rem** | **8px** (Base Unit) |
| `2w` | 1rem | 16px |
| `3w` | 1.5rem | 24px |
| `4w` | 2rem | 32px |
| `5w` | 2.5rem | 40px |
| `6w` | 3rem | 48px |
| `7w` | 3.5rem | 56px |
| `8w` | 4rem | 64px |
| `9w` | 4.5rem | 72px |
| ... | ... | ... |
| `15w` | 7.5rem | 120px |

*(Note: `v` usually stands for "vertical" or fine increments, `w` for standard widths/weights).*

## CSS Utility Classes
Syntax: `fr-<property>-<direction>-<value>`

### 1. Property (`property`)
- `m`: Margin
- `p`: Padding

### 2. Direction (`direction`)
- (empty): All sides
- `t`: Top
- `b`: Bottom
- `l`: Left
- `r`: Right
- `x`: Horizontal (Left + Right)
- `y`: Vertical (Top + Bottom)

### 3. Value (`value`)
Corresponds to the "w" or "v" values in the table.
- `2w` -> 1rem/16px
- `4w` -> 2rem/32px
- `0`: 0px
- `auto`: Auto (margins only)

**Examples:**
- `fr-m-2w`: Margin 16px on all sides.
- `fr-pb-4w`: Padding Bottom 32px.
- `fr-my-12v`: Class referencing a specific vertical spacing (if `12v` exists in full scale).

## Responsive spacing
Values allow breakpoints (though syntax like `fr-m-md-2w` is standard in libraries, exact DSFR syntax for responsive spacing relies on media queries or specific responsive classes if documented). The screenshot mentions "Propriété du point de rupture (md)".

Syntax: `fr-<property>-<direction>-<value>-<breakpoint>` ?
*Inferred from standard utility behavior, needs verification if syntax differs (e.g. `fr-m-2w-md`).*

## Titles & Paragraphs
Default margins are applied to Typography headers to ensure rhythm.

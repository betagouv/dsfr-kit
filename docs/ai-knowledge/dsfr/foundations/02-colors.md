# DSFR Color System

![Color Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765642494402.png)

## Palette Structure
The DSFR palette is organized into **4 families**, derived from the State's brand.

### 1. Primary Colors (Couleurs de la charte)
These are the core identity colors.
- **Blue France** (`--blue-france`): Main action color, branding.
- **Red Marianne** (`--red-marianne`): Brand elements, critical errors.
- **Grey** (`--grey`): Structure, text, borders, backgrounds.

### 2. System Colors (Couleurs système)
Strictly functional colors for state feedback.
- **Info** (Blue): Neutral information.
- **Success** (Green): Valid states.
- **Warning** (Orange): Attention required.
- **Error** (Red): Critical failures or blocking issues.

### 3. Neutral Colors (Gris)
A wide range of greys used for the majority of the interface (backgrounds, text hierarchies).

### 4. Illustrative Colors (Couleurs d'illustration)
Used for decoration, themed sections, and illustrations. They should **never** be used for text (accessibility/contrast issues) unless strictly verified.

**The 15 Illustrative Tones:**
1.  **Green Tilleul**
2.  **Green Verveine**
3.  **Green Emeraude**
4.  **Green Menthe**
5.  **Green Archipel**
6.  **Blue Ecume**
7.  **Blue Cumulus**
8.  **Purple Glycine**
9.  **Pink Macaron**
10. **Pink Tuile**
11. **Orange Terre Battue**
12. **Yellow Tournesol**
13. **Brown Cafe Creme**
14. **Brown Caramel**
15. **Brown Opera**
16. **Beige Gris Galet**

## Token Naming Convention
Formula: `[CONTEXT]-[USE]-[TINT]-[MODIFIER]`

- **CONTEXT**: `background`, `text`, `border`, `artwork`.
- **USE**: Functional role (e.g., `action`, `flat`, `default`, `contrast`).
- **TINT**: Family or specific color (e.g., `blue-france`, `grey`, `info`).
- **MODIFIER**: Level or state (e.g., `high`, `low`, `active`, `hover`).

## The Decision Palette (Key Tokens)

### 1. Backgrounds (`background`)
| Token Name | Usage |
| :--- | :--- |
| `background-default-grey` | Main page background (White in light mode). |
| `background-contrast-[COLOR]` | Alternating backgrounds (e.g., `--background-contrast-blue-france`). |
| `background-flat-[COLOR]` | Solid high-contrast backgrounds (e.g., `info`, `warning`). |
| `background-action-high-[COLOR]` | **Primary actions** (e.g., Buttons). High emphasis. |
| `background-action-low-[COLOR]` | **Secondary actions**. Low emphasis. |
| `background-alt-[COLOR]` | Alternative backgrounds for specific sections. |

### 2. Text (`text`)
| Token Name | Usage |
| :--- | :--- |
| `text-default-grey` |  Standard body text. |
| `text-title-grey` | Titles and headings. |
| `text-label-grey` | Labels and small details. |
| `text-mention-grey` | Meta-data, footnotes. |
| `text-inverted-grey` | Text on dark backgrounds (White in light mode). |
| `text-action-high-[COLOR]` | Text for primary actions (if not text-inverted). |

### 3. Artwork (`artwork`)
- `artwork-major-[COLOR]`: Main color for SVGs/Illustrations.
- `artwork-minor-[COLOR]`: Secondary detail color.

## Accentuation & Components
Some components **must** use the accent color (`blue-france` or verified alternatives):
- **Buttons** (`background-action-high`)
- **Links**
- **Callouts** (Mise en avant)
- **Tabs** (Onglets)
- **Side Menu** (Menu latéral)
- **Radio Buttons / Checkboxes**

## Dark Mode
Every token has a `light` and `dark` mapping.
- **Light**: High luminosity backgrounds, dark text.
- **Dark**: Dark backgrounds, light text.
- **Rule**: Never hardcode Hex values. Always use the functional tokens (e.g., `var(--text-action-high-blue-france)`) to guarantee automatic theming.

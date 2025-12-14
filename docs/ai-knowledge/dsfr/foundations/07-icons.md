# DSFR Icon System

![Icons Reference](/Users/luis/.gemini/antigravity/brain/2f480890-9099-4b2f-8249-e595a9baba11/uploaded_image_1765643069932.png)

## Source Library
The DSFR uses **Remix Icon**, an open-source library.
- **Style**: Geometry is generally simplified.
- **Included**: A subset is included in the DSFR bundle.
- **Missing Icons**: Can be downloaded from Remix Icon but must respect DSFR sizing rules.

## Usage Syntax
Icons are typicaly used as `span` elements or integrated into components (like buttons).

### Basic Implementation
```html
<span class="fr-icon-ancient-gate-fill" aria-hidden="true"></span>
<!-- With size modifier -->
<span class="fr-icon-ancient-gate-fill fr-icon--lg" aria-hidden="true"></span>
```

### Sizes
| Size Class | Description |
| :--- | :--- |
| `fr-icon--sm` | Small |
| `fr-icon--md` | Medium (Default) |
| `fr-icon--lg` | Large |

### Categories
The library is organized into functional categories to help locate icons:
- **System**: Arrows, checks, closes, settings.
- **Buildings**: Ancient gate, banks.
- **Business**: Briefcase, award.
- **Communication**: Chat, message.
- **Design**: Brush, pencil, palette.
- **Device**: Phone, computer.
- **Document**: Files, folders.
- **Editor**: Bold, italic, list.
- **Finance**: Money, card.
- **Health**: Stethoscope.
- **Logo**: Social media brands.
- **Map**: Pin, compass.
- **Media**: Play, pause, camera.
- **User**: Account, group.
- **Weather**: Sun, moon.

## Accessibility
- **Decorative**: Icons are almost always decorative. Use `aria-hidden="true"`.
- **Meaning**: If an icon conveys meaning alone (e.g. valid/invalid), ensure text or `aria-label` provides the context.

## Button Integration
When used in buttons, specific layout classes apply:
- `fr-btn--icon-left`: Icon to the left of text.
- `fr-btn--icon-right`: Icon to the right of text.

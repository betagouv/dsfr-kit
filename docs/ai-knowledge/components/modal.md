# Modal Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 14 |
| **SCSS Files** | 7 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `modalButton.id` | string | Yes | - | id de la modale |
| `modalButton.label` | string | Yes | - | Libellé du bouton de la modale |
| `modalButton.opened` | boolean | No | - | si true la modale est ouverte |
| `modal.id` | string | Yes | - | id de la modale |
| `modal.markup` | string | No | - | balise de la modale (dialog, div>) |
| `modal.titleMarkup` | string | No | - | balise du titre de la modale (h1, h2, h3, p, etc.), par défaut h1 |
| `modal.label` | string | Yes | - | Libellé du bouton de la modale |
| `modal.title` | string | Yes | - | titre de la modale |
| `modal.icon` | string | No | - | icône de la modale |
| `modal.body` | string | Yes | - | contenu de la modale |
| `modal.footer` | string | No | - | contenu du footer de la modale, généralement des boutons |
| `modal.customFooter` | string | No | - | contenu du footer custom de la modale |
| `modal.size` | string | No | - | modificateur de taille |
| `modal.classes` | array | No | - | classes supplémentaires sur la modale |
| `modal.closeButton` | object | No | - | paramètres du bouton de fermeture |
| `modal.attributes` | object | No | - | attributs supplémentaires sur la modale |
| `modal.concealingBackdrop` | boolean | No | - | par défaut considéré à true, si la valeur false est passée, la modale ne se referme pas au click sur le backdrop. |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `focus`
- `keyboard`

## Files

### Templates
- `modal/template/ejs/button.ejs`
- `modal/template/ejs/modal.ejs`

### Scripts
- `modal/script/modal/focus-trap.js`
- `modal/script/modal/modal-attribute.js`
- `modal/script/modal/modal-body.js`
- `modal/script/modal/modal-button.js`
- `modal/script/modal/modal-selector.js`
- `modal/script/modal/modal.js`
- `modal/script/modal/modals-group.js`
- `modal/template/stories/modal-arg-types.js`
- `modal/template/stories/modal.js`
- `modal/template/stories/modal.stories.js`
- `modal/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Keyboard accessibility**: Has keyboard event handlers that must be preserved.

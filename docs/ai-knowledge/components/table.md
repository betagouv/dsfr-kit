# Table Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 14 |
| **SCSS Files** | 23 |
| **EJS Templates** | 4 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `wrapper.table` | object | Yes | - | contenu du tableau |
| `wrapper.noCaption` | boolean | No | - | {default: false} cache le texte de la caption |
| `wrapper.noScroll` | boolean | No | - | {default: false} désactive le scroll horizontal |
| `wrapper.captionBottom` | boolean | No | - | {default: false} positionne la caption en bas |
| `wrapper.bordered` | boolean | No | - | {default: false} si true, ajoute des séparateurs entre chaque ligne |
| `wrapper.classes` | array | No | - | classes supplémentaires du composant |
| `wrapper.attributes` | object | No | - | attributs supplémentaires du composant |
| `wrapper.size` | string | No | - | modificateur de taille des espacements |
| `wrapper.header` | string | No | - | contenu de l'en-tête du composant |
| `wrapper.footer` | string | No | - | contenu du pied de page du composant |
| `table.thead` | array | Yes | - | tableau de données de l'en-tête du tableau |
| `table.tbodies` | array | Yes | - | tableau de données du corps du tableau |
| `table.caption` | string | Yes | - | titre du tableau |
| `table.captionDetail` | string | No | - | description précise du tableau |
| `table.id` | string | No | - | id du tableau |
| `table.classes` | array | No | - | classes supplémentaires du tableau |
| `table.attributes` | object | No | - | attributs supplémentaires du tableau |
| `tbody.table` | object | Yes | - | contenu du tableau |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `change`

## Files

### Templates
- `table/template/ejs/table-wrapper.ejs`
- `table/template/ejs/table.ejs`
- `table/template/ejs/tbody.ejs`
- `table/template/ejs/thead.ejs`

### Scripts
- `table/script/table/table-caption.js`
- `table/script/table/table-element.js`
- `table/script/table/table-emission.js`
- `table/script/table/table-row.js`
- `table/script/table/table-selector.js`
- `table/script/table/table-wrapper.js`
- `table/script/table/table.js`
- `table/template/stories/partials.js`
- `table/template/stories/table-arg-types.js`
- `table/template/stories/table.js`
- `table/template/stories/table.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

# Alert Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 10 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `alert.id` | String | Yes | - | id |
| `alert.title` | String | No | - | Titre de l'alerte |
| `alert.text` | string | No | - | Texte de decription de l'alerte |
| `alert.type` | String | Yes | - | type d'alerte [info/success/error/warning] |
| `alert.size` | String | No | - | taille de l'alerte [sm/md/lg] |
| `alert.classes` | array | No | - | Classes supplémentaires sur l'alerte |
| `alert.attribute` | object | No | - | Attributs supplémentaires sur l'alerte |
| `alert.dismissible` | boolean | No | - | Ajoute un bouton de fermeture |
| `alert.expanded` | boolean | No | true | valeur de l'attribut aria-expanded du bouton de fermeture de l'alerte |
| `alert.button` | object | No | - | Paramètre du bouton de fermeture (si dismissible: true) |
| `alert.alert` | boolean | No | - | Si true, ajoute un role alert (si insertion à la volée de l'alerte) |
| `alert.markup` | string | No | - | (défaut : h3) niveau de titre |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `alert/template/ejs/alert.ejs`

### Scripts
- `alert/template/stories/alert-arg-types.js`
- `alert/template/stories/alert.js`
- `alert/template/stories/alert.stories.js`
- `alert/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

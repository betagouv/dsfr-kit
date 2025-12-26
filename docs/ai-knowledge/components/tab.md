# Tab Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 15 |
| **SCSS Files** | 13 |
| **EJS Templates** | 3 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tab.id` | string | Yes | - | id du panel |
| `tab.content` | string | Yes | - | contenu du panel |
| `tab.isActive` | bool | Yes | - | défini le panel actif (1 max) |
| `tab.id` | string | Yes | - | id du panel |
| `tab.isActive` | bool | Yes | - | défini le panel actif (1 max) |
| `tab.icon` | string | No | - | nom de l'icone dans le bouton |
| `tab.label` | string | Yes | - | libellé du bouton |
| `tabs.classes` | array | No | - | classes du composant |
| `tabs.attributes` | object | No | - | attributs du composant |
| `tabs.viewportWidth` | boolean | No | - | Si true, défini la taille du composant en full width (sans marge en mobile) |

## State

Detected state patterns:
- `active`

## Events

Detected event handlers:
- `focus`
- `change`

## Files

### Templates
- `tab/template/ejs/tab-panel.ejs`
- `tab/template/ejs/tab.ejs`
- `tab/template/ejs/tabs.ejs`

### Scripts
- `tab/script/tab/tab-button.js`
- `tab/script/tab/tab-emission.js`
- `tab/script/tab/tab-keys.js`
- `tab/script/tab/tab-panel-direction.js`
- `tab/script/tab/tab-panel.js`
- `tab/script/tab/tab-selector.js`
- `tab/script/tab/tabs-group.js`
- `tab/script/tab/tabs-list.js`
- `tab/template/stories/partials.js`
- `tab/template/stories/tab.js`
- `tab/template/stories/tabs-arg-types.js`
- `tab/template/stories/tabs.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

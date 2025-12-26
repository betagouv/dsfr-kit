# Navigation Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 11 |
| **SCSS Files** | 14 |
| **EJS Templates** | 6 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `btn.collapseId` | string | Yes | - | id du collapse |
| `btn.label` | string | Yes | - | Libellé du bouton |
| `btn.active` | boolean | No | - | si true l'élément est actif |
| `link.label` | string | Yes | - | Libellé du lien |
| `link.id` | string | Yes | - | id du lien |
| `link.href` | string | Yes | - | url du lien |
| `link.blank` | boolean | No | false | si true, target '_blank' |
| `link.active` | boolean | No | - | si true l'élément est actif |
| `link.disabled` | boolean | No | - | si true l'élément est désactivé |
| `link.isPage` | boolean | No | - | si true aria-current: 'page', sinon aria-current: 'true' |
| `menu.collapseId` | string | Yes | - | id du collapse |
| `menu.leader` | object | No | - | Paramètres du leader du mega-menu (voir leader) |
| `menu.categories` | object | Yes | - | Paramètres des éléments de navigation |
| `menu.collapseId` | string | Yes | - | id du collapse |
| `menu.items` | array | Yes | - | tableau d'éléments de navigation (voir : menu, mega-menu, link, btn) |
| `navigation.id` | string | Yes | - | id de la barre de navigation |
| `navigation.arialabel` | string | No | - | aria-label de la barre de navigation |
| `navigation.items` | array | Yes | - | tableau d'éléments de navigation (voir : menu, mega-menu, link, btn) |
| `navigation.classes` | array | No | - | classes supplémentaires sur la navigation |
| `navigation.attributes` | object | No | - | attributs supplémentaires sur la navigation |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `click`
- `focus`
- `keyboard`

## Files

### Templates
- `navigation/template/ejs/navigation-btn.ejs`
- `navigation/template/ejs/navigation-leader.ejs`
- `navigation/template/ejs/navigation-link.ejs`
- `navigation/template/ejs/navigation-mega-menu.ejs`
- `navigation/template/ejs/navigation-menu.ejs`
- `navigation/template/ejs/navigation.ejs`

### Scripts
- `navigation/script/navigation/navigation-item.js`
- `navigation/script/navigation/navigation-mouse-position.js`
- `navigation/script/navigation/navigation-selector.js`
- `navigation/script/navigation/navigation.js`
- `navigation/template/stories/navigation-arg-types.js`
- `navigation/template/stories/navigation.js`
- `navigation/template/stories/navigation.stories.js`
- `navigation/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Keyboard accessibility**: Has keyboard event handlers that must be preserved.

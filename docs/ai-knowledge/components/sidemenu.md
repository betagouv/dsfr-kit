# Sidemenu Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 10 |
| **SCSS Files** | 14 |
| **EJS Templates** | 3 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `sidemenuItem.isCollapsible` | booolean | No | - | si true, l'élement est refermable |
| `sidemenuItem.collapseId` | string | Yes | - | id du collapse |
| `sidemenuItem.items` | array | No | - | tableau de sous éléments |
| `sidemenu.items` | array | Yes | - | tableau d'elements |
| `sidemenu.title` | String | Yes | - | titre du sidemenu |
| `sidemenu.modifier` | string | No | - | modifier de style de sidemenu ('sticky-full-height', 'sticky', 'right') |
| `sidemenu.buttonLabel` | object | Yes | - | libellé du bouton du sidemenu en mobile |

## State

Detected state patterns:
- `expanded`

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `sidemenu/template/ejs/sidemenu-list.ejs`
- `sidemenu/template/ejs/sidemenu-menu.ejs`
- `sidemenu/template/ejs/sidemenu.ejs`

### Scripts
- `sidemenu/script/sidemenu/sidemenu-item.js`
- `sidemenu/script/sidemenu/sidemenu-list.js`
- `sidemenu/script/sidemenu/sidemenu-selector.js`
- `sidemenu/template/stories/partials.js`
- `sidemenu/template/stories/sidemenu-arg-types.js`
- `sidemenu/template/stories/sidemenu.js`
- `sidemenu/template/stories/sidemenu.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Collapse/Expand pattern**: Uses DSFR core collapse logic. Target frameworks need toggle state management.

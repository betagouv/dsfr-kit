# Pagination Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 12 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `paginationItem.markup` | string | No | - | markup de l'élement (default: 'a')) |
| `paginationItem.type` | string | No | - | type d'élement (first, prev, next, last) |
| `paginationItem.href` | string | No | - | url de destination, si l'élement est un lien |
| `paginationItem.title` | string | No | - | attribut title de l'élement |
| `paginationItem.disabled` | boolean | No | - | si true, désactive l'élement |
| `paginationItem.hasLabel` | boolean | No | - | affiche le libellé dans l'élement |
| `paginationItem.hasLgLabel` | boolean | No | - | affiche le libellé dans l'élement à partir du breakpoint lg |
| `paginationItem.displayedLg` | boolean | No | - | affiche l'élement à partir du breakpoint lg |
| `paginationItem.classes` | array | No | - | Classe supplémentaires sur l'élement |
| `paginationItem.attributes` | object | No | - | Attributs supplémentaires sur l'élement |
| `pagination.first` | object | No | - | item first |
| `pagination.prev` | object | No | - | item précédent |
| `pagination.pages` | array | No | - | Paramètres des items de pagination par numéro de pages |
| `pagination.next` | object | No | - | item suivant |
| `pagination.last` | object | No | - | item last |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `pagination/template/ejs/pagination-item.ejs`
- `pagination/template/ejs/pagination.ejs`

### Scripts
- `pagination/template/stories/pagination-arg-types.js`
- `pagination/template/stories/pagination.js`
- `pagination/template/stories/pagination.stories.js`
- `pagination/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

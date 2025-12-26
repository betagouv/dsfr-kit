# Search Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 9 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `search.id` | string | Yes | - | id de la barre de recherche |
| `search.placeholder` | string | Yes | - | text du placeholder de l'input |
| `search.size` | string | No | - | modificateur de taille. |
| `search.input` | object | No | - | paramètres de l'input |
| `search.button` | object | No | - | paramètres du bouton de recherche |
| `search.attributes` | object | No | - | attributs spécifiques à rajouter sur le search |
| `search.classes` | array | No | - | classes spécifiques à rajouter sur le search |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `search/template/ejs/search.ejs`

### Scripts
- `search/template/stories/partials.js`
- `search/template/stories/search-arg-types.js`
- `search/template/stories/search.js`
- `search/template/stories/search.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

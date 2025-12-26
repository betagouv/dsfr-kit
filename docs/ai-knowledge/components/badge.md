# Badge Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 6 |
| **SCSS Files** | 14 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `badgesGroup.badges` | array | Yes | - | paramètres spécifique de chaque badge du groupe |
| `badgesGroup.size` | string | No | - | définie la taille des badges dans le groupe (default md) |
| `badgesGroup.groupMarkup` | string | No | - | Type de balise pour le groupe de badges (default ul) |
| `badgesGroup.classes` | array, optionnal | No | - | Classes suplémentaires sur le groupe de badges |
| `badgesGroup.attributes` | object, optionnal | No | - | Attributs suplémentaires sur le groupe de badges |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `badge/template/ejs/badge.ejs`
- `badge/template/ejs/badges-group.ejs`

### Scripts
- `badge/template/stories/badge-arg-types.js`
- `badge/template/stories/badge.js`
- `badge/template/stories/badge.stories.js`
- `badge/template/stories/badges-group-arg-types.js`
- `badge/template/stories/badges-group.stories.js`
- `badge/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

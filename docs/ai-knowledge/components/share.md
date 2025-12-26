# Share Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 14 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `meta.property` | string | Yes | - | meta property |
| `meta.content` | string | No | - | meta content |
| `meta.name` | string | No | - | meta name |
| `share.title` | string | Yes | - | titre du bloc de partage |
| `share.buttons` | array | Yes | - | Tableau de boutons de partage (name, label, attributes, icon) |
| `share.classes` | array | No | - | Classes sur le bloc share |
| `share.text` | string | No | - | Texte supplémentaire si désactivé |
| `share.disabled` | boolean | No | - | Désactive les liens de partage |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `click`

## Files

### Templates
- `share/template/ejs/share-meta.ejs`
- `share/template/ejs/share.ejs`

### Scripts
- `share/template/stories/partials.js`
- `share/template/stories/share-arg-types.js`
- `share/template/stories/share.js`
- `share/template/stories/share.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

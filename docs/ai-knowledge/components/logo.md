# Logo Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 1 (Simple) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 9 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `logo.classes` | array | No | - | classes spécifiques à rajouter sur le composant |
| `logo.title` | string | Yes | - | titre du logo (reprend le nom de l'entité) |
| `logo.size` | string | No | - | modificateur de taille. |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `logo/template/ejs/logo.ejs`

### Scripts
- `logo/template/stories/logo-arg-types.js`
- `logo/template/stories/logo.js`
- `logo/template/stories/logo.stories.js`
- `logo/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

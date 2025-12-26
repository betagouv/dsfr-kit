# Highlight Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 1 (Simple) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 7 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `highlight.text` | string | Yes | - | contenu texte |
| `highlight.id` | string | No | - | id du highlight |
| `highlight.size` | string | No | - | Taille du texte |
| `highlight.classes` | array | No | - | Classes supplémentaires sur le highlight |
| `highlight.accent` | string | No | - | Couleur d'accenturation du composant |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `highlight/template/ejs/highlight.ejs`

### Scripts
- `highlight/template/stories/highlight-arg-types.js`
- `highlight/template/stories/highlight.js`
- `highlight/template/stories/highlight.stories.js`
- `highlight/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

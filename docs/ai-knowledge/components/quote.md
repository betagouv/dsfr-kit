# Quote Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 8 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `quote.size` | string | No | - | Taille du texte de citation |
| `quote.text` | string | No | - | Texte de la citation |
| `quote.image` | object | No | - | {img, alt} de l'image |
| `quote.href` | string | No | - | url du texte original cité |
| `quote.author` | string | No | - | Nom de l'auteur |
| `quote.accent` | string | No | - | Couleur d'accentuation |
| `quote.sources` | array | No | - | Tableau de textes de détail |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `quote/template/ejs/quote.ejs`

### Scripts
- `quote/template/stories/partials.js`
- `quote/template/stories/quote-arg-types.js`
- `quote/template/stories/quote.js`
- `quote/template/stories/quote.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

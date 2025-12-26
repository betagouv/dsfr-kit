# Callout Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 1 (Simple) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 8 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `callout.title` | string | No | - | Titre de la mise en avant |
| `callout.text` | string | No | - | texte de la mise en avant |
| `callout.classes` | array | No | - | Classes suplémentaires sur la mise en avant |
| `callout.button` | string | No | - | label du bouton dans la mise en avant |
| `callout.buttonTpl` | string | No | - | Chemin vers le sample de bouton a utiliser |
| `callout.accent` | string | No | - | Couleur d'accenturation du composant |
| `callout.icon` | string | No | - | nom de l'icône du composant |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `callout/template/ejs/callout.ejs`

### Scripts
- `callout/template/stories/callout-arg-types.js`
- `callout/template/stories/callout.js`
- `callout/template/stories/callout.stories.js`
- `callout/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

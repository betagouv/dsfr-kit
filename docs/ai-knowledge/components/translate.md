# Translate Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 8 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `translate.id` | string | No | - | id de l'élément |
| `translate.markup` | string | No | - | Balise du sélecteur de langue |
| `translate.button` | object | No | - | Paramètres du bouton du sélecteur de langue (ex: {kind:3} pour un btn tertiary) |
| `translate.collapseId` | string | Yes | - | Id du menu à contrôler |
| `translate.languages` | array | Yes | - | Tableau d'objets langues |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `translate/template/ejs/languages.ejs`
- `translate/template/ejs/translate.ejs`

### Scripts
- `translate/template/stories/partials.js`
- `translate/template/stories/translate-arg-types.js`
- `translate/template/stories/translate.js`
- `translate/template/stories/translate.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

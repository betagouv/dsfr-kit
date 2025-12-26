# Connect Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 18 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `connect.id` | string | No | - | id du bouton connect |
| `connect.type` | string | No | - | attribut type du bouton connect |
| `connect.login` | string | Yes | - | texte "Se connecter avec" du bouton |
| `connect.brand` | string | Yes | - | texte "FranceConnect" du bouton |
| `connect.disabled` | boolean | No | - | si valeur true, bouton désactivé |
| `connect.markup` | String | No | - | tag html du bouton, si valeur 'a', génère un lien au lieu d'un bouton |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `connect/template/ejs/connect.ejs`

### Scripts
- `connect/template/stories/connect-arg-types.js`
- `connect/template/stories/connect.js`
- `connect/template/stories/connect.stories.js`
- `connect/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

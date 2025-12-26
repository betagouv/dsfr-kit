# Consent Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 8 |
| **SCSS Files** | 14 |
| **EJS Templates** | 3 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `consent.title` | string, recommended | No | - | Titre du bloc |
| `consent.body` | string | No | - | Texte explicatif, contenu textuel ou html |
| `consent.buttons` | array | No | - | paramètres spécifique de chaque bouton du groupe |
| `consent.classes` | array | No | - | Classes supplémentaires sur l'element |
| `consent.attributes` | object | No | - | Attributs supplémentaires sur l'element |
| `consent.finalities` | array | Yes | - | Tableau de finalités |
| `consent.buttons` | array | Yes | - | paramètres spécifique de chaque bouton du groupe |
| `consent.title` | string, recommended | No | - | Titre du placeholder |
| `consent.body` | string | No | - | Texte explicatif, contenu textuel ou html |
| `consent.button` | object | No | - | Pour modifier le bouton (par exemple le texte dans le bouton : button.label) |
| `consent.classes` | array | No | - | Classes supplémentaires sur l'element |
| `consent.attributes` | object | No | - | Attributs supplémentaires sur l'element |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `consent/template/ejs/consent-banner.ejs`
- `consent/template/ejs/consent-manager.ejs`
- `consent/template/ejs/consent-placeholder.ejs`

### Scripts
- `consent/template/stories/consent-banner-arg-types.js`
- `consent/template/stories/consent-banner.stories.js`
- `consent/template/stories/consent-modal-arg-types.js`
- `consent/template/stories/consent-modal.stories.js`
- `consent/template/stories/consent.js`
- `consent/template/stories/partials.js`
- `consent/template/stories/placeholder-arg-types.js`
- `consent/template/stories/placeholder.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

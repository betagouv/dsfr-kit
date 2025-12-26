# Radio Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | No |
| **JS Files** | 6 |
| **SCSS Files** | 17 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `radio.size` | string | No | - | la valeur "sm" permet d'opter pour de petites cases à cocher |
| `radio.rich` | boolean | No | - | si true, radio de type radio-rich |
| `radio.disabled` | boolean | No | - | si true, désactive le radio |
| `radio.classes` | array | No | - | Classes supplémentaires sur l'element |
| `radio.attributes` | object | No | - | Attributs supplémentaires sur l'element |
| `radio.image` | object | No | - | Paramètres de l'image sur le radio |
| `radio.element` | object | No | - | paramètre de chacun des radios d'un group |
| `radio.value` | String | No | - | valeur du radio |
| `radio.icon` | string | No | - | nom de l'icone illustrative |
| `radio.disabled` | boolean | No | - | si true, désactive le radio |
| `radio.checked` | boolean | No | - | si true, le radio est coché |
| `radio.id` | string | Yes | - | id du composant |
| `radio.name` | string | No | - | Attribut name du composant |
| `radio.hint` | string | No | - | Message d'aide |
| `radio.error` | string | No | - | Message d'erreur |
| `radio.valid` | string | No | - | Message de succès |
| `radio.customIcon` | string | No | - | style du label (ex: "background-image: url(...)") |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `radio/template/ejs/radio-group.ejs`
- `radio/template/ejs/radio.ejs`

### Scripts
- `radio/template/stories/partials.js`
- `radio/template/stories/radio-arg-types.js`
- `radio/template/stories/radio.js`
- `radio/template/stories/radio.stories.js`
- `radio/template/stories/radios-group-arg-types.js`
- `radio/template/stories/radios-group.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

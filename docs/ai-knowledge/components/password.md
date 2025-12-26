# Password Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 13 |
| **SCSS Files** | 9 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `password.id` | string | Yes | - | id du mot de passe |
| `password.input` | object | No | - | paramètres de l'input (voir composant input) |
| `input.id` | string | No | - | id de l'input |
| `input.label` | string | No | - | libellé de l'input |
| `input.name` | string | No | - | nom de l'input |
| `input.classes` | array | No | - | classes spécifiques à rajouter sur l'input |
| `input.labelClasses` | array | No | - | classes spécifiques à rajouter sur le label |
| `password.checkbox` | object | No | - | paramètres de la case à cocher afficher/masquer le mot de passe (voir composant checkbox) |
| `checkbox.id` | string | No | - | id de la case à cocher |
| `checkbox.label` | string | Yes | - | libellé de la case à cocher |
| `checkbox.ariaLabel` | string | No | - | libellé pour l'accessibilité |
| `checkbox.attributes` | object | No | - | attributs supplémentaires sur la case à cocher |
| `password.attributes` | object | No | - | attributs spécifiques à rajouter sur le mot de passe |
| `password.classes` | array | No | - | classes spécifiques à rajouter sur le mot de passe |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `keyboard`

## Files

### Templates
- `password/template/ejs/password.ejs`

### Scripts
- `password/script/password/password-emission.js`
- `password/script/password/password-input.js`
- `password/script/password/password-label.js`
- `password/script/password/password-selector.js`
- `password/script/password/password-toggle.js`
- `password/script/password/password.js`
- `password/template/stories/partials.js`
- `password/template/stories/password-arg-types.js`
- `password/template/stories/password.js`
- `password/template/stories/password.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Keyboard accessibility**: Has keyboard event handlers that must be preserved.

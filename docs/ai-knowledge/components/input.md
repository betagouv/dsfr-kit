# Input Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 6 |
| **SCSS Files** | 11 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input.valid` | string | No | - | message de validation |
| `input.error` | string | No | - | message d'erreur |
| `input.disabled` | boolean | No | - | champ désactivé |
| `input.groupId` | string | No | - | id du groupe |
| `input.groupAttributes` | object | No | - | attributs supplémentaires sur le groupe |
| `input.id` | string | Yes | - | id du label et de l'input, sert également à construire les ids des messages valid, error et hint |
| `input.label` | string | Yes | - | intitulé du label |
| `input.type` | string | Yes | - | type de l'input. si textarea, l'input est remplacé par un textarea |
| `input.name` | string | No | - | attribut name de l'input |
| `input.value` | string | No | - | attribut value de l'input |
| `input.autocomplete` | string | No | - | attribut autocomplete  de l'input |
| `input.describedby` | array | No | - | Tableau d'id d'éléments à lier avec un aria-describedby |
| `input.placeholder` | string | No | - | text du placeholder de l'input |
| `input.icon` | string | No | - | nom de l'icone qui sera placée sur la partie droite de l'input |
| `input.valid` | string | No | - | message de validation |
| `input.error` | string | No | - | message d'erreur |
| `input.messages` | array | No | - | array de messages |
| `input.hint` | string | No | - | message d'aide |
| `input.includeEmptyMessagesGroup` | boolean | No | - | true par défaut |
| `input.addon` | boolean | No | - | Si true, input complexe composé d'un addon (ex: pour associer un bouton) |
| `input.button` | object | No | - | attributs du bouton collé à l'input (si addon true) |
| `input.attributes` | object | No | - | attributs spécifiques à rajouter sur l'input |
| `input.classes` | array | No | - | classes spécifiques à rajouter sur l'input |
| `input.labelClasses` | Array | No | - | classes spécifiques à rajouter sur le label |
| `input.labelAttrs` | Object | No | - | attributs spécifiques à rajouter sur le label |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `submit`

## Files

### Templates
- `input/template/ejs/input-group.ejs`
- `input/template/ejs/input.ejs`

### Scripts
- `input/template/stories/input-arg-types.js`
- `input/template/stories/input.js`
- `input/template/stories/input.stories.js`
- `input/template/stories/inputs-group-arg-types.js`
- `input/template/stories/inputs-group.stories.js`
- `input/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

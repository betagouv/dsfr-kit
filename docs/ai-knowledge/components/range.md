# Range Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 16 |
| **SCSS Files** | 9 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `range.id` | string | Yes | - | id du curseur |
| `range.groupId` | string | No | - | id du groupe |
| `range.classes` | array | No | - | classes du groupe |
| `range.attributes` | object | No | - | attributs du groupe |
| `range.name` | string | Yes | - | attribut 'name' de l'input |
| `range.label` | string | Yes | - | texte du label |
| `range.hint` | string | No | - | texte de description sous le label |
| `range.size` | string | No | - | taille du curseur (valeur : 'sm') |
| `range.inputAttributes` | array | No | - | attributs de l'input |
| `range.min` | number | Yes | - | valeur minimale du curseur |
| `range.max` | number | Yes | - | valeur maximale du curseur |
| `range.value` | number | No | - | valeur initiale du curseur |
| `range.value2` | number | No | - | 2eme valeur initiale pour le curseur double |
| `range.step` | number | No | - | pas du curseur |
| `range.prefix` | string | No | - | texte avant la valeur du curseur |
| `range.suffix` | string | No | - | texte après la valeur du curseur |
| `range.isDouble` | boolean | No | - | mode double curseur [default: false] |
| `range.isStep` | boolean | No | - | mode curseur à pas [default: false] |
| `range.indicators` | boolean | No | - | Pour afficher les valeurs min et max sous le curseur [default: true] |
| `range.error` | string | No | - | ajoute un texte d'erreur |
| `range.valid` | string | No | - | ajoute un texte de succès |
| `range.disabled` | boolean | No | - | Permet de désactiver le champ [defaut: false] |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `change`

## Files

### Templates
- `range/template/ejs/range.ejs`

### Scripts
- `range/script/range/range-constraints.js`
- `range/script/range/range-emission.js`
- `range/script/range/range-input.js`
- `range/script/range/range-input2.js`
- `range/script/range/range-limit.js`
- `range/script/range/range-model.js`
- `range/script/range/range-output.js`
- `range/script/range/range-selector.js`
- `range/script/range/range.js`
- `range/template/stories/partials.js`
- `range/template/stories/range-arg-types.js`
- `range/template/stories/range.js`
- `range/template/stories/range.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

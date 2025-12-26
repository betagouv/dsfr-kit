# Checkbox Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 12 |
| **SCSS Files** | 11 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `checkbox.error` | string | No | - | message d'erreur |
| `checkbox.size` | string | No | - | la valeur sm permet d'opter pour de petites cases à cocher |
| `checkbox.valid` | string | No | - | message de succès |
| `checkbox.attributes` | object | No | - | attributs sur l'input |
| `checkbox.id` | string | Yes | - | id du checkbox |
| `checkbox.attributes` | object | No | - | attributs sur l'input |
| `checkbox.name` | object | No | - | attributs sur l'input |
| `checkbox.label` | string | No | - | label du checkbox |
| `checkbox.hint` | string | No | - | message de description additionel |
| `checkbox.disabled` | boolean | No | - | si true, désactive la checkbox |
| `input.includeEmptyMessagesGroup` | boolean | No | - | true par défaut |
| `checkbox.checked` | boolean | No | - | si true, la checkbox est cochée |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `change`

## Files

### Templates
- `checkbox/template/ejs/checkbox-group.ejs`
- `checkbox/template/ejs/checkbox.ejs`

### Scripts
- `checkbox/script/checkbox/checkbox-emission.js`
- `checkbox/script/checkbox/checkbox-input.js`
- `checkbox/script/checkbox/checkbox-selector.js`
- `checkbox/template/stories/checkbox-arg-types.js`
- `checkbox/template/stories/checkbox.js`
- `checkbox/template/stories/checkbox.stories.js`
- `checkbox/template/stories/checkboxes-group-arg-types.js`
- `checkbox/template/stories/checkboxes-group.stories.js`
- `checkbox/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

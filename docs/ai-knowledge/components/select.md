# Select Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 9 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `select.valid` | string | No | - | message de validation |
| `select.error` | string | No | - | message d'erreur |
| `select.disabled` | boolean | No | - | si true, désactive le select |
| `select.id` | string | Yes | - | id du label et du select, sert également à construire les ids des messages valid, error et hint |
| `select.label` | string | Yes | - | libellé du select |
| `select.optionGroups` | array | No | - | groupes d'options du select, un array d'objets avec : |
| `select.options` | array | No | - | options du select, un array d'objets avec : |
| `select.placeholder` | string | No | - | text du placeholder du select |
| `select.valid` | string | No | - | message de validation |
| `select.error` | string | No | - | message d'erreur |
| `select.hint` | string | No | - | message d'aide |
| `select.required` | boolean | No | - | attribut "aria-required" sur le select |
| `select.disabled` | boolena | No | - | attribut "disabled" sur le select |
| `select.autocomplete` | String | No | - | attribut "autocomplete" sur le select |
| `select.includeEmptyMessagesGroup` | boolean | No | - | true par défaut |
| `select.attributes` | object | No | - | attributs spécifiques à rajouter sur le select |
| `select.classes` | array | No | - | classes spécifiques à rajouter sur le select |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `select/template/ejs/select-group.ejs`
- `select/template/ejs/select.ejs`

### Scripts
- `select/template/stories/partials.js`
- `select/template/stories/select-arg-types.js`
- `select/template/stories/select.js`
- `select/template/stories/select.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

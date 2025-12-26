# Toggle Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 12 |
| **SCSS Files** | 12 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `toggle.hint` | string | No | - | texte additionel |
| `toggle.id` | string | Yes | - | id de l'input |
| `toggle.groupId` | string | No | - | id du groupe |
| `toggle.label` | string | Yes | - | libellé du toggle |
| `toggle.hint` | string | No | - | texte additionel |
| `toggle.border` | boolean | No | - | ajoute une bordure sous le toggle |
| `toggle.left` | boolean | No | - | place le libellé sur la gauche |
| `toggle.state` | boolean | No | - | ajoute les libellés "activé"/"désactivé" sous le champ |
| `toggle.disabled` | boolean | No | - | désactive le toggle |
| `toggle.checked` | boolean | No | - | coche le toggle |
| `toggle.inputAttr` | object | No | - | attributs supplémentaires sur l'input du toggle |
| `toggle.classes` | array | No | - | classes supplémentaires sur le toggle |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `toggle/template/ejs/toggle-group.ejs`
- `toggle/template/ejs/toggle.ejs`

### Scripts
- `toggle/script/toggle/toggle-input.js`
- `toggle/script/toggle/toggle-selector.js`
- `toggle/script/toggle/toggle-status-label.js`
- `toggle/template/stories/partials.js`
- `toggle/template/stories/toggle-arg-types.js`
- `toggle/template/stories/toggle.js`
- `toggle/template/stories/toggle.stories.js`
- `toggle/template/stories/toggles-group-arg-types.js`
- `toggle/template/stories/toggles-group.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

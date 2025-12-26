# Segmented Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 11 |
| **SCSS Files** | 10 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element.id` | string | Yes | - | id de l'élément |
| `element.label` | string | Yes | - | Libellé de l'input |
| `element.name` | string | No | - | attribut name de l'input |
| `element.value` | String | No | - | valeur de l'input |
| `element.icon` | string | No | - | nom de l'icône dans le label |
| `element.disabled` | boolean | No | - | si true, désactive l'élément [default: false] |
| `element.checked` | boolean | No | - | si true, l'élement est actif (1 seul possible par segmented) [default: false] |
| `element.classes` | array | No | - | classes supplémentaires sur l'élément |
| `element.attributes` | object | No | - | attributs supplémentaires sur l'élément |
| `segmented.elements` | array | Yes | - | Tableau d'éléments segmented-element |
| `segmented.legend` | string | Yes | - | Texte de la légende |
| `segmented.hint` | array | No | - | texte additionel dans la légende (uniquement si inlineLegend = false) |
| `segmented.size` | string | No | - | la valeur "sm" permet d'opter pour une taille plus petite |
| `segmented.legendInline` | boolean | No | - | si true, affiche la légende sur la même ligne que le contrôle segmenté [default: false] |
| `segmented.noLegend` | boolean | No | - | si true, n'affiche pas la légende [default: false] |
| `segmented.groupClasses` | array | No | - | Classes supplémentaires sur le groupe |
| `segmented.groupAttributes` | object | No | - | Attributs supplémentaires sur le groupe |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `segmented/template/ejs/segmented-element.ejs`
- `segmented/template/ejs/segmented.ejs`

### Scripts
- `segmented/script/segmented/segmented-element.js`
- `segmented/script/segmented/segmented-emission.js`
- `segmented/script/segmented/segmented-selector.js`
- `segmented/script/segmented/segmented.js`
- `segmented/template/stories/partials.js`
- `segmented/template/stories/segmented-arg-types.js`
- `segmented/template/stories/segmented.js`
- `segmented/template/stories/segmented.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

# Button Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 10 |
| **SCSS Files** | 23 |
| **EJS Templates** | 4 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `button.label` | string | Yes | - | contenu texte |
| `button.closeId` | string | Yes | - | id de l'élément à fermer |
| `button.title` | string | No | - | titre du lien |
| `button.id` | string | No | - | id de l'élément |
| `button.classes` | array | No | - | Classes supplémentaires sur l'élément |
| `button.label` | string | Yes | - | contenu texte |
| `button.title` | string | No | - | titre du bouton |
| `button.classes` | array | No | - | Classes suplémentaires sur le bouton |
| `button.attributes` | object | No | - | Attributs suplémentaires sur le bouton |
| `button.id` | string | No | - | id de l'élément |
| `button.label` | string | Yes | - | Libellé du bouton |
| `button.markup` | string | No | - | tag html du bouton (a/button/input), si non défini, button |
| `button.id` | string | No | - | id du bouton |
| `button.kind` | number | No | - | par défaut 1, qui équivaut au bouton primaire, sinon 2 pour secondaire, 3 pour tertiaire, et 4 pour tertiaire sans contour |
| `button.disabled` | boolean | No | - | si valeur true, bouton désactivé |
| `button.size` | string | No | - | modificateur de taille |
| `button.icon` | string | No | - | nom de l'icone dans le bouton |
| `button.iconPlace` | string | No | - | emplacement de l'icone |
| `button.classes` | array | No | - | Classes suplémentaires sur le bouton |
| `button.attributes` | object | No | - | Attributs suplémentaires sur le bouton |
| `button.tooltip` | object | No | - | Paramètres de l'infobulle associée au bouton |
| `buttonsGroup.buttons` | array | Yes | - | paramètres spécifique de chaque bouton du groupe |
| `buttonsGroup.groupMarkup` | string | No | - | si non défini, ul |
| `buttonsGroup.inline` | string|boolean | No | - | aligne les boutons horizontalement (dans la mesure du possible) |
| `buttonsGroup.align` | string | No | - | définie l'alignement horizontal des boutons dans le groupe |
| `buttonsGroup.size` | string | No | - | définie la taille des boutons dans le groupe (default md) |
| `buttonsGroup.equisized` | boolean | No | - | si valeur true, fixe la largeur des boutons a celle du plus grand |
| `buttonsGroup.reverse` | boolean | No | - | si valeur true, inverse l'ordre des boutons en mode inline |
| `buttonsGroup.classes` | array | No | - | Classes suplémentaires sur le groupe de boutons |
| `buttonsGroup.attributes` | object | No | - | Attributs suplémentaires sur le groupe de boutons |
| `buttonsGroup.iconPlace` | string | No | - | emplacement des icones sur le groupe de bouton |
| `buttonsGroup.iconPlace` | string | No | - | emplacement des icones sur le groupe de bouton |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `submit`

## Files

### Templates
- `button/template/ejs/button-close.ejs`
- `button/template/ejs/button-display.ejs`
- `button/template/ejs/button.ejs`
- `button/template/ejs/buttons-group.ejs`

### Scripts
- `button/script/button/button-selector.js`
- `button/template/stories/button-arg-types.js`
- `button/template/stories/button.js`
- `button/template/stories/button.stories.js`
- `button/template/stories/buttons-group-arg-types.js`
- `button/template/stories/buttons-group.stories.js`
- `button/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

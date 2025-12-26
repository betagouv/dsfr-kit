# Tag Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 12 |
| **SCSS Files** | 13 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tag.id` | string | No | - | id du tag |
| `tag.label` | string | Yes | - | contenu texte |
| `tag.href` | string | Yes | - | adresse url du lien |
| `tag.blank` | bool | No | - | si true, target prend la valeur _blank, sinon _self |
| `tag.title` | string | No | - | attribut title du tag |
| `tag.disabled` | boolean | No | - | si true, composant désactivé |
| `tag.type` | string | No | - | type de tag |
| `tag.pressable` | bool | No | - | si true, rend sélectionnable le composant |
| `tag.dismissible` | bool | No | - | si true, rend supprimable le composant |
| `tag.button` | boolean | No | - | si true, le composant est un bouton |
| `tag.size` | string | No | - | taille du composant |
| `tag.icon` | string | No | - | icon du lien |
| `tag.accent` | string | No | - | couleur d'accentuation |
| `tag.classes` | array | No | - | Classes suplémentaires sur le bouton |
| `tag.attributes` | object | No | - | Attributs suplémentaires sur le tag |
| `tagsGroup.tags` | array | Yes | - | paramètres spécifique de chaque tag du groupe |
| `tagsGroup.size` | string | No | - | définie la taille des tags dans le groupe (default md) |
| `tagsGroup.groupMarkup` | string | No | - | Type de balise pour le groupe de tags (default ul) |
| `tagsGroup.classes` | array, optionnal | No | - | Classes suplémentaires sur le groupe de tags |
| `tagsGroup.attributes` | object, optionnal | No | - | Attributs suplémentaires sur le groupe de tags |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `focus`
- `click`

## Files

### Templates
- `tag/template/ejs/tag.ejs`
- `tag/template/ejs/tags-group.ejs`

### Scripts
- `tag/script/tag/tag-dismissible.js`
- `tag/script/tag/tag-event.js`
- `tag/script/tag/tag-selector.js`
- `tag/template/stories/partials.js`
- `tag/template/stories/tag-arg-types.js`
- `tag/template/stories/tag.js`
- `tag/template/stories/tag.stories.js`
- `tag/template/stories/tags-group-arg-types.js`
- `tag/template/stories/tags-group.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

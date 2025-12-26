# Notice Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 8 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `notice.title` | String | Yes | - | Titre du bandeau |
| `notice.id` | String | No | - | Id du bandeau |
| `notice.desc` | string | No | - | Texte de decription de bandeau |
| `notice.link` | object | No | - | Paramètres du lien |
| `notice.type` | String | No | - | Type de bandeau [info/warning/alert/weather-orange/weather-red/weather-purple/kidnapping/cyberattack/attack/witness] |
| `notice.icon` | String | No | - | Nom de l'icône du bandeau ou false pour ne pas afficher d'icône |
| `notice.dismissible` | boolean | No | - | Ajoute un bouton de fermeture |
| `notice.button` | object | No | - | Paramètre du bouton de fermeture (si dismissible: true) |
| `notice.notice` | boolean | No | - | Si true, ajoute un role notice (si insertion à la volée du bandeau) |
| `notice.markup` | string | No | - | Balise de contenu du bandeau (p [default], h1, h2, h3, h4, h5, h6) |
| `notice.classes` | array | No | - | Classes supplémentaires sur le bandeau |
| `notice.attribute` | object | No | - | Attributs supplémentaires sur le bandeau |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `click`

## Files

### Templates
- `notice/template/ejs/notice.ejs`

### Scripts
- `notice/template/stories/notice-arg-types.js`
- `notice/template/stories/notice.js`
- `notice/template/stories/notice.stories.js`
- `notice/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

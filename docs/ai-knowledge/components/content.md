# Content Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 11 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content.size` | string | No | - | taille du contenu |
| `content.img` | object | No | - | paramètres de l'image |
| `content.svg` | string | No | - | image en svg |
| `content.vid` | object | No | - | paramètres de la vidéo |
| `content.caption` | string | No | - | paramètres de l'image |
| `content.link` | string | No | - | paramètre du lien sur le caption |
| `content.classes` | array | No | - | Classes supplémentaires sur l'élément |
| `content.attributes` | object | No | - | Attributs supplémentaires sur l'élément |
| `content.transcription` | object | No | - | Attributs de la transcription sur l'élément |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `content/template/ejs/media.ejs`

### Scripts
- `content/template/stories/content-arg-types.js`
- `content/template/stories/content.js`
- `content/template/stories/content.stories.js`
- `content/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

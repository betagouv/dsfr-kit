# Transcription Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 9 |
| **SCSS Files** | 10 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `transcription.id` | string | Yes | - | Identifiant du composant (lie le bouton au collapse). |
| `transcription.title` | string | No | - | titre de la modale de transcription. |
| `transcription.content` | string | No | - | contenu de la transcription. |
| `transcription.isExpanded` | boolean | No | false | le composant est-il ouvert au départ. |
| `transcription.modalId` | string | No | - | id de la modale de transcription. |
| `transcription.fullscreen` | string | No | - | libellé du bouton de plein écran. |
| `transcription.fullscreenAriaLabel` | string | No | - | libellé de l'attribut aria-label du bouton de plein écran. |
| `transcription.attributes` | object | No | - | attributs supplémentaires sur le composant. |

## State

Detected state patterns:
- `expanded`

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `transcription/template/ejs/transcription.ejs`

### Scripts
- `transcription/script/accordion/transcription-selector.js`
- `transcription/script/accordion/transcription.js`
- `transcription/template/stories/partials.js`
- `transcription/template/stories/transcription-arg-types.js`
- `transcription/template/stories/transcription.js`
- `transcription/template/stories/transcription.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Collapse/Expand pattern**: Uses DSFR core collapse logic. Target frameworks need toggle state management.

# Upload Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 1 (Simple) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 5 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `upload.id` | string | Yes | - | id de l'upload |
| `upload.name` | string | Yes | - | nom de l'input |
| `upload.label` | string | Yes | - | texte du label |
| `upload.hint` | string | No | - | texte de description sous le label |
| `upload.labelAttrs` | object | No | - | Pour passer des attributs au label |
| `upload.labelClasses` | array | No | - | Pour passer des classes au label |
| `upload.attributes` | array | No | - | Pour passer des attributs au input |
| `upload.error` | string | No | - | ajoute un texte d'erreur |
| `upload.valid` | string | No | - | ajoute un texte de succès |
| `upload.success` | string | No | - | ajoute un texte de succès |
| `upload.multiple` | boolean | No | - | Active la selection multiple de fichiers [defaut: false] |
| `upload.disabled` | boolean | No | - | Permet de désactiver le champ [defaut: false] |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `upload/template/ejs/upload.ejs`

### Scripts
- `upload/template/stories/partials.js`
- `upload/template/stories/upload-arg-types.js`
- `upload/template/stories/upload.js`
- `upload/template/stories/upload.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

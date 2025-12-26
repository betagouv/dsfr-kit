# Form Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 8 |
| **SCSS Files** | 15 |
| **EJS Templates** | 9 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element.path` | String | Yes | - | Chemin du template de l'élement |
| `element.data` | object | Yes | - | Paramètres de l'élément |
| `element.inline` | boolean | No | - | ajoute le modifier inline sur l'élement |
| `element.inlineMin` | boolean | No | - | ajoute le modifier inline-min sur l'élement |
| `element.modifier` | String | No | - | nom du modifieur de element, ex: 'postal' ou 'number' |
| `element.breakAfter` | boolean | No | - | ajoute un hr pour forcer le retour à la ligne |
| `element.attributes` | object | No | - | attributs spécifiques à rajouter sur le element |
| `element.classes` | array | No | - | classes spécifiques à rajouter sur le element |
| `fieldset.id` | string | Yes | - | id du fieldset |
| `fieldset.choice` | boolean | No | - | si true, la graisse du label devient normal |
| `fieldset.grid` | boolean | No | - | (default: false) Ajoute une grid-row autour des éléments |
| `fieldset.elements` | array | No | - | tableau d'éléments control (voir control) |
| `fieldset.disabled` | boolean | No | - | attribut disabled du composant |
| `fieldset.legend` | string | No | - | légende du composant |
| `fieldset.hint` | string | No | - | message de description additionel |
| `fieldset.error` | string | No | - | message d'erreur |
| `fieldset.valid` | string | No | - | message de succès |
| `fieldset.massages` | array | No | - | array de messages |
| `fieldset.includeEmptyMessagesGroup` | boolean | No | - | true par défaut |
| `fieldset.attributes` | object | No | - | attributs spécifiques à rajouter sur le fieldset |
| `fieldset.classes` | array | No | - | classes spécifiques à rajouter sur le fieldset |
| `legend.id` | string | Yes | - | id du fieldset |
| `legend.attributes` | object | No | - | attributs spécifiques à rajouter sur la legend |
| `legend.classes` | array | No | - | classes spécifiques à rajouter sur la legend |
| `form.id` | string | Yes | - | id du fieldset |
| `form.items` | array | No | - | tableau d'élément de control |
| `form.label` | array | No | - | Texte du aria-label du fieldset (required si pas de légende) |
| `form.legend` | string | No | - | légende du composant |
| `form.hint` | string | No | - | message de description additionel |
| `form.error` | string | No | - | message d'erreur |
| `form.valid` | string | No | - | message de succès |
| `form.attributes` | object | No | - | attributs spécifiques à rajouter sur le form |
| `form.classes` | array | No | - | classes spécifiques à rajouter sur le form |
| `hint.text` | string | Yes | - | texte additionel |
| `hint.id` | string | No | - | id du hint |
| `hint.attributes` | object | No | - | attributs spécifiques à rajouter sur le hint |
| `hint.classes` | array | No | - | classes spécifiques à rajouter sur le hint |
| `label.label` | string | Yes | - | texte du label |
| `label.id` | string | Yes | - | id de l'input référencé |
| `label.hint` | string | Yes | - | texte additionel dans le label |
| `label.classes` | array | No | - | Classes supplémentaires sur le label |
| `label.attributes` | object | No | - | Attributs supplémentaires sur le label |
| `message.id` | string | Yes | - | id de l'élément référencé |
| `message.type` | string | No | - | type du message d'erreur |
| `message.text` | string | No | - | contenu du message |
| `message.attributes` | object | No | - | attributs spécifiques à rajouter sur le message |
| `message.classes` | array | No | - | classes spécifiques à rajouter sur le message |
| `messagesGroup.id` | string, otpional | No | - | id de l'élément référencé |
| `messagesGroup.messages` | array | No | - | Array de messages |
| `messagesGroup.attributes` | object | No | - | attributs spécifiques à rajouter sur le message |
| `messagesGroup.classes` | array | No | - | classes spécifiques à rajouter sur le message |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `form/template/ejs/fieldset/fieldset-element.ejs`
- `form/template/ejs/fieldset/fieldset.ejs`
- `form/template/ejs/fieldset/legend.ejs`
- `form/template/ejs/form.ejs`
- `form/template/ejs/hint.ejs`
- `form/template/ejs/label.ejs`
- `form/template/ejs/message/builder.js.ejs`
- `form/template/ejs/message/message.ejs`
- `form/template/ejs/message/messages-group.ejs`

### Scripts
- `form/template/stories/fieldset.js`
- `form/template/stories/form-arg-types.js`
- `form/template/stories/form.js`
- `form/template/stories/form.stories.js`
- `form/template/stories/hint.js`
- `form/template/stories/label.js`
- `form/template/stories/message.js`
- `form/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

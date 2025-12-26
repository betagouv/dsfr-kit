# Card Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 9 |
| **SCSS Files** | 18 |
| **EJS Templates** | 7 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content.title` | string | Yes | - | Titre de la carte |
| `content.href` | string | No | - | href du lien de la carte |
| `content.noLink` | boolean | No | - | présence du lien |
| `content.description` | string | No | - | Description |
| `content.badgesGroup` | array | No | - | Groupe de badges (voir badge) |
| `content.tagsGroup` | array | No | - | Groupe de tags (voir tag) |
| `content.details` | array | No | - | Détails |
| `content.blank` | boolean | No | - | Ajoute l'attribut target="_blank" pour ouvrir le lien dans une nouvelle fenêtre, nécessite l'ajout d'un attribut title "intitulé - nouvelle fenêtre" |
| `content.markup` | string | No | - | (défaut : h3) niveau de titre |
| `content.assess` | String | No | - | remplissage automatique du poids et format du fichier à telecharger (true ou "bytes") |
| `content.downloadable` | boolean || string | No | - | Ajoute l'attribut download au lien, si string, ajoute la valeur comme nom de fichier |
| `content.lang` | boolean | No | - | Ajoute l'attribut hreflang au lien, pour définir la langue du document lié |
| `content.disabled` | boolean | No | - | Si true, retire le href du lien pour le désactiver |
| `content.attributes` | object | No | - | Attributs à ajouter au lien |
| `content.actionMarkup` | string | No | - | balise de l'actionneur du composant (a, button) |
| `content.actionTitle` | string | No | - | Attribut title de l'actionneur |
| `content.actionType` | string | No | - | Attribut type de l'actionneur |
| `end.details` | array | No | - | Détails |
| `footer.buttonsGroup` | object, optionnal | No | - | paramètres de configuration d'un groupe de boutons |
| `header.img` | object | No | - | paramètres de l'image |
| `header.vid` | object | No | - | paramètres de vidéo |
| `header.badgesGroup` | array | No | - | Groupe de badges (voir badge) |
| `start.badgesGroup` | array | No | - | Groupe de badges (voir badge) |
| `start.tagsGroup` | array | No | - | Groupe de tags (voir tag) |
| `start.details` | array | No | - | Détails |
| `card.content` | object | Yes | - | Contenu central de la carte |
| `card.header` | object, optionnal | No | - | Partie haute de la carte vertical, contenant l'image |
| `card.footer` | object, optionnal | No | - | Partie basse de la carte vertical, contenant les actions |
| `card.size` | string, optionnal | No | - | Taille de la carte |
| `card.enlarge` | boolean | No | - | si true, agrandi la zone de clic à toute la carte |
| `card.horizontal` | boolean || object | No | - | si true, passe la card en mode horizontal |
| `card.icon` | string or boolean | No | - | icône illustrative ou suppression de l'icon avec false |
| `card.variations` | array | No | - | variations ésthétiques de la carte (valeurs: accent, no-border, no-background, shadow) |
| `card.download` | boolean | No | - | Si true, carte de téléchargement |
| `card.classes` | array | No | - | Classes suplémentaires sur le composant |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `change`

## Files

### Templates
- `card/template/ejs/card-content.ejs`
- `card/template/ejs/card-details.ejs`
- `card/template/ejs/card-end.ejs`
- `card/template/ejs/card-footer.ejs`
- `card/template/ejs/card-header.ejs`
- `card/template/ejs/card-start.ejs`
- `card/template/ejs/card.ejs`

### Scripts
- `card/script/card/card-download.js`
- `card/script/card/card-selector.js`
- `card/template/stories/card-arg-types.js`
- `card/template/stories/card.js`
- `card/template/stories/card.stories.js`
- `card/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

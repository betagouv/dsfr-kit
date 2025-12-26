# Tile Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 9 |
| **SCSS Files** | 14 |
| **EJS Templates** | 6 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `content.title` | string | Yes | - | Titre de la carte |
| `content.description` | string | No | - | Description |
| `content.badgesGroup` | array | No | - | Groupe de badges (voir badge) |
| `content.tagsGroup` | array | No | - | Groupe de tags (voir tag) |
| `content.details` | array | No | - | Détails |
| `content.markup` | string | No | - | (défaut : h3) niveau de titre |
| `content.blank` | boolean | No | - | Ajoute l'attribut target="_blank" pour ouvrir le lien dans une nouvelle fenêtre, nécessite l'ajout d'un attribut title "intitulé - nouvelle fenêtre" |
| `content.downloadable` | boolean || string | No | - | Ajoute l'attribut download au lien, si string, ajoute la valeur comme nom de fichier |
| `content.lang` | string | No | - | Ajoute l'attribut hreflang au lien, pour définir la langue du document lié |
| `content.disabled` | boolean | No | - | Si true, retire le href du lien pour le désactiver |
| `content.assess` | String | No | - | Si true, remplissage automatique du poid et type de fichier à telecharger |
| `content.noLink` | boolean | No | - | Présence du lien |
| `content.attributes` | object | No | - | Attributs à ajouter au lien |
| `content.actionMarkup` | string | No | - | balise de l'actionneur du composant (a, button) |
| `content.actionTitle` | string | No | - | Attribut title de l'actionneur |
| `content.actionType` | string | No | - | Attribut type de l'actionneur |
| `end.details` | array | No | - | Détails |
| `header.pictogram` | object | No | - | paramètres du pictogram |
| `start.badgesGroup` | object | No | - | Groupe de badges (voir badge) |
| `start.tagsGroup` | object | No | - | Groupe de tags (voir tag) |
| `start.tag` | object | No | - | tag seul (voir tag) |
| `start.badge` | object | No | - | badge seul (voir tag) |
| `tile.markup` | string | No | - | (default: h3) Niveau de titre de la tuile |
| `tile.enlarge` | boolean | No | - | si true, agrandi la zone de clic à toute la tuile |
| `tile.download` | boolean | No | - | si true, passe la tuile en mode téléchargement |
| `tile.size` | string, optionnal | No | - | Taille de la tuile ("md" - default | "sm"). |
| `tile.horizontal` | boolean | No | - | si true, passe la tuile en mode horizontal |
| `tile.vertical` | string | No | - | si true, valeur de breakpoint du passage en mode vertical |
| `tile.id` | string | No | - | id de l'élément |
| `tile.variations` | array | No | - | variations de la tuile (valeurs : grey, no-border, no-background, shadow) |
| `tile.content` | object | No | - | Paramètres du contenu de la tuile |
| `tile.icon` | boolean | No | - | Si false, ajoute la classe fr-tile--no-icon pour désactiver l'icone associée au lien |
| `tile.attributes` | object | No | - | attributs de la tuile |
| `tile.classes` | array | No | - | Classes suplémentaires sur la tuile |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `change`

## Files

### Templates
- `tile/template/ejs/tile-content.ejs`
- `tile/template/ejs/tile-details.ejs`
- `tile/template/ejs/tile-end.ejs`
- `tile/template/ejs/tile-header.ejs`
- `tile/template/ejs/tile-start.ejs`
- `tile/template/ejs/tile.ejs`

### Scripts
- `tile/script/tile/tile-download.js`
- `tile/script/tile/tile-selector.js`
- `tile/template/stories/partials.js`
- `tile/template/stories/tile-arg-types.js`
- `tile/template/stories/tile.js`
- `tile/template/stories/tile.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

# Link Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | No |
| **JS Files** | 6 |
| **SCSS Files** | 23 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `link.label` | string | Yes | - | contenu texte |
| `link.markup` | string | No | - | balise de l'actionneur du composant (a, button) |
| `link.href` | string | Yes | - | adresse url du lien |
| `link.detail` | string | No | - | detail du lien de telechargement |
| `link.blank` | bool | No | - | si true, target prend la valeur _blank, sinon _self |
| `link.disabled` | boolean | No | - | si valeur true, link désactivé |
| `link.size` | string | No | - | taille du lien |
| `link.icon` | string | No | - | icon du lien |
| `link.download` | boolean | No | - | Si true, lien de téléchargement |
| `link.iconPlace` | string | No | - | emplacement de l'icone |
| `link.id` | string | No | - | id du lien |
| `link.attributes` | object | No | - | attributs spécifiques à rajouter sur le composant |
| `link.classes` | array | No | - | classes spécifiques à rajouter sur le composant |
| `link.assess` | bool | string | No | - | si true, ajoute l'attribut permettant le remplissage automatique des informations du fichier à télécharger. Si string, ajoute l'attribut avec la valeur de la string (ex: "bytes" pour les poids en bytes) |
| `link.hreflang` | string | No | - | code langue du fichier à télécharger |
| `linksGroup.links` | array | Yes | - | paramètres spécifique de chaque link du groupe |
| `linksGroup.size` | string | No | - | définie la taille des links dans le groupe (default md) |
| `linksGroup.classes` | array, optionnal | No | - | Classes suplémentaires sur le groupe de links |
| `linksGroup.attributes` | object, optionnal | No | - | Attributs suplémentaires sur le groupe de links |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `link/template/ejs/link.ejs`
- `link/template/ejs/links-group.ejs`

### Scripts
- `link/template/stories/link-arg-types.js`
- `link/template/stories/link.js`
- `link/template/stories/link.stories.js`
- `link/template/stories/links-group-arg-types.js`
- `link/template/stories/links-group.stories.js`
- `link/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

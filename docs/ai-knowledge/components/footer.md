# Footer Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 15 |
| **EJS Templates** | 6 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bottom.copyright` | string | Yes | - | texte de copyright |
| `bottom.links` | array | No | - | tableau de liens |
| `brand.logo` | object | No | - | Paramètres du logo bloc marque - voir composant logo src/component/logo/template/ejs/logo.ejs |
| `brand.operator` | object | No | - | Paramètres du logo opérateur - voir src/core/template/ejs/media/img.ejs |
| `brand.link` | object | No | - | Paramètre du lien du logo |
| `content.desc` | string | Yes | - | Contenu text/html du bloc de contenu |
| `content.links` | array | Yes | - | Tableau de liens |
| `partners.title` | string | Yes | - | Titre du bloc partenaire |
| `partners.mainPartner` | object | Yes | - | Paramètre de l'image du partenaire principal - voir src/core/template/ejs/media/img.ejs |
| `partners.subPartners` | array | Yes | - | Tableau de paramètre des images des partenaires secondaires - voir src/core/template/ejs/media/img.ejs |
| `top.categories` | object | Yes | - | Paramètre de catégories |
| `footer.id` | string | No | - | id du footer |
| `footer.top` | object | No | - | Paramètres du bloc top (menu) |
| `footer.brand` | object | No | - | Paramètres du bloc marque |
| `footer.content` | object | No | - | Paramètres du bloc de contenu (texte + lien) |
| `footer.partners` | object | No | - | Paramètres du bloc partenaire (logos) |
| `footer.bottom` | object | No | - | Paramètres du bloc bottom (liens et copyright) |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `footer/template/ejs/footer-bottom.ejs`
- `footer/template/ejs/footer-brand.ejs`
- `footer/template/ejs/footer-content.ejs`
- `footer/template/ejs/footer-partners.ejs`
- `footer/template/ejs/footer-top.ejs`
- `footer/template/ejs/footer.ejs`

### Scripts
- `footer/template/stories/footer-arg-types.js`
- `footer/template/stories/footer.js`
- `footer/template/stories/footer.stories.js`
- `footer/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

# Header Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 3 (Complex) |
| **Has JavaScript** | Yes |
| **JS Files** | 10 |
| **SCSS Files** | 17 |
| **EJS Templates** | 6 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `body.brand` | object | Yes | - | Paramètres du template brand |
| `tools.tools` | object | No | - | Paramètres du template tools (search, links) |
| `brand.service` | object | No | - | Paramètres des services |
| `brand.logo` | string | No | - | chemin du template logo, ou paramètres du logo bloc marque - voir composant logo src/component/logo/template/ejs/logo.ejs |
| `brand.operator` | object | No | - | Paramètres logo opérateur - voir src/core/template/ejs/media/img.ejs |
| `brand.navbar` | object | No | - | Paramètres de la navbar - voir navbar |
| `brand.link` | object | No | - | Paramètres du lien |
| `menu.navigation` | object | No | - | Paramètres du menu de navigation |
| `menu.tools` | object | No | - | Paramètres des tools (raccourcis) |
| `navbar.menu` | object | No | - | Paramètres du menu (mobile) |
| `navbar.search` | object | No | - | Paramètres de la barre de recherche (mobile) |
| `tools.links` | object | No | - | Paramètres des liens d'accès direct - voir links |
| `tools.translate` | object | No | - | Paramètres du sélecteur de langue - voir translate |
| `tools.toolsContent` | string | No | - | Permet d'ajouter du contenu custom dans le bloc tools |
| `tools.search` | object | No | - | Paramètres du bloc de recherche (voir compoosant search) |
| `header.id` | String | Yes | - | attribut id du header |
| `header.body` | object | Yes | - | Paramètres du template body |
| `header.menu` | object | No | - | Paramètres du template menu |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `header/template/ejs/header-body.ejs`
- `header/template/ejs/header-brand.ejs`
- `header/template/ejs/header-menu.ejs`
- `header/template/ejs/header-navbar.ejs`
- `header/template/ejs/header-tools.ejs`
- `header/template/ejs/header.ejs`

### Scripts
- `header/script/header/header-links.js`
- `header/script/header/header-modal.js`
- `header/script/header/header-selector.js`
- `header/template/stories/header-arg-types.js`
- `header/template/stories/header.js`
- `header/template/stories/header.stories.js`
- `header/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

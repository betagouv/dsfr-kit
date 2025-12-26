# Follow Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 14 |
| **EJS Templates** | 3 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `follow.classes` | array | Yes | - | Classes supplémentaires |
| `follow.attributes` | array | No | - | attributs spécifiques |
| `follow.socials` | object | No | - | données des réseaux sociaux (cf: socials.ejs) |
| `follow.newsletter` | object | No | - | données du bloc newsletter (cf: newletter.ejs) |
| `newsletter.title` | string | Yes | - | titre du bloc newsletter |
| `newsletter.desc` | string | No | - | description du bloc newsletter |
| `newsletter.form` | object | No | - | paramètres du formulaire champ/boutton (si type form) |
| `newsletter.button` | object | No | - | paramètres du boutton (si type button) |
| `socials.title` | string | Yes | - | titre du bloc réseaux sociaux |
| `socials.networks` | array | Yes | - | Tableau de réseaux sociaux |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `follow/template/ejs/follow.ejs`
- `follow/template/ejs/newsletter.ejs`
- `follow/template/ejs/socials.ejs`

### Scripts
- `follow/template/stories/follow-arg-types.js`
- `follow/template/stories/follow.js`
- `follow/template/stories/follow.stories.js`
- `follow/template/stories/partials.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

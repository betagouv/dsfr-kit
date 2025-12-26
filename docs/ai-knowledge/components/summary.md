# Summary Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 8 |
| **EJS Templates** | 3 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `summaryItem.href` | string | Yes | - | url ou ancre du lien |
| `summaryItem.label` | string | Yes | - | libellé du lien |
| `summaryItem.list` | array | No | - | Tableau de liens enfants (href, label) |
| `summary.list` | array | Yes | - | Tableau de liens enfants (href, label) |
| `summary.title` | String | Yes | - | Titre du sommaire |
| `summary.markup` | String | No | - | (default: h2) Niveau de titre |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `summary/template/ejs/summary-item.ejs`
- `summary/template/ejs/summary-list.ejs`
- `summary/template/ejs/summary.ejs`

### Scripts
- `summary/template/stories/partials.js`
- `summary/template/stories/summary-arg-types.js`
- `summary/template/stories/summary.js`
- `summary/template/stories/summary.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

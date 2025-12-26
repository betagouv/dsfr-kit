# Breadcrumb Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 9 |
| **SCSS Files** | 8 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `breadcrumb.id` | required | Yes | - | * breadcrumb.segments (array, required) : Tableau de données de chaque segment du fil d'Ariane |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `focus`

## Files

### Templates
- `breadcrumb/template/ejs/breadcrumb.ejs`

### Scripts
- `breadcrumb/script/breadcrumb/breadcrumb-selector.js`
- `breadcrumb/script/breadcrumb/breadcrumb.js`
- `breadcrumb/template/stories/breadcrumb-arg-types.js`
- `breadcrumb/template/stories/breadcrumb.js`
- `breadcrumb/template/stories/breadcrumb.stories.js`
- `breadcrumb/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.

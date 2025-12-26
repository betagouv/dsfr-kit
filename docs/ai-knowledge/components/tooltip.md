# Tooltip Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 11 |
| **SCSS Files** | 9 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tooltip.id` | string | Yes | - | Identifiant du composant (lie le bouton au collapse). |
| `tooltip.content` | string | No | - | contenu du composant |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

Detected event handlers:
- `click`
- `focus`
- `keyboard`
- `hover`

## Files

### Templates
- `tooltip/template/ejs/tooltip.ejs`

### Scripts
- `tooltip/script/tooltip/tooltip-event.js`
- `tooltip/script/tooltip/tooltip-referent.js`
- `tooltip/script/tooltip/tooltip-selector.js`
- `tooltip/script/tooltip/tooltip.js`
- `tooltip/template/stories/partials.js`
- `tooltip/template/stories/tooltip-arg-types.js`
- `tooltip/template/stories/tooltip.js`
- `tooltip/template/stories/tooltip.stories.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Keyboard accessibility**: Has keyboard event handlers that must be preserved.

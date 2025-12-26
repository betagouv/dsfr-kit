# Skiplink Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 1 (Simple) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 8 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `skiplink.items` | array | Yes | - | tableau de liens |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `skiplink/template/ejs/skiplinks.ejs`

### Scripts
- `skiplink/template/stories/partials.js`
- `skiplink/template/stories/skiplink-arg-types.js`
- `skiplink/template/stories/skiplink.js`
- `skiplink/template/stories/skiplink.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

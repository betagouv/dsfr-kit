# Accordion Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 2 (Medium) |
| **Has JavaScript** | Yes |
| **JS Files** | 12 |
| **SCSS Files** | 10 |
| **EJS Templates** | 2 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `accordion.id` | string | Yes | - | Identifiant de l'accordeon (lie le bouton au collapse). |
| `accordion.label` | string | Yes | - | Libellé du bouton |
| `accordion.content` | String | No | - | contenu du collapse |
| `accordion.isExpanded` | boolean | No | false | l'accordéon est-il ouvert au départ. |
| `accordionGroup.accordions` | array | Yes | - | tableau d'accordion |
| `accordionGroup.group` | boolean | No | - | permet de dégrouper les accordions |

## State

Detected state patterns:
- `expanded`

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `accordion/template/ejs/accordion.ejs`
- `accordion/template/ejs/accordions-group.ejs`

### Scripts
- `accordion/script/accordion/accordion-selector.js`
- `accordion/script/accordion/accordion.js`
- `accordion/script/accordion/accordions-group.js`
- `accordion/template/stories/accordion-arg-types.js`
- `accordion/template/stories/accordion.js`
- `accordion/template/stories/accordion.stories.js`
- `accordion/template/stories/accordions-group-arg-types.js`
- `accordion/template/stories/accordions-group.stories.js`
- `accordion/template/stories/partials.js`

## AST Extraction Notes

- **Requires behavior extraction**: JavaScript logic must be mapped to target framework patterns.
- **Collapse/Expand pattern**: Uses DSFR core collapse logic. Target frameworks need toggle state management.

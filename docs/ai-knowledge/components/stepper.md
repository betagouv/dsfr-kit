# Stepper Component Analysis

## Overview

| Attribute | Value |
|-----------|-------|
| **Complexity Tier** | 1 (Simple) |
| **Has JavaScript** | No |
| **JS Files** | 4 |
| **SCSS Files** | 10 |
| **EJS Templates** | 1 |

## Props

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `stepper.title` | string | Yes | - | Titre de l'indicateur d'étapes |
| `stepper.id` | String | No | - | Id du composant |
| `stepper.currentStep` | integer | Yes | - | Numéro de l'étape courrante |
| `stepper.stepCount` | integer | Yes | - | Nombre d'étapes |
| `stepper.nextStep` | String | Yes | - | Titre de la prochaine étape |
| `stepper.markup` | string | No | - | (défaut : h2) niveau de titre |

## State

*No interactive state detected (likely a static/presentational component).*

## Events

*No JavaScript events (no script directory).*

## Files

### Templates
- `stepper/template/ejs/stepper.ejs`

### Scripts
- `stepper/template/stories/partials.js`
- `stepper/template/stories/stepper-arg-types.js`
- `stepper/template/stories/stepper.js`
- `stepper/template/stories/stepper.stories.js`

## AST Extraction Notes

- **Purely presentational**: Can be extracted as a simple template without complex state management.

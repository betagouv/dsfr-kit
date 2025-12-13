# DSFR Foundations - Developer Viewpoint

## Prerequisites & Installation
The DSFR (Système de Design de l'État) can be installed via NPM or ZIP download.

### NPM Installation
1. Ensure `NodeJS` and `package.json` are present.
2. Install the package:
   ```bash
   npm install @gouvfr/dsfr --save
   ```

### Structure (`@gouvfr/dsfr`)
- `/dist`: Production-ready files (CSS, JS, fonts, icons).
- `/src`: Source files (SCSS, JS).

### Initialization
Import the DSFR styles and scripts into your project.

**CSS/SCSS**:
```scss
@import "@gouvfr/dsfr/dist/dsfr/dsfr.min.css";
```

**JavaScript**:
```javascript
import { dsfr } from '@gouvfr/dsfr';
```

## Methodology: BEM
DSFR strictly uses the **BEM (Block - Element - Modifier)** naming convention.
- **Block**: Top-level abstraction (e.g., `.parent`).
- **Element**: Child component, denoted by `__` (e.g., `.parent__element`).
- **Modifier**: Variation, denoted by `--` (e.g., `.parent--modifier`).

## Usage Principles
- Components are independent and can be used individually.
- Specific documentation exists for each component with HTML snippets.
- Contribution guidelines are available for proposing changes.

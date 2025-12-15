# Offline Documentation Extraction Strategy

Due to CloudFlare protections preventing automated access to `systeme-de-design.gouv.fr`, we can reliably extract the "Complete Knowledge Base" for any component directly from your local `node_modules`. The `@gouvfr/dsfr` package includes the source of truth for the documentation website.

## Strategy Overview

For any component `<component-name>` (e.g., `accordion`, `button`, `tab`), the documentation is structured within:
`node_modules/@gouvfr/dsfr/src/dsfr/component/<component-name>/_part/doc`

## Data Source Mapping

| Knowledge Base Section | Local Source File Path |
|------------------------|------------------------|
| **Presentation** | `<component>/_part/doc/index.md` <br> _Contains: Description, User Guidelines (Do's/Don'ts), Editorial Rules_ |
| **Design** | `<component>/_part/doc/design/index.md` <br> _Contains: Anatomy, Variations, States, Customization Rules_ <br> _Assets located in: `<component>/_part/doc/_asset/`_ |
| **Code** | `<component>/_part/doc/code/index.md` <br> _Contains: API, Classes, Events, Usage Examples_ <br> _Source Code: `<component>/script/`_ |
| **Accessibility** | `<component>/_part/doc/accessibility/index.md` <br> _Contains: Keyboard Interactions, ARIA Roles, Color Contrast, Screen Reader Notes_ |
| **Demo** | `node_modules/@gouvfr/dsfr/example/component/<component-name>/index.html` <br> _Contains: Official HTML structure and usage examples_ |

## Step-by-Step Retrieval

To generate a knowledge base for a new component (e.g., `button`):

1.  **Locate the Component**:
    `cd node_modules/@gouvfr/dsfr/src/dsfr/component/button/_part/doc`

2.  **Extract Content**:
    - **Presentation**: `cat index.md`
    - **Design**: `cat design/index.md`
    - **Code**: `cat code/index.md`
    - **Accessibility**: `cat accessibility/index.md`

3.  **Get Demo Code**:
    `cat node_modules/@gouvfr/dsfr/example/component/button/index.html`

## Benefits
- **No CAPTCHA/403 Errors**: Completely offline, file-system based.
- **Source of Truth**: This is the exact markdown used to build the official website.
- **Assets Available**: Images for "Do's & Don'ts" are available in `_asset` subdirectories.

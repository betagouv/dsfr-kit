# DSFR Tooling - Figma

## Libraries
The DSFR is distributed via the **Figma Community** as 3 files:
1. **Fondamentaux (Fundamentals)**: Colors, Text styles, Grids, Spacings, Icons.
2. **Composants (Components)**: UI Components.
3. **Pictogrammes (Pictograms)**: Illustrations.

## Setup Workflow
Since cross-organization shared libraries are no longer supported by Figma for the general public:
1. **Duplicate** the files from the Community to your "Drafts".
2. **Move** them to your Team Project.
3. **Publish** "Fondamentaux" first.
4. **Swap Libraries** in the "Composants" file to link it to your local "Fondamentaux".
5. **Publish** "Composants".

## Updates
When a new version is released:
1. Duplicate the new version files.
2. Use **Swap Libraries** in your project to point to the new version.
3. **Tip**: Keep "Swap default styles in instances" **unchecked** to preserve overrides.

## Usage Guidelines
- **Grids**: Use "Layout Grid" styles attached to Frames.
- **Tokens**: strictly adhere to tokens. Do **not** mix Dark/Light tokens manually.
- **Detaching**: Detaching symbols breaks automatic updates. Avoid if possible.

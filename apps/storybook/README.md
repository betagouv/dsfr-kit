# Storybook

This project contains the Storybook configuration for `dsfr-kit`. It includes both our custom lit components and the native DSFR stories (from `@gouvfr/dsfr`).

## Setup

To view the native DSFR stories, you need to clone and build the `dsfr` repository locally, as the stories rely on having the full source code and built assets available in a specific structure.

We have provided a script to automate this:

```bash
pnpm setup:dsfr
```

This script will:
1. Clone the `dsfr` repository into `.external/dsfr` (at the root of the workspace).
2. Install dependencies (using legacy peer deps to avoid conflicts).
3. Build the DSFR project to generate necessary configuration files (`pictogram.json`, `i18n.json`, etc.).

## Running Storybook

Once the setup is complete, you can run Storybook as usual:

```bash
pnpm storybook
```

## Troubleshooting

- **Missing Assets/Configs**: If you see errors about missing `pictogram.json` or `decorator.ejs`, ensure you have run `pnpm setup:dsfr` successfully.
- **Build Errors**: If the DSFR build fails, try deleting the `.external/dsfr` directory and running the setup script again.

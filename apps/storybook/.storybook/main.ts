// This file has been automatically migrated to valid ESM format by Storybook.
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/web-components-vite";
import { mergeConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);

console.log("!!! LOADING STORYBOOK MAIN CONFIG !!!");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  staticDirs: [
    { from: "../node_modules/@gouvfr/dsfr/dist", to: "dist" },
    { from: "../node_modules/@gouvfr/dsfr/example/img", to: "img" },
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          "@dsfr-kit/web-components",
          "lit",
          "lit/decorators.js",
          "lit/directives/class-map.js",
          "lit/directives/if-defined.js",
          "lit/directives/unsafe-html.js",
          "lit/static-html.js",
        ],
      },
      resolve: {
        // Ensure symlinks resolve to same physical path for pnpm deduplication
        preserveSymlinks: false,
        // Deduplicate lit to ensure single instance
        dedupe: ["lit"],
        alias: [
          {
            find: /.*\/tool\/example\/decorator\.ejs\?raw$/,
            replacement: `${path.resolve(
              __dirname,
              "../../../.external/dsfr/tool/example/decorator.ejs",
            )}?raw`,
          },
          {
            find: /.*\.config\/pictogram\.json\?raw$/,
            replacement: `${path.resolve(
              __dirname,
              "../../../.external/dsfr/.config/pictogram.json",
            )}?raw`,
          },
          {
            find: /.*\.config\/i18n\.json$/,
            replacement: path.resolve(
              __dirname,
              "../../../.external/dsfr/.config/i18n.json",
            ),
          },
          {
            find: /package\.json$/,

            customResolver(source: string, _importer: string | undefined) {
              // Only mock if importing from ejs-renderer.js or if it matches the specific relative path
              if (source.includes("../../../../../package.json")) {
                return path.resolve(
                  __dirname,
                  "../../../.external/dsfr/package.json",
                );
              }
              // null falls back to default resolution
              return null;
            },
          },
        ],
      },
    });
  },
};
export default config;

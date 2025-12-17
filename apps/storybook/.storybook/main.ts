import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/web-components-vite";
import type { Indexer } from "storybook/internal/types";
import { mergeConfig } from "vite";

console.log("!!! LOADING STORYBOOK MAIN CONFIG !!!");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../node_modules/@gouvfr/dsfr/src/dsfr/component/**/*.stories.js",
  ],
  addons: [],
  experimental_indexers: async (existingIndexers) => {
    const customIndexer: Indexer = {
      // Match DSFR stories
      test: /dsfr\/.*\.stories\.js$/i,
      createIndex: async (fileName, _opts) => {
        console.log("Custom Indexer visiting:", fileName);

        const content = await readFile(fileName, "utf-8");
        const titleMatch = content.match(/title:\s*['"](.+)['"]/);
        const storyExports = [...content.matchAll(/export const (\w+) =/g)];

        if (titleMatch && storyExports.length > 0) {
          const originalTitle = titleMatch[1];
          const title = originalTitle.replace("DSFR/Component/", "DSFR/");
          console.log(
            `Indexer: Changed title from '${originalTitle}' to '${title}'`,
          );

          // Generate manual ID
          const id = title
            .toLowerCase()
            .replace(/\//g, "-")
            .replace(/[^a-z0-9-]/g, "-");

          return storyExports.map((match) => {
            const exportName = match[1];
            const storyKebabName = exportName
              .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
              .toLowerCase();
            const storyId = `${id}--${storyKebabName}`;

            return {
              importPath: fileName,
              exportName,
              name: exportName,
              title: title,
              __id: storyId,
              tags: ["autodocs"],
              type: "story",
            };
          });
        }

        return [];
      },
    };
    // Prepend to ensure we catch these files before the default indexers
    return [customIndexer, ...(existingIndexers || [])];
  },
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
      resolve: {
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

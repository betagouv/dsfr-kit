import { mergeConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../node_modules/@gouvfr/dsfr/src/dsfr/component/**/*.stories.js",
	],
	addons: [],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	staticDirs: [
		{ from: "../node_modules/@gouvfr/dsfr/dist", to: "dist" },
		{ from: "../node_modules/@gouvfr/dsfr/example/img", to: "img" }
	],
	async viteFinal(config) {
		return mergeConfig(config, {
			resolve: {
				alias: [
					{
						find: /.*\/tool\/example\/decorator\.ejs\?raw$/,
						replacement: path.resolve(__dirname, '../../../.external/dsfr/tool/example/decorator.ejs') + '?raw'
					},
					{
						find: /.*\.config\/pictogram\.json\?raw$/,
						replacement: path.resolve(__dirname, '../../../.external/dsfr/.config/pictogram.json') + '?raw'
					},
					{
						find: /.*\.config\/i18n\.json$/,
						replacement: path.resolve(__dirname, '../../../.external/dsfr/.config/i18n.json')
					},
					{
						find: /package\.json$/,

						customResolver(source, importer) {
                            // Only mock if importing from ejs-renderer.js or if it matches the specific relative path
                            if (source.includes('../../../../../package.json')) {
                                return path.resolve(__dirname, '../../../.external/dsfr/package.json');
                            }
                            // null falls back to default resolution
                            return null;
                        }
					}
				]
			}
		});
	},
    experimental_indexers: async (existingIndexers) => {
        const dsfrIndexer = {
            test: /node_modules\/@gouvfr\/dsfr\/.*\.stories\.js$/,
            createIndex: async (fileName, options) => {
                const fs = await import('fs/promises');
                const content = await fs.readFile(fileName, 'utf-8');

                // Simple regex to extract the default export object
                // We assume standard JS structure as seen in the DSFR repo
                const titleMatch = content.match(/title:\s*['"](.+)['"]/);

                if (titleMatch) {
                    const originalTitle = titleMatch[1];
                    // Replace 'DSFR/Component/X' with 'DSFR/X'
                    const newTitle = originalTitle.replace('DSFR/Component/', 'DSFR/');

                    return [{
                        importPath: fileName,
                        exportName: 'default',
                        title: newTitle,
                         // We can also extract tags if needed, but Title is the main one
                        tags: ['autodocs']
                    }];
                }

                // Fallback to default behavior if regex fails (shouldn't happen for these controlled files)
                return existingIndexers.find(i => i.test.test(fileName))?.createIndex(fileName, options);
            },
        };
        return [dsfrIndexer, ...existingIndexers];
    }
};
export default config;

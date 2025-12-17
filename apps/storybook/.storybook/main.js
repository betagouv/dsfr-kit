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
	}
};
export default config;

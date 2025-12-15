/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
	stories: [
		"../src/stories/**/*.mdx",
		"../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [],
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
};
export default config;

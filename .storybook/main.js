/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../temp_output/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../test-output/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
export default config;

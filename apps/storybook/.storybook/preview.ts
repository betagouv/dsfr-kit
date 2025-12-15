import type { Preview } from "@storybook/web-components-vite";
import "@gouvfr/dsfr/dist/core/core.min.css";
import "@gouvfr/dsfr/dist/scheme/scheme.min.css";
// import "@gouvfr/dsfr/dist/dsfr.min.css"; // Removed for modular CSS test

const preview: Preview = {
	decorators: [
		(Story) => {
			document.documentElement.setAttribute("data-fr-theme", "light");
			return Story();
		},
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;

import type { Preview } from "@storybook/web-components";
import "@gouvfr/dsfr/dist/dsfr.min.css";

const preview: Preview = {
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

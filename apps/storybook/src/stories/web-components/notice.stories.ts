import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Web Components/Notice",
	component: "dsfr-notice",
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: [
				"info",
				"warning",
				"alert",
				"weather-orange",
				"weather-red",
				"weather-purple",
				"attack",
				"witness",
				"cyberattack",
			],
		},
		title: { control: "text" },
		description: { control: "text" },
		link: { control: "text" },
		linkLabel: { control: "text" },
		closeable: { control: "boolean" },
	},
	args: {
		type: "info",
		title: "Titre du bandeau",
		description: "",
		closeable: false,
		link: "",
		linkLabel: "Voir plus",
	},
};

export default meta;
type Story = StoryObj;

export const Info: Story = {
	args: {
		type: "info",
		description: "Ceci est une information importante pour l’utilisateur.",
	},
};

export const Warning: Story = {
	args: {
		type: "warning",
		title: "Travaux en cours",
		description: "Le service sera indisponible ce soir de 22h à minuit.",
	},
};

export const WeatherOrange: Story = {
	args: {
		type: "weather-orange",
		title: "Vigilance météo orange",
		description: "Orages violents prévus dans votre département.",
	},
};

export const WeatherRed: Story = {
	args: {
		type: "weather-red",
		title: "Vigilance météo rouge",
		description: "Restez chez vous, danger imminent.",
	},
};

export const Attack: Story = {
	args: {
		type: "attack",
		title: "Alerte attentat",
		description: "Attentat en cours. Suivez les instructions des FDO.",
	},
};

export const Witness: Story = {
	args: {
		type: "witness",
		title: "Appel à témoins",
		description: "La Police Nationale lance un appel à témoins.",
	},
};

export const WithLink: Story = {
	args: {
		type: "info",
		title: "Mise à jour majeure",
		description: "Une nouvelle version du site est disponible.",
		link: "https://example.com",
		linkLabel: "Découvrir les nouveautés",
		closeable: true,
	},
};

export const Closeable: Story = {
	args: {
		type: "info",
		title: "Bandeau fermable",
		closeable: true,
	},
};

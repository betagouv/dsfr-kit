import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Tile",
	component: "dsfr-tile",
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		description: { control: "text" },
		url: { control: "text" },
		imageUrl: { control: "text" },
		orientation: {
			control: "select",
			options: ["vertical", "horizontal", "horizontal-md", "horizontal-lg"],
		},
		noIcon: { control: "boolean" },
		disabled: { control: "boolean" },
		download: { control: "boolean" },
		small: { control: "boolean" },
		detail: { control: "text" },
	},
	args: {
		title: "Titre de la tuile",
		description: "Description de la tuile",
		url: "#",
		imageUrl: "",
		orientation: "vertical",
		noIcon: false,
		disabled: false,
		download: false,
		small: false,
		detail: "",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Horizontal: Story = {
	args: {
		orientation: "horizontal",
		imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
		imageAlt: "Placeholder image",
	},
};

export const WithImage: Story = {
	args: {
		imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
		imageAlt: "Placeholder image",
	},
};

export const Download: Story = {
	args: {
		download: true,
		title: "Télécharger le document",
		detail: "PDF - 2Mo",
		imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
		// Note: In real usage, download tiles usually use a specific pictogram SVG
	},
};

export const Small: Story = {
	args: {
		small: true,
		title: "Petite tuile",
	},
};

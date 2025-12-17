import type { Meta, StoryObj } from "@storybook/web-components-vite";

import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Web Components/Link",
	component: "dsfr-link",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		href: { control: "text" },
		target: { control: "text" },
		size: {
			control: "radio",
			options: ["sm", "md", "lg"],
		},
		disabled: { control: "boolean" },
		download: { control: "boolean" },
		downloadDetail: { control: "text", if: { arg: "download" } },
		downloadLabel: { control: "text", if: { arg: "download" } },
		icon: {
			control: "select",
			options: [
				"",
				"fr-icon-arrow-right-line",
				"fr-icon-download-line",
				"fr-icon-external-link-line",
				"fr-icon-mail-line",
			],
		},
		iconRight: { control: "boolean" },
	},
	args: {
		label: "Lien simple",
		href: "#",
		target: "_self",
		size: "md",
		disabled: false,
		download: false,
		icon: "",
		iconRight: false,
		downloadDetail: "PDF - 400ko",
		downloadLabel: "Télécharger",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Small: Story = {
	args: {
		size: "sm",
		label: "Petit lien",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		label: "Grand lien",
	},
};

export const WithIconLeft: Story = {
	args: {
		icon: "fr-icon-arrow-right-line",
		label: "Lien avec icône à gauche",
		iconRight: false,
	},
};

export const WithIconRight: Story = {
	args: {
		icon: "fr-icon-arrow-right-line",
		label: "Lien avec icône à droite",
		iconRight: true,
	},
};

export const External: Story = {
	args: {
		label: "Lien externe",
		target: "_blank",
		// Usually external links have an icon, DSFR adds it automatically via 'target=_blank' + styles?
		// Actually DsfrLink adds automatic rel attributes.
		// A manual icon might be needed for visual feedback if styles don't auto-add it.
	},
};

export const Download: Story = {
	args: {
		download: true,
		label: "le document",
		downloadDetail: "JPG - 400ko",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		label: "Lien désactivé",
	},
};

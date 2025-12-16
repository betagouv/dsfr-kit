import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Alert",
	component: "dsfr-alert",
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["info", "success", "warning", "error"],
		},
		title: { control: "text" },
		description: { control: "text" },
		size: {
			control: "radio",
			options: ["sm", "md"],
		},
		closeable: { control: "boolean" },
		headingLevel: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
	},
	args: {
		type: "info",
		title: "Titre de l’alerte",
		description: "",
		size: "md",
		closeable: false,
		headingLevel: "h3",
	},
};

export default meta;
type Story = StoryObj;

export const Information: Story = {
	args: {
		type: "info",
		description: "Ceci est une information importante pour l’utilisateur.",
	},
};

export const Success: Story = {
	args: {
		type: "success",
		title: "Succès",
		description: "L’opération a été effectuée avec succès.",
		closeable: true,
	},
};

export const Warning: Story = {
	args: {
		type: "warning",
		title: "Attention",
		description: "Veuillez vérifier les informations saisies.",
	},
};

export const ErrorAlert: Story = {
	args: {
		type: "error",
		title: "Erreur",
		description: "Une erreur critique est survenue.",
	},
};

export const Small: Story = {
	args: {
		type: "info",
		size: "sm",
		title: "Petite alerte sans description",
	},
};

export const Closeable: Story = {
	args: {
		type: "info",
		title: "Alerte fermable",
		description: "Cliquez sur la croix pour fermer cette alerte.",
		closeable: true,
	},
};

export const TitleOnly: Story = {
	args: {
		title: "Titre seul",
		description: "", // Explicitly empty
	},
};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Checkbox",
	component: "dsfr-checkbox",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
		small: { control: "boolean" },
		hint: { control: "text" },
		state: {
			control: "select",
			options: ["default", "error", "valid"],
		},
		message: { control: "text" },
	},
	args: {
		label: "Libellé de la case à cocher",
		checked: false,
		disabled: false,
		small: false,
		state: "default",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Checked: Story = {
	args: {
		label: "Option sélectionnée",
		checked: true,
	},
};

export const Small: Story = {
	args: {
		label: "Case à cocher petite taille (sm)",
		small: true,
	},
};

export const WithHint: Story = {
	args: {
		label: "Option avec description",
		hint: "Texte d'aide pour préciser l'option",
	},
};

export const ErrorState: Story = {
	args: {
		label: "Option en erreur",
		state: "error",
		message: "Message d'erreur",
	},
};

export const ValidState: Story = {
	args: {
		label: "Option valide",
		checked: true,
		state: "valid",
		message: "Message de succès",
	},
};

export const Disabled: Story = {
	args: {
		label: "Option désactivée",
		disabled: true,
		checked: true,
	},
};

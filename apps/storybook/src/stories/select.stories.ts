import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Select",
	component: "dsfr-select",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		name: { control: "text" },
		value: { control: "text" },
		options: { control: "object" },
		disabled: { control: "boolean" },
		hint: { control: "text" },
		state: {
			control: "select",
			options: ["default", "error", "valid"],
		},
		message: { control: "text" },
	},
	args: {
		label: "Libellé de la liste déroulante",
		options: [
			{ label: "Option 1", value: "1" },
			{ label: "Option 2", value: "2" },
			{ label: "Option 3", value: "3" },
			{ label: "Option 4 (désactivée)", value: "4", disabled: true },
		],
		disabled: false,
		state: "default",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Selected: Story = {
	args: {
		label: "Option pré-sélectionnée",
		value: "2",
	},
};

export const WithHint: Story = {
	args: {
		label: "Liste avec description",
		hint: "Texte d'aide pour la liste déroulante",
	},
};

export const Disabled: Story = {
	args: {
		label: "Liste désactivée",
		disabled: true,
		value: "1",
	},
};

export const ErrorState: Story = {
	args: {
		label: "Liste en erreur",
		state: "error",
		message: "Sélection invalide",
		value: "1",
	},
};

export const ValidState: Story = {
	args: {
		label: "Liste valide",
		state: "valid",
		message: "Sélection valide",
		value: "2",
	},
};

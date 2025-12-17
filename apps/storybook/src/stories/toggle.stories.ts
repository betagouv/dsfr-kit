import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Web Components/Toggle",
	component: "dsfr-toggle",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		checked: { control: "boolean" },
		disabled: { control: "boolean" },
		hint: { control: "text" },
		checkedLabel: { control: "text" },
		uncheckedLabel: { control: "text" },
		showStatusLabel: { control: "boolean" },
		labelLeft: { control: "boolean" },
		borderBottom: { control: "boolean" },
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		label: "Interrupteur",
		checked: false,
		disabled: false,
		hint: "Description optionnelle",
	},
};

export const Checked: Story = {
	args: {
		label: "Interrupteur activé",
		checked: true,
		disabled: false,
	},
};

export const Disabled: Story = {
	args: {
		label: "Interrupteur désactivé",
		checked: false,
		disabled: true,
	},
};

export const WithHint: Story = {
	args: {
		label: "Interrupteur avec description",
		checked: false,
		disabled: false,
		hint: "Texte d'aide pour donner plus de contexte à l'utilisateur",
	},
};

export const LabelLeft: Story = {
	parameters: {
		docs: {
			description: {
				story:
					"Le label peut être positionné à gauche avec la propriété `label-left`.",
			},
		},
	},
	args: {
		label: "Interrupteur avec label à gauche",
		checked: false,
		disabled: false,
		labelLeft: true,
		hint: "Description alignée",
	},
};

export const NoStatusLabel: Story = {
	parameters: {
		docs: {
			description: {
				story: "L'affichage du statut (activé/désactivé) peut être masqué.",
			},
		},
	},
	args: {
		label: "Interrupteur sans statut",
		checked: false,
		showStatusLabel: false,
	},
};

export const BorderBottom: Story = {
	parameters: {
		docs: {
			description: {
				story: "Ajoute une bordure en bas, utile dans les listes.",
			},
		},
	},
	args: {
		label: "Interrupteur avec bordure",
		checked: false,
		borderBottom: true,
	},
};

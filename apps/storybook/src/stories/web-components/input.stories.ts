import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Web Components/Input",
	component: "dsfr-input",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		value: { control: "text" },
		type: {
			control: "select",
			options: [
				"text",
				"email",
				"password",
				"number",
				"tel",
				"url",
				"date",
				"search",
			],
		},
		placeholder: { control: "text" },
		hint: { control: "text" },
		state: {
			control: "select",
			options: ["default", "error", "valid"],
		},
		message: { control: "text" },
		disabled: { control: "boolean" },
		textarea: { control: "boolean" },
		icon: {
			control: "select",
			options: [
				"",
				"fr-icon-user-line",
				"fr-icon-mail-line",
				"fr-icon-lock-line",
			],
		},
	},
	args: {
		label: "Libellé du champ",
		type: "text",
		state: "default",
		disabled: false,
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		placeholder: "Placeholder...",
	},
};

export const WithHint: Story = {
	args: {
		label: "Mot de passe",
		type: "password",
		hint: "Texte de description additionnel (ex: 8 caractères min)",
	},
};

export const TextArea: Story = {
	args: {
		label: "Message",
		textarea: true,
		placeholder: "Votre message...",
	},
};

export const ErrorState: Story = {
	args: {
		label: "Email",
		type: "email",
		value: "email@invalide",
		state: "error",
		message: "Format d'email incorrect",
	},
};

export const ValidState: Story = {
	args: {
		label: "Email",
		type: "email",
		value: "exemple@domain.com",
		state: "valid",
		message: "Email valide",
	},
};

export const Disabled: Story = {
	args: {
		label: "Champ désactivé",
		value: "Valeur non modifiable",
		disabled: true,
	},
};

export const WithIcon: Story = {
	args: {
		label: "Identifiant",
		value: "utilisateur",
		icon: "fr-icon-user-line",
	},
};

export const DateInput: Story = {
	args: {
		label: "Date de naissance",
		type: "date",
	},
};

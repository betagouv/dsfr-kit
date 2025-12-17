import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "@dsfr-kit/web-components";

const buttonCloseArgTypes = {
	buttonCloseLabel: {
		if: { arg: "dismissible", eq: true },
		control: "text",
		description: "Libellé du bouton de fermeture",
		table: {
			category: "button close",
			type: { summary: "string" },
		},
	},
	buttonCloseOnClick: {
		if: { arg: "dismissible", eq: true },
		control: "text",
		description:
			"Code JavaScript à exécuter lors du clic sur le bouton de fermeture",
		table: {
			category: "button close",
			type: { summary: "string" },
		},
	},
};

const alertArgTypes = {
	hasTitle: {
		control: "boolean",
		description: "L'alerte a un titre (obligatoire en taille md)",
		table: { type: { summary: "boolean" } },
	},
	title: {
		if: { arg: "hasTitle", eq: true },
		control: "text",
		description: "Titre de l'alerte",
		table: { type: { summary: "string" } },
	},
	hasDescription: {
		control: "boolean",
		description: "L'alerte a une description (obligatoire en taille sm)",
		table: { type: { summary: "boolean" } },
	},
	text: {
		if: { arg: "hasDescription", eq: true },
		control: "text",
		description: "Description de l'alerte",
		table: { type: { summary: "string" } },
	},
	type: {
		control: {
			type: "select",
			labels: {
				default: "Défaut",
				success: "Succès",
				error: "Erreur",
				info: "Information",
				warning: "Attention",
			},
		},
		description: "Type d'alerte",
		options: ["default", "success", "error", "info", "warning"],
		table: { type: { summary: "string" } },
	},
	size: {
		control: { type: "select" },
		description: "Taille de l'alerte",
		options: ["sm", "md"],
		table: { type: { summary: "string" } },
	},
	id: {
		control: "text",
		description: "Attribut 'id' de l'alerte",
		table: {
			category: "attributes",
			type: { summary: "string" },
		},
	},
	dismissible: {
		control: "boolean",
		description: "L'alerte est refermable",
		table: { type: { summary: "boolean" } },
	},
	icon: {
		if: { arg: "type", eq: "default" },
		control: "text",
		description: "Icône personnalisée sur l'alerte",
		table: { type: { summary: "string" } },
	},
	...buttonCloseArgTypes,
} as const;

const alertArgs = {
	hasTitle: true,
	hasDescription: true,
	title: "Lorem ipsum dolor",
	text: "sit amet, consectetur adipiscing elit. Nullam id purus nec purus ultricies lacinia. Nullam nec purus nec purus ultricies lacinia.",
	type: "default",
	size: "md",
	id: "",
	icon: "",
	dismissible: false,
	buttonCloseLabel: "Masquer le message",
	buttonCloseOnClick:
		"const alert = this.parentNode; alert.parentNode.removeChild(alert)",
};

interface AlertArgs {
	hasTitle: boolean;
	hasDescription: boolean;
	title: string;
	text: string;
	type: string;
	size: "sm" | "md";
	id: string;
	icon: string;
	dismissible: boolean;
	buttonCloseLabel: string;
	buttonCloseOnClick: string;
}

const render = (inputArgs: any) => {
	const args = inputArgs as AlertArgs;
	// Map 'default' type to 'info' or handle it if component supports it.
	const type = args.type === "default" ? "info" : args.type;

	return html`
    <dsfr-alert
      .title=${args.hasTitle ? args.title : ""}
      .type=${type}
      .size=${args.size}
      ?closeable=${args.dismissible}
      id=${args.id || nothing}
    >
      ${args.hasDescription ? unsafeHTML(args.text) : nothing}
    </dsfr-alert>
  `;
};

// Helper to render multiple alerts for stories that show a list
const renders = (argsArray: Partial<AlertArgs>[]) =>
	html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    ${argsArray.map((args) => render({ ...alertArgs, ...args } as AlertArgs))}
  </div>
`;

const meta: Meta = {
	title: "Web Components/Alert",
	component: "dsfr-alert",
	tags: ["autodocs"],
	argTypes: alertArgTypes as any, // Cast to any to avoid strict Storybook type incompatibility with custom DSFR argTypes structure if needed, or refine types.
	args: alertArgs,
	render: render,
};

export default meta;
type Story = StoryObj;

export const AlertStory: Story = {
	tags: ["!autodocs"],
	args: {},
};

export const TitleStory: Story = {
	tags: ["autodocs", "!dev"],
	args: {
		hasTitle: true,
		title: "Titre de l'alerte contenant l'intitulé de son type",
		hasDescription: false,
	},
};

export const DescriptionStory: Story = {
	tags: ["autodocs", "!dev"],
	args: {
		hasTitle: true,
		title: "Titre de l'alerte contenant l'intitulé de son type",
		hasDescription: true,
		text: "Texte de description de l'alerte",
	},
};

export const SuccessStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				type: "success",
				hasTitle: true,
				title: "Titre du message de succès",
				text: "Texte du message",
			},
		]),
};

export const ErrorStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				type: "error",
				hasTitle: true,
				title: "Titre du message d'erreur",
				text: "Texte du message",
			},
		]),
};

export const InformationStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				type: "info",
				hasTitle: true,
				title: "Titre du message d'information",
				text: "Texte du message",
			},
		]),
};

export const WarningStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				type: "warning",
				hasTitle: true,
				title: "Titre du message d'avertissement",
				text: "Texte du message",
			},
		]),
};

export const SizeSmStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				size: "sm",
				type: "success",
				hasTitle: false,
				hasDescription: true,
				text: "Succès : Description détaillée du message...",
			},
			{
				size: "sm",
				type: "error",
				hasTitle: false,
				hasDescription: true,
				text: "Erreur : Description détaillée du message...",
			},
			{
				size: "sm",
				type: "info",
				hasTitle: false,
				hasDescription: true,
				text: "Information : Description détaillée du message...",
			},
			{
				size: "sm",
				type: "warning",
				hasTitle: false,
				hasDescription: true,
				text: "Attention : Description détaillée du message...",
			},
		]),
};

export const SizeMdStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				hasTitle: true,
				type: "success",
				title: "Succès : Description détaillée du message...",
			},
			{
				hasTitle: true,
				type: "error",
				title: "Erreur : Description détaillée du message...",
			},
			{
				hasTitle: true,
				type: "info",
				title: "Information : Description détaillée du message...",
			},
			{
				hasTitle: true,
				type: "warning",
				title: "Attention : Description détaillée du message...",
			},
		]),
};

export const DismissibleStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				title: "Titre du message",
				hasTitle: true,
				hasDescription: true,
				text: "Cliquer sur la croix pour fermer l'alerte",
				dismissible: true,
			},
		]),
};

export const DismissibleNoJsStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				title: "Titre du message",
				hasTitle: true,
				text: "Cliquer sur la croix pour fermer l'alerte",
				dismissible: true,
				buttonCloseOnClick: "", // Use empty string instead of null for string type
			},
		]),
};

export const IconCustomStory: Story = {
	tags: ["autodocs", "!dev"],
	render: () =>
		renders([
			{
				type: "default",
				hasTitle: true,
				icon: "lock-fill",
			},
		]),
};

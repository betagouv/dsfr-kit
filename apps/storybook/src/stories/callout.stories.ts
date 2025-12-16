import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Callout",
	component: "dsfr-callout",
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		icon: {
			control: "select",
			options: ["", "fr-icon-information-line", "fr-icon-check-line"],
		},
		buttonLabel: { control: "text" },
		headingLevel: {
			control: "select",
			options: ["h2", "h3", "h4", "h5", "h6"],
		},
	},
	args: {
		title: "Titre de la mise en avant",
		icon: "",
		buttonLabel: "",
		headingLevel: "h3",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: (args) => `
        <dsfr-callout title="${args.title}" heading-level="${args.headingLevel}" icon="${args.icon}" button-label="${args.buttonLabel}">
            Les mises en avant permettent de valoriser une information importante au sein d’un contenu éditorial. Elles ne doivent pas être confondues avec les alertes ou les mises en exergue.
        </dsfr-callout>
    `,
};

export const WithIcon: Story = {
	render: (args) => `
        <dsfr-callout title="Mise en avant avec icône" icon="fr-icon-information-line">
            L'ajout d'une icône permet d'attirer davantage l'attention sur le contenu.
        </dsfr-callout>
    `,
};

export const WithButton: Story = {
	render: (args) => `
        <dsfr-callout title="Mise en avant avec action" button-label="En savoir plus">
            Il est possible d'ajouter un bouton d'action pour rediriger l'utilisateur vers un contenu connexe.
        </dsfr-callout>
    `,
};

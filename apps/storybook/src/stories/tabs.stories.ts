import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
	title: "Web Components/Tabs",
	component: "dsfr-tabs",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
	},
	args: {
		label: "Système d'onglets",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: (args) => html`
        <dsfr-tabs label=${args.label}>
            <dsfr-tab label="Onglet 1">
                <p>Contenu de l'onglet 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </dsfr-tab>
            <dsfr-tab label="Onglet 2">
                <p>Contenu de l'onglet 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </dsfr-tab>
            <dsfr-tab label="Onglet 3">
                <p>Contenu de l'onglet 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </dsfr-tab>
        </dsfr-tabs>
    `,
};

export const WithIcons: Story = {
	render: (args) => html`
        <dsfr-tabs label=${args.label}>
            <dsfr-tab label="Accueil" icon="fr-icon-home-4-line">
                <p>Contenu de l'onglet Accueil.</p>
            </dsfr-tab>
            <dsfr-tab label="Paramètres" icon="fr-icon-settings-5-line">
                <p>Contenu de l'onglet Paramètres.</p>
            </dsfr-tab>
            <dsfr-tab label="Notifications" icon="fr-icon-notification-3-line">
                <p>Contenu de l'onglet Notifications.</p>
            </dsfr-tab>
        </dsfr-tabs>
    `,
};

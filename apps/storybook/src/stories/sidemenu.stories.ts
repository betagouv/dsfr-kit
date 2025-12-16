import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
	title: "Components/Sidemenu",
	component: "dsfr-sidemenu",
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		sticky: { control: "boolean" },
		right: { control: "boolean" },
	},
	args: {
		title: "Titre de rubrique",
		sticky: false,
		right: false,
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: (args) => html`
        <div class="fr-grid-row">
            <div class="fr-col-12 fr-col-md-4">
                <dsfr-sidemenu .title=${args.title} .sticky=${args.sticky} .right=${args.right}>
                    <dsfr-sidemenu-link text="Accès direct 1" active></dsfr-sidemenu-link>
                    <dsfr-sidemenu-link text="Accès direct 2" href="#"></dsfr-sidemenu-link>

                    <dsfr-sidemenu-group title="Niveau 1">
                        <dsfr-sidemenu-link text="Niveau 2 - Lien 1" href="#"></dsfr-sidemenu-link>
                        <dsfr-sidemenu-link text="Niveau 2 - Lien 2" href="#"></dsfr-sidemenu-link>

                        <dsfr-sidemenu-group title="Niveau 2 - Groupe">
                            <dsfr-sidemenu-link text="Niveau 3 - Lien 1" href="#"></dsfr-sidemenu-link>
                            <dsfr-sidemenu-link text="Niveau 3 - Lien 2" href="#"></dsfr-sidemenu-link>
                        </dsfr-sidemenu-group>
                    </dsfr-sidemenu-group>

                    <dsfr-sidemenu-link text="Accès direct 3" href="#"></dsfr-sidemenu-link>
                </dsfr-sidemenu>
            </div>
            <div class="fr-col-12 fr-col-md-8">
                <div style="padding: 2rem;">
                    <h1>Contenu Principal</h1>
                    <p>Ceci est un exemple de contenu principal positionné à côté du menu latéral.</p>
                </div>
            </div>
        </div>
    `,
};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components"; // Register components
import { html } from "lit";

const meta: Meta = {
	title: "Components/Footer",
	component: "dsfr-footer",
	tags: ["autodocs"],
	argTypes: {
		desc: { control: "text" },
		accessibility: {
			control: "radio",
			options: [
				"non conforme",
				"partiellement conforme",
				"totalement conforme",
			],
		},
		operatorLogoSrc: { control: "text" },
	},
	args: {
		desc: "Une description courte et informative du service (3 lignes max).",
		accessibility: "non conforme",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const WithOperatorAndPartners: Story = {
	args: {
		operatorLogoSrc: "https://placehold.co/200x100?text=Operateur",
		operatorLogoAlt: "Logo Opérateur",
	},
	render: (args) => html`
        <dsfr-footer
            .desc=${args.desc}
            .accessibility=${args.accessibility}
            .operatorLogoSrc=${args.operatorLogoSrc}
            .operatorLogoAlt=${args.operatorLogoAlt}
        >
            <div slot="partners" class="fr-footer__partners-logos">
                <div class="fr-footer__partners-main">
                    <a class="fr-footer__partners-link" href="#">
                         <img class="fr-footer__logo" style="height: 5.625rem" src="https://placehold.co/100x100?text=Partenaire" alt="Logo Partenaire Principal" />
                    </a>
                </div>
                <div class="fr-footer__partners-sub">
                    <ul>
                        <li>
                            <a class="fr-footer__partners-link" href="#">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="https://placehold.co/100x100?text=P1" alt="Partenaire 1" />
                            </a>
                        </li>
                        <li>
                             <a class="fr-footer__partners-link" href="#">
                                <img class="fr-footer__logo" style="height: 5.625rem" src="https://placehold.co/100x100?text=P2" alt="Partenaire 2" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div slot="top-links" class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
                 <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">Catégorie 1</h3>
                    <ul class="fr-footer__top-list">
                         <li><a class="fr-footer__top-link" href="#">Lien 1</a></li>
                         <li><a class="fr-footer__top-link" href="#">Lien 2</a></li>
                    </ul>
                 </div>
                  <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
                    <h3 class="fr-footer__top-cat">Catégorie 2</h3>
                    <ul class="fr-footer__top-list">
                         <li><a class="fr-footer__top-link" href="#">Lien 3</a></li>
                         <li><a class="fr-footer__top-link" href="#">Lien 4</a></li>
                    </ul>
                 </div>
            </div>
        </dsfr-footer>
    `,
};

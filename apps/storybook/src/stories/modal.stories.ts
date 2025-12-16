import type { Meta, StoryObj } from "@storybook/web-components-vite";
import type { DsfrModal } from "@dsfr-kit/web-components";
import "@dsfr-kit/web-components"; // Ensure all components are registered
import { html } from "lit";

const meta: Meta = {
	title: "Components/Modal",
	component: "dsfr-modal",
	tags: ["autodocs"],
	argTypes: {
		modalTitle: { control: "text" },
		open: { control: "boolean" },
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		icon: { control: "text" },
	},
	args: {
		modalTitle: "Titre de la modale",
		open: false,
		size: "md",
		icon: "",
	},
	parameters: {
		actions: {
			handles: ["dsfr-close"],
		},
		docs: {
			story: {
				inline: false,
				iframeHeight: 500,
			},
		},
	},
};

export default meta;
type Story = StoryObj;

const Template: Story = {
	render: (args) => html`
        <dsfr-button @click=${(e: Event) => {
					const modal = (e.target as HTMLElement)
						.nextElementSibling as unknown as DsfrModal;
					modal.open = true;
				}}>
            Ouvrir la modale
        </dsfr-button>
        <dsfr-modal
            ?open=${args.open}
            modalTitle=${args.modalTitle}
            size=${args.size}
            icon=${args.icon}
            @dsfr-close=${(e: Event) => {
							(e.target as unknown as DsfrModal).open = false;
						}}
        >
            <p>Voici le contenu de la modale. Vous pouvez y mettre du texte, des images, ou d'autres composants.</p>
        </dsfr-modal>
    `,
};

export const Default: Story = {
	...Template,
};

export const Small: Story = {
	...Template,
	args: {
		size: "sm",
		modalTitle: "Petite modale",
	},
};

export const Large: Story = {
	...Template,
	args: {
		size: "lg",
		modalTitle: "Grande modale",
	},
};

export const WithActions: Story = {
	...Template,
	render: (args) => html`
        <dsfr-button @click=${(e: Event) => {
					const modal = (e.target as HTMLElement)
						.nextElementSibling as unknown as DsfrModal;
					modal.open = true;
				}}>
            Ouvrir la modale
        </dsfr-button>
        <dsfr-modal
            ?open=${args.open}
            modalTitle=${args.modalTitle}
            size=${args.size}
            @dsfr-close=${(e: Event) => {
							(e.target as unknown as DsfrModal).open = false;
						}}
        >
            <p>Cette modale contient des actions en bas de page.</p>
            <ul slot="footer" class="fr-btns-group fr-btns-group--right fr-btns-group--inline-reverse fr-btns-group--inline-lg fr-btns-group--icon-left">
                <li>
                    <dsfr-button>Valider</dsfr-button>
                </li>
                 <li>
                    <dsfr-button variant="secondary" @click=${(e: Event) => {
											(
												(e.target as HTMLElement).closest(
													"dsfr-modal",
												) as unknown as DsfrModal
											).open = false;
										}}>Annuler</dsfr-button>
                </li>
            </ul>
        </dsfr-modal>
    `,
};

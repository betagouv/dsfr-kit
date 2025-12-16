import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

// Helper to provide icon options (subset of DSFR icons)
const iconOptions = [
	"",
	"fr-icon-arrow-right-line",
	"fr-icon-warning-fill",
	"fr-icon-success-fill",
	"fr-icon-error-fill",
	"fr-icon-info-fill",
	"fr-icon-calendar-line",
	"fr-icon-map-pin-2-line",
];

const meta: Meta = {
	title: "Components/Card",
	component: "dsfr-card",
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		href: { control: "text" },
		description: { control: "text" },
		imgSrc: { control: "text" },
		imgAlt: { control: "text" },
		detail: { control: "text" },
		detailIcon: {
			control: "select",
			options: iconOptions,
		},
		endDetail: { control: "text" },
		endDetailIcon: {
			control: "select",
			options: iconOptions,
		},
		headingLevel: {
			control: "select",
			options: ["h2", "h3", "h4", "h5", "h6"],
		},
		horizontal: { control: "boolean" },
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		noIcon: { control: "boolean" },
		enlargeLink: { control: "boolean" },
	},
	args: {
		title: "Intitulé de la carte",
		href: "#",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et",
		imgSrc: "https://placehold.co/600x400/png",
		imgAlt: "Image placeholder",
		detail: "",
		detailIcon: "",
		endDetail: "",
		endDetailIcon: "",
		headingLevel: "h3",
		horizontal: false,
		size: "md",
		noIcon: false,
		enlargeLink: true,
	},
	render: (args) => html`
        <div style="max-width: 600px; margin: auto;">
            <dsfr-card
                title=${args.title}
                href=${args.href}
                description=${args.description}
                img-src=${args.imgSrc}
                img-alt=${args.imgAlt}
                detail=${args.detail}
                detail-icon=${args.detailIcon}
                end-detail=${args.endDetail}
                end-detail-icon=${args.endDetailIcon}
                heading-level=${args.headingLevel}
                ?horizontal=${args.horizontal}
                size=${args.size}
                ?no-icon=${args.noIcon}
                ?enlarge-link=${args.enlargeLink}
            >
            </dsfr-card>
        </div>
    `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		detail: "détail (optionnel)",
		detailIcon: "fr-icon-warning-fill",
	},
};

export const Horizontal: Story = {
	args: {
		horizontal: true,
		description:
			"Une carte horizontale s'adapte à la largeur. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
	},
	render: (args) => html`
        <div style="max-width: 800px; margin: auto;">
             <dsfr-card
                title=${args.title}
                href=${args.href}
                description=${args.description}
                img-src=${args.imgSrc}
                img-alt=${args.imgAlt}
                ?horizontal=${args.horizontal}
                size=${args.size}
                heading-level=${args.headingLevel}
            >
            </dsfr-card>
        </div>
    `,
};

export const Small: Story = {
	args: {
		size: "sm",
		title: "Petite carte",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		title: "Grande carte",
	},
};

export const KitchenSink: Story = {
	args: {
		title: "Carte Complète",
		description:
			"Cette carte démontre l'utilisation de toutes les propriétés disponibles : image, détails, icônes, et slots personnalisés.",
		detail: "Publié le 12/12/2024",
		detailIcon: "fr-icon-calendar-line",
		endDetail: "PDF - 400ko",
		endDetailIcon: "fr-icon-file-pdf-fill",
	},
	render: (args) => html`
         <div style="max-width: 600px; margin: auto;">
            <dsfr-card
                title=${args.title}
                href=${args.href}
                description=${args.description}
                img-src=${args.imgSrc}
                img-alt=${args.imgAlt}
                detail=${args.detail}
                detail-icon=${args.detailIcon}
                end-detail=${args.endDetail}
                end-detail-icon=${args.endDetailIcon}
                heading-level=${args.headingLevel}
                ?no-icon=${args.noIcon}
                ?enlarge-link=${args.enlargeLink}
            >
                <!-- Slots can still be mixed with props if needed, e.g. for Badges -->
                <div slot="badge">
                    <dsfr-badge variant="new" sm>Nouveau</dsfr-badge>
                </div>
                <div slot="footer">
                    <button class="fr-btn fr-btn--secondary fr-btn--sm">Télécharger</button>
                </div>
            </dsfr-card>
        </div>
    `,
};

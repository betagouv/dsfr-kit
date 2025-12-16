import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Card",
	component: "dsfr-card",
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		href: { control: "text" },
		horizontal: { control: "boolean" },
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
		noIcon: { control: "boolean" },
		enlargeLink: { control: "boolean" },
	},
	args: {
		title: "Titre de la carte",
		href: "#",
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
                ?horizontal=${args.horizontal}
                size=${args.size}
                ?no-icon=${args.noIcon}
                ?enlarge-link=${args.enlargeLink}
            >
                <div slot="image" class="fr-card__img">
                    <img class="fr-responsive-img" src="https://placehold.co/600x400/png" alt="" />
                </div>
                <span slot="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
            </dsfr-card>
        </div>
    `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Horizontal: Story = {
	args: {
		horizontal: true,
	},
	render: (args) => html`
        <div style="max-width: 800px; margin: auto;">
             <dsfr-card
                title=${args.title}
                href=${args.href}
                ?horizontal=${args.horizontal}
                size=${args.size}
                ?no-icon=${args.noIcon}
                ?enlarge-link=${args.enlargeLink}
            >
                <div slot="image" class="fr-card__img">
                    <img class="fr-responsive-img" src="https://placehold.co/600x400/png" alt="" />
                </div>
                <span slot="description">
                    Une carte horizontale s'adapte à la largeur. Lorem ipsum dolor sit amet.
                </span>
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

export const NoIcon: Story = {
	args: {
		noIcon: true,
		title: "Carte sans flèche",
	},
};

export const WithBadges: Story = {
	render: (args) => html`
        <div style="max-width: 600px;">
            <dsfr-card title=${args.title} href=${args.href}>
                <div slot="image" class="fr-card__img">
                     <img class="fr-responsive-img" src="https://placehold.co/600x400/png" alt="" />
                </div>
                <div slot="badge">
                    <dsfr-badge variant="success" sm>Nouveau</dsfr-badge>
                </div>
                <span slot="description">
                    Carte avec un badge dans la zone de contenu.
                </span>
            </dsfr-card>
        </div>
    `,
};

export const WithActions: Story = {
	render: (args) => html`
        <div style="max-width: 600px;">
            <dsfr-card title=${args.title} href=${args.href}>
                <span slot="description">
                    Carte avec des actions en bas (boutons).
                </span>
                <div slot="footer">
                    <button class="fr-btn fr-btn--secondary">Action 1</button>
                    <button class="fr-btn">Action 2</button>
                </div>
            </dsfr-card>
        </div>
    `,
};

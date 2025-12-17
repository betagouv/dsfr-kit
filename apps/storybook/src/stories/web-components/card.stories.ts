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
  title: "Web Components/Card",
  component: "dsfr-card",
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    href: { control: "text" },

    hasDescription: { control: "boolean" },
    description: { control: "text" },

    imgSrc: { control: "text" },
    imgAlt: { control: "text" },

    hasDetailStart: { control: "boolean" },
    detail: { control: "text" },
    detailIcon: {
      control: "select",
      options: iconOptions,
    },

    hasDetailEnd: { control: "boolean" },
    endDetail: { control: "text" },
    endDetailIcon: {
      control: "select",
      options: iconOptions,
    },

    hasBadge: { control: "boolean" },
    hasTag: { control: "boolean" },

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

    hasDescription: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et",

    imgSrc: "https://placehold.co/600x400/png",
    imgAlt: "Image placeholder",

    hasDetailStart: false,
    detail: "",
    detailIcon: "",

    hasDetailEnd: false,
    endDetail: "",
    endDetailIcon: "",

    hasBadge: false,
    hasTag: false,

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

                ?has-description=${args.hasDescription}
                description=${args.description}

                img-src=${args.imgSrc}
                img-alt=${args.imgAlt}

                ?has-detail-start=${args.hasDetailStart}
                detail=${args.detail}
                detail-icon=${args.detailIcon}

                ?has-detail-end=${args.hasDetailEnd}
                end-detail=${args.endDetail}
                end-detail-icon=${args.endDetailIcon}

                ?has-badge=${args.hasBadge}
                ?has-tag=${args.hasTag}

                heading-level=${args.headingLevel}
                ?horizontal=${args.horizontal}
                size=${args.size}
                ?no-icon=${args.noIcon}
                ?enlarge-link=${args.enlargeLink}
            >
                ${args.hasBadge ? html`<div slot="badge"><dsfr-badge variant="new" sm>Badge</dsfr-badge></div>` : ""}
                ${args.hasTag ? html`<div slot="tag"><dsfr-tag label="Tag"></dsfr-tag></div>` : ""}
            </dsfr-card>
        </div>
    `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    hasDetailStart: true,
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

                ?has-description=${args.hasDescription}
                description=${args.description}

                img-src=${args.imgSrc}
                img-alt=${args.imgAlt}

                ?has-detail-start=${args.hasDetailStart}
                ?has-detail-end=${args.hasDetailEnd}

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
    hasDescription: true,

    hasDetailStart: true,
    detail: "Publié le 12/12/2024",
    detailIcon: "fr-icon-calendar-line",

    hasDetailEnd: true,
    endDetail: "PDF - 400ko",
    endDetailIcon: "fr-icon-file-pdf-fill",

    hasBadge: true,
    hasTag: true,
  },
  render: (args) => html`
         <div style="max-width: 600px; margin: auto;">
            <dsfr-card
                title=${args.title}
                href=${args.href}

                ?has-description=${args.hasDescription}
                description=${args.description}

                img-src=${args.imgSrc}
                img-alt=${args.imgAlt}

                ?has-detail-start=${args.hasDetailStart}
                detail=${args.detail}
                detail-icon=${args.detailIcon}

                ?has-detail-end=${args.hasDetailEnd}
                end-detail=${args.endDetail}
                end-detail-icon=${args.endDetailIcon}

                ?has-badge=${args.hasBadge}
                ?has-tag=${args.hasTag}

                heading-level=${args.headingLevel}
                ?no-icon=${args.noIcon}
                ?enlarge-link=${args.enlargeLink}
            >
                <div slot="badge">
                    <dsfr-badge variant="new" sm>Nouveau</dsfr-badge>
                </div>
                <!-- Updated to use dsfr-tag -->
                <div slot="tag">
                    <dsfr-tag label="Tag 1" type="Default"></dsfr-tag>
                    <dsfr-tag label="Tag 2" icon="fr-icon-success-line" size="sm"></dsfr-tag>
                </div>
                <div slot="footer">
                    <button class="fr-btn fr-btn--secondary fr-btn--sm">Télécharger</button>
                </div>
            </dsfr-card>
        </div>
    `,
};

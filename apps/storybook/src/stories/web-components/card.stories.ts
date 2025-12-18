import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import "@dsfr-kit/web-components";

const cardArgTypes = {
  title: {
    control: "text",
    description: "Intitulé de la carte",
  },
  hasDescription: {
    control: "boolean",
    description: "La carte a une description",
  },
  description: {
    if: { arg: "hasDescription", eq: true },
    control: "text",
    description: "Description de la carte",
  },
  hasDetailStart: {
    control: "boolean",
    description: "La carte a un détail en début de contenu",
  },
  detailStart: {
    if: { arg: "hasDetailStart", eq: true },
    control: "text",
    description: "Texte du détail de début",
  },
  hasDetailEnd: {
    control: "boolean",
    description: "La carte a un détail en fin de contenu",
  },
  detailEnd: {
    if: { arg: "hasDetailEnd", eq: true },
    control: "text",
    description: "Texte du détail de fin",
  },
  markup: {
    control: { type: "select" },
    options: ["h2", "h3", "h4", "h5", "h6"],
    description: "Niveau de titre",
  },
  enlarge: {
    control: "boolean",
    description: "La zone de clic est agrandie à toute la carte",
  },
  href: {
    control: "text",
    description: "URL de destination",
  },
  noLink: {
    control: "boolean",
    description: "Absence de lien",
  },
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
    description: "Taille de la carte",
  },
  horizontal: {
    control: "boolean",
    description: "Mode horizontal",
  },
  horizontalProportion: {
    if: { arg: "horizontal", eq: true },
    control: { type: "select" },
    options: ["default", "tier", "half"],
    description: "Proportion en mode horizontal",
  },
  imgSrc: {
    control: "text",
    description: "URL de l'image",
  },
  imgAlt: {
    control: "text",
    description: "Texte alternatif de l'image",
  },
  variations: {
    control: "select",
    options: ["none", "grey", "no-border", "no-background", "shadow"],
    description: "Variations esthétiques",
  },
  download: {
    control: "boolean",
    description: "Mode téléchargement",
  },
};

const cardArgs = {
  title: "Intitulé de la carte",
  hasDescription: true,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et",
  hasDetailStart: false,
  detailStart: "détail start",
  hasDetailEnd: false,
  detailEnd: "détail end",
  markup: "h3",
  enlarge: true,
  href: "#",
  noLink: false,
  size: "md",
  horizontal: false,
  horizontalProportion: "default",
  imgSrc: "https://gouvfr.github.io/dsfr/example/img/placeholder.16x9.png",
  imgAlt: "placeholder",
  variations: "none",
  download: false,
};

interface CardArgs {
  title: string;
  hasDescription: boolean;
  description: string;
  hasDetailStart: boolean;
  detailStart: string;
  hasDetailEnd: boolean;
  detailEnd: string;
  markup: "h2" | "h3" | "h4" | "h5" | "h6";
  enlarge: boolean;
  href: string;
  noLink: boolean;
  size: "sm" | "md" | "lg";
  horizontal: boolean;
  horizontalProportion: "default" | "tier" | "half";
  imgSrc: string;
  imgAlt: string;
  variations: string;
  download: boolean;
}

const render = (args: CardArgs) => {
  const horizontal = args.horizontal
    ? args.horizontalProportion === "default"
      ? true
      : args.horizontalProportion
    : false;
  const variations = args.variations !== "none" ? [args.variations] : [];

  return html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        .title=${args.title}
        .href=${args.href}
        ?no-link=${args.noLink}
        .description=${args.hasDescription ? args.description : ""}
        .img-src=${args.imgSrc}
        .img-alt=${args.imgAlt}
        .size=${args.size}
        .horizontal=${horizontal as any}
        ?download=${args.download}
        ?enlarge=${args.enlarge}
        .variations=${variations as any}
        .heading-level=${args.markup}
      >
        ${args.hasDetailStart ? html`<p slot="detail-start" class="fr-card__detail">${args.detailStart}</p>` : nothing}
        ${args.hasDetailEnd ? html`<p slot="detail-end" class="fr-card__detail">${args.detailEnd}</p>` : nothing}
      </dsfr-card>
    </div>
  `;
};

const meta: Meta<CardArgs> = {
  title: "Web Components/Card",
  component: "dsfr-card",
  tags: ["autodocs"],
  argTypes: cardArgTypes as any,
  args: cardArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<CardArgs>;

export const CardStory: Story = {
  name: "Card",
  tags: ["!autodocs"],
  args: {},
};

export const DefaultStory: Story = {
  name: "Default",
  tags: ["autodocs", "!dev"],
  args: {},
};

export const HorizontalStory: Story = {
  name: "Horizontal",
  tags: ["autodocs", "!dev"],
  args: {
    horizontal: true,
  },
};

export const VerticalStory: Story = {
  name: "Vertical",
  tags: ["autodocs", "!dev"],
  args: {
    horizontal: false,
  },
};

export const SizeSMStory: Story = {
  name: "Size SM",
  tags: ["autodocs", "!dev"],
  args: {
    size: "sm",
  },
};

export const NoIconStory: Story = {
  name: "No Icon",
  tags: ["autodocs", "!dev"],
  render: (args) => html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        .title=${args.title}
        .href=${args.href}
        .description=${args.description}
        .img-src=${args.imgSrc}
        ?no-icon=${true}
      ></dsfr-card>
    </div>
  `,
};

export const VariationsStory: Story = {
  name: "Variations",
  render: (args) => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <dsfr-card .title="Grey Variation" .variations=${["grey"] as any} .description=${args.description}></dsfr-card>
      <dsfr-card .title="No Border Variation" .variations=${["no-border"] as any} .description=${args.description}></dsfr-card>
      <dsfr-card .title="Shadow Variation" .variations=${["shadow"] as any} .description=${args.description}></dsfr-card>
    </div>
  `,
};

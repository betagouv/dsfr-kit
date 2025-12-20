import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import "@dsfr-kit/web-components";

import type { ArgTypes } from "@storybook/web-components-vite";

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

const cardArgTypes: ArgTypes<CardArgs> = {
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

const cardArgs: CardArgs = {
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
        .horizontal=${horizontal}
        ?download=${args.download}
        ?enlarge=${args.enlarge}
        .variations=${variations}
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
  argTypes: cardArgTypes,
  args: cardArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<CardArgs>;

export const CardStory: Story = {
  name: "CardStory",
  args: {},
};

export const SizesSmStory: Story = {
  name: "SizesSmStory",
  args: {
    size: "sm",
  },
};

export const SizeMdStory: Story = {
  name: "SizeMdStory",
  args: {
    size: "md",
  },
};

export const SizeLgStory: Story = {
  name: "SizeLgStory",
  args: {
    size: "lg",
  },
};

export const VerticalStory: Story = {
  name: "VerticalStory",
  args: {
    horizontal: false,
  },
};

export const HorizontalStory: Story = {
  name: "HorizontalStory",
  args: {
    horizontal: true,
  },
};

export const HorizontalSmStory: Story = {
  name: "HorizontalSmStory",
  args: {
    horizontal: true,
    size: "sm",
  },
};

export const HorizontalMdStory: Story = {
  name: "HorizontalMdStory",
  args: {
    horizontal: true,
    size: "md",
  },
};

export const HorizontalLgStory: Story = {
  name: "HorizontalLgStory",
  args: {
    horizontal: true,
    size: "lg",
  },
};

export const HorizontalTierStory: Story = {
  name: "HorizontalTierStory",
  args: {
    horizontal: true,
    horizontalProportion: "tier",
  },
};

export const HorizontalHalfStory: Story = {
  name: "HorizontalHalfStory",
  args: {
    horizontal: true,
    horizontalProportion: "half",
  },
};

export const DownloadStory: Story = {
  name: "DownloadStory",
  args: {
    download: true,
    enlarge: false,
    hasDetailEnd: true,
    detailEnd: "JPG – 128 ko",
  },
};

export const DownloadButtonStory: Story = {
  name: "DownloadButtonStory",
  args: {
    download: true,
    enlarge: false,
    hasDetailEnd: true,
    detailEnd: "JPG – 128 ko",
  },
  render: (args) => html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        .title=${args.title}
        .href=${args.href}
        .description=${args.description}
        .img-src=${args.imgSrc}
        .img-alt=${args.imgAlt}
        ?download=${true}
        ?enlarge=${false}
      >
        <p slot="detail-end" class="fr-card__detail">JPG – 128 ko</p>
        <div slot="footer">
            <dsfr-button label="Télécharger" icon="download-line" icon-place="left"></dsfr-button>
        </div>
      </dsfr-card>
    </div>
  `,
};

export const DownloadAssessFileStory: Story = {
  name: "DownloadAssessFileStory",
  args: {
    download: true,
    enlarge: false,
  },
  render: (args) => html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        .title=${args.title}
        .href=${args.href}
        .description=${args.description}
        .img-src=${args.imgSrc}
        .img-alt=${args.imgAlt}
        ?download=${true}
        ?enlarge=${false}
      >
        <p slot="detail-end" class="fr-card__detail">JPG – 128 ko</p>
      </dsfr-card>
    </div>
  `,
};

export const DownloadAssessFileEnglishStory: Story = {
  name: "DownloadAssessFileEnglishStory",
  args: {
    download: true,
  },
  render: (args) => html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        title="File download (English)"
        .href=${args.href}
        .description=${args.description}
        .img-src=${args.imgSrc}
        .img-alt=${args.imgAlt}
        ?download=${true}
        ?enlarge=${false}
      >
        <p slot="detail-end" class="fr-card__detail">JPG – 128 ko</p>
      </dsfr-card>
    </div>
  `,
};

export const ActionButtonsStory: Story = {
  name: "ActionButtonsStory",
  render: (args) => html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        .title=${args.title}
        .href=${args.href}
        .description=${args.description}
        .img-src=${args.imgSrc}
        .img-alt=${args.imgAlt}
        ?enlarge=${false}
      >
        <div slot="footer">
          <ul class="fr-btns-group fr-btns-group--inline-reverse fr-btns-group--inline-lg">
            <li><dsfr-button label="Label" kind="2"></dsfr-button></li>
            <li><dsfr-button label="Label" kind="1"></dsfr-button></li>
          </ul>
        </div>
      </dsfr-card>
    </div>
  `,
};

export const ActionLinksStory: Story = {
  name: "ActionLinksStory",
  render: (args) => html`
    <div style="max-width: 600px; margin: auto;">
      <dsfr-card
        .title=${args.title}
        .href=${args.href}
        .description=${args.description}
        .img-src=${args.imgSrc}
        .img-alt=${args.imgAlt}
        ?enlarge=${false}
      >
         <div slot="footer">
          <ul class="fr-btns-group fr-btns-group--inline-reverse fr-btns-group--inline-lg">
             <li><a href="#" class="fr-link">Label</a></li>
             <li><a href="#" class="fr-link">Label</a></li>
          </ul>
        </div>
      </dsfr-card>
    </div>
  `,
};

export const GreyCardStory: Story = {
  name: "GreyCardStory",
  args: {
    variations: "grey",
  },
};

export const NoBorderCardStory: Story = {
  name: "NoBorderCardStory",
  args: {
    variations: "no-border",
  },
};

export const NoBackgroundCardStory: Story = {
  name: "NoBackgroundCardStory",
  args: {
    variations: "no-background",
  },
};

export const ShadowedCardStory: Story = {
  name: "ShadowedCardStory",
  args: {
    variations: "shadow",
  },
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  // No built-in disabled support in prop, possibly simulates via css class or just inert behavior
  render: (args) => html`
     <div style="max-width: 600px; margin: auto;">
       <dsfr-card
         .title=${args.title}
         .description=${args.description}
         .img-src=${args.imgSrc}
         .img-alt=${args.imgAlt}
         no-link
       ></dsfr-card>
     </div>
   `,
  args: {
    noLink: true,
  },
};

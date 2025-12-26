import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

interface TileArgs {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  imageAlt: string;
  size: "md" | "sm";
  horizontal: boolean;
  verticalBreakpoint: "md" | "lg" | "";
  enlarge: boolean;
  noIcon: boolean;
  download: boolean;
  detail: string;
  actionMarkup: "a" | "button" | "false";
}

const tileArgTypes: ArgTypes<TileArgs> = {
  title: {
    control: "text",
    description: "Titre de la tuile",
  },
  description: {
    control: "text",
    description: "Description de la tuile",
  },
  url: {
    control: "text",
    description: "URL de la tuile",
  },
  imageUrl: {
    control: "text",
    description: "URL de l'image (pictogramme)",
  },
  imageAlt: {
    control: "text",
    description: "Alt de l'image",
  },
  size: {
    control: { type: "select" },
    options: ["md", "sm"],
    description: "Taille de la tuile",
  },
  horizontal: {
    control: "boolean",
    description: "Mode horizontal",
  },
  verticalBreakpoint: {
    control: { type: "select" },
    options: ["", "md", "lg"],
    description: "Breakpoint pour passage en vertical",
  },
  enlarge: {
    control: "boolean",
    description: "Zone de clic agrandie",
  },
  noIcon: {
    control: "boolean",
    description: "Désactive l'icône de lien",
  },
  download: {
    control: "boolean",
    description: "Mode téléchargement",
  },
  detail: {
    control: "text",
    description: "Détail de la tuile",
  },
  actionMarkup: {
    control: { type: "select" },
    options: ["a", "button", "false"],
    description: "Balise d'action",
  },
};

const tileArgs: TileArgs = {
  title: "Titre de la tuile",
  description: "Description (optionnelle)",
  url: "#",
  imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
  imageAlt: "",
  size: "md",
  horizontal: false,
  verticalBreakpoint: "",
  enlarge: true,
  noIcon: false,
  download: false,
  detail: "",
  actionMarkup: "a",
};

const render = (args: TileArgs) => html`
  <dsfr-tile
    .title=${args.title}
    .description=${args.description}
    .url=${args.url}
    .imageUrl=${args.imageUrl}
    .imageAlt=${args.imageAlt}
    .size=${args.size}
    ?horizontal=${args.horizontal}
    .verticalBreakpoint=${args.verticalBreakpoint}
    ?enlarge=${args.enlarge}
    ?noIcon=${args.noIcon}
    ?download=${args.download}
    .detail=${args.detail}
    .actionMarkup=${args.actionMarkup}
  ></dsfr-tile>
`;

const meta: Meta<TileArgs> = {
  title: "Lit/Tile",
  component: "dsfr-tile",
  tags: ["autodocs"],
  argTypes: tileArgTypes,
  args: tileArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<TileArgs>;

export const TileStory: Story = {
  name: "TileStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const SizeSmStory: Story = {
  name: "SizeSmStory",
  tags: ["autodocs"],
  args: {
    size: "sm",
    detail: "Détail (optionnel)",
  },
};

export const HorizontalStory: Story = {
  name: "HorizontalStory",
  tags: ["autodocs"],
  args: {
    horizontal: true,
    detail: "Détail (optionnel)",
  },
};

export const HorizontalVerticalFromMdStory: Story = {
  name: "HorizontalVerticalFromMdStory",
  tags: ["autodocs"],
  args: {
    horizontal: true,
    verticalBreakpoint: "md",
    detail: "Détail (optionnel)",
  },
};

export const DownloadStory: Story = {
  name: "DownloadStory",
  tags: ["autodocs"],
  args: {
    title: "Télécharger le document XX",
    download: true,
    detail: "PDF - 2Mo",
  },
};

export const NoLinkStory: Story = {
  name: "NoLinkStory",
  tags: ["autodocs"],
  args: {
    actionMarkup: "false",
    detail: "Détail (optionnel)",
  },
};

export const WithTagStory: Story = {
  name: "WithTagStory",
  tags: ["autodocs"],
  render: (args) => html`
    <dsfr-tile
      .title=${args.title}
      .description=${args.description}
      .url=${args.url}
      .imageUrl=${args.imageUrl}
    >
      <div class="fr-tile__start">
        <dsfr-tag label="Label tag"></dsfr-tag>
      </div>
    </dsfr-tile>
  `,
  args: {
    ...tileArgs,
    title: "Tuile avec Tag",
  },
};

export const WithBadgeStory: Story = {
  name: "WithBadgeStory",
  tags: ["autodocs"],
  render: (args) => html`
    <dsfr-tile
      .title=${args.title}
      .description=${args.description}
      .url=${args.url}
      .imageUrl=${args.imageUrl}
    >
        <div class="fr-tile__start">
            <dsfr-badge label="Label badge" type="info"></dsfr-badge>
        </div>
    </dsfr-tile>
  `,
  args: {
    ...tileArgs,
    title: "Tuile avec Badge",
  },
};

export const SizeSmHorizontalStory: Story = {
  name: "SizeSmHorizontalStory",
  tags: ["autodocs"],
  args: {
    size: "sm",
    horizontal: true,
    detail: "Détail (optionnel)",
  },
};

export const DownloadButtonStory: Story = {
  name: "DownloadButtonStory",
  tags: ["autodocs"],
  args: {
    title: "Télécharger le document XX",
    download: true,
    actionMarkup: "button",
    detail: "PDF - 2Mo",
  },
};

export const HorizontalNoLinkStory: Story = {
  name: "HorizontalNoLinkStory",
  tags: ["autodocs"],
  args: {
    horizontal: true,
    actionMarkup: "false",
    detail: "Détail (optionnel)",
  },
};

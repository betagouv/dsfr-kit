import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const tileArgTypes = {
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

const tileArgs = {
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

const render = (args: TileArgs) => html`
  <dsfr-tile
    .title=${args.title}
    .description=${args.description}
    .url=${args.url}
    .image-url=${args.imageUrl}
    .image-alt=${args.imageAlt}
    .size=${args.size}
    ?horizontal=${args.horizontal}
    .vertical-breakpoint=${args.verticalBreakpoint}
    ?enlarge=${args.enlarge}
    ?no-icon=${args.noIcon}
    ?download=${args.download}
    .detail=${args.detail}
    .action-markup=${args.actionMarkup}
  ></dsfr-tile>
`;

const meta: Meta<TileArgs> = {
  title: "Web Components/Tile",
  component: "dsfr-tile",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: tileArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: tileArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<TileArgs>;

export const TileStory: Story = {
  name: "Tile",
  args: {},
};

export const DefaultStory: Story = {
  name: "Default",
  tags: ["autodocs", "!dev"],
  args: {},
};

export const SizeSmStory: Story = {
  name: "Size SM",
  tags: ["autodocs", "!dev"],
  args: {
    size: "sm",
    detail: "Détail (optionnel)",
  },
};

export const HorizontalStory: Story = {
  name: "Horizontal",
  tags: ["autodocs", "!dev"],
  args: {
    horizontal: true,
    detail: "Détail (optionnel)",
  },
};

export const HorizontalVerticalFromMdStory: Story = {
  name: "Horizontal Vertical From Md",
  tags: ["autodocs", "!dev"],
  args: {
    horizontal: true,
    verticalBreakpoint: "md",
    detail: "Détail (optionnel)",
  },
};

export const DownloadStory: Story = {
  name: "Download",
  tags: ["autodocs", "!dev"],
  args: {
    title: "Télécharger le document XX",
    download: true,
    detail: "PDF - 2Mo",
  },
};

export const NoLinkStory: Story = {
  name: "No Link",
  tags: ["autodocs", "!dev"],
  args: {
    actionMarkup: "false",
    detail: "Détail (optionnel)",
  },
};

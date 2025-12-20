import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface QuoteArgs {
  text: string;
  author: string;
  sources: string[];
  sourceUrl: string;
  imageUrl: string;
  imageAlt: string;
  size: "sm" | "md" | "lg";
  accent: string | null;
}

const quoteArgTypes: ArgTypes<QuoteArgs> = {
  text: {
    control: "text",
    description: "Texte de la citation",
  },
  author: {
    control: "text",
    description: "Auteur de la citation",
  },
  sources: {
    control: "object",
    description: "Tableau de détails/sources",
  },
  sourceUrl: {
    control: "text",
    description: "URL de la source",
  },
  imageUrl: {
    control: "text",
    description: "URL de l'image de l'auteur",
  },
  imageAlt: {
    control: "text",
    description: "Alt de l'image",
  },
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
    description: "Taille du texte",
  },
  accent: {
    control: "select",
    options: [
      "green-tilleul-verveine",
      "green-bourgeon",
      "green-emeraude",
      "green-menthe",
      "green-archipel",
      "blue-ecume",
      "blue-cumulus",
      "purple-glycine",
      "pink-macaron",
      "pink-tuile",
      "yellow-tournesol",
      "yellow-moutarde",
      "orange-terre-battue",
      "brown-cafe-creme",
      "brown-caramel",
      "brown-opera",
      "beige-gris-galet",
    ],
    description: "Couleur d'accentuation",
  },
};

const quoteArgs: QuoteArgs = {
  text: "Déployer de nouveaux services publics numériques plus simples, plus faciles d’accès et plus efficaces pour tous les Français. Elle porte aussi l’enjeu de la souveraineté numérique de l’État.",
  author: "Auteur de la citation",
  sources: ["Ouvrage de référence", "Détail 1", "Détail 2"],
  sourceUrl: "",
  imageUrl: "",
  imageAlt: "",
  size: "md",
  accent: null,
};

const render = (args: QuoteArgs) => html`
  <dsfr-quote
    .text=${args.text}
    .author=${args.author}
    .sources=${args.sources}
    .sourceUrl=${args.sourceUrl}
    .imageUrl=${args.imageUrl}
    .imageAlt=${args.imageAlt}
    .size=${args.size}
    .accent=${args.accent}
  ></dsfr-quote>
`;

const meta: Meta<QuoteArgs> = {
  title: "Web Components/Quote",
  component: "dsfr-quote",
  tags: ["autodocs"],
  argTypes: quoteArgTypes,
  args: quoteArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<QuoteArgs>;

export const QuoteStory: Story = {
  name: "QuoteStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const AuthorlessStory: Story = {
  name: "AuthorlessStory",
  tags: ["autodocs"],
  args: {
    author: "",
  },
};

export const SourcelessStory: Story = {
  name: "SourcelessStory",
  tags: ["autodocs"],
  args: {
    sources: [],
    imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
    imageAlt: "Portrait de l'auteur",
  },
};

export const ImagelessStory: Story = {
  name: "ImagelessStory",
  tags: ["autodocs"],
  args: {
    imageUrl: "",
  },
};

export const AccentStory: Story = {
  name: "AccentStory",
  tags: ["autodocs"],
  args: {
    accent: "green-menthe",
  },
};

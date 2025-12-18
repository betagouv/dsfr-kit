import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const quoteArgTypes = {
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

const quoteArgs = {
  text: "Déployer de nouveaux services publics numériques plus simples, plus faciles d’accès et plus efficaces pour tous les Français. Elle porte aussi l’enjeu de la souveraineté numérique de l’État.",
  author: "Auteur de la citation",
  sources: ["Ouvrage de référence", "Détail 1", "Détail 2"],
  sourceUrl: "",
  imageUrl: "",
  imageAlt: "",
  size: "md",
  accent: null,
};

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

const render = (args: QuoteArgs) => html`
  <dsfr-quote
    .text=${args.text}
    .author=${args.author}
    .sources=${args.sources}
    .source-url=${args.sourceUrl}
    .image-url=${args.imageUrl}
    .image-alt=${args.imageAlt}
    .size=${args.size}
    .accent=${args.accent}
  ></dsfr-quote>
`;

const meta: Meta<QuoteArgs> = {
  title: "Web Components/Quote",
  component: "dsfr-quote",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: quoteArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: quoteArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<QuoteArgs>;

export const QuoteStory: Story = {
  name: "Quote",
  tags: ["!autodocs"],
  args: {},
};

export const DefaultStory: Story = {
  name: "Default",
  tags: ["autodocs", "!dev"],
  args: {},
};

export const AuthorlessStory: Story = {
  name: "Authorless",
  tags: ["autodocs", "!dev"],
  args: {
    author: "",
  },
};

export const AccentStory: Story = {
  name: "Accent",
  tags: ["autodocs", "!dev"],
  args: {
    accent: "green-menthe",
  },
};

export const WithImageStory: Story = {
  name: "With Image",
  tags: ["autodocs", "!dev"],
  args: {
    imageUrl: "https://www.systeme-de-design.gouv.fr/img/placeholder.1x1.png",
    imageAlt: "Portrait de l'auteur",
  },
};

import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface HighlightArgs {
  text: string;
  size: "sm" | "md" | "lg";
  accent: string | null;
}

const highlightArgTypes: ArgTypes<HighlightArgs> = {
  text: {
    control: "text",
    description: "Contenu texte de la mise en exergue",
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

const highlightArgs: HighlightArgs = {
  text: "Les mises en exergue permettent de distinguer une information importante au sein d’un contenu éditorial.",
  size: "md",
  accent: null,
};

const render = (args: HighlightArgs) => html`
  <dsfr-highlight .text=${args.text} .size=${args.size} .accent=${args.accent}>
  </dsfr-highlight>
`;

const meta: Meta<HighlightArgs> = {
  title: "Web Components/Highlight",
  component: "dsfr-highlight",
  tags: ["autodocs"],
  argTypes: highlightArgTypes,
  args: highlightArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<HighlightArgs>;

export const HighlightStory: Story = {
  name: "HighlightStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const SizesSmStory: Story = {
  name: "SizesSmStory",
  tags: ["autodocs"],
  args: {
    size: "sm",
  },
};

export const SizeLgStory: Story = {
  name: "SizeLgStory",
  tags: ["autodocs"],
  args: {
    size: "lg",
  },
};

export const AccentStory: Story = {
  name: "AccentStory",
  tags: ["autodocs"],
  args: {
    accent: "green-menthe",
  },
};

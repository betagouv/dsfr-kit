import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const highlightArgTypes = {
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

const highlightArgs = {
  text: "Les mises en exergue permettent de distinguer une information importante au sein d’un contenu éditorial.",
  size: "md",
  accent: null,
};

interface HighlightArgs {
  text: string;
  size: "sm" | "md" | "lg";
  accent: string | null;
}

const render = (args: HighlightArgs) => html`
  <dsfr-highlight .text=${args.text} .size=${args.size} .accent=${args.accent}>
  </dsfr-highlight>
`;

const meta: Meta<HighlightArgs> = {
  title: "Web Components/Highlight",
  component: "dsfr-highlight",
  tags: ["autodocs"],
  argTypes: highlightArgTypes as any,
  args: highlightArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<HighlightArgs>;

export const HighlightStory: Story = {
  name: "Highlight",
  tags: ["!autodocs"],
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
  },
};

export const SizeLgStory: Story = {
  name: "Size LG",
  tags: ["autodocs", "!dev"],
  args: {
    size: "lg",
  },
};

export const AccentStory: Story = {
  name: "Accent",
  tags: ["autodocs", "!dev"],
  args: {
    accent: "green-menthe",
  },
};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const searchArgTypes = {
  inputLabel: {
    control: "text",
    description: "Libellé de l'input",
  },
  inputPlaceholder: {
    control: "text",
    description: "Placeholder de l'input",
  },
  buttonLabel: {
    control: "text",
    description: "Libellé du bouton",
  },
  buttonTitle: {
    control: "text",
    description: "Titre du bouton",
  },
  size: {
    control: { type: "select" },
    options: ["md", "lg"],
    description: "Taille de la barre de recherche",
  },
};

const searchArgs = {
  inputLabel: "Rechercher",
  inputPlaceholder: "Rechercher",
  buttonLabel: "Rechercher",
  buttonTitle: "Rechercher",
  size: "md",
};

interface SearchArgs {
  inputLabel: string;
  inputPlaceholder: string;
  buttonLabel: string;
  buttonTitle: string;
  size: "md" | "lg";
}

const render = (args: SearchArgs) => html`
  <dsfr-search
    .inputLabel=${args.inputLabel}
    .inputPlaceholder=${args.inputPlaceholder}
    .buttonLabel=${args.buttonLabel}
    .buttonTitle=${args.buttonTitle}
    .size=${args.size}
  ></dsfr-search>
`;

const meta: Meta<SearchArgs> = {
  title: "Web Components/Search",
  component: "dsfr-search",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: searchArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: searchArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<SearchArgs>;

export const SearchStory: Story = {
  name: "SearchStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const SizeLgStory: Story = {
  name: "SizeLgStory",
  tags: ["autodocs"],
  args: {
    size: "lg",
  },
};

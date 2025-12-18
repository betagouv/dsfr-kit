import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const calloutArgTypes = {
  title: {
    control: "text",
    description: "Titre de la mise en avant",
  },
  text: {
    control: "text",
    description: "texte de la mise en avant",
  },
  hasIcon: {
    control: "boolean",
    description: "L'icône du composant est affichée",
  },
  icon: {
    if: { arg: "hasIcon", eq: true },
    control: "text",
    description: "nom de l'icône du composant",
  },
  hasButton: {
    control: "boolean",
    description: "Le bouton est affiché",
  },
  buttonLabel: {
    if: { arg: "hasButton", eq: true },
    control: "text",
    description: "label du bouton dans la mise en avant",
  },
  accent: {
    control: "select",
    description: "Couleur d'accenturation du composant",
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
  },
};

const calloutArgs = {
  title: "Titre de la mise en avant",
  text: "Les mises en avant permettent de valoriser une information importante au sein d’un contenu éditorial. Elles ne doivent pas être confondues avec les alertes ou les mises en exergue.",
  hasIcon: false,
  icon: "info-line",
  hasButton: false,
  buttonLabel: "En savoir plus",
  accent: null,
};

interface CalloutArgs {
  title: string;
  text: string;
  hasIcon: boolean;
  icon: string;
  hasButton: boolean;
  buttonLabel: string;
  accent: string | null;
}

const render = (args: CalloutArgs) => {
  return html`
    <dsfr-callout
      .title=${args.title}
      .icon=${args.hasIcon ? args.icon : ""}
      .button-label=${args.hasButton ? args.buttonLabel : ""}
      .accent=${args.accent}
    >
      ${args.text}
    </dsfr-callout>
  `;
};

const meta: Meta<CalloutArgs> = {
  title: "Web Components/Callout",
  component: "dsfr-callout",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: calloutArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: calloutArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<CalloutArgs>;

export const CalloutStory: Story = {
  name: "CalloutStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const IconStory: Story = {
  name: "IconStory",
  tags: ["autodocs"],
  args: {
    hasIcon: true,
    icon: "info-line",
  },
};

export const ButtonStory: Story = {
  name: "ButtonStory",
  tags: ["autodocs"],
  args: {
    hasButton: true,
    buttonLabel: "En savoir plus",
  },
};

export const IconAndButtonStory: Story = {
  name: "IconAndButtonStory",
  tags: ["autodocs"],
  args: {
    hasIcon: true,
    icon: "info-line",
    hasButton: true,
    buttonLabel: "En savoir plus",
  },
};

export const AccentStory: Story = {
  name: "AccentStory",
  tags: ["autodocs"],
  args: {
    accent: "pink-macaron",
  },
};

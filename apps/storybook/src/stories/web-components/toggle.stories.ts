import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const toggleArgTypes = {
  label: {
    control: "text",
    description: "Libellé de l'interrupteur",
  },
  hint: {
    control: "text",
    description: "Texte additionnel",
  },
  checked: {
    control: "boolean",
    description: "Coche l'interrupteur",
  },
  disabled: {
    control: "boolean",
    description: "Désactive l'interrupteur",
  },
  state: {
    control: "boolean",
    description: "Affiche les libellés activé/désactivé",
  },
  left: {
    control: "boolean",
    description: "Place le libellé sur la gauche",
  },
  border: {
    control: "boolean",
    description: "Ajoute une bordure sous l'interrupteur",
  },
  error: {
    control: "text",
    description: "Texte d'erreur",
  },
  valid: {
    control: "text",
    description: "Texte de validation",
  },
};

const toggleArgs = {
  label: "Interrupteur",
  hint: "",
  checked: false,
  disabled: false,
  state: true,
  left: false,
  border: false,
  error: "",
  valid: "",
};

interface ToggleArgs {
  label: string;
  hint: string;
  checked: boolean;
  disabled: boolean;
  state: boolean;
  left: boolean;
  border: boolean;
  error: string;
  valid: string;
}

const render = (args: ToggleArgs) => html`
  <dsfr-toggle
    .label=${args.label}
    .hint=${args.hint}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    ?state=${args.state}
    ?left=${args.left}
    ?border=${args.border}
    .error=${args.error}
    .valid=${args.valid}
  ></dsfr-toggle>
`;

const meta: Meta<ToggleArgs> = {
  title: "Web Components/Toggle",
  component: "dsfr-toggle",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: toggleArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: toggleArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<ToggleArgs>;

export const ToggleStory: Story = {
  name: "Toggle",
  args: {},
};

export const DefaultStory: Story = {
  name: "Default",
  tags: ["autodocs", "!dev"],
  args: {},
};

export const DescriptionStory: Story = {
  name: "Description",
  tags: ["autodocs", "!dev"],
  args: {
    hint: "Texte additionnel de l’interrupteur",
  },
};

export const StateStory: Story = {
  name: "State",
  tags: ["autodocs", "!dev"],
  args: {
    checked: true,
  },
};

export const ErrorStory: Story = {
  name: "Error",
  tags: ["autodocs", "!dev"],
  args: {
    error: "Message d'erreur",
  },
};

export const ValidStory: Story = {
  name: "Valid",
  tags: ["autodocs", "!dev"],
  args: {
    valid: "Message de validation",
  },
};

export const DisabledStory: Story = {
  name: "Disabled",
  tags: ["autodocs", "!dev"],
  args: {
    disabled: true,
  },
};

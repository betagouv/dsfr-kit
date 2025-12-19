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
  name: "ToggleStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const DescriptionStory: Story = {
  name: "DescriptionStory",
  tags: ["autodocs"],
  args: {
    hint: "Texte additionnel de l’interrupteur",
  },
};

export const StateStory: Story = {
  name: "StateStory",
  tags: ["autodocs"],
  args: {
    checked: true,
  },
};

export const ErrorStory: Story = {
  name: "ErrorStory",
  tags: ["autodocs"],
  args: {
    error: "Message d'erreur",
  },
};

export const ValidStory: Story = {
  name: "ValidStory",
  tags: ["autodocs"],
  args: {
    valid: "Message de validation",
  },
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  tags: ["autodocs"],
  args: {
    disabled: true,
  },
};

export const ToggleGroupStory: Story = {
  name: "ToggleGroupStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-toggle__list">
        <li><dsfr-toggle label="Interrupteur 1"></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 2"></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 3"></dsfr-toggle></li>
    </ul>
  `,
};

export const DefaultGroupStory: Story = {
  name: "DefaultGroupStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-toggle__list">
        <li><dsfr-toggle label="Interrupteur 1" hint="Description 1"></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 2" hint="Description 2"></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 3" hint="Description 3"></dsfr-toggle></li>
    </ul>
  `,
};

export const StateGroupStory: Story = {
  name: "StateGroupStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-toggle__list">
        <li><dsfr-toggle label="Interrupteur 1" checked></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 2" checked hint="Description 2"></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 3"></dsfr-toggle></li>
    </ul>
  `,
};

export const BorderGroupStory: Story = {
  name: "BorderGroupStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-toggle__list">
        <li><dsfr-toggle label="Interrupteur 1" border></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 2" border></dsfr-toggle></li>
        <li><dsfr-toggle label="Interrupteur 3" border></dsfr-toggle></li>
    </ul>
  `,
};

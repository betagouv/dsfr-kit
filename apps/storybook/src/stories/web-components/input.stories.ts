import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const inputArgTypes = {
  label: {
    control: "text",
    description: "Libellé du champ",
  },
  hint: {
    control: "text",
    description: "Texte additionnel",
  },
  value: {
    control: "text",
    description: "Valeur du champ",
  },
  type: {
    control: { type: "select" },
    options: [
      "text",
      "email",
      "password",
      "number",
      "tel",
      "url",
      "date",
      "search",
      "textarea",
    ],
    description: "Type du champ",
  },
  placeholder: {
    control: "text",
    description: "Texte d'exemple",
  },
  error: {
    control: "text",
    description: "Message d'erreur",
  },
  valid: {
    control: "text",
    description: "Message de validation",
  },
  disabled: {
    control: "boolean",
    description: "Désactive le champ",
  },
  required: {
    control: "boolean",
    description: "Champ obligatoire",
  },
  icon: {
    control: "text",
    description: "Icône associée",
  },
};

const inputArgs = {
  label: "Libellé champ de saisie",
  hint: "",
  value: "",
  type: "text",
  placeholder: "",
  error: "",
  valid: "",
  disabled: false,
  required: false,
  icon: "",
};

interface InputArgs {
  label: string;
  hint: string;
  value: string;
  type: string;
  placeholder: string;
  error: string;
  valid: string;
  disabled: boolean;
  required: boolean;
  icon: string;
}

const render = (args: InputArgs) => html`
  <dsfr-input
    .label=${args.label}
    .hint=${args.hint}
    .value=${args.value}
    .type=${args.type}
    .placeholder=${args.placeholder}
    .error=${args.error}
    .valid=${args.valid}
    ?disabled=${args.disabled}
    ?required=${args.required}
    .icon=${args.icon}
  ></dsfr-input>
`;

const meta: Meta<InputArgs> = {
  title: "Web Components/Input",
  component: "dsfr-input",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: inputArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: inputArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<InputArgs>;

export const InputStory: Story = {
  name: "Input",
  args: {},
};

export const DefaultStory: Story = {
  name: "Default",
  tags: ["autodocs", "!dev"],
  args: {
    label: "Champ par défaut",
  },
};

export const TextareaStory: Story = {
  name: "Textarea",
  tags: ["autodocs", "!dev"],
  args: {
    label: "Champ de saisie de texte long",
    type: "textarea",
  },
};

export const ErrorStory: Story = {
  name: "Error",
  tags: ["autodocs", "!dev"],
  args: {
    label: "Champ en erreur",
    error: "Message d'erreur",
  },
};

export const ValidStory: Story = {
  name: "Valid",
  tags: ["autodocs", "!dev"],
  args: {
    label: "Champ valide",
    valid: "Message de validation",
  },
};

export const IconStory: Story = {
  name: "With Icon",
  tags: ["autodocs", "!dev"],
  args: {
    label: "Champ avec icône",
    icon: "user-line",
  },
};

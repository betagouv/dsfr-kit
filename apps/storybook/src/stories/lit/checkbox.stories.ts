import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

interface CheckboxArgs {
  label: string;
  hint: string;
  status: string;
  error: string;
  valid: string;
  size: "md" | "sm";
  checked: boolean;
  disabled: boolean;
}

const checkboxArgTypes: ArgTypes<CheckboxArgs> = {
  label: {
    control: "text",
    description: "Libellé de la case à cocher",
  },
  hint: {
    control: "text",
    description: "Texte additionnel",
  },
  status: {
    control: { type: "select" },
    options: ["default", "error", "valid"],
    description: "Statut de la case",
  },
  error: {
    if: { arg: "status", eq: "error" },
    control: "text",
    description: "Message d'erreur",
  },
  valid: {
    if: { arg: "status", eq: "valid" },
    control: "text",
    description: "Message de succès",
  },
  size: {
    control: { type: "select" },
    options: ["md", "sm"],
    description: "Taille de la case",
  },
  checked: {
    control: "boolean",
    description: "État coché",
  },
  disabled: {
    control: "boolean",
    description: "État désactivé",
  },
};

const checkboxArgs: CheckboxArgs = {
  label: "Libellé de la case à cocher",
  hint: "",
  status: "default",
  error: "Texte d’erreur",
  valid: "Texte de succès",
  size: "md",
  checked: false,
  disabled: false,
};

const render = (args: CheckboxArgs) => html`
  <dsfr-checkbox
    .label=${args.label}
    .hint=${args.hint}
    .size=${args.size}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    .error=${args.status === "error" ? args.error : ""}
    .valid=${args.status === "valid" ? args.valid : ""}
  ></dsfr-checkbox>
`;

const meta: Meta<CheckboxArgs> = {
  title: "Lit/Checkbox",
  component: "dsfr-checkbox",
  tags: ["autodocs"],
  argTypes: checkboxArgTypes,
  args: checkboxArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const CheckboxStory: Story = {
  name: "CheckboxStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {
    label: "Case à cocher par défaut",
  },
};

export const SizeSmStory: Story = {
  name: "SizeSmStory",
  tags: ["autodocs"],
  args: {
    label: "Petite case à cocher",
    size: "sm",
  },
};

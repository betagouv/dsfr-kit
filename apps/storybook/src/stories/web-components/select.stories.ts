import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const selectArgTypes = {
  label: {
    control: "text",
    description: "Libellé de la liste déroulante",
  },
  hint: {
    control: "text",
    description: "Texte additionnel",
  },
  value: {
    control: "text",
    description: "Valeur sélectionnée",
  },
  options: {
    control: "object",
    description: "Options de la liste",
  },
  disabled: {
    control: "boolean",
    description: "Désactive la liste",
  },
  error: {
    control: "text",
    description: "Message d'erreur",
  },
  valid: {
    control: "text",
    description: "Message de validation",
  },
};

const selectArgs = {
  label: "Libellé liste déroulante",
  hint: "",
  value: "",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4", disabled: true },
  ],
  disabled: false,
  error: "",
  valid: "",
};

interface SelectArgs {
  label: string;
  hint: string;
  value: string;
  // biome-ignore lint/suspicious/noExplicitAny: Flexible options structure
  options: any[];
  disabled: boolean;
  error: string;
  valid: string;
}

const render = (args: SelectArgs) => html`
  <dsfr-select
    .label=${args.label}
    .hint=${args.hint}
    .value=${args.value}
    .options=${args.options}
    ?disabled=${args.disabled}
    .error=${args.error}
    .valid=${args.valid}
  ></dsfr-select>
`;

const meta: Meta<SelectArgs> = {
  title: "Web Components/Select",
  component: "dsfr-select",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: selectArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: selectArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<SelectArgs>;

export const SelectStory: Story = {
  name: "SelectStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {
    label: "Liste par défaut",
  },
};

export const HintStory: Story = {
  name: "HintStory",
  tags: ["autodocs"],
  args: {
    label: "Liste avec description",
    hint: "Texte de description additionnel",
  },
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  tags: ["autodocs"],
  args: {
    label: "Liste désactivée",
    disabled: true,
  },
};

export const StatusErrorStory: Story = {
  name: "StatusErrorStory",
  tags: ["autodocs"],
  args: {
    label: "Liste en erreur",
    error: "Message d'erreur",
    value: "1",
  },
};

export const StatusValidStory: Story = {
  name: "StatusValidStory",
  tags: ["autodocs"],
  args: {
    label: "Liste valide",
    valid: "Message de validation",
    value: "2",
  },
};

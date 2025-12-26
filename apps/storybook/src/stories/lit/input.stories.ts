import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

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

const inputArgTypes: ArgTypes<InputArgs> = {
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

const inputArgs: InputArgs = {
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
  title: "Lit/Input",
  component: "dsfr-input",
  tags: ["autodocs"],
  argTypes: inputArgTypes,
  args: inputArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<InputArgs>;

export const InputStory: Story = {
  name: "InputStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {
    label: "Libellé du champ",
  },
};

export const ErrorStory: Story = {
  name: "ErrorStory",
  tags: ["autodocs"],
  args: {
    label: "Libellé du champ",
    error: "Texte d'erreur",
  },
};

export const SuccessStory: Story = {
  name: "SuccessStory",
  tags: ["autodocs"],
  args: {
    label: "Libellé du champ",
    valid: "Texte de validation",
  },
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  tags: ["autodocs"],
  args: {
    label: "Libellé du champ",
    disabled: true,
  },
};

export const IconStory: Story = {
  name: "IconStory",
  tags: ["autodocs"],
  args: {
    label: "Libellé du champ",
    icon: "user-line",
  },
};

export const TelStory: Story = {
  name: "TelStory",
  tags: ["autodocs"],
  args: {
    label: "Téléphone",
    type: "tel",
    value: "0605040302",
  },
};

export const NumberStory: Story = {
  name: "NumberStory",
  tags: ["autodocs"],
  args: {
    label: "Nombre",
    type: "number",
    value: "100",
  },
};

export const PasswordStory: Story = {
  name: "PasswordStory",
  tags: ["autodocs"],
  args: {
    label: "Mot de passe",
    type: "password",
  },
};

export const SearchStory: Story = {
  name: "SearchStory",
  tags: ["autodocs"],
  args: {
    label: "Recherche",
    type: "search",
    icon: "search-line",
  },
};

export const HintIconStory: Story = {
  name: "HintIconStory",
  tags: ["autodocs"],
  args: {
    label: "Avec texte d'aide et icône",
    hint: "Texte d'aide",
    icon: "user-line",
  },
};

export const DateStory: Story = {
  name: "DateStory",
  tags: ["autodocs"],
  args: {
    label: "Date",
    type: "date",
    value: "2023-01-01",
  },
};

export const ButtonStory: Story = {
  name: "ButtonStory",
  tags: ["autodocs"],
  render: (args) => html`
    <div class="fr-input-group">
        <label class="fr-label" for="input-button">${args.label}</label>
        <div class="fr-input-wrap">
            <input class="fr-input" type="text" id="input-button" name="input-button">
            <button class="fr-btn" title="Libellé bouton">Label</button>
        </div>
    </div>
  `,
  args: {
    label: "Champ avec bouton",
  },
};

export const ActionStory: Story = {
  name: "ActionStory",
  tags: ["autodocs"],
  render: (args) => html`
     <div class="fr-input-group">
        <label class="fr-label" for="input-action">${args.label}</label>
        <div class="fr-input-wrap fr-icon-user-line">
            <input class="fr-input" type="text" id="input-action" name="input-action">
            <button class="fr-btn" title="Libellé bouton">Label</button>
        </div>
    </div>
  `,
  args: {
    label: "Champ avec icône et bouton",
  },
};

export const UrlStory: Story = {
  name: "UrlStory",
  tags: ["autodocs"],
  args: {
    label: "URL",
    type: "url",
    value: "https://www.systeme-de-design.gouv.fr",
  },
};

export const TextareaStory: Story = {
  name: "TextareaStory",
  tags: ["autodocs"],
  args: {
    label: "Zone de texte",
    type: "textarea",
  },
};

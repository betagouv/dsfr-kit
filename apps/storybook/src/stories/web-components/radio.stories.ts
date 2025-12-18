import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const radioArgTypes = {
  label: {
    control: "text",
    description: "Libellé de l'option radio",
  },
  hint: {
    control: "text",
    description: "Texte additionnel",
  },
  rich: {
    control: "boolean",
    description: "Passe en mode radios riches",
  },
  hasPictogram: {
    if: { arg: "rich", eq: true },
    control: "boolean",
    description: "Ajoute un pictogramme au radio riche",
  },
  pictogramName: {
    if: { arg: "hasPictogram", eq: true },
    control: "text",
    description: "Nom du pictogramme du radio",
  },
  size: {
    if: { arg: "rich", eq: false },
    control: { type: "select" },
    options: ["md", "sm"],
    description: "Taille de l'option",
  },
  checked: {
    control: "boolean",
    description: "État coché",
  },
  disabled: {
    control: "boolean",
    description: "État désactivé",
  },
  name: {
    control: "text",
    description: "Nom du groupe radio",
  },
  value: {
    control: "text",
    description: "Valeur de l'option",
  },
};

const radioArgs = {
  label: "Libellé radio",
  hint: "",
  rich: false,
  hasPictogram: true,
  pictogramName: "city-hall",
  size: "md",
  checked: false,
  disabled: false,
  name: "radio",
  value: "option-1",
};

interface RadioArgs {
  label: string;
  hint: string;
  rich: boolean;
  hasPictogram: boolean;
  pictogramName: string;
  size: "md" | "sm";
  checked: boolean;
  disabled: boolean;
  name: string;
  value: string;
}

const render = (args: RadioArgs) => html`
  <dsfr-radio
    .label=${args.label}
    .hint=${args.hint}
    ?rich=${args.rich}
    .size=${args.size}
    ?checked=${args.checked}
    ?disabled=${args.disabled}
    .name=${args.name}
    .value=${args.value}
  >
    ${
      args.rich && args.hasPictogram
        ? html`
      <div slot="pictogram">
        <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
          <use href="/assets/pictograms/city-hall.svg#artwork-major"></use>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20">${args.pictogramName}</text>
        </svg>
      </div>
    `
        : ""
    }
  </dsfr-radio>
`;

const meta: Meta<RadioArgs> = {
  title: "Web Components/Radio",
  component: "dsfr-radio",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: radioArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: radioArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<RadioArgs>;

export const RadioStory: Story = {
  name: "Radio",
  args: {},
};

export const RichStory: Story = {
  name: "Rich",
  args: {
    label: "Option riche",
    rich: true,
    hint: "Description de l'option riche",
  },
};

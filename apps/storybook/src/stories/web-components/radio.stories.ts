import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Web Components/Radio",
  component: "dsfr-radio",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    hint: { control: "text" },
    rich: { control: "boolean" },
  },
  args: {
    label: "Option radio",
    name: "radio-group-demo",
    value: "option-1",
    checked: false,
    disabled: false,
    rich: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    label: "Option sélectionnée",
    checked: true,
    value: "option-checked",
  },
};

export const WithHint: Story = {
  args: {
    label: "Option avec description",
    hint: "Texte d'aide pour préciser l'option",
  },
};

export const Disabled: Story = {
  args: {
    label: "Option désactivée",
    disabled: true,
  },
};

export const Rich: Story = {
  args: {
    label: "Option riche",
    rich: true,
  },
  render: (args) => html`
        <dsfr-radio
            label=${args.label}
            name=${args.name}
            ?rich=${args.rich}
        >
            <div slot="pictogram">
                <svg aria-hidden="true" class="fr-artwork" viewBox="0 0 80 80" width="80px" height="80px">
                    <!-- Placeholder SVG for demo -->
                    <circle cx="40" cy="40" r="38" fill="#ECECEC" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20">IMG</text>
                </svg>
            </div>
        </dsfr-radio>
    `,
};

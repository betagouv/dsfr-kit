import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Web Components/Search",
  component: "dsfr-search",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    buttonLabel: { control: "text" },
    large: { control: "boolean" },
  },
  args: {
    label: "Rechercher",
    placeholder: "Rechercher",
    buttonLabel: "Rechercher",
    large: false,
  },
  parameters: {
    actions: {
      handles: ["dsfr-search"],
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Large: Story = {
  args: {
    large: true,
    label: "Recherche principale",
    placeholder: "Que recherchez-vous ?",
  },
};

export const CustomLabel: Story = {
  args: {
    label: "Rechercher un document",
    placeholder: "Ex: Cerfa n°12345",
    buttonLabel: "Trouver",
  },
  render: (args) => html`
        <div style="max-width: 400px;">
           <dsfr-search
                label=${args.label}
                placeholder=${args.placeholder}
                buttonLabel=${args.buttonLabel}
                ?large=${args.large}
            ></dsfr-search>
        </div>
    `,
};

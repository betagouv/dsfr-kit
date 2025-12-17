import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
  title: "Web Components/Button",
  component: "dsfr-button",
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "tertiary-no-outline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    icon: {
      control: "select",
      options: [
        "",
        "fr-icon-checkbox-circle-line",
        "fr-icon-bank-card-line",
        "fr-icon-close-line",
      ],
    },
    iconRight: { control: "boolean" },
  },
  args: {
    label: "Libellé bouton",
    variant: "primary",
    size: "md",
    disabled: false,
    icon: "",
    iconRight: false,
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Bouton secondaire",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    label: "Bouton tertiaire",
  },
};

export const TertiaryNoOutline: Story = {
  args: {
    variant: "tertiary-no-outline",
    label: "Tertiaire sans contour",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Grand bouton",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Petit bouton",
  },
};

export const WithIconLeft: Story = {
  args: {
    icon: "fr-icon-checkbox-circle-line",
    label: "Bouton avec icône",
    iconRight: false,
  },
};

export const WithIconRight: Story = {
  args: {
    icon: "fr-icon-checkbox-circle-line",
    label: "Bouton avec icône",
    iconRight: true,
  },
};

export const IconOnly: Story = {
  args: {
    icon: "fr-icon-bank-card-line",
    label: "", // Icon only buttons have no visible label usually, but MUST have title/aria-label. Component handles title.
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Bouton désactivé",
  },
};

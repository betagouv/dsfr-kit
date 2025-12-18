import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

// Define ButtonArgs interface since we need it for the render function
interface ButtonArgs {
  label: string;
  kind: 1 | 2 | 3 | 4;
  size: "sm" | "md" | "lg";
  disabled: boolean;
  hasIcon: boolean;
  icon: string;
  iconPlace: "only" | "left" | "right";
  markup: "button" | "a" | "input";
  type: "button" | "submit" | "reset";
  href: string;
  target: string;
  id?: string;
  title?: string;
}

const renderButton = (args: ButtonArgs) => {
  const iconPlace = args.iconPlace === "only" ? undefined : args.iconPlace;
  // Handle target transformation from 'self'/'blank' to '_self'/'_blank' if needed,
  // but assuming consistent args or a simpler render here.
  const target = args.target === "blank" ? "_blank" : "_self";

  return html`
    <dsfr-button
      .label=${args.iconPlace === "only" ? "" : args.label}
      .kind=${args.kind}
      .size=${args.size}
      .icon=${args.hasIcon ? args.icon : ""}
      .icon-place=${iconPlace}
      ?disabled=${args.disabled}
      .markup=${args.markup}
      .type=${args.type}
      .href=${args.href}
      .target=${target}
    >
    </dsfr-button>
  `;
};

const meta: Meta = {
  title: "Web Components/Button/Buttons Group",
  component: "dsfr-buttons-group", // Not a real component, but using a wrapper
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: { type: "select" },
      options: ["left", "right", "center", "inline"], // DSFR alignment classes
      description: "Alignement du groupe de boutons",
    },
    reverse: {
      control: "boolean",
      description: "Inverser l'ordre des boutons",
    },
    equisized: {
      control: "boolean",
      description: "Boutons de même largeur",
    },
  },
  args: {
    alignment: "inline",
    reverse: false,
    equisized: false,
  },
};

export default meta;
type Story = StoryObj;

const renderGroup = (args: any, buttons: ButtonArgs[]) => {
  const classes = [
    "fr-btns-group",
    args.alignment !== "inline"
      ? `fr-btns-group--${args.alignment}`
      : "fr-btns-group--inline",
    args.reverse ? "fr-btns-group--inline-reverse" : "",
    args.equisized ? "fr-btns-group--equisized" : "",
    args.size ? `fr-btns-group--${args.size}` : "",
    args.iconLeft ? "fr-btns-group--icon-left" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return html`
    <ul class="${classes}">
      ${buttons.map(
        (btn) => html`
        <li>
          ${renderButton(btn)}
        </li>
      `,
      )}
    </ul>
  `;
};

const defaultButtons: ButtonArgs[] = [
  {
    label: "Bouton 1",
    kind: 1,
    size: "md",
    disabled: false,
    hasIcon: false,
    icon: "",
    iconPlace: "left",
    markup: "button",
    type: "button",
    href: "",
    target: "self",
  },
  {
    label: "Bouton 2",
    kind: 2,
    size: "md",
    disabled: false,
    hasIcon: false,
    icon: "",
    iconPlace: "left",
    markup: "button",
    type: "button",
    href: "",
    target: "self",
  },
];

export const ButtonsGroupStory: Story = {
  name: "ButtonsGroupStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultButtons),
};

export const VerticalStory: Story = {
  name: "VerticalStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup({ ...args, alignment: "left" }, defaultButtons), // Default simple list is vertical-ish/left usually?
  args: {
    alignment: "left", // Just setting arg for clarity
  },
};

// Simplified mapping to match "VerticalStory", "HorizontalStory", etc.
// In native DSFR "Vertical" usually means standard stacked? Or aligned?
// Let's assume standard group.

export const HorizontalStory: Story = {
  name: "HorizontalStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup({ ...args, alignment: "inline" }, defaultButtons),
};

export const SizesStory: Story = {
  name: "SizesStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => html`
    ${renderGroup({ ...args, size: "sm" }, defaultButtons)}
    <br>
    ${renderGroup({ ...args, size: "md" }, defaultButtons)}
    <br>
    ${renderGroup({ ...args, size: "lg" }, defaultButtons)}
  `,
};

export const PrimaryStory: Story = {
  name: "PrimaryStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup(args, [
      {
        label: "Bouton 1",
        kind: 1,
        size: "md",
        disabled: false,
        hasIcon: false,
        icon: "",
        iconPlace: "left",
        markup: "button",
        type: "button",
        href: "",
        target: "self",
      },
      {
        label: "Bouton 2",
        kind: 1,
        size: "md",
        disabled: false,
        hasIcon: false,
        icon: "",
        iconPlace: "left",
        markup: "button",
        type: "button",
        href: "",
        target: "self",
      },
    ]),
};

export const SecondaryStory: Story = {
  name: "SecondaryStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup(args, [
      {
        label: "Bouton 1",
        kind: 2,
        size: "md",
        disabled: false,
        hasIcon: false,
        icon: "",
        iconPlace: "left",
        markup: "button",
        type: "button",
        href: "",
        target: "self",
      },
      {
        label: "Bouton 2",
        kind: 2,
        size: "md",
        disabled: false,
        hasIcon: false,
        icon: "",
        iconPlace: "left",
        markup: "button",
        type: "button",
        href: "",
        target: "self",
      },
    ]),
};

export const TertiaryStory: Story = {
  name: "TertiaryStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup(args, [
      {
        label: "Bouton 1",
        kind: 3,
        size: "md",
        disabled: false,
        hasIcon: false,
        icon: "",
        iconPlace: "left",
        markup: "button",
        type: "button",
        href: "",
        target: "self",
      },
      {
        label: "Bouton 2",
        kind: 3,
        size: "md",
        disabled: false,
        hasIcon: false,
        icon: "",
        iconPlace: "left",
        markup: "button",
        type: "button",
        href: "",
        target: "self",
      },
    ]),
};

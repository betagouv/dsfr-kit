import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const tagArgTypes = {
  label: {
    control: "text",
    description: "Libellé du tag",
  },
  type: {
    control: { type: "select" },
    options: ["default", "clickable", "pressable", "dismissible"],
    description: "Type de tag",
  },
  size: {
    control: { type: "select" },
    options: ["sm", "md"],
    description: "Taille du tag",
  },
  href: {
    if: { arg: "type", eq: "clickable" },
    control: "text",
    description: "Lien du tag",
  },
  pressed: {
    if: { arg: "type", eq: "pressable" },
    control: "boolean",
    description: "État sélectionné (pour pressable)",
  },
  icon: {
    control: "text",
    description: "Icône du tag",
  },
  accent: {
    control: "text",
    description: "Couleur d'accentuation",
  },
  disabled: {
    control: "boolean",
    description: "Désactiver le tag",
  },
};

const tagArgs = {
  label: "Libellé tag",
  type: "default",
  size: "md",
  href: "#",
  pressed: false,
  icon: "",
  accent: "",
  disabled: false,
};

interface TagArgs {
  label: string;
  type: "default" | "clickable" | "pressable" | "dismissible";
  size: "sm" | "md";
  href: string;
  pressed: boolean;
  icon: string;
  accent: string;
  disabled: boolean;
}

const render = (args: TagArgs) => html`
  <dsfr-tag
    .label=${args.label}
    .type=${args.type}
    .size=${args.size}
    .href=${args.href}
    ?pressed=${args.pressed}
    .icon=${args.icon}
    .accent=${args.accent || null}
    ?disabled=${args.disabled}
  ></dsfr-tag>
`;

const meta: Meta<TagArgs> = {
  title: "Web Components/Tag",
  component: "dsfr-tag",
  tags: ["autodocs"],
  argTypes: tagArgTypes as any,
  args: tagArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<TagArgs>;

export const TagStory: Story = {
  name: "Tag",
  tags: ["!autodocs"],
  args: {},
};

export const SizeMDStory: Story = {
  name: "Size MD",
  tags: ["autodocs", "!dev"],
  args: {
    size: "md",
  },
};

export const SizeSMStory: Story = {
  name: "Size SM",
  tags: ["autodocs", "!dev"],
  args: {
    size: "sm",
  },
};

export const WithIconStory: Story = {
  name: "With Icon",
  tags: ["autodocs", "!dev"],
  args: {
    icon: "arrow-right-line",
  },
};

export const TagClickableStory: Story = {
  name: "Clickable",
  tags: ["autodocs", "!dev"],
  args: {
    type: "clickable",
  },
};

export const TagPressableStory: Story = {
  name: "Pressable",
  tags: ["autodocs", "!dev"],
  args: {
    type: "pressable",
  },
};

export const TagDismissibleStory: Story = {
  name: "Dismissible",
  tags: ["autodocs", "!dev"],
  args: {
    type: "dismissible",
  },
};

export const Group: Story = {
  render: () => html`
    <ul class="fr-tags-group">
      <li><dsfr-tag label="Tag 1"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 2" icon="map-pin-2-line"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 3" type="clickable" href="#"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 4" size="sm"></dsfr-tag></li>
    </ul>
  `,
};

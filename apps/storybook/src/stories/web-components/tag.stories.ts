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
  name: "TagStory",
  args: {},
};

export const SizeMDStory: Story = {
  name: "SizeMDStory",
  tags: ["autodocs"],
  args: {
    size: "md",
  },
};

export const SizeSMStory: Story = {
  name: "SizeSMStory",
  tags: ["autodocs"],
  args: {
    size: "sm",
  },
};

export const WithIconStory: Story = {
  name: "WithIconStory",
  tags: ["autodocs"],
  args: {
    icon: "arrow-right-line",
  },
};

export const TagClickableStory: Story = {
  name: "TagClickableStory",
  tags: ["autodocs"],
  args: {
    type: "clickable",
    href: "#",
  },
};

export const TagClickableSizeSMStory: Story = {
  name: "TagClickableSizeSMStory",
  tags: ["autodocs"],
  args: {
    type: "clickable",
    href: "#",
    size: "sm",
  },
};

export const TagClickableWithIconStory: Story = {
  name: "TagClickableWithIconStory",
  tags: ["autodocs"],
  args: {
    type: "clickable",
    href: "#",
    icon: "arrow-right-line",
  },
};

export const TagClickableAccentStory: Story = {
  name: "TagClickableAccentStory",
  tags: ["autodocs"],
  args: {
    type: "clickable",
    href: "#",
    accent: "accent", // Assuming 'accent' is a valid value, or use a specific color like 'green-emeraude' if needed, but keeping generic for now or checking types.
  },
};

export const TagPressableStory: Story = {
  name: "TagPressableStory",
  tags: ["autodocs"],
  args: {
    type: "pressable",
  },
};

export const TagPressableSizeSMStory: Story = {
  name: "TagPressableSizeSMStory",
  tags: ["autodocs"],
  args: {
    type: "pressable",
    size: "sm",
  },
};

export const TagPressableWithIconStory: Story = {
  name: "TagPressableWithIconStory",
  tags: ["autodocs"],
  args: {
    type: "pressable",
    icon: "arrow-right-line",
  },
};

export const TagDismissibleStory: Story = {
  name: "TagDismissibleStory",
  tags: ["autodocs"],
  args: {
    type: "dismissible",
  },
};

export const TagDismissibleSizeSMStory: Story = {
  name: "TagDismissibleSizeSMStory",
  tags: ["autodocs"],
  args: {
    type: "dismissible",
    size: "sm",
  },
};

export const TagsGroupStory: Story = {
  name: "TagsGroupStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-tags-group">
      <li><dsfr-tag label="Tag 1"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 2"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 3"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 4"></dsfr-tag></li>
    </ul>
  `,
};

export const TagsGroupClickableStory: Story = {
  name: "TagsGroupClickableStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-tags-group">
      <li><dsfr-tag label="Tag 1" type="clickable" href="#"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 2" type="clickable" href="#"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 3" type="clickable" href="#"></dsfr-tag></li>
    </ul>
  `,
};

export const TagsGroupPressableStory: Story = {
  name: "TagsGroupPressableStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-tags-group">
      <li><dsfr-tag label="Tag 1" type="pressable" pressed></dsfr-tag></li>
      <li><dsfr-tag label="Tag 2" type="pressable"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 3" type="pressable"></dsfr-tag></li>
    </ul>
  `,
};

export const TagsGroupDismissibleStory: Story = {
  name: "TagsGroupDismissibleStory",
  tags: ["autodocs"],
  render: () => html`
    <ul class="fr-tags-group">
      <li><dsfr-tag label="Tag 1" type="dismissible"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 2" type="dismissible"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 3" type="dismissible"></dsfr-tag></li>
    </ul>
  `,
};

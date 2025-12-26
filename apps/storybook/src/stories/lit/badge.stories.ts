import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

interface BadgeArgs {
  label: string;
  displayType: "default" | "accent" | "status";
  accent: string;
  status: "success" | "warning" | "error" | "info" | "new";
  size: "sm" | "md";
  hasIcon: boolean;
  hasNoIcon: boolean;
  icon: string;
  ellipsis: boolean;
}

/**
 * Exact UI duplication of DSFR Badge stories
 */
const badgeArgTypes: ArgTypes<BadgeArgs> = {
  label: {
    control: "text",
    description: "Libellé du badge",
  },
  displayType: {
    name: "type",
    control: {
      type: "select",
      labels: {
        default: "Défaut",
        accent: "Accentuation",
        status: "Statut",
      },
    },
    description:
      "Type du badge<br>Valeurs :<br>- Default : badge gris par défaut<br>- Statut : badge de statut / d'état<br>- Accentuation : badge coloré",
    options: ["default", "accent", "status"],
  },
  size: {
    control: { type: "select" },
    description: "Taille du badge",
    options: ["sm", "md"],
  },
  status: {
    if: { arg: "displayType", eq: "status" },
    control: {
      type: "select",
      labels: {
        success: "Succès",
        warning: "Avertissement",
        error: "Erreur",
        info: "Information",
        new: "Nouveauté",
      },
    },
    description: "Statut du badge",
    options: ["success", "warning", "error", "info", "new"],
  },
  accent: {
    if: { arg: "displayType", eq: "accent" },
    control: { type: "select" },
    description: "Couleur du badge",
    options: [
      "green-tilleul-verveine",
      "green-bourgeon",
      "green-emeraude",
      "green-menthe",
      "green-archipel",
      "blue-ecume",
      "blue-cumulus",
      "purple-glycine",
      "pink-macaron",
      "pink-tuile",
      "yellow-tournesol",
      "yellow-moutarde",
      "orange-terre-battue",
      "brown-cafe-creme",
      "brown-caramel",
      "brown-opera",
      "beige-gris-galet",
    ],
  },
  hasIcon: {
    if: { arg: "displayType", neq: "status" },
    control: "boolean",
    description: "Le badge a une icône",
  },
  hasNoIcon: {
    if: { arg: "displayType", eq: "status" },
    control: "boolean",
    description: "Retrait de l'icône de statut",
  },
  icon: {
    if: { arg: "displayType", neq: "status" },
    control: "text",
    description: "Nom de l'icône dans le badge",
  },
  ellipsis: {
    control: "boolean",
    description: "Le badge a une ellipse quand le libellé est trop long",
  },
};

const badgeArgs: BadgeArgs = {
  label: "libellé badge",
  displayType: "default",
  accent: "green-tilleul-verveine",
  status: "success",
  size: "md",
  hasIcon: false,
  hasNoIcon: false,
  icon: "checkbox-line",
  ellipsis: false,
};

const renderBadge = (args: BadgeArgs) => {
  const type = args.displayType === "status" ? args.status : null;
  const accent = args.displayType === "accent" ? args.accent : null;
  const noIcon = args.displayType === "status" ? args.hasNoIcon : !args.hasIcon;
  const finalIcon =
    args.displayType !== "status" && args.hasIcon ? args.icon : null;

  return html`
    <dsfr-badge
      .label=${args.label}
      .size=${args.size}
      .type=${type}
      .accent=${accent}
      ?no-icon=${noIcon}
      .icon=${finalIcon}
      ?ellipsis=${args.ellipsis}
    >
    </dsfr-badge>
  `;
};

const meta: Meta<BadgeArgs> = {
  title: "Lit/Badge",
  component: "dsfr-badge",
  tags: ["autodocs"],
  argTypes: badgeArgTypes,
  args: badgeArgs,
  render: (args) => renderBadge(args),
};

export default meta;
type Story = StoryObj<BadgeArgs>;
const renders = (argsArray: Partial<BadgeArgs>[]) =>
  argsArray.map((args) => renderBadge({ ...badgeArgs, ...args }));

export const BadgeStory: Story = {
  name: "BadgeStory",
  tags: ["!autodocs"],
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const SizeSMStory: Story = {
  name: "SizeSMStory",
  tags: ["autodocs"],
  args: {
    size: "sm",
  },
};

export const StatusStory: Story = {
  name: "StatusStory",
  tags: ["autodocs"],
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${renders([
        { displayType: "status", status: "success" },
        { displayType: "status", status: "warning" },
        { displayType: "status", status: "error" },
        { displayType: "status", status: "info" },
        { displayType: "status", status: "new" },
      ])}
    </div>
  `,
};

export const StatusNoIconStory: Story = {
  name: "StatusNoIconStory",
  tags: ["autodocs"],
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${renders([
        { displayType: "status", status: "success", hasNoIcon: true },
        { displayType: "status", status: "warning", hasNoIcon: true },
        { displayType: "status", status: "error", hasNoIcon: true },
        { displayType: "status", status: "info", hasNoIcon: true },
        { displayType: "status", status: "new", hasNoIcon: true },
      ])}
    </div>
  `,
};

export const AccentStory: Story = {
  name: "AccentStory",
  tags: ["autodocs"],
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      ${renders([{ displayType: "accent", accent: "green-menthe" }])}
    </div>
  `,
};

export const EllipsisStory: Story = {
  name: "EllipsisStory",
  tags: ["autodocs"],
  args: {
    ellipsis: true,
    label:
      "Libellé très long qui sera tronqué lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet luctus",
  },
};

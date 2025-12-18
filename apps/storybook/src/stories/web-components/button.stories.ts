import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const buttonArgTypes = {
  label: {
    control: "text",
    description: "Libellé du bouton",
  },
  kind: {
    control: {
      type: "select",
      labels: {
        1: "Primaire",
        2: "Secondaire",
        3: "Tertiaire",
        4: "Tertiaire sans bordure",
      },
    },
    description:
      "Type du bouton<br>Valeurs :<br>- Primaire : bouton d'action principal, unique dans la page<br>- Secondaire : bouton d'action moins prioritaire<br>- Tertiaire : bouton d'action contextuelle ou alternative<br>Tertiaire sans bordure : version alternative",
    options: [1, 2, 3, 4],
  },
  size: {
    control: { type: "select" },
    description: "Taille du bouton",
    options: ["sm", "md", "lg"],
  },
  id: {
    control: "text",
    description: "Attribut 'id' du bouton",
    table: {
      category: "attributes",
    },
  },
  title: {
    control: "text",
    description: "Attribut 'title' du bouton",
    table: {
      category: "attributes",
    },
  },
  disabled: {
    control: "boolean",
    description: "Le bouton est désactivé",
  },
  hasIcon: {
    control: "boolean",
    description: "Le bouton a une icône",
    table: { category: "icon" },
  },
  icon: {
    if: { arg: "hasIcon", eq: true },
    control: "text",
    description: "Nom de l'icône dans le bouton",
    table: { category: "icon" },
  },
  iconPlace: {
    if: { arg: "hasIcon", eq: true },
    control: {
      type: "select",
      labels: {
        only: "Icône seule",
        left: "Icône à gauche",
        right: "Icône à droite",
      },
    },
    options: ["only", "left", "right"],
    table: { category: "icon" },
  },
  markup: {
    control: { type: "select" },
    description: "Type de balise HTML",
    options: ["button", "a", "input"],
    table: {
      category: "markup",
    },
  },
  type: {
    if: {
      arg: "markup",
      neq: "a",
    },
    control: { type: "select" },
    description: "Type de bouton",
    options: ["button", "submit", "reset"],
    table: {
      category: "markup",
    },
  },
  href: {
    if: {
      arg: "markup",
      eq: "a",
    },
    control: { type: "text" },
    description: "Lien de destination",
    table: {
      category: "markup",
    },
  },
  target: {
    if: {
      arg: "markup",
      eq: "a",
    },
    control: {
      type: "select",
      labels: {
        self: "Même fenêtre (_self)",
        blank: "Nouvelle fenêtre (_blank)",
      },
    },
    description: "Cible du lien",
    options: ["self", "blank"],
    table: {
      category: "markup",
    },
  },
};

const buttonArgs = {
  label: "libellé du bouton",
  kind: 1,
  size: "md",
  disabled: false,
  hasIcon: false,
  icon: "checkbox-line",
  iconPlace: "left",
  markup: "button",
  type: "button",
  href: "",
  target: "self",
};

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
  target: "self" | "blank";
  id?: string;
  title?: string;
}

const render = (args: ButtonArgs) => {
  const iconPlace = args.iconPlace === "only" ? undefined : args.iconPlace;
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
      .id=${args.id || ""}
      .title=${args.title || args.label}
    >
    </dsfr-button>
  `;
};

const meta: Meta<ButtonArgs> = {
  title: "Web Components/Button",
  component: "dsfr-button",
  tags: ["autodocs"],
  argTypes: buttonArgTypes as any,
  args: buttonArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const ButtonStory: Story = {
  name: "Button",
  tags: ["!autodocs"],
  args: {},
};

export const Primary: Story = {
  args: {
    kind: 1,
    label: "Bouton primaire",
  },
};

export const Secondary: Story = {
  args: {
    kind: 2,
    label: "Bouton secondaire",
  },
};

export const Tertiary: Story = {
  args: {
    kind: 3,
    label: "Bouton tertiaire",
  },
};

export const TertiaryNoOutline: Story = {
  name: "Tertiary No Outline",
  args: {
    kind: 4,
    label: "Tertiaire sans contour",
  },
};

export const SizeSM: Story = {
  name: "Size SM",
  args: {
    size: "sm",
    label: "Petit bouton",
  },
};

export const SizeLG: Story = {
  name: "Size LG",
  args: {
    size: "lg",
    label: "Grand bouton",
  },
};

export const IconLeft: Story = {
  name: "Icon Left",
  args: {
    hasIcon: true,
    icon: "checkbox-circle-line",
    iconPlace: "left",
    label: "Bouton avec icône",
  },
};

export const IconRight: Story = {
  name: "Icon Right",
  args: {
    hasIcon: true,
    icon: "checkbox-circle-line",
    iconPlace: "right",
    label: "Bouton avec icône",
  },
};

export const IconOnly: Story = {
  name: "Icon Only",
  args: {
    hasIcon: true,
    icon: "bank-card-line",
    iconPlace: "only",
    label: "Bouton", // Used for title
  },
};

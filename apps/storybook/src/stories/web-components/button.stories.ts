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
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: buttonArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: buttonArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const ButtonStory: Story = {
  name: "ButtonStory",
  tags: ["!autodocs"],
  args: {},
};

export const PrimaryStory: Story = {
  name: "PrimaryStory",
  args: {
    kind: 1,
    label: "Bouton primaire",
  },
};

export const SecondaryStory: Story = {
  name: "SecondaryStory",
  args: {
    kind: 2,
    label: "Bouton secondaire",
  },
};

export const TertiaryStory: Story = {
  name: "TertiaryStory",
  args: {
    kind: 3,
    label: "Bouton tertiaire",
  },
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  args: {
    label: "Bouton désactivé",
    disabled: true,
  },
};

export const SizesStory: Story = {
  name: "SizesStory",
  render: (args) => html`
    <style>
      .demo-sizes {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
    </style>
    <div class="demo-sizes">
      ${render({ ...args, size: "sm", label: "Petit bouton" })}
      ${render({ ...args, size: "md", label: "Bouton moyen" })}
      ${render({ ...args, size: "lg", label: "Grand bouton" })}
    </div>
  `,
};

export const IconLeftStory: Story = {
  name: "IconLeftStory",
  args: {
    hasIcon: true,
    icon: "checkbox-circle-line",
    iconPlace: "left",
    label: "Bouton avec icône",
  },
};

export const IconRightStory: Story = {
  name: "IconRightStory",
  args: {
    hasIcon: true,
    icon: "checkbox-circle-line",
    iconPlace: "right",
    label: "Bouton avec icône",
  },
};

export const IconOnlyStory: Story = {
  name: "IconOnlyStory",
  args: {
    hasIcon: true,
    icon: "bank-card-line",
    iconPlace: "only",
    label: "Bouton", // Used for title
  },
};

export const BtnCloseStory: Story = {
  name: "BtnCloseStory",
  args: {
    kind: 2,
    label: "Fermer",
    hasIcon: true,
    icon: "close-line",
    iconPlace: "right",
  },
};

export const BtnDisplayStory: Story = {
  name: "BtnDisplayStory",
  args: {
    kind: 4,
    label: "Paramètre d'affichage",
    hasIcon: true,
    icon: "theme-fill",
    iconPlace: "left",
  },
};

export const BtnTeamStory: Story = {
  name: "BtnTeamStory",
  args: {
    kind: 4,
    label: "Equipe",
    hasIcon: true,
    icon: "team-fill",
    iconPlace: "left",
  },
};

export const BtnBriefcaseStory: Story = {
  name: "BtnBriefcaseStory",
  args: {
    kind: 4,
    label: "Mon espace",
    hasIcon: true,
    icon: "briefcase-fill",
    iconPlace: "left",
  },
};

export const BtnAccountStory: Story = {
  name: "BtnAccountStory",
  args: {
    kind: 4,
    label: "Mon compte",
    hasIcon: true,
    icon: "account-fill",
    iconPlace: "left",
  },
};

import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "@dsfr-kit/lit";

interface AlertArgs {
  hasTitle: boolean;
  title: string;
  hasDescription: boolean;
  text: string;
  type: "default" | "success" | "error" | "info" | "warning";
  size: "sm" | "md";
  id: string;
  icon: string;
  dismissible: boolean;
  buttonCloseLabel: string;
  buttonCloseOnClick: string;
}

const alertArgTypes: ArgTypes<AlertArgs> = {
  hasTitle: {
    control: "boolean",
    description: "L'alerte a un titre (obligatoire en taille md)",
  },
  title: {
    if: { arg: "hasTitle", eq: true },
    control: "text",
    description: "Titre de l'alerte",
  },
  hasDescription: {
    control: "boolean",
    description: "L'alerte a une description (obligatoire en taille sm)",
  },
  text: {
    if: { arg: "hasDescription", eq: true },
    control: "text",
    description: "Description de l'alerte",
  },
  type: {
    control: {
      type: "select",
      labels: {
        default: "Défaut",
        success: "Succès",
        error: "Erreur",
        info: "Information",
        warning: "Attention",
      },
    },
    description:
      "Type d'alerte<br>Valeurs :<br>- Défaut : Alerte sans couleur<br>- Succès : Alerte verte pour indiquer une action ou une tâche terminée avec succès.<br>- Erreur : Alerte rouge à utiliser quand il y a plusieurs erreurs dans un formulaire, ou des erreurs bloquantes à remonter pour l’utilisateur.<br>- Information : Alerte bleue à utiliser pour mettre en exergue des informations importantes.<br>- Attention : Alerte orange à utiliser à utiliser pour mettre en exergue des risques ou points d’attention importants.",
    options: ["default", "success", "error", "info", "warning"],
  },
  size: {
    control: { type: "select" },
    description: "Taille de l'alerte",
    options: ["sm", "md"],
  },
  id: {
    control: "text",
    description: "Attribut 'id' de l'alerte",
    table: {
      category: "attributes",
    },
  },
  dismissible: {
    control: "boolean",
    description: "L'alerte est refermable",
  },
  icon: {
    if: { arg: "type", eq: "default" },
    control: "text",
    description: "Icône personnalisée sur l'alerte",
  },
  buttonCloseLabel: {
    if: { arg: "dismissible", eq: true },
    control: "text",
    description: "Libellé du bouton de fermeture",
    table: {
      category: "button close",
    },
  },
  buttonCloseOnClick: {
    if: { arg: "dismissible", eq: true },
    control: "text",
    description:
      "Code JavaScript à exécuter lors du clic sur le bouton de fermeture",
    table: {
      category: "button close",
    },
  },
};

const alertArgs: AlertArgs = {
  hasTitle: true,
  hasDescription: true,
  title: "Lorem ipsum dolor",
  text: "sit amet, consectetur adipiscing elit. Nullam id purus nec purus ultricies lacinia. Nullam nec purus nec purus ultricies lacinia.",
  type: "default",
  size: "md",
  id: "",
  icon: "",
  dismissible: false,
  buttonCloseLabel: "Masquer le message",
  buttonCloseOnClick:
    "const alert = this.parentNode; alert.parentNode.removeChild(alert)",
};

const render = (args: AlertArgs) => {
  return html`
    <dsfr-alert
      .title=${args.hasTitle ? args.title : ""}
      .type=${args.type}
      .size=${args.size}
      ?closeable=${args.dismissible}
      .icon=${args.type === "default" ? args.icon : null}
      id=${args.id || nothing}
    >
      ${args.hasDescription ? unsafeHTML(args.text) : nothing}
    </dsfr-alert>
  `;
};

const renders = (argsArray: Partial<AlertArgs>[]) =>
  html`
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    ${argsArray.map((args) => render({ ...alertArgs, ...args } as AlertArgs))}
  </div>
`;

const meta: Meta<AlertArgs> = {
  title: "Lit/Alert",
  component: "dsfr-alert",
  tags: ["autodocs"],
  argTypes: alertArgTypes,
  args: alertArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const AlertStory: Story = {
  name: "AlertStory",
  tags: ["!autodocs"],
  args: {},
};

export const TitleStory: Story = {
  name: "TitleStory",
  tags: ["autodocs"],
  args: {
    hasTitle: true,
    title: "Titre de l'alerte contenant l'intitulé de son type",
    hasDescription: false,
  },
};

export const DescriptionStory: Story = {
  name: "DescriptionStory",
  tags: ["autodocs"],
  args: {
    hasTitle: true,
    title: "Titre de l'alerte contenant l'intitulé de son type",
    hasDescription: true,
    text: "Texte de description de l'alerte",
  },
};

export const SuccessStory: Story = {
  name: "SuccessStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        type: "success",
        hasTitle: true,
        title: "Titre du message de succès",
        text: "Texte du message",
      },
    ]),
};

export const ErrorStory: Story = {
  name: "ErrorStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        type: "error",
        hasTitle: true,
        title: "Titre du message d'erreur",
        text: "Texte du message",
      },
    ]),
};

export const InformationStory: Story = {
  name: "InformationStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        type: "info",
        hasTitle: true,
        title: "Titre du message d'information",
        text: "Texte du message",
      },
    ]),
};

export const WarningStory: Story = {
  name: "WarningStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        type: "warning",
        hasTitle: true,
        title: "Titre du message d'avertissement",
        text: "Texte du message",
      },
    ]),
};

export const SizeSmStory: Story = {
  name: "SizeSmStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        size: "sm",
        type: "success",
        hasTitle: false,
        hasDescription: true,
        text: "Succès : Description détaillée du message...",
      },
      {
        size: "sm",
        type: "error",
        hasTitle: false,
        hasDescription: true,
        text: "Erreur : Description détaillée du message...",
      },
      {
        size: "sm",
        type: "info",
        hasTitle: false,
        hasDescription: true,
        text: "Information : Description détaillée du message...",
      },
      {
        size: "sm",
        type: "warning",
        hasTitle: false,
        hasDescription: true,
        text: "Attention : Description détaillée du message...",
      },
    ]),
};

export const SizeMdStory: Story = {
  name: "SizeMdStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        hasTitle: true,
        type: "success",
        title: "Succès : Description détaillée du message...",
      },
      {
        hasTitle: true,
        type: "error",
        title: "Erreur : Description détaillée du message...",
      },
      {
        hasTitle: true,
        type: "info",
        title: "Information : Description détaillée du message...",
      },
      {
        hasTitle: true,
        type: "warning",
        title: "Attention : Description détaillée du message...",
      },
    ]),
};

export const DismissibleStory: Story = {
  name: "DismissibleStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        title: "Titre du message",
        hasTitle: true,
        hasDescription: true,
        text: "Cliquer sur la croix pour fermer l'alerte",
        dismissible: true,
      },
    ]),
};

export const DismissibleNoJsStory: Story = {
  name: "DismissibleNoJsStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        title: "Titre du message",
        hasTitle: true,
        text: "Cliquer sur la croix pour fermer l'alerte",
        dismissible: true,
        buttonCloseOnClick: "",
      },
    ]),
};

export const IconCustomStory: Story = {
  name: "IconCustomStory",
  tags: ["autodocs"],
  render: () =>
    renders([
      {
        type: "default",
        hasTitle: true,
        icon: "lock-fill",
      },
    ]),
};

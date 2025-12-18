import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const noticeArgTypes = {
  title: {
    control: "text",
    description: "Titre du bandeau",
  },
  desc: {
    control: "text",
    description: "Texte de description du bandeau",
  },
  type: {
    control: { type: "select" },
    options: [
      "info",
      "warning",
      "alert",
      "weather-orange",
      "weather-red",
      "weather-purple",
      "attack",
      "witness",
      "cyberattack",
    ],
    description: "Type de bandeau",
  },
  dismissible: {
    control: "boolean",
    description: "Ajoute un bouton de fermeture",
  },
  link: {
    control: "text",
    description: "URL du lien",
  },
  linkLabel: {
    control: "text",
    description: "Libellé du lien",
  },
  icon: {
    control: "text",
    description: "Nom de l'icône ou false pour masquer",
  },
  markup: {
    control: { type: "select" },
    options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
    description: "Balise de contenu",
  },
};

const noticeArgs = {
  title: "Titre du bandeau",
  desc: "Texte de description lorem ipsum sit consectetur adipiscing elit.",
  type: "info",
  dismissible: true,
  link: "#",
  linkLabel: "Voir plus",
  icon: "",
  markup: "p",
};

interface NoticeArgs {
  title: string;
  desc: string;
  type: string;
  dismissible: boolean;
  link: string;
  linkLabel: string;
  icon: string;
  markup: string;
}

const render = (args: NoticeArgs) => html`
  <dsfr-notice
    .title=${args.title}
    .desc=${args.desc}
    .type=${args.type as any}
    ?dismissible=${args.dismissible}
    .link=${args.link}
    .link-label=${args.linkLabel}
    .icon=${args.icon}
    .markup=${args.markup}
  ></dsfr-notice>
`;

const meta: Meta<NoticeArgs> = {
  title: "Web Components/Notice",
  component: "dsfr-notice",
  tags: ["autodocs"],
  argTypes: noticeArgTypes as any,
  args: noticeArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<NoticeArgs>;

export const NoticeStory: Story = {
  name: "Notice",
  tags: ["!autodocs"],
  args: {},
};

export const InfoStory: Story = {
  name: "Info",
  tags: ["autodocs", "!dev"],
  args: {
    type: "info",
    title: "Titre du bandeau d'information importante",
  },
};

export const WarningStory: Story = {
  name: "Warning",
  tags: ["autodocs", "!dev"],
  args: {
    type: "warning",
    title: "Titre du bandeau d'avertissement",
  },
};

export const AlertStory: Story = {
  name: "Alert",
  tags: ["autodocs", "!dev"],
  args: {
    type: "alert",
    title: "Titre du bandeau d'alerte",
  },
};

export const WeatherOrangeStory: Story = {
  name: "Weather Orange",
  tags: ["autodocs", "!dev"],
  args: {
    type: "weather-orange",
    title: "Vigilance météo orange",
  },
};

export const WeatherRedStory: Story = {
  name: "Weather Red",
  tags: ["autodocs", "!dev"],
  args: {
    type: "weather-red",
    title: "Vigilance météo rouge",
  },
};

export const AttackStory: Story = {
  name: "Attack",
  tags: ["autodocs", "!dev"],
  args: {
    type: "attack",
    title: "Attentat en cours",
  },
};

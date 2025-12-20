import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

import type { ArgTypes } from "@storybook/web-components-vite";

interface NoticeArgs {
  title: string;
  desc: string;
  type:
    | "info"
    | "warning"
    | "alert"
    | "weather-orange"
    | "weather-red"
    | "weather-purple"
    | "attack"
    | "witness"
    | "cyberattack";
  dismissible: boolean;
  link: string;
  linkLabel: string;
  icon: string;
  markup: string;
}

const noticeArgTypes: ArgTypes<NoticeArgs> = {
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

const noticeArgs: NoticeArgs = {
  title: "Titre du bandeau",
  desc: "Texte de description lorem ipsum sit consectetur adipiscing elit.",
  type: "info",
  dismissible: true,
  link: "#",
  linkLabel: "Voir plus",
  icon: "",
  markup: "p",
};

const render = (args: NoticeArgs) => html`
  <dsfr-notice
    .title=${args.title}
    .desc=${args.desc}
    .type=${args.type}
    ?dismissible=${args.dismissible}
    .link=${args.link}
    .linkLabel=${args.linkLabel}
    .icon=${args.icon}
    .markup=${args.markup}
  ></dsfr-notice>
`;

const meta: Meta<NoticeArgs> = {
  title: "Web Components/Notice",
  component: "dsfr-notice",
  tags: ["autodocs"],
  argTypes: noticeArgTypes,
  args: noticeArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<NoticeArgs>;

export const NoticeStory: Story = {
  name: "NoticeStory",
  args: {},
};

export const InfoStory: Story = {
  name: "InfoStory",
  tags: ["autodocs"],
  args: {
    type: "info",
    title: "Titre du bandeau d'information importante",
  },
};

export const WarningStory: Story = {
  name: "WarningStory",
  tags: ["autodocs"],
  args: {
    type: "warning",
    title: "Titre du bandeau d'avertissement",
  },
};

export const AlertStory: Story = {
  name: "AlertStory",
  tags: ["autodocs"],
  args: {
    type: "alert",
    title: "Titre du bandeau d'alerte",
  },
};

export const WeatherOrangeStory: Story = {
  name: "WeatherOrangeStory",
  tags: ["autodocs"],
  args: {
    type: "weather-orange",
    title: "Vigilance météo orange",
  },
};

export const WeatherRedStory: Story = {
  name: "WeatherRedStory",
  tags: ["autodocs"],
  args: {
    type: "weather-red",
    title: "Vigilance météo rouge",
  },
};

export const WeatherPurpleStory: Story = {
  name: "WeatherPurpleStory",
  tags: ["autodocs"],
  args: {
    type: "weather-purple",
    title: "Vigilance météo violette",
  },
};

export const AttackStory: Story = {
  name: "AttackStory",
  tags: ["autodocs"],
  args: {
    type: "attack",
    title: "Attentat en cours",
  },
};

export const WitnessStory: Story = {
  name: "WitnessStory",
  tags: ["autodocs"],
  args: {
    type: "witness",
    title: "Appel à témoins",
  },
};

export const CyberattackStory: Story = {
  name: "CyberattackStory",
  tags: ["autodocs"],
  args: {
    type: "cyberattack",
    title: "Cyberattaque en cours",
  },
};

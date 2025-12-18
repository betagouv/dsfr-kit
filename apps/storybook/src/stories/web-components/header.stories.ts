import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const headerArgTypes = {
  brandLogoTitle: {
    control: "text",
    description: "Intitulé officiel",
  },
  brandLinkHref: {
    control: "text",
    description: "URL du lien de la marque",
  },
  brandLinkTitle: {
    control: "text",
    description: "Titre du lien de la marque",
  },
  brandServiceTitle: {
    control: "text",
    description: "Titre du service",
  },
  brandServiceTagline: {
    control: "text",
    description: "Tagline du service",
  },
  operatorLogoSrc: {
    control: "text",
    description: "URL du logo opérateur",
  },
  operatorLogoAlt: {
    control: "text",
    description: "Texte alternatif du logo opérateur",
  },
  operatorLogoStyle: {
    control: "text",
    description: "Style CSS du logo opérateur",
  },
  navigation: {
    control: "object",
    description: "Navigation principale",
  },
  toolsLinks: {
    control: "object",
    description: "Liens d'accès rapide",
  },
  searchLabel: {
    control: "text",
    description: "Label de recherche",
  },
  searchPlaceholder: {
    control: "text",
    description: "Placeholder de recherche",
  },
};

const headerArgs = {
  brandLogoTitle: "République<br>Française",
  brandLinkHref: "/",
  brandLinkTitle: "Retour à l’accueil du site - République Française",
  brandServiceTitle: "Nom du Service",
  brandServiceTagline: "Baseline Nom du Service",
  operatorLogoSrc: "",
  operatorLogoAlt: "",
  operatorLogoStyle: "width: 3.5rem",
  navigation: [
    { label: "Lien 1", href: "#" },
    { label: "Lien 2", href: "#", active: true },
    { label: "Lien 3", href: "#" },
  ],
  toolsLinks: [
    { label: "Contact", href: "#", icon: "mail-line" },
    { label: "Se connecter", href: "#", icon: "user-line" },
  ],
  searchLabel: "Rechercher",
  searchPlaceholder: "Rechercher",
};

interface HeaderArgs {
  brandLogoTitle: string;
  brandLinkHref: string;
  brandLinkTitle: string;
  brandServiceTitle: string;
  brandServiceTagline: string;
  operatorLogoSrc: string;
  operatorLogoAlt: string;
  operatorLogoStyle: string;
  // biome-ignore lint/suspicious/noExplicitAny: Flexible navigation structure
  navigation: any[];
  // biome-ignore lint/suspicious/noExplicitAny: Flexible tools links structure
  toolsLinks: any[];
  searchLabel: string;
  searchPlaceholder: string;
}

const render = (args: HeaderArgs) => html`
  <dsfr-header
    .brandLogoTitle=${args.brandLogoTitle}
    .brandLinkHref=${args.brandLinkHref}
    .brandLinkTitle=${args.brandLinkTitle}
    .brandServiceTitle=${args.brandServiceTitle}
    .brandServiceTagline=${args.brandServiceTagline}
    .operatorLogoSrc=${args.operatorLogoSrc}
    .operatorLogoAlt=${args.operatorLogoAlt}
    .operatorLogoStyle=${args.operatorLogoStyle}
    .navigation=${args.navigation}
    .toolsLinks=${args.toolsLinks}
    .searchLabel=${args.searchLabel}
    .searchPlaceholder=${args.searchPlaceholder}
  ></dsfr-header>
`;

const meta: Meta<HeaderArgs> = {
  title: "Web Components/Header",
  component: "dsfr-header",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: headerArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: headerArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<HeaderArgs>;

export const HeaderStory: Story = {
  name: "Header",
  args: {},
};

export const WithOperatorStory: Story = {
  name: "With Operator",
  args: {
    operatorLogoSrc: "https://placehold.co/100x100?text=OPERATOR",
    operatorLogoAlt: "Nom de l'opérateur",
  },
};

export const NoServiceStory: Story = {
  name: "No Service",
  args: {
    brandServiceTitle: "",
    brandServiceTagline: "",
  },
};

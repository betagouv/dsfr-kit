import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface ToolLink {
  label: string;
  href: string;
  icon?: string;
}

interface HeaderArgs {
  brandLogoTitle: string;
  brandLinkHref: string;
  brandLinkTitle: string;
  brandServiceTitle: string;
  brandServiceTagline: string;
  operatorLogoSrc: string;
  operatorLogoAlt: string;
  operatorLogoStyle: string;
  navigation: NavLink[];
  toolsLinks: ToolLink[];
  searchLabel: string;
  searchPlaceholder: string;
}

const headerArgTypes: ArgTypes<HeaderArgs> = {
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

const headerArgs: HeaderArgs = {
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
  title: "Lit/Header",
  component: "dsfr-header",
  tags: ["autodocs"],
  argTypes: headerArgTypes,
  args: headerArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<HeaderArgs>;

export const HeaderStory: Story = {
  name: "HeaderStory",
  args: {},
};

export const HeaderWithNavigationStory: Story = {
  name: "HeaderWithNavigationStory",
  args: {
    navigation: [
      { label: "Rubrique 1", href: "#" },
      { label: "Rubrique 2", href: "#", active: true },
      { label: "Rubrique 3", href: "#" },
    ],
  },
};

export const HeaderMinimalStory: Story = {
  name: "HeaderMinimalStory",
  args: {
    brandServiceTitle: "",
    brandServiceTagline: "",
    navigation: [],
    toolsLinks: [],
  },
};

export const ServiceStory: Story = {
  name: "ServiceStory",
  args: {
    brandServiceTitle: "Nom du service",
    brandServiceTagline: "Baseline du service",
  },
};

export const ToolLinksStory: Story = {
  name: "ToolLinksStory",
  args: {
    toolsLinks: [
      { label: "Lien 1", href: "#", icon: "lock-line" },
      { label: "Lien 2", href: "#", icon: "account-line" },
    ],
  },
};

export const SearchStory: Story = {
  name: "SearchStory",
  args: {
    // Search is enabled by default in the component
    toolsLinks: [],
  },
};

export const ToolLinksSearchStory: Story = {
  name: "ToolLinksSearchStory",
  args: {
    toolsLinks: [
      { label: "Lien 1", href: "#", icon: "lock-line" },
      { label: "Lien 2", href: "#", icon: "account-line" },
    ],
  },
};

export const TranslateStory: Story = {
  name: "TranslateStory",
  args: {
    toolsLinks: [{ label: "EN", href: "#", icon: "translate-2" }],
  },
};

export const ToolLinksTranslateStory: Story = {
  name: "ToolLinksTranslateStory",
  args: {
    toolsLinks: [
      { label: "Lien 1", href: "#", icon: "lock-line" },
      { label: "Lien 2", href: "#", icon: "account-line" },
      { label: "EN", href: "#", icon: "translate-2" },
    ],
  },
};

export const VerticalOperatorStory: Story = {
  name: "VerticalOperatorStory",
  args: {
    operatorLogoSrc: "https://placehold.co/100x100?text=V",
    operatorLogoAlt: "Opérateur",
    operatorLogoStyle: "width: 3.5rem;",
  },
};

export const HorizontalOperatorStory: Story = {
  name: "HorizontalOperatorStory",
  args: {
    operatorLogoSrc: "https://placehold.co/200x50?text=Horizontal",
    operatorLogoAlt: "Opérateur",
    operatorLogoStyle: "width: 10rem; max-width: 100%;",
  },
};

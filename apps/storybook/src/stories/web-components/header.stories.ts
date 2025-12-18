import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Web Components/Header",
  component: "dsfr-header",
  tags: ["autodocs"],
  argTypes: {
    serviceTitle: { control: "text" },
    serviceTagline: { control: "text" },
    homeLink: { control: "text" },
    logoText: { control: "text" },
    operatorLogoSrc: { control: "text" },
    operatorLogoAlt: { control: "text" },
    navigation: { control: "object" },
    toolsLinks: { control: "object" },
  },
  args: {
    logoText: "République\nFrançaise",
    serviceTitle: "Nom du service",
    serviceTagline: "Baseline - précisions sur l'organisation",
    homeLink: "/",
    navigation: [
      { text: "Accueil", href: "#", active: true },
      { text: "Rubrique 1", href: "#" },
      { text: "Rubrique 2", href: "#" },
    ],
    toolsLinks: [],
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
        <dsfr-header
            .logoText=${args.logoText}
            .serviceTitle=${args.serviceTitle}
            .serviceTagline=${args.serviceTagline}
            .homeLink=${args.homeLink}
            .navigation=${args.navigation}
            .toolsLinks=${args.toolsLinks}
        ></dsfr-header>
    `,
};

export const WithToolsAndSearch: Story = {
  args: {
    toolsLinks: [
      { text: "Contact", href: "#", icon: "fr-btn--team" },
      { text: "Espace recruteur", href: "#", icon: "fr-btn--briefcase" },
      { text: "Espace particulier", href: "#", icon: "fr-btn--account" },
    ],
  },
  render: (args) => html`
        <dsfr-header
            .logoText=${args.logoText}
            .serviceTitle=${args.serviceTitle}
            .serviceTagline=${args.serviceTagline}
            .homeLink=${args.homeLink}
            .navigation=${args.navigation}
            .toolsLinks=${args.toolsLinks}
        >
            <div slot="search" class="fr-search-bar" id="header-search" role="search">
                <label class="fr-label" for="search-input-header">
                    Rechercher
                </label>
                <input class="fr-input" placeholder="Rechercher" type="search" id="search-input-header" name="search-input-header">
                <button class="fr-btn" title="Rechercher">
                    Rechercher
                </button>
            </div>
        </dsfr-header>
    `,
};

export const OperatorLogo: Story = {
  args: {
    operatorLogoSrc: "https://placehold.co/200x100?text=Logo+Operateur",
    operatorLogoAlt: "Logo Opérateur",
  },
  render: (args) => html`
        <dsfr-header
            .logoText=${args.logoText}
            .serviceTitle=${args.serviceTitle}
            .serviceTagline=${args.serviceTagline}
            .operatorLogoSrc=${args.operatorLogoSrc}
            .operatorLogoAlt=${args.operatorLogoAlt}
            .navigation=${args.navigation}
            .toolsLinks=${args.toolsLinks}
        ></dsfr-header>
    `,
};

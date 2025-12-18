import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "@dsfr-kit/web-components";

const footerArgTypes = {
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
  contentDescription: {
    control: "text",
    description: "Description du contenu",
  },
  contentLinks: {
    control: "object",
    description: "Liens de contenu",
  },
  bottomLinks: {
    control: "object",
    description: "Liens du bas",
  },
  bottomCopyright: {
    control: "text",
    description: "Texte de copyright",
  },
};

const footerArgs = {
  brandLogoTitle: "République<br>Française",
  brandLinkHref: "/",
  brandLinkTitle: "Retour à l’accueil du site - République Française",
  operatorLogoSrc: "",
  operatorLogoAlt: "",
  operatorLogoStyle: "width: 3.5rem",
  contentDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.",
  contentLinks: [
    { label: "info.gouv.fr", href: "https://info.gouv.fr", blank: true },
    {
      label: "service-public.gouv.fr",
      href: "https://service-public.gouv.fr",
      blank: true,
    },
    {
      label: "legifrance.gouv.fr",
      href: "https://legifrance.gouv.fr",
      blank: true,
    },
    { label: "data.gouv.fr", href: "https://data.gouv.fr", blank: true },
  ],
  bottomLinks: [
    { label: "Plan du site", href: "#" },
    { label: "Accessibilité : non conforme", href: "#" },
    { label: "Mentions légales", href: "#" },
    { label: "Données personnelles", href: "#" },
    { label: "Gestion des cookies", href: "#" },
  ],
  bottomCopyright:
    'Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>',
};

interface FooterArgs {
  brandLogoTitle: string;
  brandLinkHref: string;
  brandLinkTitle: string;
  operatorLogoSrc: string;
  operatorLogoAlt: string;
  operatorLogoStyle: string;
  contentDescription: string;
  contentLinks: any[];
  bottomLinks: any[];
  bottomCopyright: string;
}

const render = (args: FooterArgs) => html`
  <dsfr-footer
    .brandLogoTitle=${args.brandLogoTitle}
    .brandLinkHref=${args.brandLinkHref}
    .brandLinkTitle=${args.brandLinkTitle}
    .operatorLogoSrc=${args.operatorLogoSrc}
    .operatorLogoAlt=${args.operatorLogoAlt}
    .operatorLogoStyle=${args.operatorLogoStyle}
    .contentDescription=${args.contentDescription}
    .contentLinks=${args.contentLinks}
    .bottomLinks=${args.bottomLinks}
    .bottomCopyright=${args.bottomCopyright}
  >
    <div slot="top-links" class="fr-grid-row fr-grid-row--start fr-grid-row--gutters">
      <div class="fr-col-12 fr-col-sm-3 fr-col-md-2">
        <h3 class="fr-footer__top-cat">Nom de la catégorie</h3>
        <ul class="fr-footer__top-list">
          <li><a class="fr-footer__top-link" href="#">Lien de navigation</a></li>
          <li><a class="fr-footer__top-link" href="#">Lien de navigation</a></li>
          <li><a class="fr-footer__top-link" href="#">Lien de navigation</a></li>
        </ul>
      </div>
    </div>
  </dsfr-footer>
`;

const meta: Meta<FooterArgs> = {
  title: "Web Components/Footer",
  component: "dsfr-footer",
  tags: ["autodocs"],
  argTypes: footerArgTypes as any,
  args: footerArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<FooterArgs>;

export const FooterStory: Story = {
  name: "Footer",
  args: {},
};

export const WithOperatorStory: Story = {
  name: "With Operator",
  args: {
    operatorLogoSrc: "https://placehold.co/100x100?text=OPERATOR",
    operatorLogoAlt: "Nom de l'opérateur",
  },
};

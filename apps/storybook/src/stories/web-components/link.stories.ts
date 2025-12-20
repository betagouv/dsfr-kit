import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface LinkArgs {
  label: string;
  markup: "a" | "button";
  href: string;
  detail: string;
  blank: boolean;
  disabled: boolean;
  size: "sm" | "md" | "lg";
  icon: string;
  download: boolean;
  iconPlace: "left" | "right";
  id: string;
  assess: boolean;
}

const linkArgTypes: ArgTypes<LinkArgs> = {
  label: {
    control: "text",
    description: "contenu texte",
  },
  markup: {
    control: { type: "select" },
    description: "balise de l'actionneur du composant (a, button)",
    options: ["a", "button"],
  },
  href: {
    control: "text",
    description: "adresse url du lien",
  },
  detail: {
    control: "text",
    description: "detail du lien de telechargement",
  },
  blank: {
    control: "boolean",
    description: "si true, target prend la valeur _blank, sinon _self",
  },
  disabled: {
    control: "boolean",
    description: "si valeur true, link désactivé",
  },
  size: {
    control: { type: "select" },
    description: "taille du lien",
    options: ["sm", "md", "lg"],
  },
  icon: {
    control: "text",
    description: "icon du lien",
  },
  download: {
    control: "boolean",
    description: "Si true, lien de téléchargement",
  },
  iconPlace: {
    control: { type: "select" },
    description: "emplacement de l'icone",
    options: ["left", "right"],
  },
  id: {
    control: "text",
    description: "id du lien",
  },
  assess: {
    control: "boolean",
    description:
      "si true, ajoute l'attribut permettant le remplissage automatique des informations du fichier à télécharger",
  },
};

const linkArgs: LinkArgs = {
  label: "Lien simple",
  markup: "a",
  href: "#",
  detail: "",
  blank: false,
  disabled: false,
  size: "md",
  icon: "",
  download: false,
  iconPlace: "left",
  id: "link",
  assess: false,
};

const render = (args: LinkArgs) => {
  return html`
    <dsfr-link
      .label=${args.label}
      .markup=${args.markup}
      .href=${args.href}
      .detail=${args.detail}
      .target=${args.blank ? "_blank" : "_self"}
      ?disabled=${args.disabled}
      .size=${args.size}
      .icon=${args.icon}
      ?download=${args.download}
      .iconPlace=${args.iconPlace}
      .id=${args.id}
      ?assess=${args.assess}
    >
    </dsfr-link>
  `;
};

const renders = (argsArray: Partial<LinkArgs>[]) =>
  argsArray.map((args) => render({ ...linkArgs, ...args }));

const meta: Meta<LinkArgs> = {
  title: "Web Components/Link",
  component: "dsfr-link",
  tags: ["autodocs"],
  argTypes: linkArgTypes,
  args: linkArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<LinkArgs>;

export const LinkStory: Story = {
  name: "LinkStory",
  args: {},
};

export const TextLinkStory: Story = {
  name: "TextLinkStory",
  tags: ["autodocs"],
  render: (args) => html`
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    ${render({ ...args, label: "lien interne", href: "#" })}
    incididunt ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi.</p>
  `,
};

export const IconStory: Story = {
  name: "IconStory",
  tags: ["autodocs"],
  render: () => html`
    <div style="display: flex; gap: 1rem;">
      ${renders([
        { icon: "arrow-left-line", iconPlace: "left", label: "Icône à gauche" },
        {
          icon: "arrow-right-line",
          iconPlace: "right",
          label: "Icône à droite",
        },
      ])}
    </div>
  `,
};

export const SizesStory: Story = {
  name: "SizesStory",
  tags: ["autodocs"],
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      ${renders([
        { size: "sm", label: "Petit lien" },
        { size: "md", label: "Lien moyen" },
        { size: "lg", label: "Grand lien" },
      ])}
    </div>
  `,
};

export const DisabledStory: Story = {
  name: "DisabledStory",
  tags: ["autodocs"],
  args: {
    disabled: true,
  },
};

export const DownloadStory: Story = {
  name: "DownloadStory",
  tags: ["autodocs"],
  args: {
    label: "Télécharger le document lorem ipsum sit dolores amet",
    href: "https://gouvfr.github.io/dsfr/example/img/placeholder.16x9.png",
    download: true,
    detail: "JPG – 61,88 ko",
  },
};

export const ExternalStory: Story = {
  name: "ExternalStory",
  tags: ["autodocs"],
  args: {
    blank: true,
    label: "Lien externe",
  },
};

export const BackToTopStory: Story = {
  name: "BackToTopStory",
  tags: ["autodocs"],
  args: {
    label: "Haut de page",
    href: "#top",
    icon: "arrow-up-fill",
    iconPlace: "left",
  },
};

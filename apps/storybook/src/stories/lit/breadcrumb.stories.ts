import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

interface BreadcrumbLink {
  label: string;
  href?: string;
}

interface BreadcrumbArgs {
  button: string;
  links: BreadcrumbLink[];
}

const breadcrumbArgTypes: ArgTypes<BreadcrumbArgs> = {
  button: {
    control: "text",
    description: "Libellé du bouton du Fil d'Ariane en mobile",
  },
  links: {
    control: "object",
    description: "Tableau de données de chaque segment du fil d'Ariane",
  },
};

const breadcrumbArgs: BreadcrumbArgs = {
  button: "Voir le fil d’Ariane",
  links: [
    { label: "Accueil", href: "/" },
    { label: "Segment 1", href: "#" },
    { label: "Segment 2", href: "#" },
    { label: "Page actuelle" },
  ],
};

const render = (args: BreadcrumbArgs) => html`
  <dsfr-breadcrumb
    .button=${args.button}
    .links=${args.links}
  ></dsfr-breadcrumb>
`;

const meta: Meta<BreadcrumbArgs> = {
  title: "Lit/Breadcrumb",
  component: "dsfr-breadcrumb",
  tags: ["autodocs"],
  argTypes: breadcrumbArgTypes,
  args: breadcrumbArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const BreadcrumbStory: Story = {
  name: "BreadcrumbStory",
  args: {},
};

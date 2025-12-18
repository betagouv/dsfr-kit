import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const breadcrumbArgTypes = {
  button: {
    control: "text",
    description: "Libellé du bouton du Fil d'Ariane en mobile",
  },
  links: {
    control: "object",
    description: "Tableau de données de chaque segment du fil d'Ariane",
  },
};

const breadcrumbArgs = {
  button: "Voir le fil d’Ariane",
  links: [
    { label: "Accueil", href: "/" },
    { label: "Segment 1", href: "#" },
    { label: "Segment 2", href: "#" },
    { label: "Page actuelle" },
  ],
};

interface BreadcrumbArgs {
  button: string;
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  links: any[];
}

const render = (args: BreadcrumbArgs) => html`
  <dsfr-breadcrumb
    .button=${args.button}
    .links=${args.links}
  ></dsfr-breadcrumb>
`;

const meta: Meta<BreadcrumbArgs> = {
  title: "Web Components/Breadcrumb",
  component: "dsfr-breadcrumb",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: breadcrumbArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: breadcrumbArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const BreadcrumbStory: Story = {
  name: "BreadcrumbStory",
  args: {},
};

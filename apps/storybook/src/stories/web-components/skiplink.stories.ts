import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const skiplinkArgTypes = {
  links: {
    control: "object",
    description: "Tableau de liens d'évitement",
  },
};

const skiplinkArgs = {
  links: [
    { label: "Contenu", href: "#content" },
    { label: "Menu", href: "#header-navigation" },
    { label: "Recherche", href: "#header-search" },
    { label: "Pied de page", href: "#footer" },
  ],
};

interface SkiplinkArgs {
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  links: any[];
}

const render = (args: SkiplinkArgs) => html`
  <dsfr-skiplink .links=${args.links}></dsfr-skiplink>
  <div style="padding: 2rem;">
    <p>Appuyez sur la touche <strong>Tab</strong> pour faire apparaître les liens d'évitement.</p>
    <div id="header-navigation" style="margin-top: 50vh;">Navigation</div>
    <div id="header-search" style="margin-top: 50vh;">Recherche</div>
    <div id="content" style="margin-top: 50vh;">Contenu</div>
    <div id="footer" style="margin-top: 50vh;">Pied de page</div>
  </div>
`;

const meta: Meta<SkiplinkArgs> = {
  title: "Web Components/Skiplink",
  component: "dsfr-skiplink",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: skiplinkArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: skiplinkArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
  parameters: {
    docs: {
      description: {
        component:
          "Appuyez sur la touche tab pour faire apparaitre les liens d'évitement.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<SkiplinkArgs>;

export const SkiplinkStory: Story = {
  name: "SkiplinkStory",
  args: {},
};

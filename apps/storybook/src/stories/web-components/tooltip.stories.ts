import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const tooltipArgTypes = {
  label: {
    control: "text",
    description: "Libellé du bouton survolé",
  },
  content: {
    control: "text",
    description: "Contenu de l'infobulle",
  },
};

const tooltipArgs = {
  label: "Survoler pour afficher l'infobulle",
  content: "Contenu de l'infobulle",
};

interface TooltipArgs {
  label: string;
  content: string;
  kind?: "hover" | "click";
  link?: boolean;
}

const render = (args: TooltipArgs) => html`
  <div style="margin: 5rem;">
    <dsfr-tooltip
      .label=${args.label}
      .content=${args.content}
      .kind=${args.kind}
      ?link=${args.link}
    ></dsfr-tooltip>
  </div>
`;

const meta: Meta<TooltipArgs> = {
  title: "Web Components/Tooltip",
  component: "dsfr-tooltip",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: tooltipArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: tooltipArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const TooltipStory: Story = {
  name: "TooltipStory",
  args: {},
};

export const TooltipClickButtonStory: Story = {
  name: "TooltipClickButtonStory",
  tags: ["autodocs"],
  args: {
    kind: "click",
    label: "Cliquer pour afficher l'infobulle",
    content: "Contenu de l'infobulle activée au clic",
  },
};

export const TooltipHoverLinkStory: Story = {
  name: "TooltipHoverLinkStory",
  tags: ["autodocs"],
  args: {
    kind: "hover",
    link: true,
    label: "Survoler le lien pour afficher l'infobulle",
    content: "Contenu de l'infobulle sur un lien",
  },
};

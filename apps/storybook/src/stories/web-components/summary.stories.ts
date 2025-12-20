import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface SummaryItem {
  label: string;
  href: string;
  items?: SummaryItem[];
}

interface SummaryArgs {
  title: string;
  list: SummaryItem[];
  markup: string;
}

const summaryArgTypes: ArgTypes<SummaryArgs> = {
  title: {
    control: "text",
    description: "Titre du sommaire",
  },
  list: {
    control: "object",
    description: "Liste des liens du sommaire",
  },
  markup: {
    control: { type: "select" },
    options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
    description: "Balise de titre",
  },
};

const summaryArgs: SummaryArgs = {
  title: "Sommaire",
  list: [
    { label: "Titre de la section 1", href: "#section-1" },
    { label: "Titre de la section 2", href: "#section-2" },
    { label: "Titre de la section 3", href: "#section-3" },
  ],
  markup: "p",
};

const render = (args: SummaryArgs) => html`
  <dsfr-summary
    .title=${args.title}
    .list=${args.list}
    .markup=${args.markup}
  ></dsfr-summary>
`;

const meta: Meta<SummaryArgs> = {
  title: "Web Components/Summary",
  component: "dsfr-summary",
  tags: ["autodocs"],
  argTypes: summaryArgTypes,
  args: summaryArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<SummaryArgs>;

export const SummaryStory: Story = {
  name: "SummaryStory",
  args: {},
};

export const HierarchyStory: Story = {
  name: "HierarchyStory",
  tags: ["autodocs"],
  args: {
    list: [
      {
        label: "Titre de la section 1",
        href: "#section-1",
        items: [
          { label: "Sous-titre 1.1", href: "#section-1-1" },
          { label: "Sous-titre 1.2", href: "#section-1-2" },
        ],
      },
      {
        label: "Titre de la section 2",
        href: "#section-2",
        items: [{ label: "Sous-titre 2.1", href: "#section-2-1" }],
      },
      { label: "Titre de la section 3", href: "#section-3" },
    ],
  },
};

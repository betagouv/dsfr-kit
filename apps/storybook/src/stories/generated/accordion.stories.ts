import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";
import type { ArgTypes } from "@storybook/web-components-vite";

interface AccordionArgs {
  label: string;
  content: string;
  isExpanded: boolean;
  id: string;
}

const accordionArgTypes: ArgTypes<AccordionArgs> = {
  label: {
    control: "text",
    description: "Libellé de l'accordéon",
  },
  content: {
    control: "text",
    description: "Contenu de l'accordéon",
  },
  isExpanded: {
    control: "boolean",
    description: "L'accordéon est-il ouvert ?",
  },
  id: {
    control: "text",
    description: "Id de l'accordéon",
  },
};

const accordionArgs: AccordionArgs = {
  label: "Libellé accordéon (Généré)",
  content:
    "<p>Ce composant a été généré automatiquement à partir du template EJS du DSFR.</p>",
  isExpanded: false,
  id: "accordion-gen-1",
};

const render = (args: AccordionArgs) => html`
  <dsfr-accordion-gen
    .label=${args.label}
    ?isExpanded=${args.isExpanded}
    .id=${args.id}
    .content=${args.content}
  >
  </dsfr-accordion-gen>
`;

const meta: Meta<AccordionArgs> = {
  title: "Generated/Accordion",
  component: "dsfr-accordion-gen",
  tags: ["autodocs"],
  argTypes: accordionArgTypes,
  args: accordionArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<AccordionArgs>;

export const AccordionStory: Story = {
  name: "Generated Accordion",
  args: {},
};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
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
  label: "Libellé accordéon",
  content:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>",
  isExpanded: false,
  id: "accordion-1",
};

const render = (args: AccordionArgs) => html`
  <dsfr-accordion
    .label=${args.label}
    ?expanded=${args.isExpanded}
    .id=${args.id}
  >
    ${unsafeHTML(args.content)}
  </dsfr-accordion>
`;

const meta: Meta<AccordionArgs> = {
  title: "Web Components/Accordion",
  component: "dsfr-accordion",
  tags: ["autodocs"],
  argTypes: accordionArgTypes,
  args: accordionArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<AccordionArgs>;

export const AccordionStory: Story = {
  name: "AccordionStory",
  args: {},
};

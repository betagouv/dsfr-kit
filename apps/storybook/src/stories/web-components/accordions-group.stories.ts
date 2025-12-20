import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "@dsfr-kit/web-components";

interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

interface AccordionsGroupArgs {
  group: boolean;
  accordions: AccordionItem[];
}

// Duplicate of accordionArgs from accordion.stories.ts to avoid circular deps or complex imports
const baseAccordionArgs = {
  isExpanded: false,
  id: "accordion-id",
  label: "Libellé accordéon",
  content:
    '<h4 class="fr-h4">Contenu </h4> <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>',
};

const getAccordionArgs = (id: number) => {
  return {
    id: `${baseAccordionArgs.id}-${id}`,
    label: `${baseAccordionArgs.label} ${id}`,
    content: `${baseAccordionArgs.content}`,
  };
};

const accordionsGroupArgTypes: ArgTypes<AccordionsGroupArgs> = {
  group: {
    control: "boolean",
    description:
      "Accordéons groupés (ferme le précédent à l’ouverture d'un autre)",
    table: {
      type: { summary: "boolean" },
    },
  },
  accordions: {
    control: "object",
  },
};

const accordionsGroupArgs: AccordionsGroupArgs = {
  group: true,
  accordions: [
    getAccordionArgs(1),
    getAccordionArgs(2),
    getAccordionArgs(3),
    getAccordionArgs(4),
  ],
};

const meta: Meta<AccordionsGroupArgs> = {
  title: "Web Components/Accordion/Accordions Group",
  component: "dsfr-accordion-group",
  tags: ["autodocs"],
  argTypes: accordionsGroupArgTypes,
  args: accordionsGroupArgs,
  render: (args) => html`
    <dsfr-accordion-group ?group=${args.group}>
      ${args.accordions.map(
        (accordion) => html`
        <dsfr-accordion
          id=${accordion.id}
          label=${accordion.label}
        >
          ${unsafeHTML(accordion.content)}
        </dsfr-accordion>
      `,
      )}
    </dsfr-accordion-group>
  `,
};

export default meta;
type Story = StoryObj<AccordionsGroupArgs>;

export const AccordionsGroupStory: Story = {
  name: "AccordionsGroupStory",
};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import "@dsfr-kit/web-components";

const accordionArgTypes = {
	isExpanded: {
		control: "boolean",
		description: "L'accordéon est-il ouvert au départ",
		table: {
			type: { summary: "boolean" },
		},
	},
	id: {
		control: "text",
		description: "Attribut 'id' du collapse de l'accordéon",
		table: {
			type: { summary: "string" },
		},
	},
	label: {
		control: "text",
		description: "Libellé du bouton",
		table: {
			type: { summary: "string" },
		},
	},
	content: {
		control: "text",
		description: "Contenu du collapse",
		table: {
			type: { summary: "string" },
		},
	},
} as const;

const accordionArgs = {
	isExpanded: false,
	id: "accordion-id",
	label: "Libellé accordéon",
	content:
		'<h4 class="fr-h4">Contenu </h4> <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>',
};

const meta: Meta = {
	title: "Web Components/Accordion",
	component: "dsfr-accordion",
	tags: ["autodocs"],
	argTypes: accordionArgTypes,
	args: accordionArgs,
	render: (args) => html`
    <dsfr-accordion
      id=${args.id}
      label=${args.label}
      ?expanded=${args.isExpanded}
    >
      ${unsafeHTML(args.content)}
    </dsfr-accordion>
  `,
};

export default meta;
type Story = StoryObj;

export const AccordionStory: Story = {};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Accordion",
	component: "dsfr-accordion",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		expanded: { control: "boolean" },
		headingLevel: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
		},
		content: { control: "text" },
	},
	args: {
		label: "Intitulé accordéon",
		expanded: false,
		headingLevel: "h3",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	render: (args) => html`
    <dsfr-accordion
      label=${args.label}
      ?expanded=${args.expanded}
      heading-level=${args.headingLevel}
    >
      ${args.content}
    </dsfr-accordion>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Expanded: Story = {
	args: {
		expanded: true,
	},
};

export const LongContent: Story = {
	args: {
		content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        `,
	},
};

export const AccordionGroup: Story = {
	render: () => html`
        <dsfr-accordion-group>
            <dsfr-accordion label="Accordéon 1">Contenu 1</dsfr-accordion>
            <dsfr-accordion label="Accordéon 2">Contenu 2</dsfr-accordion>
            <dsfr-accordion label="Accordéon 3">Contenu 3</dsfr-accordion>
        </dsfr-accordion-group>
    `,
};

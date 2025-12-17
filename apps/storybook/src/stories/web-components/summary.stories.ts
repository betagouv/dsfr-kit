import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
	title: "Web Components/Summary",
	component: "dsfr-summary",
	tags: ["autodocs"],
	argTypes: {
		summaryTitle: { control: "text" },
		links: { control: "object" },
	},
	args: {
		summaryTitle: "Sommaire",
		links: [
			{ label: "Titre de la section 1", href: "#" },
			{ label: "Titre de la section 2", href: "#" },
			{ label: "Titre de la section 3", href: "#" },
		],
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: (args) => html`
        <dsfr-summary
            summaryTitle=${args.summaryTitle}
            .links=${args.links}
        ></dsfr-summary>
    `,
};

export const WithHierarchy: Story = {
	args: {
		links: [
			{
				label: "Titre de la section 1",
				href: "#",
				items: [
					{ label: "Sous-titre 1.1", href: "#" },
					{ label: "Sous-titre 1.2", href: "#" },
				],
			},
			{
				label: "Titre de la section 2",
				href: "#",
				items: [{ label: "Sous-titre 2.1", href: "#" }],
			},
			{ label: "Titre de la section 3", href: "#" },
		],
	},
	render: Default.render,
};

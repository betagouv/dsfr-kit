import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Web Components/Tag",
	component: "dsfr-tag",
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["Default", "Link", "Selectable", "Dismissible"],
			description: "Storybook control to switch between tag variants",
		},
		label: { control: "text" },
		size: {
			control: "radio",
			options: ["md", "sm"],
		},
		disabled: { control: "boolean" },
		selected: { control: "boolean", if: { arg: "type", eq: "Selectable" } },
		href: { control: "text", if: { arg: "type", eq: "Link" } },
		icon: {
			control: "select",
			options: [
				"",
				"fr-icon-arrow-right-line",
				"fr-icon-map-pin-2-line",
				"fr-icon-calendar-line",
			],
		},
	},
	args: {
		type: "Default",
		label: "Libellé tag",
		size: "md",
		disabled: false,
		selected: false,
		href: "#",
		icon: "",
	},
	render: (args) => {
		const small = args.size === "sm";

		// Conditional Props based heavily on 'type' to ensure clean demos
		const isLink = args.type === "Link";
		const isSelectable = args.type === "Selectable";
		const isDismissible = args.type === "Dismissible";

		// Pass href ONLY if it's a link type
		const hrefVal = isLink ? args.href : "";

		return html`
      <dsfr-tag
        label=${args.label}
        href=${hrefVal}
        ?small=${small}
        ?disabled=${args.disabled}
        ?selectable=${isSelectable}
        ?dismissible=${isDismissible}
        ?selected=${args.selected}
        icon=${args.icon}
      ></dsfr-tag>
    `;
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		type: "Default",
	},
};

export const Link: Story = {
	args: {
		type: "Link",
		label: "Tag cliquable",
		href: "https://example.com",
	},
};

export const Selectable: Story = {
	args: {
		type: "Selectable",
		label: "Tag sélectionnable",
		selected: false,
	},
};

export const Dismissible: Story = {
	args: {
		type: "Dismissible",
		label: "Tag supprimable",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		label: "Tag petit",
	},
};

export const WithIcon: Story = {
	args: {
		icon: "fr-icon-arrow-right-line",
		label: "Tag avec icône",
	},
};

export const Group: Story = {
	render: () => html`
    <ul class="fr-tags-group">
      <li><dsfr-tag label="Tag 1"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 2" icon="fr-icon-map-pin-2-line"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 3" type="Link" href="#"></dsfr-tag></li>
      <li><dsfr-tag label="Tag 4" size="sm"></dsfr-tag></li>
    </ul>
  `,
};

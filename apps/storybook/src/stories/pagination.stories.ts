import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
	title: "Components/Pagination",
	component: "dsfr-pagination",
	tags: ["autodocs"],
	argTypes: {
		currentPage: { control: "number" },
		totalPages: { control: "number" },
	},
	args: {
		currentPage: 1,
		totalPages: 10,
	},
	parameters: {
		actions: {
			handles: ["dsfr-page-change"],
		},
	},
};

export default meta;
type Story = StoryObj;

const Template: Story = {
	render: (args) => html`
        <dsfr-pagination
            current-page=${args.currentPage}
            total-pages=${args.totalPages}
            @dsfr-page-change=${(e: CustomEvent) => console.log("Page changed:", e.detail.page)}
        ></dsfr-pagination>
    `,
};

export const Default: Story = {
	...Template,
};

export const ManyPages: Story = {
	...Template,
	args: {
		currentPage: 50,
		totalPages: 100,
	},
};

export const FirstPage: Story = {
	...Template,
	args: {
		currentPage: 1,
		totalPages: 10,
	},
};

export const LastPage: Story = {
	...Template,
	args: {
		currentPage: 10,
		totalPages: 10,
	},
};

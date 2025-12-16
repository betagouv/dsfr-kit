import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Highlight",
	component: "dsfr-highlight",
	tags: ["autodocs"],
	argTypes: {
		text: { control: "text" },
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
		},
	},
	args: {
		text: "Les mises en exergue permettent de distinguer une information importante au sein d’un contenu éditorial.",
		size: "md",
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Small: Story = {
	args: {
		size: "sm",
		text: "Mise en exergue petite taille.",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		text: "Mise en exergue grande taille pour emphatiser davantage.",
	},
};

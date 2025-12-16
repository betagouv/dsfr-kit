import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Breadcrumb",
	component: "dsfr-breadcrumb",
	tags: ["autodocs"],
	argTypes: {
		items: { control: "object" },
	},
	args: {
		items: [
			{ text: "Accueil", href: "/" },
			{ text: "Rubrique", href: "/rubrique" },
			{ text: "Sous-rubrique", href: "/sous-rubrique" },
			{ text: "Page actuelle" },
		],
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Short: Story = {
	args: {
		items: [{ text: "Accueil", href: "/" }, { text: "Page actuelle" }],
	},
};

export const LongLabels: Story = {
	args: {
		items: [
			{ text: "Accueil", href: "/" },
			{
				text: "Une rubrique avec un nom très long pour tester le retour à la ligne",
				href: "/long-1",
			},
			{ text: "Une sous-rubrique également assez longue", href: "/long-2" },
			{
				text: "Page actuelle avec un titre à rallonge qui devrait être tronqué ou affiché sur plusieurs lignes selon la largeur",
			},
		],
	},
};

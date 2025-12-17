import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
	title: "Web Components/Stepper",
	component: "dsfr-stepper",
	tags: ["autodocs"],
	argTypes: {
		currentStep: { control: "number" },
		steps: { control: "number" },
		currentTitle: { control: "text" },
		nextTitle: { control: "text" },
	},
	args: {
		steps: 3,
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		currentStep: 1,
		currentTitle: "Intitulé de l’étape en cours",
		nextTitle: "Intitulé de l’étape suivante",
	},
};

export const MiddleStep: Story = {
	args: {
		currentStep: 2,
		currentTitle: "Deuxième étape",
		nextTitle: "Troisième étape",
	},
};

export const LastStep: Story = {
	args: {
		currentStep: 3,
		currentTitle: "Dernière étape",
		nextTitle: "", // No next title on last step
	},
};

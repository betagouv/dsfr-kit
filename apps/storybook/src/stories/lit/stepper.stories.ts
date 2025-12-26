import type { ArgTypes, Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

interface StepperArgs {
  title: string;
  currentStep: number;
  stepCount: number;
  nextStep: string;
  markup: string;
}

const stepperArgTypes: ArgTypes<StepperArgs> = {
  title: {
    control: "text",
    description: "Titre de l'indicateur d'étapes",
  },
  currentStep: {
    control: "number",
    description: "Numéro de l'étape courante",
  },
  stepCount: {
    control: "number",
    description: "Nombre total d'étapes",
  },
  nextStep: {
    control: "text",
    description: "Titre de la prochaine étape",
  },
  markup: {
    control: { type: "select" },
    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    description: "Balise de titre",
  },
};

const stepperArgs: StepperArgs = {
  title: "Intitulé de l’étape en cours",
  currentStep: 1,
  stepCount: 3,
  nextStep: "Intitulé de l’étape suivante",
  markup: "h2",
};

const render = (args: StepperArgs) => html`
  <dsfr-stepper
    .title=${args.title}
    .currentStep=${args.currentStep}
    .stepCount=${args.stepCount}
    .nextStep=${args.nextStep}
    .markup=${args.markup}
  ></dsfr-stepper>
`;

const meta: Meta<StepperArgs> = {
  title: "Lit/Stepper",
  component: "dsfr-stepper",
  tags: ["autodocs"],
  argTypes: stepperArgTypes,
  args: stepperArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<StepperArgs>;

export const StepperStory: Story = {
  name: "StepperStory",
  args: {},
};

import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "@dsfr-kit/web-components";

const meta: Meta = {
	title: "Components/Badge",
	component: "dsfr-badge",
	tags: ["autodocs"],
	argTypes: {
		label: { control: "text" },
		variant: {
			control: "select",
			options: [null, "success", "error", "info", "warning", "new"],
		},
		noIcon: { control: "boolean" },
		sm: { control: "boolean" },
	},
	args: {
		label: "Label Badge",
		variant: null,
		noIcon: false,
		sm: false,
	},
	render: (args) => html`
    <dsfr-badge
      variant=${args.variant || null}
      ?no-icon=${args.noIcon}
      ?sm=${args.sm}
    >
      ${args.label}
    </dsfr-badge>
  `,
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};

export const Success: Story = {
	args: {
		variant: "success",
		label: "Succès",
	},
};

export const ErrorStory: Story = {
	args: {
		variant: "error",
		label: "Erreur",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		label: "Warning",
	},
};

export const Info: Story = {
	args: {
		variant: "info",
		label: "Info",
	},
};

export const New: Story = {
	args: {
		variant: "new",
		label: "Nouveau",
	},
};

export const NoIcon: Story = {
	args: {
		variant: "success",
		noIcon: true,
		label: "Succès sans icône",
	},
};

export const Small: Story = {
	args: {
		variant: "info",
		sm: true,
		label: "Petit Badge",
	},
};

export const Group: Story = {
	render: () => html`
    <ul class="fr-badge-group">
      <li><dsfr-badge variant="success">Succès</dsfr-badge></li>
      <li><dsfr-badge variant="error">Erreur</dsfr-badge></li>
      <li><dsfr-badge variant="info">Info</dsfr-badge></li>
      <li><dsfr-badge variant="warning">Attention</dsfr-badge></li>
    </ul>
  `,
};

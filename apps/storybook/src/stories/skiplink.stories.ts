import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
	title: "Components/Skiplink",
	component: "dsfr-skiplink",
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Press Tab key to reveal the skiplinks.",
			},
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	render: () => html`
        <dsfr-skiplink>
            <dsfr-skiplink-item href="#content" text="Contenu"></dsfr-skiplink-item>
            <dsfr-skiplink-item href="#header" text="Menu"></dsfr-skiplink-item>
            <dsfr-skiplink-item href="#footer" text="Pied de page"></dsfr-skiplink-item>
        </dsfr-skiplink>

        <div id="header" style="margin-top: 2rem; padding: 1rem; background: #eee;">
            Header (Anchor target)
        </div>

        <main id="content" style="margin-top: 2rem; padding: 1rem; background: #ddd; height: 500px;">
            <h1>Main Content</h1>
            <p>Press Tab to see the skiplinks at the top.</p>
        </main>

        <div id="footer" style="margin-top: 2rem; padding: 1rem; background: #ccc;">
            Footer (Anchor target)
        </div>
    `,
};

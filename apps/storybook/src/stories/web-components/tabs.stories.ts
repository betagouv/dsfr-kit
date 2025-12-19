import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const tabsArgTypes = {
  label: {
    control: "text",
    description: "Label du système d'onglets (aria-label)",
  },
  hasIcon: {
    control: "boolean",
    description: "Si true, ajoute une icone dans le titre des onglets",
  },
  tabs: {
    control: "object",
    description: "Liste des onglets",
  },
};

const tabsArgs = {
  label: "Système d'onglets",
  hasIcon: false,
  tabs: [
    {
      id: "tab-1",
      label: "Onglet 1",
      content: "Contenu de l'onglet 1",
      icon: "checkbox-circle-line",
    },
    {
      id: "tab-2",
      label: "Onglet 2",
      content: "Contenu de l'onglet 2",
      icon: "checkbox-circle-line",
    },
    {
      id: "tab-3",
      label: "Onglet 3",
      content: "Contenu de l'onglet 3",
      icon: "checkbox-circle-line",
    },
  ],
};

interface TabsArgs {
  label: string;
  hasIcon: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  tabs: any[];
}

const render = (args: TabsArgs) => html`
  <dsfr-tabs .label=${args.label}>
    ${args.tabs.map(
      (tab) => html`
      <dsfr-tab .label=${tab.label} .icon=${args.hasIcon ? tab.icon : ""}>
        <p>${tab.content}</p>
      </dsfr-tab>
    `,
    )}
  </dsfr-tabs>
`;

const meta: Meta<TabsArgs> = {
  title: "Web Components/Tabs",
  component: "dsfr-tabs",
  tags: ["autodocs"],
  argTypes: tabsArgTypes as any,
  args: tabsArgs as any,
  render: render as any,
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const TabsStory: Story = {
  name: "TabsStory",
  args: {},
};

import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

import type { ArgTypes } from "@storybook/web-components-vite";

interface TabItem {
  id: string;
  label: string;
  content: string;
  icon?: string;
}

interface TabsArgs {
  label: string;
  hasIcon: boolean;
  tabs: TabItem[];
}

const tabsArgTypes: ArgTypes<TabsArgs> = {
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

const tabsArgs: TabsArgs = {
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
  argTypes: tabsArgTypes,
  args: tabsArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<TabsArgs>;

export const TabsStory: Story = {
  name: "TabsStory",
  args: {},
};

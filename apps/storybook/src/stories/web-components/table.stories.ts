import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const tableArgTypes = {
  caption: {
    control: "text",
    description: "Titre du tableau",
  },
  noCaption: {
    control: "boolean",
    description: "si true, masque le titre du tableau",
  },
  bottomCaption: {
    control: "boolean",
    description: "si true, positionne le titre en bas",
  },
  bordered: {
    control: "boolean",
    description: "si true, ajoute des bordures verticales",
  },
  noScroll: {
    control: "boolean",
    description: "si true, désactive le scroll horizontal",
  },
  multiline: {
    control: "boolean",
    description: "si true, permet le retour à la ligne dans les cellules",
  },
  size: {
    control: { type: "select" },
    options: ["sm", "md", "lg"],
    description: "Taille du tableau",
  },
};

const tableArgs = {
  caption: "Titre du tableau",
  noCaption: false,
  bottomCaption: false,
  bordered: false,
  noScroll: false,
  multiline: false,
  size: "md",
};

interface TableArgs {
  caption: string;
  noCaption: boolean;
  bottomCaption: boolean;
  bordered: boolean;
  noScroll: boolean;
  multiline: boolean;
  size: "sm" | "md" | "lg";
}

const tableContent = html`
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Prénom</th>
      <th scope="col">Email</th>
      <th scope="col">Rôle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dupont</td>
      <td>Jean</td>
      <td>jean.dupont@example.com</td>
      <td>Utilisateur</td>
    </tr>
    <tr>
      <td>Martin</td>
      <td>Marie</td>
      <td>marie.martin@example.com</td>
      <td>Administrateur</td>
    </tr>
    <tr>
      <td>Bernard</td>
      <td>Paul</td>
      <td>paul.bernard@example.com</td>
      <td>Éditeur</td>
    </tr>
  </tbody>
`;

const render = (args: TableArgs) => html`
  <dsfr-table
    .caption=${args.caption}
    ?no-caption=${args.noCaption}
    ?bottom-caption=${args.bottomCaption}
    ?bordered=${args.bordered}
    ?no-scroll=${args.noScroll}
    ?multiline=${args.multiline}
    .size=${args.size}
  >
    ${tableContent}
  </dsfr-table>
`;

const meta: Meta<TableArgs> = {
  title: "Web Components/Table",
  component: "dsfr-table",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: tableArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: tableArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<TableArgs>;

export const TableStory: Story = {
  name: "Table",
  tags: ["!autodocs"],
  args: {},
};

export const DefaultStory: Story = {
  name: "Default",
  tags: ["autodocs", "!dev"],
  args: {},
};

export const SizeSMStory: Story = {
  name: "Size SM",
  tags: ["autodocs", "!dev"],
  args: {
    size: "sm",
  },
};

export const SizeLGStory: Story = {
  name: "Size LG",
  tags: ["autodocs", "!dev"],
  args: {
    size: "lg",
  },
};

export const VerticalBordersStory: Story = {
  name: "Vertical Borders",
  tags: ["autodocs", "!dev"],
  args: {
    bordered: true,
  },
};

export const NoScrollStory: Story = {
  name: "No Scroll",
  tags: ["autodocs", "!dev"],
  args: {
    noScroll: true,
  },
};

export const MultilineStory: Story = {
  name: "Multiline",
  tags: ["autodocs", "!dev"],
  args: {
    multiline: true,
  },
};

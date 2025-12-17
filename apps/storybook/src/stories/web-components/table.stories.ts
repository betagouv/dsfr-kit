import type { Meta, StoryObj } from "@storybook/web-components-vite";
import "@dsfr-kit/web-components";
import { html } from "lit";

const meta: Meta = {
  title: "Web Components/Table",
  component: "dsfr-table",
  tags: ["autodocs"],
  argTypes: {
    caption: { control: "text" },
    noCaption: { control: "boolean" },
    bottomCaption: { control: "boolean" },
    bordered: { control: "boolean" },
    noScroll: { control: "boolean" },
    density: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    caption: "Titre du tableau",
    noCaption: false,
    bottomCaption: false,
    bordered: false,
    noScroll: false,
    density: "md",
  },
};

export default meta;
type Story = StoryObj;

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

export const Default: Story = {
  render: (args) => html`
        <dsfr-table
            caption=${args.caption}
            ?no-caption=${args.noCaption}
            ?bottom-caption=${args.bottomCaption}
            ?bordered=${args.bordered}
            ?no-scroll=${args.noScroll}
            density=${args.density}
        >
            ${tableContent}
        </dsfr-table>
    `,
};

export const Bordered: Story = {
  args: {
    bordered: true,
    caption: "Tableau avec bordures",
  },
  render: Default.render,
};

export const Dense: Story = {
  args: {
    density: "sm",
    caption: "Tableau dense",
  },
  render: Default.render,
};

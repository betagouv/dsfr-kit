import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface TableArgs {
  caption: string;
  noCaption: boolean;
  bottomCaption: boolean;
  bordered: boolean;
  noScroll: boolean;
  multiline: boolean;
  size: "sm" | "md" | "lg";
}

const tableArgTypes: ArgTypes<TableArgs> = {
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

const tableArgs: TableArgs = {
  caption: "Titre du tableau",
  noCaption: false,
  bottomCaption: false,
  bordered: false,
  noScroll: false,
  multiline: false,
  size: "md",
};

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
    ?noCaption=${args.noCaption}
    ?bottomCaption=${args.bottomCaption}
    ?bordered=${args.bordered}
    ?noScroll=${args.noScroll}
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
  argTypes: tableArgTypes,
  args: tableArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<TableArgs>;

export const TableStory: Story = {
  name: "TableStory",
  args: {},
};

export const DefaultStory: Story = {
  name: "DefaultStory",
  tags: ["autodocs"],
  args: {},
};

export const SizeSMStory: Story = {
  name: "SizeSMStory",
  tags: ["autodocs"],
  args: {
    size: "sm",
  },
};

export const SizeMDStory: Story = {
  name: "SizeMDStory",
  tags: ["autodocs"],
  args: {
    size: "md",
  },
};

export const SizeLGStory: Story = {
  name: "SizeLGStory",
  tags: ["autodocs"],
  args: {
    size: "lg",
  },
};

export const VerticalBordersStory: Story = {
  name: "VerticalBordersStory",
  tags: ["autodocs"],
  args: {
    bordered: true,
  },
};

export const NoScrollStory: Story = {
  name: "NoScrollStory",
  tags: ["autodocs"],
  args: {
    noScroll: true,
  },
};

export const MultilineStory: Story = {
  name: "MultilineStory",
  tags: ["autodocs"],
  args: {
    multiline: true,
  },
};

export const FixedColumnStory: Story = {
  name: "FixedColumnStory",
  tags: ["autodocs"],
  args: {
    caption: "Tableau avec colonnes figées",
  },
  render: (args) => html`
    <style>
        /* Styles to simulate fixed columns if not provided by DSFR global CSS effectively in shadow/light DOM mixture without logic */
        /* Note: Real DSFR Fixed Column often requires specific JS or Layout structure.
           Here we demonstrate the structure. If the web component doesn't fully support it, this story serves as a target. */
    </style>
    <dsfr-table .caption=${args.caption}>
       <thead>
            <tr>
                <th>Colonne figée</th>
                <th>Colonne normale 1</th>
                <th>Colonne normale 2</th>
                <th>Colonne normale 3</th>
                <th>Colonne normale 4</th>
                <th>Colonne normale 5</th>
                <th>Colonne normale 6</th>
            </tr>
       </thead>
       <tbody>
            <tr>
                <td>Fixe</td>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td>Donnée 3</td>
                <td>Donnée 4</td>
                <td>Donnée 5</td>
                <td>Donnée 6</td>
            </tr>
             <tr>
                <td>Fixe</td>
                <td>Donnée 1</td>
                <td>Donnée 2</td>
                <td>Donnée 3</td>
                <td>Donnée 4</td>
                <td>Donnée 5</td>
                <td>Donnée 6</td>
            </tr>
       </tbody>
    </dsfr-table>
  `,
};

export const SelectableTableStory: Story = {
  name: "SelectableTableStory",
  tags: ["autodocs"],
  args: {
    caption: "Tableau sélectionnable",
  },
  render: (args) => html`
    <dsfr-table .caption=${args.caption}>
       <thead>
            <tr>
                <th><div class="fr-checkbox-group"><input type="checkbox" id="header-check"><label class="fr-label" for="header-check">&nbsp;</label></div></th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Rôle</th>
            </tr>
       </thead>
       <tbody>
            <tr>
                <td><div class="fr-checkbox-group"><input type="checkbox" id="row-1-check"><label class="fr-label" for="row-1-check">&nbsp;</label></div></td>
                <td>Dupont</td>
                <td>Jean</td>
                <td>Utilisateur</td>
            </tr>
            <tr>
                 <td><div class="fr-checkbox-group"><input type="checkbox" id="row-2-check"><label class="fr-label" for="row-2-check">&nbsp;</label></div></td>
                <td>Martin</td>
                <td>Marie</td>
                <td>Admin</td>
            </tr>
       </tbody>
    </dsfr-table>
  `,
};

export const ComplexTableStory: Story = {
  name: "ComplexTableStory",
  tags: ["autodocs"],
  args: {
    caption: "Tableau complexe",
  },
  render: (args) => html`
    <dsfr-table .caption=${args.caption}>
       <thead>
            <tr>
                <th colspan="2">Identité</th>
                <th colspan="2">Coordonnées</th>
            </tr>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
            </tr>
       </thead>
       <tbody>
            <tr>
                <td>Dupont</td>
                <td>Jean</td>
                <td>jean@example.com</td>
                <td>0123456789</td>
            </tr>
             <tr>
                <td>Martin</td>
                <td>Marie</td>
                <td>marie@example.com</td>
                <td>0987654321</td>
            </tr>
       </tbody>
    </dsfr-table>
  `,
};

import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface PaginationArgs {
  currentPage: number;
  totalPages: number;
  ariaLabel: string;
}

const paginationArgTypes: ArgTypes<PaginationArgs> = {
  currentPage: {
    control: "number",
    description: "Index de la page courante",
  },
  totalPages: {
    control: "number",
    description: "Nombre total de pages",
  },
  ariaLabel: {
    control: "text",
    description: "Label aria du composant",
  },
};

const paginationArgs: PaginationArgs = {
  currentPage: 1,
  totalPages: 10,
  ariaLabel: "Pagination",
};

const render = (args: PaginationArgs) => html`
  <dsfr-pagination
    .currentPage=${args.currentPage}
    .totalPages=${args.totalPages}
    .ariaLabel=${args.ariaLabel}
  >
  </dsfr-pagination>
`;

const meta: Meta<PaginationArgs> = {
  title: "Web Components/Pagination",
  component: "dsfr-pagination",
  tags: ["autodocs"],
  argTypes: paginationArgTypes,
  args: paginationArgs,
  render: (args) => render(args),
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const PaginationStory: Story = {
  name: "PaginationStory",
  args: {},
};

export const LastPageStory: Story = {
  name: "LastPageStory",
  tags: ["autodocs"],
  args: {
    currentPage: 10,
  },
};

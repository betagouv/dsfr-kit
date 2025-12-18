import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const paginationArgTypes = {
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

const paginationArgs = {
  currentPage: 1,
  totalPages: 10,
  ariaLabel: "Pagination",
};

interface PaginationArgs {
  currentPage: number;
  totalPages: number;
  ariaLabel: string;
}

const render = (args: PaginationArgs) => html`
  <dsfr-pagination
    .current-page=${args.currentPage}
    .total-pages=${args.totalPages}
    .ariaLabel=${args.ariaLabel}
  >
  </dsfr-pagination>
`;

const meta: Meta<PaginationArgs> = {
  title: "Web Components/Pagination",
  component: "dsfr-pagination",
  tags: ["autodocs"],
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  argTypes: paginationArgTypes as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  args: paginationArgs as any,
  // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
  render: render as any,
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const PaginationStory: Story = {
  name: "Pagination",
  args: {},
};

export const LastPageStory: Story = {
  name: "Last Page",
  tags: ["autodocs", "!dev"],
  args: {
    currentPage: 10,
  },
};

export const MiddlePageStory: Story = {
  name: "Middle Page",
  tags: ["autodocs", "!dev"],
  args: {
    currentPage: 5,
  },
};

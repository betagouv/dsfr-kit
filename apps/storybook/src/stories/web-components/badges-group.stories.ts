import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

const meta: Meta = {
  title: "Web Components/Badge/Badges Group",
  component: "dsfr-badge",
  tags: ["autodocs"],
  argTypes: {
    badges: {
      control: "object",
      description: "Liste des badges",
    },
  },
  args: {
    badges: [
      { label: "Badge 1", type: "success" },
      { label: "Badge 2", type: "info" },
      { label: "Badge 3", type: "warning" },
      { label: "Badge 4", type: "error" },
    ],
  },
};

export default meta;
type Story = StoryObj;

interface BadgeItem {
  label: string;
  type: string;
}

const renderGroup = (badges: BadgeItem[], size: "sm" | "md" = "md") => html`
  <ul class="fr-badges-group">
    ${badges.map(
      (badge) => html`
      <li>
        <dsfr-badge
          .label=${badge.label}
          .type=${badge.type}
          .size=${size}
        ></dsfr-badge>
      </li>
    `,
    )}
  </ul>
`;

export const BadgesGroupStory: Story = {
  name: "BadgesGroupStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args.badges),
};

export const SizeMdStory: Story = {
  name: "SizeMdStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args.badges, "md"),
};

export const SizeSmStory: Story = {
  name: "SizeSmStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args.badges, "sm"),
};

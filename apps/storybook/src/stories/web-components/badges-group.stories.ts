import type { ArgTypes, Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import "@dsfr-kit/web-components";

interface BadgeItem {
  label: string;
  type: string;
}

interface BadgesGroupArgs {
  badges: BadgeItem[];
}

const badgesGroupArgTypes: ArgTypes<BadgesGroupArgs> = {
  badges: {
    control: "object",
    description: "Liste des badges",
  },
};

const badgesGroupArgs: BadgesGroupArgs = {
  badges: [
    { label: "Badge 1", type: "success" },
    { label: "Badge 2", type: "info" },
    { label: "Badge 3", type: "warning" },
    { label: "Badge 4", type: "error" },
  ],
};

const meta: Meta<BadgesGroupArgs> = {
  title: "Web Components/Badge/Badges Group",
  component: "dsfr-badge",
  tags: ["autodocs"],
  argTypes: badgesGroupArgTypes,
  args: badgesGroupArgs,
};

export default meta;
type Story = StoryObj<BadgesGroupArgs>;

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
  render: (args) => renderGroup(args.badges),
};

export const SizeMdStory: Story = {
  name: "SizeMdStory",
  render: (args) => renderGroup(args.badges, "md"),
};

export const SizeSmStory: Story = {
  name: "SizeSmStory",
  render: (args) => renderGroup(args.badges, "sm"),
};

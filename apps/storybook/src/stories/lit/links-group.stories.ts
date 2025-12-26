import type { Meta, StoryObj } from "@storybook/lit-vite";
import { html } from "lit";
import "@dsfr-kit/lit";

import type { ArgTypes } from "@storybook/lit-vite";

interface LinkItem {
  label: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPlace?: "left" | "right";
  disabled?: boolean;
  download?: boolean;
  detail?: string;
}

interface LinksGroupArgs {
  size: "sm" | "md" | "lg";
  align?: "center" | "right" | "inline";
  icon?: string;
  iconPlace?: "left" | "right";
  download?: boolean;
}

const renderGroup = (args: LinksGroupArgs, items: LinkItem[]) => {
  const groupClasses = `fr-links-group ${args.align ? `fr-links-group--${args.align}` : ""}`;

  return html`
    <ul class="${groupClasses}">
      ${items.map(
        (item) => html`
        <li>
          <dsfr-link
            .label=${item.label}
            .href=${item.href || "#"}
            .size=${args.size || item.size || "md"}
            .icon=${args.icon || item.icon}
            .iconPlace=${args.iconPlace || item.iconPlace}
            ?disabled=${item.disabled}
            ?download=${item.download || args.download}
            .detail=${item.detail}
          ></dsfr-link>
        </li>
      `,
      )}
    </ul>
  `;
};

const defaultItems: LinkItem[] = [
  { label: "Label link #1" },
  { label: "Label link #2" },
  { label: "Label link #3" },
];

const meta: Meta<LinksGroupArgs> = {
  title: "Lit/Link/Links Group",
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    align: {
      control: { type: "select" },
      options: [undefined, "center", "right", "inline"],
    }, // approximation of dsfr classes
    icon: { control: "text" },
    iconPlace: { control: { type: "select" }, options: ["left", "right"] },
  } as ArgTypes<LinksGroupArgs>,
  args: {
    size: "md",
  },
};

export default meta;
type Story = StoryObj<LinksGroupArgs>;

export const LinksGroupStory: Story = {
  name: "LinksGroupStory",
  render: (args) => renderGroup(args, defaultItems),
};

export const SizeSMStory: Story = {
  name: "SizeSMStory",
  args: {
    size: "sm",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const SizeMDStory: Story = {
  name: "SizeMDStory",
  args: {
    size: "md",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const SizeLGStory: Story = {
  name: "SizeLGStory",
  args: {
    size: "lg",
  },
  render: (args) => renderGroup(args, defaultItems),
};

export const DownloadStory: Story = {
  name: "DownloadStory",
  render: (args) =>
    renderGroup({ ...args, download: true }, [
      { label: "Télécharger le document 1", detail: "PDF - 3 Mo" },
      { label: "Télécharger le document 2", detail: "DOCX - 1 Mo" },
    ]),
};

export const HorizontalStory: Story = {
  name: "HorizontalStory",
  render: (_args) => html`
    <style>
      .horizontal-group li {
        display: inline-block;
        margin-right: 1rem;
      }
    </style>
    <ul class="fr-links-group horizontal-group">
        <li>
          <dsfr-link label="Lien 1" href="#"></dsfr-link>
        </li>
        <li>
          <dsfr-link label="Lien 2" href="#"></dsfr-link>
        </li>
        <li>
          <dsfr-link label="Lien 3" href="#"></dsfr-link>
        </li>
    </ul>
  `,
};

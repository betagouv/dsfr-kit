import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html, nothing } from "lit";
import "@dsfr-kit/web-components";

// Helper for rendering groups of links
const renderGroup = (args: any, items: any[]) => {
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
            .icon-place=${args.iconPlace || item.iconPlace}
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

const defaultItems = [
  { label: "Label link #1" },
  { label: "Label link #2" },
  { label: "Label link #3" },
];

const meta: Meta = {
  title: "Web Components/Link/Links Group",
  tags: ["autodocs"],
  argTypes: {
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    align: {
      control: { type: "select" },
      options: [null, "center", "right", "inline"],
    }, // approximation of dsfr classes
    icon: { control: "text" },
    iconPlace: { control: { type: "select" }, options: ["left", "right"] },
  },
  args: {
    size: "md",
  },
};

export default meta;
type Story = StoryObj;

export const LinksGroupStory: Story = {
  name: "LinksGroupStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const SizeSMStory: Story = {
  name: "SizeSMStory",
  args: {
    size: "sm",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const SizeMDStory: Story = {
  name: "SizeMDStory",
  args: {
    size: "md",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const SizeLGStory: Story = {
  name: "SizeLGStory",
  args: {
    size: "lg",
  },
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => renderGroup(args, defaultItems),
};

export const DownloadStory: Story = {
  name: "DownloadStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) =>
    renderGroup({ ...args, download: true }, [
      { label: "Télécharger le document 1", detail: "PDF - 3 Mo" },
      { label: "Télécharger le document 2", detail: "DOCX - 1 Mo" },
    ]),
};

export const HorizontalStory: Story = {
  name: "HorizontalStory",
  // biome-ignore lint/suspicious/noExplicitAny: Storybook args are loosely typed
  render: (args: any) => html`
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

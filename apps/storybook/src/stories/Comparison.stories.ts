import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { renderComparison } from "./comparison-utils";

const meta: Meta = {
  title: "Comparison/Components",
  tags: ["autodocs"],
};

export default meta;

function createComparisonStory(
  component: string,
  genStoryId?: string,
): StoryObj {
  return {
    render: () => {
      const nativeStoryId = `dsfr-${component}--${component}-story`;
      const wcStoryId = `web-components-${component}--${component}-story`;
      return renderComparison(nativeStoryId, wcStoryId, genStoryId);
    },
  };
}

export const Accordion = createComparisonStory(
  "accordion",
  "generated-accordion--accordion-story",
);
export const Alert = createComparisonStory("alert");
export const Badge = createComparisonStory("badge");
export const Breadcrumb = createComparisonStory("breadcrumb");
export const Button = createComparisonStory("button");
export const Callout = createComparisonStory("callout");
export const Card = createComparisonStory("card");
export const Checkbox = createComparisonStory("checkbox");
export const Footer = createComparisonStory("footer");
export const Header = createComparisonStory("header");
export const Highlight = createComparisonStory("highlight");
export const Input = createComparisonStory("input");
export const Link = createComparisonStory("link");
export const Modal = createComparisonStory("modal");
export const Notice = createComparisonStory("notice");
export const Pagination = createComparisonStory("pagination");
export const Quote = createComparisonStory("quote");
export const Radio = createComparisonStory("radio");
export const Search = createComparisonStory("search");
export const Select = createComparisonStory("select");
export const Sidemenu = createComparisonStory("sidemenu");
export const Skiplink = createComparisonStory("skiplink");
export const Stepper = createComparisonStory("stepper");
export const Summary = createComparisonStory("summary");
export const Table = createComparisonStory("table");
export const Tabs = createComparisonStory("tabs");
export const Tag = createComparisonStory("tag");
export const Tile = createComparisonStory("tile");
export const Toggle = createComparisonStory("toggle");
export const Tooltip = createComparisonStory("tooltip");

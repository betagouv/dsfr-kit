import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderComparison } from "./comparison-utils";

// Import native stories (wrappers already exist but we might want the originals for pure comparison)
// For demonstration, let's try to compare Accordion
import { AccordionStory as WCAccordion } from "./web-components/accordion.stories";

const meta: Meta = {
  title: "Comparison/Accordion",
  tags: ["autodocs"],
};

export default meta;

export const AccordionComparison: StoryObj = {
  render: (args) => {
    // This is a bit tricky because native stories in DSFR often use a template function
    // and WC stories use a render function with Lit.

    // For now, let's assume we can call the render functions.
    // Native stories in the wrapper re-export the original story object.

    // Note: This implementation might need refinement based on how the native DSFR
    // templates are actually exposed/rendered in the storybook environment.

    const nativeOutput = "<!-- Native DSFR content would go here -->"; // Placeholder for complexity
    const wcOutput = WCAccordion.render
      ? // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex and require any for custom render context
        (WCAccordion.render as any)(args, {
          // Storybook's render function expects a context object as the second argument.
          // We provide a minimal one here.
          id: "wc-accordion-story",
          name: "WC Accordion Story",
          title: "WC Accordion Story",
          argTypes: {},
          globals: {},
          parameters: {},
          viewMode: "story",
          originalStoryFn: () => {},
          loaded: {},
          abort: false,
          canvasElement: document.createElement("div"),
          storyContext: {},
          // biome-ignore lint/suspicious/noExplicitAny: Storybook types are complex
        } as any)
      : html``;

    return renderComparison(nativeOutput, wcOutput);
  },
  args: {
    ...(WCAccordion.args || {}),
  },
};

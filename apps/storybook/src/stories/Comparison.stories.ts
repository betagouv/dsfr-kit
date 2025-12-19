import type { Meta, StoryObj } from "@storybook/web-components-vite";
import { html } from "lit";
import { renderComparison } from "./comparison-utils";

// Import native stories (wrappers already exist but we might want the originals for pure comparison)
// For demonstration, let's try to compare Accordion
import { AccordionStory as WCAccordion } from "./web-components/accordion.stories";
import "@dsfr-kit/web-components";

const meta: Meta = {
  title: "Comparison/Accordion",
  tags: ["autodocs"],
};

export default meta;

export const AccordionComparison: StoryObj = {
  render: (args) => {
    // Manually construct the Native DSFR HTML to ensure it renders correctly without EJS dependencies
    const nativeOutput = `
      <div class="fr-accordion">
          <h3 class="fr-accordion__title">
              <button class="fr-accordion__btn" aria-expanded="false" aria-controls="accordion-106">
                  Intitulé de l'accordéon
              </button>
          </h3>
          <div class="fr-collapse" id="accordion-106">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
      </div>
    `;

    // Manually render the Web Component using the tag
    // We Map args to props if needed, but for this demo we'll use a standard example
    const wcOutput = html`
      <dsfr-accordion label="Intitulé de l'accordéon">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </dsfr-accordion>
    `;

    return renderComparison(nativeOutput, wcOutput);
  },
  args: {},
};

import { expect, test } from "@playwright/test";

const commonComponents = [
  "accordion",
  "alert",
  "badge",
  "breadcrumb",
  "button",
  "callout",
  "card",
  "checkbox",
  "footer",
  "header",
  "highlight",
  "input",
  "link",
  "modal",
  "notice",
  "pagination",
  "quote",
  "radio",
  "search",
  "select",
  "sidemenu",
  "skiplink",
  "stepper",
  "summary",
  "table",
  "tabs",
  "tag",
  "tile",
  "toggle",
  "tooltip",
];

test.describe("DSFR vs Lits Comparison", () => {
  const mode = process.env.VRT_MODE || "compare"; // 'baseline' (DSFR) or 'compare' (WC)

  for (const component of commonComponents) {
    test(`Compare ${component} [mode: ${mode}]`, async ({ page }) => {
      let url: string;

      if (mode === "baseline") {
        // Native DSFR URL
        url = `/iframe.html?id=dsfr-${component}--${component}-story&viewMode=story`;
      } else {
        // Lit URL
        url = `/iframe.html?id=web-components-${component}--${component}-story&viewMode=story`;
      }

      await page.goto(url);
      await page.waitForSelector("body");
      // Wait for any potential animations or fonts
      await page.waitForTimeout(1000);

      // Take screenshot and compare/save to the same snapshot name
      // This allows the 'baseline' run to write the file, and the 'compare' run to read it.
      expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
        `${component}-comparison.png`,
      );
    });
  }
});

/**
 * Note: To use DSFR as the reference, we first need to generate baseline screenshots from the DSFR stories.
 * 1. Run with a flag to capture DSFR baselines: `pnpx playwright test --update-snapshots` (pointing at DSFR URLs)
 * 2. Run standard tests to compare Lits against those baselines.
 */

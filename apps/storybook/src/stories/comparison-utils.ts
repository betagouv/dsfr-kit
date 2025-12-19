import { html } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

/**
 * Renders a side-by-side comparison of a native DSFR component and a Web Component.
 */
export const renderComparison = (
  nativeHtml: string,
  webComponentHtml: unknown,
) => html`
  <div style="display: flex; gap: 2rem; padding: 1rem; align-items: flex-start;">
    <div style="flex: 1 1 0; min-width: 0; border: 1px solid #ddd; padding: 1rem; border-radius: 4px;">
      <h3 style="margin-top: 0; color: #666; font-size: 0.8rem; text-transform: uppercase;">Native DSFR</h3>
      <div class="dsfr-preview">
        ${unsafeHTML(nativeHtml)}
      </div>
    </div>
    <div style="flex: 1 1 0; min-width: 0; border: 1px solid #ddd; padding: 1rem; border-radius: 4px;">
      <h3 style="margin-top: 0; color: #666; font-size: 0.8rem; text-transform: uppercase;">Web Component</h3>
      <div class="wc-preview">
        ${webComponentHtml}
      </div>
    </div>
  </div>
`;

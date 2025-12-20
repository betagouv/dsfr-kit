import { html } from "lit";

/**
 * Renders a side-by-side comparison of a native DSFR component and a Web Component.
 */
/**
 * Renders a side-by-side comparison of a native DSFR component and a Web Component using iframes.
 */
export const renderComparison = (nativeStoryId: string, wcStoryId: string) => {
  const nativeUrl = `/iframe.html?id=${nativeStoryId}&viewMode=story`;
  const wcUrl = `/iframe.html?id=${wcStoryId}&viewMode=story`;

  return html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem;">
      <div style="border: 1px solid #ddd; display: flex; flex-direction: column; border-radius: 4px;">
        <h3 style="margin: 0; padding: 0.5rem 1rem; background: #f5f5f5; color: #666; font-size: 0.8rem; text-transform: uppercase; border-bottom: 1px solid #ddd;">Native DSFR</h3>
        <iframe src="${nativeUrl}" style="border: none; width: 100%; min-height: 200px; resize: vertical; overflow: auto;"></iframe>
      </div>
      <div style="border: 1px solid #ddd; display: flex; flex-direction: column; border-radius: 4px;">
        <h3 style="margin: 0; padding: 0.5rem 1rem; background: #f5f5f5; color: #666; font-size: 0.8rem; text-transform: uppercase; border-bottom: 1px solid #ddd;">Web Component</h3>
        <iframe src="${wcUrl}" style="border: none; width: 100%; min-height: 200px; resize: vertical; overflow: auto;"></iframe>
      </div>
    </div>
  `;
};

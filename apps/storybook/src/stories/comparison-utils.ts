import { html } from "lit";

/**
 * Renders a side-by-side comparison of a native DSFR component and a Web Component.
 */
/**
 * Renders a side-by-side comparison of a native DSFR component, a hand-written Web Component,
 * and optionally a generated Web Component using iframes.
 */
export const renderComparison = (
  nativeStoryId: string,
  wcStoryId: string,
  genStoryId?: string,
) => {
  const nativeUrl = `/iframe.html?id=${nativeStoryId}&viewMode=story`;
  const wcUrl = `/iframe.html?id=${wcStoryId}&viewMode=story`;
  const genUrl = genStoryId
    ? `/iframe.html?id=${genStoryId}&viewMode=story`
    : null;

  const renderRow = (title: string, url: string) => html`
    <div style="border: 1px solid #ddd; display: flex; flex-direction: column; border-radius: 4px;">
      <h3 style="margin: 0; padding: 0.5rem 1rem; background: #f5f5f5; color: #666; font-size: 0.8rem; text-transform: uppercase; border-bottom: 1px solid #ddd;">${title}</h3>
      <iframe
        src="${url}"
        style="border: none; width: 100%; height: 200px; min-height: 200px; resize: vertical; overflow: auto;"
        @load=${(e: Event) => {
          const iframe = e.target as HTMLIFrameElement;
          const doc = iframe.contentWindow?.document;
          if (doc) {
            const observer = new ResizeObserver(() => {
              iframe.style.height = "0px";
              iframe.style.height = `${doc.documentElement.scrollHeight}px`;
            });
            observer.observe(doc.body);
          }
        }}
      ></iframe>
    </div>
  `;

  return html`
    <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem;">
      ${renderRow("Native DSFR", nativeUrl)}
      ${renderRow("Web Component (Hand-written)", wcUrl)}
      ${genUrl ? renderRow("Web Component (Generated)", genUrl) : ""}
    </div>
  `;
};

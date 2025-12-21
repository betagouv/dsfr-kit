// @ts-expect-error

import * as htmlToImage from "html-to-image";
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

  // Helper to inline external stylesheets and rewrite relative URLs to absolute or data URIs
  const embedStyles = async (doc: Document) => {
    const links = Array.from(
      doc.querySelectorAll('link[rel="stylesheet"]'),
    ) as HTMLLinkElement[];

    for (const link of links) {
      if (link.dataset.embedded === "true" || !link.href.includes("dist/"))
        continue;

      try {
        const response = await fetch(link.href);
        const css = await response.text();

        // Process CSS to inline images as Data URIs
        // This is necessary because html-to-image acts in a detached context where relative URLs fail
        // and even absolute URLs can sometimes be blocked or mistimed.
        const urlRegex = /url\((['"]?)([^)'"]+)(['"]?)\)/g;
        let p = 0;
        let newCss = "";

        // We use a matchAll loop to handle async processing of each URL
        const matches = [...css.matchAll(urlRegex)];

        // Map to store URL -> Data URI to avoid fetching same icon multiple times
        const urlCache = new Map<string, string>();

        for (const match of matches) {
          const [fullMatch, quote1, url, quote2] = match;
          const index = match.index || 0;

          // Append parts of CSS before the match
          newCss += css.substring(p, index);
          p = index + fullMatch.length;

          if (url.startsWith("data:") || url.startsWith("#")) {
            newCss += fullMatch;
            continue;
          }

          // Resolve absolute URL to fetch
          const absoluteUrl = new URL(url, link.href).href;

          try {
            let dataUri = urlCache.get(absoluteUrl);

            if (!dataUri) {
              const imgResp = await fetch(absoluteUrl);
              const blob = await imgResp.blob();
              const reader = new FileReader();
              dataUri = await new Promise<string>((resolve) => {
                reader.onloadend = () => resolve(reader.result as string);
                reader.readAsDataURL(blob);
              });
              urlCache.set(absoluteUrl, dataUri);
            }

            newCss += `url(${quote1}${dataUri}${quote2})`;
          } catch (_e) {
            console.warn("Failed to fetch asset for inlining:", absoluteUrl);
            // Fallback to absolute URL if fetch fails
            newCss += `url(${quote1}${absoluteUrl}${quote2})`;
          }
        }

        newCss += css.substring(p);

        const style = doc.createElement("style");
        style.textContent = newCss;
        doc.head.appendChild(style);

        // Mark link as processed
        link.dataset.embedded = "true";
      } catch (err) {
        console.warn("Failed to embed stylesheet:", link.href, err);
      }
    }
  };

  const takeScreenshot = async (e: Event) => {
    const button = e.target as HTMLButtonElement;
    if (button.disabled) return;

    const originalText = button.innerHTML;
    // Show loading state
    button.innerHTML = "⏳";
    button.disabled = true;

    try {
      // Find the container of the stories
      const container = button.closest("div")?.parentElement;
      if (!container) return;

      const rows = container.querySelectorAll(".comparison-row");
      const canvases: HTMLCanvasElement[] = [];
      let totalHeight = 0;
      let maxWidth = 0;

      for (const row of Array.from(rows)) {
        const title = row.querySelector("h3") as HTMLElement;
        const iframe = row.querySelector("iframe") as HTMLIFrameElement;

        if (
          title &&
          iframe &&
          iframe.contentDocument &&
          iframe.contentDocument.body
        ) {
          try {
            // Fix styles in the iframe before capturing
            await embedStyles(iframe.contentDocument);

            // Capture title
            const titleCanvas = await htmlToImage.toCanvas(title);
            canvases.push(titleCanvas);
            totalHeight += titleCanvas.height;
            maxWidth = Math.max(maxWidth, titleCanvas.width);

            // Capture iframe body
            const body = iframe.contentDocument.body;
            // html-to-image needs to run in the context of the iframe to properly capture styles?
            // Actually, we can pass the node. But if styles are in iframe, it might be tricky.
            // Fortunately the iframe is same-origin.

            // We clone the body node to ensure we get computed styles or use the library's ability.
            // Note: toCanvas might struggle with iframes if not handled carefully, but let's try direct element capture.
            // Often capturing from outside an iframe is hard.
            // A better approach might be to capture the specific element inside the iframe.
            const bodyCanvas = await htmlToImage.toCanvas(body as HTMLElement, {
              width: iframe.contentDocument.documentElement.scrollWidth,
              height: iframe.contentDocument.documentElement.scrollHeight,
              backgroundColor: "#ffffff", // Ensure background is white
              cacheBust: true, // Force fresh resource loads
            });

            canvases.push(bodyCanvas);
            totalHeight += bodyCanvas.height;
            maxWidth = Math.max(maxWidth, bodyCanvas.width);
          } catch (err) {
            console.error("Error capturing row:", err);
          }
        }
      }

      // Combine canvases
      const combinedCanvas = document.createElement("canvas");
      combinedCanvas.width = maxWidth;
      combinedCanvas.height = totalHeight;
      const ctx = combinedCanvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);

        let currentY = 0;
        for (const canvas of canvases) {
          // Center the canvas if it's smaller than maxWidth (optional, keeping it simple: left align)
          ctx.drawImage(canvas, 0, currentY);
          currentY += canvas.height;
        }

        combinedCanvas.toBlob((blob) => {
          if (blob) {
            // @ts-expect-error - ClipboardItem might need types
            const item = new ClipboardItem({ "image/png": blob });
            navigator.clipboard
              .write([item])
              .then(() => {
                button.innerHTML = "✅"; // Checkmark
                setTimeout(() => {
                  button.innerHTML = originalText;
                  button.disabled = false;
                }, 2000);
              })
              .catch((err) => {
                console.error("Failed to write to clipboard", err);
                button.innerHTML = "❌";
                setTimeout(() => {
                  button.innerHTML = originalText;
                  button.disabled = false;
                }, 2000);
              });
          }
        });
      }
    } catch (err) {
      console.error("Screenshot failed:", err);
      button.innerHTML = "❌";
      button.disabled = false;
    }
  };

  const renderRow = (title: string, url: string) => html`
    <div class="comparison-row" style="border: 1px solid #ddd; display: flex; flex-direction: column; border-radius: 4px;">
      <h3 style="margin: 0; padding: 0.5rem 1rem; background: #f5f5f5; color: #666; font-size: 0.8rem; text-transform: uppercase; border-bottom: 1px solid #ddd;">${title}</h3>
      <iframe
        src="${url}"
        style="border: none; width: 100%; height: 200px; min-height: 200px; resize: vertical; overflow: auto;"
        @load=${(e: Event) => {
          const iframe = e.target as HTMLIFrameElement;
          const doc = iframe.contentWindow?.document;
          if (doc) {
            const observer = new ResizeObserver(() => {
              // Reset height to allow shrinking
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
      <div style="display: flex; justify-content: flex-end;">
         <button
            @click=${takeScreenshot}
            title="Copy Comparison Screenshot"
            style="
              padding: 0;
              width: 32px;
              height: 32px;
              cursor: pointer;
              background: transparent;
              color: #666;
              border: 1px solid #ddd;
              border-radius: 4px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.2rem;
              transition: all 0.2s;
            "
            onmouseover="this.style.background='#f5f5f5'; this.style.color='#333'"
            onmouseout="this.style.background='transparent'; this.style.color='#666'"
         >
            📷
         </button>
      </div>
      ${renderRow("Native DSFR", nativeUrl)}
      ${renderRow("Web Component (Hand-written)", wcUrl)}
      ${genUrl ? renderRow("Web Component (Generated)", genUrl) : ""}
    </div>
  `;
};

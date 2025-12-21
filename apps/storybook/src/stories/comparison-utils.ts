import * as htmlToImage from "html-to-image";
import { html, LitElement } from "lit";
import { addons } from "storybook/internal/preview-api";

/**
 * Renders a side-by-side comparison of a native DSFR component and a Web Component.
 */
/**
 * Renders a side-by-side comparison of a native DSFR component, a hand-written Web Component,
 * and optionally a generated Web Component using iframes.
 */
const EVENTS = {
  SNAPSHOT_REQUESTED: "COMPARISON_SNAPSHOT_REQUESTED",
  SNAPSHOT_TAKEN: "COMPARISON_SNAPSHOT_TAKEN",
  SNAPSHOT_COPY_SUCCESS: "COMPARISON_SNAPSHOT_COPY_SUCCESS",
  SNAPSHOT_COPY_ERROR: "COMPARISON_SNAPSHOT_COPY_ERROR",
};

export class DsfrComparisonView extends LitElement {
  static properties = {
    nativeStoryId: { type: String },
    wcStoryId: { type: String },
    genStoryId: { type: String },
    isCapturing: { state: true },
    captureStatus: { state: true },
  };

  nativeStoryId = "";
  wcStoryId = "";
  genStoryId = "";
  isCapturing = false;
  captureStatus: "idle" | "success" | "error" = "idle";

  // Use Light DOM to simplify screenshotting and styling
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    try {
      const channel = addons.getChannel();
      channel.on(EVENTS.SNAPSHOT_REQUESTED, this.handleSnapshotRequest);
      channel.on(EVENTS.SNAPSHOT_COPY_SUCCESS, this.handleCopySuccess);
      channel.on(EVENTS.SNAPSHOT_COPY_ERROR, this.handleCopyError);
    } catch (e) {
      console.warn("Could not access Storybook channel", e);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    try {
      const channel = addons.getChannel();
      channel.off(EVENTS.SNAPSHOT_REQUESTED, this.handleSnapshotRequest);
      channel.off(EVENTS.SNAPSHOT_COPY_SUCCESS, this.handleCopySuccess);
      channel.off(EVENTS.SNAPSHOT_COPY_ERROR, this.handleCopyError);
    } catch (_e) {
      // ignore
    }
  }

  handleSnapshotRequest = () => {
    this.takeScreenshot();
  };

  handleCopySuccess = () => {
    this.captureStatus = "success";
    setTimeout(() => {
      this.captureStatus = "idle";
    }, 2000);
  };

  handleCopyError = () => {
    this.captureStatus = "error";
    setTimeout(() => {
      this.captureStatus = "idle";
    }, 2000);
  };

  /**
   * Helper to inline external stylesheets and rewrite relative URLs to absolute or data URIs
   */
  async embedStyles(doc: Document) {
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
        const urlRegex = /url\((['"]?)([^)'"]+)(['"]?)\)/g;
        let p = 0;
        let newCss = "";

        const matches = [...css.matchAll(urlRegex)];
        const urlCache = new Map<string, string>();

        for (const match of matches) {
          const [fullMatch, quote1, url, quote2] = match;
          const index = match.index || 0;

          newCss += css.substring(p, index);
          p = index + fullMatch.length;

          if (url.startsWith("data:") || url.startsWith("#")) {
            newCss += fullMatch;
            continue;
          }

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
              urlCache.set(absoluteUrl, dataUri as string);
            }

            newCss += `url(${quote1}${dataUri}${quote2})`;
          } catch (_e) {
            console.warn("Failed to fetch asset for inlining:", absoluteUrl);
            newCss += `url(${quote1}${absoluteUrl}${quote2})`;
          }
        }

        newCss += css.substring(p);

        const style = doc.createElement("style");
        style.textContent = newCss;
        doc.head.appendChild(style);

        link.dataset.embedded = "true";
      } catch (err) {
        console.warn("Failed to embed stylesheet:", link.href, err);
      }
    }
  }

  async takeScreenshot() {
    if (this.isCapturing) return;
    this.isCapturing = true;
    this.requestUpdate();

    try {
      const rows = this.querySelectorAll(".comparison-row");
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
            await this.embedStyles(iframe.contentDocument);

            const titleCanvas = await htmlToImage.toCanvas(title);
            canvases.push(titleCanvas);
            totalHeight += titleCanvas.height;
            maxWidth = Math.max(maxWidth, titleCanvas.width);

            const body = iframe.contentDocument.body;
            const bodyCanvas = await htmlToImage.toCanvas(body as HTMLElement, {
              width: iframe.contentDocument.documentElement.scrollWidth,
              height: iframe.contentDocument.documentElement.scrollHeight,
              backgroundColor: "#ffffff",
              cacheBust: true,
            });

            canvases.push(bodyCanvas);
            totalHeight += bodyCanvas.height;
            maxWidth = Math.max(maxWidth, bodyCanvas.width);
          } catch (err) {
            console.error("Error capturing row:", err);
          }
        }
      }

      const combinedCanvas = document.createElement("canvas");
      combinedCanvas.width = maxWidth;
      combinedCanvas.height = totalHeight;
      const ctx = combinedCanvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, combinedCanvas.width, combinedCanvas.height);

        let currentY = 0;
        for (const canvas of canvases) {
          ctx.drawImage(canvas, 0, currentY);
          currentY += canvas.height;
        }

        combinedCanvas.toBlob((blob) => {
          if (blob) {
            const reader = new FileReader();
            reader.onloadend = () => {
              const dataUri = reader.result as string;
              // Send data back to manager to handle clipboard (since manager has focus)
              const channel = addons.getChannel();
              channel.emit(EVENTS.SNAPSHOT_TAKEN, dataUri);

              this.captureStatus = "success";
              setTimeout(() => {
                this.captureStatus = "idle";
              }, 2000);
            };
            reader.readAsDataURL(blob);
          }
        });
      }
    } catch (err) {
      console.error("Screenshot failed:", err);
      this.captureStatus = "error";
      setTimeout(() => {
        this.captureStatus = "idle";
      }, 2000);
    } finally {
      this.isCapturing = false;
    }
  }

  renderRow(title: string, url: string) {
    return html`
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
                iframe.style.height = "0px";
                iframe.style.height = `${doc.documentElement.scrollHeight}px`;
              });
              observer.observe(doc.body);
            }
          }}
        ></iframe>
      </div>
    `;
  }

  render() {
    const nativeUrl = `/iframe.html?id=${this.nativeStoryId}&viewMode=story`;
    const wcUrl = `/iframe.html?id=${this.wcStoryId}&viewMode=story`;
    const genUrl = this.genStoryId
      ? `/iframe.html?id=${this.genStoryId}&viewMode=story`
      : null;

    return html`
      <div style="display: flex; flex-direction: column; gap: 2rem; padding: 1rem; position: relative;">
        <!-- Status Overlay -->
        ${
          this.isCapturing || this.captureStatus !== "idle"
            ? html`
          <div style="
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: rgba(0,0,0,0.8);
            color: white;
            border-radius: 4px;
            z-index: 10;
            font-size: 0.8rem;
          ">
            ${
              this.isCapturing
                ? "⏳ Capturing..."
                : this.captureStatus === "success"
                  ? "✅ Snapshot Copied"
                  : "❌ Failed"
            }
          </div>
        `
            : ""
        }

        ${this.renderRow("Native DSFR", nativeUrl)}
        ${this.renderRow("Web Component (Hand-written)", wcUrl)}
        ${genUrl ? this.renderRow("Web Component (Generated)", genUrl) : ""}
      </div>
    `;
  }
}

export const renderComparison = (
  nativeStoryId: string,
  wcStoryId: string,
  genStoryId?: string,
) => {
  return html`
    <dsfr-comparison-view
      .nativeStoryId=${nativeStoryId}
      .wcStoryId=${wcStoryId}
      .genStoryId=${genStoryId || ""}
    ></dsfr-comparison-view>
  `;
};

try {
  customElements.define("dsfr-comparison-view", DsfrComparisonView);
} catch (_e) {
  console.warn("DsfrComparisonView already defined");
}

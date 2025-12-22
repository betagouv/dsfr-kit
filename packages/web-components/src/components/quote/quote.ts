import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import quoteCss from "@gouvfr/dsfr/dist/component/quote/quote.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Quote (Citation) component
 */
@customElement("dsfr-quote")
export class DsfrQuote extends LitElement {
  @property({ type: String })
  text = "";

  @property({ type: String })
  author = "";

  @property({ type: Array })
  sources: string[] = [];

  @property({ type: String, attribute: "source-url" })
  sourceUrl = "";

  @property({ type: String, attribute: "image-url" })
  imageUrl = "";

  @property({ type: String, attribute: "image-alt" })
  imageAlt = "";

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: String })
  accent: string | null = null;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(quoteCss),
  ];

  render() {
    const classes = {
      "fr-quote": true,
      [`fr-quote--${this.accent}`]: !!this.accent,
      "fr-quote--column": !!this.imageUrl,
    };

    const sizeClasses = {
      [`fr-text--${this.size}`]: this.size !== "md",
    };

    const renderedSources = this.sources.map((source, _index) => {
      // If it's the first source and we have a sourceUrl, we might want to wrap it in a cite
      // but let's stick to the simple string array for now as per ejs
      return html`<li>${source}</li>`;
    });

    if (this.sourceUrl) {
      renderedSources.push(
        html`<li><a target="_blank" rel="noopener external" href=${this.sourceUrl}>${this.sourceUrl}</a></li>`,
      );
    }

    return html`
      <figure class=${classMap(classes)}>
        <blockquote cite=${ifDefined(this.sourceUrl || undefined)}>
          <p class=${classMap(sizeClasses)}>
            « ${this.text || html`<slot></slot>`} »
          </p>
        </blockquote>
        <figcaption>
          ${this.author ? html`<p class="fr-quote__author">${this.author}</p>` : nothing}

          ${
            renderedSources.length > 1
              ? html`
              <ul class="fr-quote__source">
                ${renderedSources}
              </ul>
            `
              : renderedSources.length === 1
                ? html`<div class="fr-quote__source">${renderedSources[0]}</div>`
                : nothing
          }

          ${
            this.imageUrl
              ? html`
              <div class="fr-quote__image">
                <img src=${this.imageUrl} class="fr-responsive-img" alt=${this.imageAlt} />
              </div>
            `
              : nothing
          }
        </figcaption>
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-quote": DsfrQuote;
  }
}

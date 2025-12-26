import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import highlightCss from "@gouvfr/dsfr/dist/component/highlight/highlight.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Highlight (Mise en exergue) component
 */
@customElement("dsfr-highlight")
export class DsfrHighlight extends LitElement {
  @property({ type: String })
  text = "";

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: String })
  accent: string | null = null;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(highlightCss),
  ];

  render() {
    const classes = {
      "fr-highlight": true,
      [`fr-highlight--${this.accent}`]: !!this.accent,
    };

    const textClasses = {
      [`fr-text--${this.size}`]: this.size !== "md",
    };

    return html`
      <div class=${classMap(classes)}>
        <p class=${classMap(textClasses)}>
          ${this.text || html`<slot></slot>`}
        </p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-highlight": DsfrHighlight;
  }
}

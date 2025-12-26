import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import calloutCss from "@gouvfr/dsfr/dist/component/callout/callout.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Callout (Mise en avant) component
 */
@customElement("dsfr-callout")
export class DsfrCallout extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  icon = "";

  @property({ type: String, attribute: "button-label" })
  buttonLabel = "";

  @property({ type: String, attribute: "button-href" })
  buttonHref = "";

  @property({ type: String, attribute: "heading-level" })
  headingLevel = "h3";

  @property({ type: String })
  accent: string | null = null;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(calloutCss),
  ];

  render() {
    const classes = {
      "fr-callout": true,
      [`fr-icon-${this.icon}`]: !!this.icon,
      [`fr-callout--${this.accent}`]: !!this.accent,
    };

    const renderTitle = () => {
      if (!this.title) return nothing;
      switch (this.headingLevel) {
        case "h2":
          return html`<h2 class="fr-callout__title">${this.title}</h2>`;
        case "h4":
          return html`<h4 class="fr-callout__title">${this.title}</h4>`;
        case "h5":
          return html`<h5 class="fr-callout__title">${this.title}</h5>`;
        case "h6":
          return html`<h6 class="fr-callout__title">${this.title}</h6>`;
        default:
          return html`<h3 class="fr-callout__title">${this.title}</h3>`;
      }
    };

    return html`
      <div class=${classMap(classes)}>
        ${renderTitle()}
        <p class="fr-callout__text">
          <slot></slot>
        </p>
        ${
          this.buttonLabel
            ? html`<dsfr-button .label=${this.buttonLabel} .href=${this.buttonHref} .markup=${this.buttonHref ? "a" : "button"} @click=${this._handleButtonClick}></dsfr-button>`
            : nothing
        }
      </div>
    `;
  }

  private _handleButtonClick() {
    if (this.buttonHref) {
      window.location.href = this.buttonHref;
    } else {
      this.dispatchEvent(
        new CustomEvent("dsfr-click", { bubbles: true, composed: true }),
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-callout": DsfrCallout;
  }
}

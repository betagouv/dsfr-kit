import alertStyles from "@gouvfr/dsfr/dist/component/alert/alert.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export type AlertType = "info" | "success" | "warning" | "error";
export type AlertSize = "sm" | "md";

/**
 * @summary DSFR Alert component
 *
 * @event dsfr-close - Dispatched when the close button is clicked.
 */
@customElement("dsfr-alert")
export class DsfrAlert extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  description = "";

  @property({ type: String })
  type: AlertType = "info";

  @property({ type: String })
  size: AlertSize = "md";

  @property({ type: Boolean })
  closeable = false;

  @property({ type: String, attribute: "heading-level" })
  headingLevel = "h3";

  @state()
  private _closed = false; // Internal state to handle hiding

  static styles = [unsafeCSS(coreStyles), unsafeCSS(alertStyles)];

  private _handleClose() {
    this._closed = true;
    this.dispatchEvent(
      new CustomEvent("dsfr-close", { bubbles: true, composed: true }),
    );
  }

  render() {
    if (this._closed) {
      return nothing;
    }

    const classes = {
      "fr-alert": true,
      [`fr-alert--${this.type}`]: true,
      "fr-alert--sm": this.size === "sm",
    };

    // Accessibility roles: error/warning -> alert, info/success -> status
    const role =
      this.type === "error" || this.type === "warning" ? "alert" : "status";

    // Actually, we can do this simply:
    const renderTitle = () => {
      if (!this.title) return nothing;
      switch (this.headingLevel) {
        case "h1":
          return html`<h1 class="fr-alert__title">${this.title}</h1>`;
        case "h2":
          return html`<h2 class="fr-alert__title">${this.title}</h2>`;
        case "h4":
          return html`<h4 class="fr-alert__title">${this.title}</h4>`;
        case "h5":
          return html`<h5 class="fr-alert__title">${this.title}</h5>`;
        case "h6":
          return html`<h6 class="fr-alert__title">${this.title}</h6>`;
        default:
          return html`<h3 class="fr-alert__title">${this.title}</h3>`;
      }
    };

    return html`
            <div class=${classMap(classes)} role=${role}>
                ${renderTitle()}
                ${this.description ? html`<p>${this.description}</p>` : html`<slot></slot>`}
                ${
                  this.closeable
                    ? html`
                    <button class="fr-btn--close fr-btn" title="Masquer le message" @click=${this._handleClose}>
                        Masquer le message
                    </button>
                `
                    : nothing
                }
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-alert": DsfrAlert;
  }
}

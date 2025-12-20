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
  type: AlertType | "default" = "info";

  @property({ type: String })
  size: AlertSize = "md";

  @property({ type: Boolean })
  closeable = false;

  @property({ type: String, attribute: "heading-level" })
  headingLevel = "h3";

  @property({ type: String })
  icon: string | null = null;

  @state()
  private _closed = false;

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
      [`fr-alert--${this.type}`]: this.type !== "default",
      "fr-alert--sm": this.size === "sm",
      [`fr-icon-${this.icon}`]: !!this.icon,
    };

    const role =
      this.type === "error" || this.type === "warning" ? "alert" : "status";

    const titleMarkup = (content: unknown) => {
      switch (this.headingLevel) {
        case "h1":
          return html`<h1 class="fr-alert__title">${content}</h1>`;
        case "h2":
          return html`<h2 class="fr-alert__title">${content}</h2>`;
        case "h4":
          return html`<h4 class="fr-alert__title">${content}</h4>`;
        case "h5":
          return html`<h5 class="fr-alert__title">${content}</h5>`;
        case "h6":
          return html`<h6 class="fr-alert__title">${content}</h6>`;
        default:
          return html`<h3 class="fr-alert__title">${content}</h3>`;
      }
    };

    return html`
      <div class=${classMap(classes)} role=${role}>
        ${this.title ? titleMarkup(this.title) : nothing}
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

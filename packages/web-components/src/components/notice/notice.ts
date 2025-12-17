import noticeStyles from "@gouvfr/dsfr/dist/component/notice/notice.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export type NoticeType =
  | "info"
  | "warning"
  | "alert"
  | "weather-orange"
  | "weather-red"
  | "weather-purple"
  | "attack"
  | "witness"
  | "cyberattack";

/**
 * @summary DSFR Notice component
 *
 * @event dsfr-close - Dispatched when the close button is clicked.
 */
@customElement("dsfr-notice")
export class DsfrNotice extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  description = "";

  @property({ type: String })
  link = "";

  @property({ type: String, attribute: "link-label" })
  linkLabel = "Voir plus";

  @property({ type: String })
  type: NoticeType = "info";

  @property({ type: Boolean })
  closeable = false;

  @state()
  private _closed = false;

  static styles = [unsafeCSS(coreStyles), unsafeCSS(noticeStyles)];

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
      "fr-notice": true,
      [`fr-notice--${this.type}`]: true,
    };

    return html`
            <div class=${classMap(classes)}>
                <div class="fr-container">
                    <div class="fr-notice__body">
                        <p>
                            <span class="fr-notice__title">${this.title}</span>
                            ${this.description ? html`<span class="fr-notice__desc">${this.description}</span>` : nothing}
                            ${
                              this.link
                                ? html`
                                <a target="_blank" rel="noopener external" href=${this.link} class="fr-notice__link" title="${this.linkLabel} - nouvelle fenêtre">
                                    ${this.linkLabel}
                                </a>
                            `
                                : nothing
                            }
                        </p>
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
                </div>
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-notice": DsfrNotice;
  }
}

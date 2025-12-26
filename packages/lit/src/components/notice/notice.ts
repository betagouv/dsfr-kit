import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import noticeCss from "@gouvfr/dsfr/dist/component/notice/notice.min.css?inline";
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
  desc = "";

  @property({ type: String })
  link = "";

  @property({ type: String, attribute: "link-label" })
  linkLabel = "Voir plus";

  @property({ type: String })
  type: NoticeType | "" = "";

  @property({ type: Boolean })
  dismissible = false;

  @property({ type: String })
  icon = "";

  @property({ type: String })
  markup = "p";

  @state()
  private _closed = false;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(noticeCss),
  ];

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
      [`fr-notice--${this.type}`]: !!this.type,
      "fr-notice--no-icon": this.icon === "false",
    };

    const titleClasses = {
      "fr-notice__title": true,
      [`fr-icon-${this.icon}`]: !!this.icon && this.icon !== "false",
    };

    const content = html`
      ${this.title ? html`<span class=${classMap(titleClasses)}>${this.title}</span>` : nothing}
      ${this.desc ? html`<span class="fr-notice__desc">${this.desc}</span>` : nothing}
      ${
        this.link
          ? html`
          <a target="_blank" rel="noopener external" href=${this.link} class="fr-notice__link" title="${this.linkLabel} - nouvelle fenêtre">
            ${this.linkLabel}
          </a>
        `
          : nothing
      }
    `;

    return html`
      <div class=${classMap(classes)}>
        <div class="fr-container">
          <div class="fr-notice__body">
            ${this.renderMarkup(content)}
            ${
              this.dismissible
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

  private renderMarkup(content: unknown) {
    switch (this.markup) {
      case "h1":
        return html`<h1>${content}</h1>`;
      case "h2":
        return html`<h2>${content}</h2>`;
      case "h3":
        return html`<h3>${content}</h3>`;
      case "h4":
        return html`<h4>${content}</h4>`;
      case "h5":
        return html`<h5>${content}</h5>`;
      case "h6":
        return html`<h6>${content}</h6>`;
      default:
        return html`<p>${content}</p>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-notice": DsfrNotice;
  }
}

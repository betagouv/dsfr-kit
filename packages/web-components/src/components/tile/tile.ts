import tileStyles from "@gouvfr/dsfr/dist/component/tile/tile.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Tile (Tuile) component
 */
@customElement("dsfr-tile")
export class DsfrTile extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  description = "";

  @property({ type: String })
  url = "";

  @property({ type: String, attribute: "image-url" })
  imageUrl = "";

  @property({ type: String, attribute: "image-alt" })
  imageAlt = "";

  @property({ type: String })
  size: "sm" | "md" = "md";

  @property({ type: Boolean })
  horizontal = false;

  @property({ type: String, attribute: "vertical-breakpoint" })
  verticalBreakpoint: "md" | "lg" | "" = "";

  @property({ type: Boolean })
  enlarge = true;

  @property({ type: Boolean, attribute: "no-icon" })
  noIcon = false;

  @property({ type: Boolean })
  download = false;

  @property({ type: String })
  detail = "";

  @property({ type: String })
  startDetail = "";

  @property({ type: String })
  endDetail = "";

  @property({ type: String, attribute: "action-markup" })
  actionMarkup: "a" | "button" | "false" = "a";

  @property({ type: Array })
  variations: ("grey" | "no-border" | "no-background" | "shadow")[] = [];

  static styles = [unsafeCSS(coreStyles), unsafeCSS(tileStyles)];

  render() {
    const classes = {
      "fr-tile": true,
      "fr-tile--sm": this.size === "sm",
      "fr-tile--horizontal": this.horizontal,
      [`fr-tile--vertical@${this.verticalBreakpoint}`]:
        !!this.verticalBreakpoint,
      "fr-tile--download": this.download,
      "fr-tile--no-icon": this.noIcon,
      "fr-enlarge-link": this.enlarge && this.actionMarkup === "a",
      "fr-enlarge-button": this.enlarge && this.actionMarkup === "button",
      "fr-tile--grey": this.variations.includes("grey"),
      "fr-tile--no-border": this.variations.includes("no-border"),
      "fr-tile--no-background": this.variations.includes("no-background"),
      "fr-tile--shadow": this.variations.includes("shadow"),
    };

    return html`
      <div class=${classMap(classes)}>
        <div class="fr-tile__body">
          <div class="fr-tile__content">
            <h3 class="fr-tile__title">
              ${this.renderAction()}
            </h3>
            ${this.description ? html`<p class="fr-tile__desc">${this.description}</p>` : nothing}
            ${
              this.detail || this.startDetail || this.endDetail
                ? html`<p class="fr-tile__detail">${this.startDetail ? html`${this.startDetail}&nbsp;` : nothing}${this.detail}${this.endDetail ? html`&nbsp;${this.endDetail}` : nothing}</p>`
                : nothing
            }
            <slot></slot>
          </div>
        </div>
        ${
          this.imageUrl
            ? html`
            <div class="fr-tile__header">
              <div class="fr-tile__pictogram">
                <img src=${this.imageUrl} alt=${this.imageAlt} class="fr-artwork" />
              </div>
            </div>
          `
            : nothing
        }
      </div>
    `;
  }

  private renderAction() {
    if (this.actionMarkup === "false") return this.title;

    if (this.actionMarkup === "button") {
      return html`
        <button class="fr-tile__link" ?disabled=${this.download && !this.url}>
          ${this.title}
        </button>
      `;
    }

    return html`
      <a
        class="fr-tile__link"
        href=${this.url || "#"}
        ?download=${this.download}
        target=${ifDefined(this.download ? undefined : "_self")}
      >
        ${this.title}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-tile": DsfrTile;
  }
}

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

  /**
   * Vertical by default.
   * Use 'horizontal' for horizontal layout.
   * Use 'horizontal-md' for horizontal then vertical at md.
   * Use 'horizontal-lg' for horizontal then vertical at lg.
   */
  @property({ type: String })
  orientation: "vertical" | "horizontal" | "horizontal-md" | "horizontal-lg" =
    "vertical";

  @property({ type: Boolean, attribute: "no-icon" })
  noIcon = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  download = false;

  @property({ type: Boolean })
  small = false;

  @property({ type: String, attribute: "detail" })
  detail = "";

  static styles = [unsafeCSS(coreStyles), unsafeCSS(tileStyles)];

  render() {
    const classes = {
      "fr-tile": true,
      "fr-enlarge-link": !!this.url && !this.disabled,
      "fr-tile--sm": this.small,
      "fr-tile--horizontal": this.orientation.startsWith("horizontal"),
      "fr-tile--vertical@md": this.orientation === "horizontal-md",
      "fr-tile--vertical@lg": this.orientation === "horizontal-lg",
      "fr-tile--no-icon": this.noIcon,
      "fr-tile--download": this.download,
    };

    const renderImage = () => {
      if (!this.imageUrl) return nothing;
      // DSFR structure for image in tile is in fr-tile__header > fr-tile__pictogram (for svg) or fr-tile__img (for img)
      // The doc shows fr-tile__pictogram with svg, but for regular images (like photo), we usually use img inside div.
      // Let's use standard image pattern.
      // Note: DSFR doc example shows <div class="fr-tile__pictogram"> <svg...> </div>.
      // If it's a real image, we might wrap it similarly or use fr-responsive-img pattern if applicable.
      // Based on demo: <div class="fr-tile__img"> <img ...> </div> is also common in other frameworks for tiles?
      // Actually DSFR doc says "Une image d’illustration (par défaut, une flèche)". Wait, that's the icon.
      // "Un pictogramme" in fr-tile__pictogram.
      // Let's assume imageUrl is effectively the pictogram or illustration.
      return html`
                <div class="fr-tile__header">
                    <div class="fr-tile__pictogram">
                        <img src=${this.imageUrl} alt=${this.imageAlt} class="fr-artwork" />
                    </div>
                </div>
            `;
    };

    return html`
            <div class=${classMap(classes)}>
                <div class="fr-tile__body">
                     <div class="fr-tile__content">
                        <h3 class="fr-tile__title">
                            ${
                              this.url && !this.disabled
                                ? html`
                                <a
                                    href=${this.url}
                                    ?download=${this.download}
                                    target=${ifDefined(this.download ? undefined : "_self")}
                                >${this.title}</a>
                            `
                                : html`
                                ${this.title}
                            `
                            }
                        </h3>
                        ${this.description ? html`<p class="fr-tile__desc">${this.description}</p>` : nothing}
                        ${this.detail ? html`<p class="fr-tile__detail">${this.detail}</p>` : nothing}

                        <div class="fr-tile__start">
                            <slot name="start"></slot>
                        </div>
                     </div>
                </div>
                ${renderImage()}
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-tile": DsfrTile;
  }
}

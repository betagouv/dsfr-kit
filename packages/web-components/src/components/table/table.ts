import tableStyles from "@gouvfr/dsfr/dist/component/table/table.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Table Component
 */
@customElement("dsfr-table")
export class DsfrTable extends LitElement {
  @property({ type: String })
  caption = "Titre du tableau";

  @property({ type: Boolean, attribute: "no-caption" })
  noCaption = false;

  @property({ type: Boolean, attribute: "bottom-caption" })
  bottomCaption = false;

  @property({ type: Boolean })
  bordered = false;

  @property({ type: Boolean, attribute: "no-scroll" })
  noScroll = false;

  @property({ type: String })
  density: "sm" | "md" | "lg" = "md";

  static styles = [unsafeCSS(coreStyles), unsafeCSS(tableStyles)];

  render() {
    const tableClasses = {
      "fr-table": true,
      "fr-table--no-scroll": this.noScroll,
      "fr-table--caption-bottom": this.bottomCaption,
      "fr-table--no-caption": this.noCaption,
      "fr-table--bordered": this.bordered,
      "fr-table--sm": this.density === "sm",
      "fr-table--lg": this.density === "lg",
    };

    return html`
            <div class=${classMap(tableClasses)}>
                <div class="fr-table__wrapper">
                    <div class="fr-table__container">
                        <div class="fr-table__content">
                            <table>
                                <caption>
                                    <slot name="caption">${this.caption}</slot>
                                </caption>
                                <slot></slot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-table": DsfrTable;
  }
}

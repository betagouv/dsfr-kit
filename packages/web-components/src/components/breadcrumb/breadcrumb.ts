import breadcrumbStyles from "@gouvfr/dsfr/dist/component/breadcrumb/breadcrumb.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

export interface BreadcrumbItem {
  text: string;
  href?: string;
}

/**
 * @summary DSFR Breadcrumb component
 */
@customElement("dsfr-breadcrumb")
export class DsfrBreadcrumb extends LitElement {
  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  @property({ type: String })
  breadcrumbId = `breadcrumb-${Math.random().toString(36).substring(2, 9)}`;

  @state()
  private _expanded = false;

  static styles = [unsafeCSS(coreStyles), unsafeCSS(breadcrumbStyles)];

  private _toggle() {
    this._expanded = !this._expanded;
  }

  render() {
    const collapseClasses = {
      "fr-collapse": true,
      "fr-collapse--expanded": this._expanded,
    };

    return html`
            <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
                <button
                    class="fr-breadcrumb__button"
                    aria-expanded=${this._expanded}
                    aria-controls=${this.breadcrumbId}
                    @click=${this._toggle}
                >
                    Voir le fil d’Ariane
                </button>
                <div class=${classMap(collapseClasses)} id=${this.breadcrumbId}>
                     <ol class="fr-breadcrumb__list">
                        ${this.items.map((item, index) => {
                          const isLast = index === this.items.length - 1;
                          // Ensure last item has no href and aria-current="page"
                          // If item provided href but is last, we usually ignore it or render as text?
                          // DSFR says last item is current page and not clickable.
                          // But usually users might provide href for current page for SEO/consistency, but UI suppresses it.

                          if (isLast) {
                            return html`
                                    <li>
                                        <a class="fr-breadcrumb__link" aria-current="page">${item.text}</a>
                                    </li>
                                `;
                          }

                          return html`
                                <li>
                                    <a class="fr-breadcrumb__link" href=${ifDefined(item.href)}>${item.text}</a>
                                </li>
                            `;
                        })}
                     </ol>
                </div>
            </nav>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-breadcrumb": DsfrBreadcrumb;
  }
}

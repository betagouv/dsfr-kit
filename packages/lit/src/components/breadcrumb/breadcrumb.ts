import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import breadcrumbCss from "@gouvfr/dsfr/dist/component/breadcrumb/breadcrumb.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

export interface BreadcrumbLink {
  label: string;
  href?: string;
}

/**
 * @summary DSFR Breadcrumb component
 */
@customElement("dsfr-breadcrumb")
export class DsfrBreadcrumb extends LitElement {
  @property({ type: Array })
  links: BreadcrumbLink[] = [];

  @property({ type: String })
  button = "Voir le fil d’Ariane";

  @property({ type: String })
  breadcrumbId = `breadcrumb-${Math.random().toString(36).substring(2, 9)}`;

  @state()
  private _expanded = false;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(breadcrumbCss),
  ];

  private _toggle() {
    this._expanded = !this._expanded;
  }

  render() {
    const collapseClasses = {
      "fr-collapse": true,
      "fr-collapse--expanded": this._expanded,
    };

    const collapseId = this.id || this.breadcrumbId;

    return html`
      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <button
          class="fr-breadcrumb__button"
          aria-expanded=${this._expanded}
          aria-controls=${collapseId}
          @click=${this._toggle}
          type="button"
        >
          ${this.button}
        </button>
        <div class=${classMap(collapseClasses)} id=${collapseId}>
          <ol class="fr-breadcrumb__list">
            ${this.links.map((link, index) => {
              const isLast = index === this.links.length - 1;

              if (isLast) {
                return html`
                  <li>
                    <a class="fr-breadcrumb__link" aria-current="page">${link.label}</a>
                  </li>
                `;
              }

              return html`
                <li>
                  <a class="fr-breadcrumb__link" href=${ifDefined(link.href)}>${link.label}</a>
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

import paginationStyles from "@gouvfr/dsfr/dist/component/pagination/pagination.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Pagination Component
 */
@customElement("dsfr-pagination")
export class DsfrPagination extends LitElement {
  @property({ type: Number, attribute: "current-page" })
  currentPage = 1;

  @property({ type: Number, attribute: "total-pages" })
  totalPages = 1;

  @property({ type: String })
  ariaLabel = "Pagination";

  static styles = [unsafeCSS(coreStyles), unsafeCSS(paginationStyles)];

  private _handlePageChange(page: number, event: Event) {
    event.preventDefault();
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;

    this.dispatchEvent(
      new CustomEvent("dsfr-page-change", {
        detail: { page },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _renderPageLink(page: number, label?: string, isCurrent = false) {
    return html`
      <li>
        <a
          class="fr-pagination__link"
          aria-current=${isCurrent ? "page" : nothing}
          title=${label || `Page ${page}`}
          href=${isCurrent ? nothing : "#"}
          @click=${(e: Event) => this._handlePageChange(page, e)}
        >
          ${label || page}
        </a>
      </li>
    `;
  }

  private _renderNavButton(
    type: "first" | "prev" | "next" | "last",
    targetPage: number,
    disabled: boolean,
  ) {
    const labels = {
      first: "Première page",
      prev: "Page précédente",
      next: "Page suivante",
      last: "Dernière page",
    };

    const classes = {
      "fr-pagination__link": true,
      [`fr-pagination__link--${type}`]: true,
      "fr-pagination__link--lg-label": type === "prev" || type === "next",
    };

    if (disabled) {
      return html`
        <li>
          <a
            class=${classMap(classes)}
            aria-disabled="true"
            role="link"
            title=${labels[type]}
          >
            ${labels[type]}
          </a>
        </li>
      `;
    }

    return html`
      <li>
        <a
          class=${classMap(classes)}
          href="#"
          title=${labels[type]}
          @click=${(e: Event) => this._handlePageChange(targetPage, e)}
        >
          ${labels[type]}
        </a>
      </li>
    `;
  }

  private _getVisiblePages() {
    const delta = 2;
    const range: (number | string)[] = [];
    const left = this.currentPage - delta;
    const right = this.currentPage + delta + 1;
    let l: number | null = null;

    for (let i = 1; i <= this.totalPages; i++) {
      if (i === 1 || i === this.totalPages || (i >= left && i < right)) {
        range.push(i);
      }
    }

    const rangeWithDots: (number | string)[] = [];
    for (const i of range) {
      if (l) {
        if (typeof i === "number" && i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (typeof i === "number" && i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      if (typeof i === "number") l = i;
    }

    return rangeWithDots;
  }

  render() {
    if (this.totalPages <= 1) return nothing;

    return html`
      <nav role="navigation" class="fr-pagination" aria-label=${this.ariaLabel}>
        <ul class="fr-pagination__list">
          ${this._renderNavButton("first", 1, this.currentPage === 1)}
          ${this._renderNavButton("prev", this.currentPage - 1, this.currentPage === 1)}

          ${this._getVisiblePages().map((item) => {
            if (item === "...") {
              return html`
                <li>
                  <a class="fr-pagination__link fr-pagination__link--truncation" title="Pages intermédiaires">
                    ...
                  </a>
                </li>
              `;
            }
            return this._renderPageLink(
              item as number,
              undefined,
              item === this.currentPage,
            );
          })}

          ${this._renderNavButton("next", this.currentPage + 1, this.currentPage === this.totalPages)}
          ${this._renderNavButton("last", this.totalPages, this.currentPage === this.totalPages)}
        </ul>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-pagination": DsfrPagination;
  }
}

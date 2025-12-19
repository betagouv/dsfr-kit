import summaryStyles from "@gouvfr/dsfr/dist/component/summary/summary.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface SummaryLink {
  label: string;
  href: string;
  items?: SummaryLink[];
}

/**
 * @summary DSFR Summary Component
 */
@customElement("dsfr-summary")
export class DsfrSummary extends LitElement {
  @property({ type: String })
  title = "Sommaire";

  @property({ type: Array })
  list: SummaryLink[] = [];

  @property({ type: String })
  markup = "p";

  @property({ type: String })
  summaryId = `summary-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [unsafeCSS(coreStyles), unsafeCSS(summaryStyles)];

  private _renderList(items: SummaryLink[]): unknown {
    if (!items || items.length === 0) return nothing;

    return html`
      <ol>
        ${items.map(
          (link) => html`
            <li>
              <a class="fr-summary__link" href=${link.href}>${link.label}</a>
              ${this._renderList(link.items || [])}
            </li>
          `,
        )}
      </ol>
    `;
  }

  render() {
    if (this.list.length === 0) return nothing;

    return html`
      <nav class="fr-summary" role="navigation" aria-labelledby=${this.summaryId}>
        ${this.renderTitle()}
        ${this._renderList(this.list)}
      </nav>
    `;
  }

  private renderTitle() {
    switch (this.markup) {
      case "h1":
        return html`<h1 class="fr-summary__title" id=${this.summaryId}>${this.title}</h1>`;
      case "h2":
        return html`<h2 class="fr-summary__title" id=${this.summaryId}>${this.title}</h2>`;
      case "h3":
        return html`<h3 class="fr-summary__title" id=${this.summaryId}>${this.title}</h3>`;
      case "h4":
        return html`<h4 class="fr-summary__title" id=${this.summaryId}>${this.title}</h4>`;
      case "h5":
        return html`<h5 class="fr-summary__title" id=${this.summaryId}>${this.title}</h5>`;
      case "h6":
        return html`<h6 class="fr-summary__title" id=${this.summaryId}>${this.title}</h6>`;
      default:
        return html`<div class="fr-summary__title" id=${this.summaryId}>${this.title}</div>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-summary": DsfrSummary;
  }
}

import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import summaryStyles from "@gouvfr/dsfr/dist/component/summary/summary.min.css?inline";
import { html, LitElement, unsafeCSS, nothing } from "lit";
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
	summaryTitle = "Sommaire";

	@property({ type: Array })
	links: SummaryLink[] = [];

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
		if (this.links.length === 0) return nothing;

		return html`
            <nav class="fr-summary" role="navigation" aria-labelledby=${this.summaryId}>
                <div class="fr-summary__title" id=${this.summaryId}>${this.summaryTitle}</div>
                ${this._renderList(this.links)}
            </nav>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-summary": DsfrSummary;
	}
}

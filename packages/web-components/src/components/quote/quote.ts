import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import quoteStyles from "@gouvfr/dsfr/dist/component/quote/quote.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Quote (Citation) component
 */
@customElement("dsfr-quote")
export class DsfrQuote extends LitElement {
	@property({ type: String })
	text = "";

	@property({ type: String })
	author = "";

	@property({ type: String })
	source = "";

	@property({ type: String, attribute: "source-url" })
	sourceUrl = "";

	@property({ type: String, attribute: "image-url" })
	imageUrl = "";

	@property({ type: String, attribute: "image-alt" })
	imageAlt = "";

	@property({ type: Array })
	details: string[] = [];

	static styles = [unsafeCSS(coreStyles), unsafeCSS(quoteStyles)];

	render() {
		const classes = {
			"fr-quote": true,
		};

		return html`
            <figure class=${classMap(classes)}>
                <blockquote cite=${ifDefined(this.sourceUrl)}>
                    <p>« ${this.text || html`<slot></slot>`} »</p>
                </blockquote>
                <figcaption>
                    ${this.author ? html`<p class="fr-quote__author">${this.author}</p>` : nothing}

                    <ul class="fr-quote__source">
                        <li>
                            <cite>${this.source}</cite>
                        </li>
                        ${this.details.map((detail) => html`<li>${detail}</li>`)}
                        ${
													this.sourceUrl
														? html`
                             <li>
                                <a target="_blank" href=${this.sourceUrl}>${this.sourceUrl}</a>
                             </li>
                        `
														: nothing
												}
                    </ul>

                    ${
											this.imageUrl
												? html`
                        <div class="fr-quote__image">
                            <img src=${this.imageUrl} class="fr-responsive-img" alt=${this.imageAlt} />
                        </div>
                    `
												: nothing
										}
                </figcaption>
            </figure>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-quote": DsfrQuote;
	}
}

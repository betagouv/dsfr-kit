import cardStyles from "@gouvfr/dsfr/dist/component/card/card.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import schemeStyles from "@gouvfr/dsfr/dist/scheme/scheme.min.css?inline";
import iconsStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import utilityStyles from "@gouvfr/dsfr/dist/utility/utility.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Card component
 *
 * @slot image - content for the card header (image)
 * @slot badge - badges to display in the card content start area
 * @slot detail - details to display in the card content start area
 * @slot description - description text
 * @slot footer - call to action buttons or links
 * @slot end - content for the end area of content (alternative to detail/badge placement)
 */
@customElement("dsfr-card")
export class DsfrCard extends LitElement {
	@property({ type: String })
	title = "";

	@property({ type: String })
	href = "#";

	@property({ type: Boolean, reflect: true })
	horizontal = false;

	@property({ type: String })
	size: "sm" | "md" | "lg" = "md";

	@property({ type: Boolean, attribute: "no-icon" })
	noIcon = false;

	@property({ type: Boolean, attribute: "enlarge-link" })
	enlargeLink = true;

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(schemeStyles),
		unsafeCSS(utilityStyles),
		unsafeCSS(iconsStyles),
		unsafeCSS(cardStyles),
	];

	render() {
		const classes = {
			"fr-card": true,
			"fr-card--horizontal": this.horizontal,
			[`fr-card--${this.size}`]: this.size !== "md",
			"fr-card--no-icon": this.noIcon,
			"fr-enlarge-link": this.enlargeLink,
		};

		return html`
            <div class=${classMap(classes)}>
                <div class="fr-card__body">
                    <div class="fr-card__content">
                        <h3 class="fr-card__title">
                            <a href=${this.href}>${this.title}</a>
                        </h3>
                        <p class="fr-card__desc">
                            <slot name="description"></slot>
                        </p>
                        <div class="fr-card__start">
                            <slot name="badge"></slot>
                            <slot name="detail"></slot>
                        </div>
                        <div class="fr-card__end">
                            <slot name="end"></slot>
                        </div>
                    </div>
                    <div class="fr-card__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
                <div class="fr-card__header">
                    <slot name="image"></slot>
                </div>
            </div>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-card": DsfrCard;
	}
}

import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import highlightStyles from "@gouvfr/dsfr/dist/component/highlight/highlight.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Highlight (Mise en exergue) component
 */
@customElement("dsfr-highlight")
export class DsfrHighlight extends LitElement {
	@property({ type: String })
	text = "";

	@property({ type: String })
	size: "sm" | "md" | "lg" = "md";

	static styles = [unsafeCSS(coreStyles), unsafeCSS(highlightStyles)];

	render() {
		const classes = {
			"fr-highlight": true,
		};

		const textClasses = {
			"fr-text--sm": this.size === "sm",
			"fr-text--lg": this.size === "lg",
		};

		return html`
            <div class=${classMap(classes)}>
                <p class=${classMap(textClasses)}>
                    ${this.text || html`<slot></slot>`}
                </p>
            </div>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-highlight": DsfrHighlight;
	}
}

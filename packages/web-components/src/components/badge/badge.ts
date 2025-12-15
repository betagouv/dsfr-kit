import badgeStyles from "@gouvfr/dsfr/dist/component/badge/badge.min.css?inline";
import iconStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dsfr-badge")
export class DsfrBadge extends LitElement {
	@property({ type: String })
	label = "";

	@property({ type: String })
	variant: "success" | "error" | "info" | "warning" | "new" | null = null;

	@property({ type: Boolean, attribute: "no-icon" })
	noIcon = false;

	@property({ type: Boolean })
	sm = false;

	render() {
		const classes = {
			"fr-badge": true,
			[`fr-badge--${this.variant}`]: this.variant,
			"fr-badge--no-icon": this.noIcon,
			"fr-badge--sm": this.sm,
		};

		// Construct class string manually since we don't have classMap directive imported yet
		// or just import classMap? For simplicity, manual string construction:
		const classList = Object.entries(classes)
			.filter(([_, value]) => value)
			.map(([key]) => key)
			.join(" ");

		return html`
            <style>
                ${badgeStyles}
                ${iconStyles}
            </style>
			<p class="${classList}">
				<slot>${this.label}</slot>
			</p>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-badge": DsfrBadge;
	}
}

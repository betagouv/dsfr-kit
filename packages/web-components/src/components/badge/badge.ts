import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dsfr-badge")
export class DsfrBadge extends LitElement {
	// Disable Shadow DOM to allow global DSFR styles to apply
	protected createRenderRoot() {
		return this;
	}

	@property({ type: String })
	label = "";

	@property({ type: String })
	variant: "success" | "error" | "info" | "warning" | "new" | null = null;

	@property({ type: Boolean, attribute: "no-icon" })
	noIcon = false;

	@property({ type: Boolean })
	sm = false;

	render() {
		const classes = ["fr-badge"];

		if (this.variant) {
			// Map 'success' -> 'fr-badge--success', etc.
			// Note: DSFR uses 'fr-badge--success', 'fr-badge--error', etc.
			classes.push(`fr-badge--${this.variant}`);
		}

		if (this.noIcon) {
			classes.push("fr-badge--no-icon");
		}

		if (this.sm) {
			classes.push("fr-badge--sm");
		}

		return html`
      <p class="${classes.join(" ")}">
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

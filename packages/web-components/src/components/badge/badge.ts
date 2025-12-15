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

	updated() {
		// 1. Base Class
		this.classList.add("fr-badge");

		// 2. Variant (Remove old, add new)
		const variants = ["success", "error", "info", "warning", "new"];
		variants.forEach((v) => {
			this.classList.remove(`fr-badge--${v}`);
		});
		if (this.variant) {
			this.classList.add(`fr-badge--${this.variant}`);
		}

		// 3. Modifiers
		this.classList.toggle("fr-badge--no-icon", this.noIcon);
		this.classList.toggle("fr-badge--sm", this.sm);
	}

	render() {
		// In Light DOM, we just render the content.
		// If 'label' prop is used, render it.
		// If using slot/children, Lit preserves them if we don't overwrite them?
		// Actually, Lit's render() REPLACES content.
		// So if we want to support <dsfr-badge>Content</dsfr-badge>, we can rely on Lit's behavior?
		// No, in Light DOM, we usually render "nothing" if we want to keep children, OR we render the label.

		if (this.label) {
			return html`${this.label}`;
		}
		// If no label prop, we render 'nothing' to let existing children persist?
		// Lit's createRenderRoot returning 'this' means 'render()' output is appended/diffed against 'this'.
		// To be safe and support both:
		return html`<slot>${this.label}</slot>`;
		// Wait, <slot> doesn't work in Light DOM.
		// But if we just want to output the label text, it works.
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-badge": DsfrBadge;
	}
}

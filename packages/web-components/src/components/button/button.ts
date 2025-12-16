import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import buttonStyles from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import utilityStyles from "@gouvfr/dsfr/dist/utility/utility.min.css?inline";
import iconsStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "tertiary"
	| "tertiary-no-outline";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * @summary DSFR Button component
 */
@customElement("dsfr-button")
export class DsfrButton extends LitElement {
	@property({ type: String })
	label = ""; // Optional if using slot, but strictly speaking DSFR buttons usually have label props for simplicity in Lit wrappers

	@property({ type: String })
	variant: ButtonVariant = "primary";

	@property({ type: String })
	size: ButtonSize = "md";

	@property({ type: String })
	icon = "";

	@property({ type: Boolean })
	iconRight = false; // If true, icon is on the right

	@property({ type: Boolean })
	disabled = false;

	@property({ type: String })
	type: "button" | "submit" | "reset" = "button";

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(utilityStyles),
		unsafeCSS(iconsStyles), // Icons are needed for buttons with icons
		unsafeCSS(buttonStyles),
	];

	render() {
		const classes = {
			"fr-btn": true,
			[`fr-btn--secondary`]: this.variant === "secondary",
			[`fr-btn--tertiary`]: this.variant === "tertiary",
			[`fr-btn--tertiary-no-outline`]: this.variant === "tertiary-no-outline",
			[`fr-btn--${this.size}`]: this.size !== "md",

			// Icon handling
			[`${this.icon}`]: !!this.icon,
			"fr-btn--icon-left": !!this.icon && !this.iconRight,
			"fr-btn--icon-right": !!this.icon && this.iconRight,
		};

		return html`
            <button
                type=${this.type}
                class=${classMap(classes)}
                ?disabled=${this.disabled}
                title=${this.label || (this.icon ? "Bouton" : "")}
            >
                ${this.label}
                <slot></slot>
            </button>
        `;
		// Added slot for flexibility, though props are preferred for strict DSFR structure.
		// Title added for accessibility if label is empty (icon only), though consumers should provide aria-label in that case.
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-button": DsfrButton;
	}
}

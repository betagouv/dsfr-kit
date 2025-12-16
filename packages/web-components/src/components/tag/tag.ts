import tagStyles from "@gouvfr/dsfr/dist/component/tag/tag.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import schemeStyles from "@gouvfr/dsfr/dist/scheme/scheme.min.css?inline";
import iconsStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import utilityStyles from "@gouvfr/dsfr/dist/utility/utility.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Tag component
 */
@customElement("dsfr-tag")
export class DsfrTag extends LitElement {
	@property({ type: String })
	label = "";

	@property({ type: String })
	href = "";

	@property({ type: String })
	target = "_self";

	@property({ type: Boolean })
	small = false;

	@property({ type: String })
	icon = "";

	@property({ type: Boolean })
	disabled = false;

	@property({ type: Boolean })
	selectable = false;

	@property({ type: Boolean, reflect: true })
	selected = false;

	@property({ type: Boolean })
	dismissible = false;

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(schemeStyles),
		unsafeCSS(utilityStyles),
		unsafeCSS(iconsStyles),
		unsafeCSS(tagStyles),
	];

	render() {
		// Common classes
		const classes = {
			"fr-tag": true,
			"fr-tag--sm": this.small,
			"fr-tag--dismiss": this.dismissible,
			// Allow icon to be set; if dismissible, we shouldn't block it (might be needed for fix or custom)
			[`${this.icon}`]: !!this.icon,
			// Only apply left-icon spacing if it's NOT a dismissible tag (dismissible handles its own icon layout)
			"fr-tag--icon-left": !!this.icon && !this.dismissible,
		};

		// 1. Link Variant
		if (this.href && !this.disabled && !this.dismissible && !this.selectable) {
			return html`
        <a
          href=${this.href}
          target=${this.target}
          class=${classMap(classes)}
          ?aria-disabled=${this.disabled}
        >
          ${this.label}
        </a>
      `;
		}

		// 2. Button Variant (Selectable or Dismissible)
		if (this.selectable || this.dismissible || (this.href && this.disabled)) {
			// Logic for aria-label on dismissible
			const ariaLabel = this.dismissible ? `Retirer ${this.label}` : nothing;
			const ariaPressed = this.selectable
				? this.selected
					? "true"
					: "false"
				: nothing;

			return html`
        <button
          type="button"
          class=${classMap(classes)}
          ?disabled=${this.disabled}
          aria-pressed=${ariaPressed}
          aria-label=${ariaLabel}
        >
          ${this.label}
        </button>
      `;
		}

		// 3. Default Variant (Paragraph)
		return html`
      <p class=${classMap(classes)}>
        ${this.label}
      </p>
    `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-tag": DsfrTag;
	}
}

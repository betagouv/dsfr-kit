import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import linkStyles from "@gouvfr/dsfr/dist/component/link/link.min.css?inline";
import utilityStyles from "@gouvfr/dsfr/dist/utility/utility.min.css?inline";
import iconsStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Link component
 */
@customElement("dsfr-link")
export class DsfrLink extends LitElement {
	@property({ type: String })
	label = "";

	@property({ type: String })
	href = "";

	@property({ type: String })
	target = "_self";

	@property({ type: String })
	size: "sm" | "md" | "lg" = "md";

	@property({ type: String })
	icon = "";

	@property({ type: Boolean })
	iconRight = false; // If true, icon is on the right

	@property({ type: Boolean })
	disabled = false;

	@property({ type: Boolean })
	download = false;

	@property({ type: String })
	downloadDetail = ""; // e.g., "PDF - 400ko"

	@property({ type: String })
	downloadLabel = "Télécharger"; // The prefix text for accessible download links

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(utilityStyles),
		unsafeCSS(iconsStyles),
		unsafeCSS(linkStyles),
	];

	render() {
		// Classes
		const classes = {
			"fr-link": true,
			[`fr-link--${this.size}`]: this.size !== "md",
			"fr-link--download": this.download,
			// Icon handling
			[`${this.icon}`]: !!this.icon && !this.download, // Icons on utility links
			"fr-link--icon-left": !!this.icon && !this.iconRight && !this.download,
			"fr-link--icon-right": !!this.icon && this.iconRight && !this.download,
		};

		// Attributes for disabled state
		const hrefValue = this.disabled ? undefined : this.href;
		const roleValue = this.disabled ? "link" : undefined;
		const ariaDisabled = this.disabled ? "true" : undefined;

		// External link attributes
		const isExternal = this.target === "_blank";
		const relValue = isExternal ? "noopener external" : undefined;
		// Automatically add title for external links if not provided?
		// For simplicity, we assume label is enough or user adds title via standard attr?
		// Lit prop reflection handles title if user sets it on host, but we need it on <a>.
		// We will leave title management to the consumer for now to avoid complexity,
		// OR we could compute it: `this.label + " - nouvelle fenêtre"`

		if (this.download) {
			return html`
                <a
                    href=${ifDefined(hrefValue)}
                    download
                    class=${classMap(classes)}
                    ?aria-disabled=${this.disabled}
                    role=${ifDefined(roleValue)}
                >
                    ${this.downloadLabel} ${this.label}
                    ${this.downloadDetail ? html`<span class="fr-link__detail">${this.downloadDetail}</span>` : nothing}
                </a>
            `;
		}

		return html`
            <a
                href=${ifDefined(hrefValue)}
                target=${this.target}
                rel=${ifDefined(relValue)}
                class=${classMap(classes)}
                aria-disabled=${ifDefined(ariaDisabled)}
                role=${ifDefined(roleValue)}
            >
                ${this.label}
            </a>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-link": DsfrLink;
	}
}

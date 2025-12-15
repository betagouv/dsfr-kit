import { LitElement, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import accordionStyles from "@gouvfr/dsfr/dist/component/accordion/accordion.min.css?inline";
import { DsfrAccordion } from "../accordion/accordion";

@customElement("dsfr-accordion-group")
export class DsfrAccordionGroup extends LitElement {
	// If true, only one accordion can be open at a time (default behavior)
	@property({ type: Boolean })
	group = true;

	// Listen for the change event from children
	private _handleChildChange(e: CustomEvent) {
		// If the event is declaring an expansion AND grouping is enabled
		if (this.group && e.detail.expanded) {
			const target = e.target as DsfrAccordion;

			// Close all other children
			const children = this.querySelectorAll("dsfr-accordion");
			children.forEach((child) => {
				if (child !== target && child instanceof DsfrAccordion) {
					child.expanded = false;
				}
			});
		}
	}

	render() {
		return html`
            <style>
                ${unsafeCSS(accordionStyles)}
                :host {
                    display: block;
                }
            </style>
            <div class="fr-accordions-group" @dsfr-expanded-change=${this._handleChildChange}>
                <slot></slot>
            </div>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-accordion-group": DsfrAccordionGroup;
	}
}

import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import sidemenuStyles from "@gouvfr/dsfr/dist/component/sidemenu/sidemenu.min.css?inline";

import { html, LitElement, unsafeCSS, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Sidemenu Main Container
 */
@customElement("dsfr-sidemenu")
export class DsfrSidemenu extends LitElement {
	@property({ type: String })
	title = "Menu";

	@property({ type: Boolean, reflect: true, attribute: "sticky" })
	sticky = false;

	@property({ type: Boolean, reflect: true, attribute: "full-height" })
	fullHeight = false;

	@property({ type: Boolean, reflect: true, attribute: "right" })
	right = false;

	@state()
	private _collapsed = true;

	static styles = [unsafeCSS(coreStyles), unsafeCSS(sidemenuStyles)];

	private _toggleCollapse() {
		this._collapsed = !this._collapsed;
	}

	render() {
		// Classes for the nav element
		const navClasses = {
			"fr-sidemenu": true,
			"fr-sidemenu--sticky": this.sticky,
			"fr-sidemenu--sticky-full-height": this.fullHeight,
			"fr-sidemenu--right": this.right,
		};

		return html`
            <nav class=${classMap(navClasses)} aria-labelledby="fr-sidemenu-title" role="navigation">
                <div class="fr-sidemenu__inner">
                    <button
                        class="fr-sidemenu__btn"
                        aria-controls="fr-sidemenu-wrapper"
                        aria-expanded="${!this._collapsed}"
                        @click=${this._toggleCollapse}
                    >
                        Dans cette rubrique
                    </button>
                    <div class="fr-collapse ${!this._collapsed ? "fr-collapse--expanded" : ""}" id="fr-sidemenu-wrapper">
                        ${this.title ? html`<div class="fr-sidemenu__title" id="fr-sidemenu-title">${this.title}</div>` : nothing}
                        <ul class="fr-sidemenu__list">
                            <slot></slot>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
	}
}

/**
 * @summary DSFR Sidemenu Link (Leaf Item)
 */
@customElement("dsfr-sidemenu-link")
export class DsfrSidemenuLink extends LitElement {
	@property({ type: String })
	href = "#";

	@property({ type: Boolean, reflect: true })
	active = false;

	@property({ type: String })
	text = "";

	static styles = [unsafeCSS(coreStyles), unsafeCSS(sidemenuStyles)];

	render() {
		return html`
            <li class="fr-sidemenu__item ${this.active ? "fr-sidemenu__item--active" : ""}">
                <a class="fr-sidemenu__link" href="${this.href}" target="_self" ?aria-current=${this.active ? "page" : undefined}>
                    ${this.text} <slot></slot>
                </a>
            </li>
        `;
	}
}

/**
 * @summary DSFR Sidemenu Group (Node Item)
 */
@customElement("dsfr-sidemenu-group")
export class DsfrSidemenuGroup extends LitElement {
	@property({ type: String })
	title = "";

	@property({ type: Boolean })
	expanded = false;

	@property({ type: Boolean })
	active = false;

	static styles = [unsafeCSS(coreStyles), unsafeCSS(sidemenuStyles)];

	private _toggle() {
		this.expanded = !this.expanded;
	}

	render() {
		return html`
            <li class="fr-sidemenu__item ${this.active ? "fr-sidemenu__item--active" : ""}">
                <button
                    class="fr-sidemenu__btn"
                    aria-expanded="${this.expanded}"
                    aria-controls="sidemenu-group-collapse"
                    @click=${this._toggle}
                    ?aria-current=${this.active ? true : undefined}
                >
                    ${this.title}
                </button>
                <div class="fr-collapse ${this.expanded ? "fr-collapse--expanded" : ""}" id="sidemenu-group-collapse">
                    <ul class="fr-sidemenu__list">
                        <slot></slot>
                    </ul>
                </div>
            </li>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-sidemenu": DsfrSidemenu;
		"dsfr-sidemenu-link": DsfrSidemenuLink;
		"dsfr-sidemenu-group": DsfrSidemenuGroup;
	}
}

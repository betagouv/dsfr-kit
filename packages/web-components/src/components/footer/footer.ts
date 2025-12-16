import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import logoStyles from "@gouvfr/dsfr/dist/component/logo/logo.min.css?inline";
import linkStyles from "@gouvfr/dsfr/dist/component/link/link.min.css?inline";
import footerStyles from "@gouvfr/dsfr/dist/component/footer/footer.min.css?inline";

import { html, LitElement, unsafeCSS, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary DSFR Footer component
 */
@customElement("dsfr-footer")
export class DsfrFooter extends LitElement {
	@property({ type: String })
	desc = "";

	@property({ type: String })
	homeLink = "/";

	@property({ type: String })
	homeTitle = "Retour à l’accueil du site - République Française";

	@property({ type: String })
	accessibility = "non conforme"; // non/partiellement/totalement conforme

	@property({ type: String })
	accessibilityLink = "#";

	@property({ type: String })
	legalLink = "#";

	@property({ type: String })
	personalDataLink = "#";

	@property({ type: String })
	cookiesLink = "#";

	@property({ type: String })
	websiteMapLink = "#";

	@property({ type: String })
	operatorLogoSrc = "";

	@property({ type: String })
	operatorLogoAlt = "";

	@property({ type: String })
	operatorLogoStyle = "max-width: 10rem";

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(logoStyles),
		unsafeCSS(linkStyles),
		unsafeCSS(footerStyles),
	];

	render() {
		return html`
            <footer class="fr-footer" role="contentinfo" id="footer">
                <!-- Top Links (Optional) -->
                <div class="fr-footer__top">
                    <div class="fr-container">
                         <slot name="top-links"></slot>
                    </div>
                </div>

                <div class="fr-container">
                    <div class="fr-footer__body">
                        <div class="fr-footer__brand fr-enlarge-link">
                             <p class="fr-logo">
                                République
                                <br>Française
                            </p>
                            ${
															this.operatorLogoSrc
																? html`
                                <a class="fr-footer__brand-link" href="${this.homeLink}" title="${this.homeTitle}">
                                    <img class="fr-footer__logo" style="${this.operatorLogoStyle}" src="${this.operatorLogoSrc}" alt="${this.operatorLogoAlt}" />
                                </a>
                            `
																: html`
                                <a class="fr-footer__brand-link" href="${this.homeLink}" title="${this.homeTitle}"></a>
                            `
														}
                        </div>
                        <div class="fr-footer__content">
                            ${this.desc ? html`<p class="fr-footer__content-desc">${this.desc}</p>` : nothing}
                            <ul class="fr-footer__content-list">
                                <li class="fr-footer__content-item">
                                    <a class="fr-footer__content-link" target="_blank" rel="noopener external" title="info.gouv.fr - nouvelle fenêtre" href="https://info.gouv.fr">info.gouv.fr</a>
                                </li>
                                <li class="fr-footer__content-item">
                                    <a class="fr-footer__content-link" target="_blank" rel="noopener external" title="service-public.gouv.fr - nouvelle fenêtre" href="https://service-public.gouv.fr">service-public.gouv.fr</a>
                                </li>
                                <li class="fr-footer__content-item">
                                    <a class="fr-footer__content-link" target="_blank" rel="noopener external" title="legifrance.gouv.fr - nouvelle fenêtre" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
                                </li>
                                <li class="fr-footer__content-item">
                                    <a class="fr-footer__content-link" target="_blank" rel="noopener external" title="data.gouv.fr - nouvelle fenêtre" href="https://data.gouv.fr">data.gouv.fr</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="fr-footer__partners">
                         <slot name="partners"></slot>
                    </div>

                    <div class="fr-footer__bottom">
                        <ul class="fr-footer__bottom-list">
                            ${
															this.websiteMapLink
																? html`
                                <li class="fr-footer__bottom-item">
                                    <a class="fr-footer__bottom-link" href="${this.websiteMapLink}">Plan du site</a>
                                </li>
                            `
																: nothing
														}
                            <li class="fr-footer__bottom-item">
                                <a class="fr-footer__bottom-link" href="${this.accessibilityLink}">Accessibilité : ${this.accessibility}</a>
                            </li>
                            <li class="fr-footer__bottom-item">
                                <a class="fr-footer__bottom-link" href="${this.legalLink}">Mentions légales</a>
                            </li>
                            <li class="fr-footer__bottom-item">
                                <a class="fr-footer__bottom-link" href="${this.personalDataLink}">Données personnelles</a>
                            </li>
                            <li class="fr-footer__bottom-item">
                                <a class="fr-footer__bottom-link" href="${this.cookiesLink}">Gestion des cookies</a>
                            </li>
                            <slot name="bottom-links"></slot>
                        </ul>
                        <div class="fr-footer__bottom-copy">
                            <p>Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-footer": DsfrFooter;
	}
}

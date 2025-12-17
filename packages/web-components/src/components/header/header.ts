import buttonStyles from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import headerStyles from "@gouvfr/dsfr/dist/component/header/header.min.css?inline";
import linkStyles from "@gouvfr/dsfr/dist/component/link/link.min.css?inline";
import logoStyles from "@gouvfr/dsfr/dist/component/logo/logo.min.css?inline";
import modalStyles from "@gouvfr/dsfr/dist/component/modal/modal.min.css?inline";
import navbarStyles from "@gouvfr/dsfr/dist/component/navigation/navigation.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";

import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";

/**
 * @summary DSFR Header component
 */
@customElement("dsfr-header")
export class DsfrHeader extends LitElement {
  @property({ type: String })
  serviceTitle = "";

  @property({ type: String })
  serviceTagline = "";

  @property({ type: String })
  homeLink = "/";

  @property({ type: String })
  logoText = "République\nFrançaise";

  @property({ type: String })
  operatorLogoSrc = "";

  @property({ type: String })
  operatorLogoAlt = "";

  @property({ type: String })
  operatorLogoStyle = "max-width: 3.5rem";

  @state()
  private _isMenuOpen = false;

  @state()
  private _isSearchOpen = false;

  // Slots explanation:
  // default: The navigation items
  // tools: Quick access links
  // search: Search bar content

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(logoStyles),
    unsafeCSS(buttonStyles),
    unsafeCSS(linkStyles),
    unsafeCSS(headerStyles),
    unsafeCSS(modalStyles),
    unsafeCSS(navbarStyles),
  ];

  @property({ type: Array })
  toolsLinks: Array<{ text: string; href: string; icon?: string }> = [];

  @property({ type: Array })
  navigation: Array<{
    text: string;
    href: string;
    active?: boolean;
    target?: string;
  }> = [];

  private _toggleMenu() {
    this._isMenuOpen = !this._isMenuOpen;
  }

  private _toggleSearch() {
    this._isSearchOpen = !this._isSearchOpen;
  }

  render() {
    return html`
			<header role="banner" class="fr-header">
				<div class="fr-header__body">
					<div class="fr-container">
						<div class="fr-header__body-row">
							<div class="fr-header__brand fr-enlarge-link">
								<div class="fr-header__brand-top">
									<div class="fr-header__logo">
										<p class="fr-logo">
											${this.logoText.split("\n").map(
                        (line, index) => html`
												${line}${index < this.logoText.split("\n").length - 1 ? html`<br>` : nothing}
											`,
                      )}
										</p>
									</div>
									${
                    this.operatorLogoSrc
                      ? html`
										<div class="fr-header__operator">
											<img class="fr-responsive-img" style="${this.operatorLogoStyle}" src="${this.operatorLogoSrc}" alt="${this.operatorLogoAlt}" />
										</div>
									`
                      : nothing
                  }
									<div class="fr-header__navbar">
										<button
											class="fr-btn--search fr-btn"
											data-fr-opened="${this._isSearchOpen}"
											aria-controls="modal-search"
											title="Rechercher"
											@click=${this._toggleSearch}
										>
											Rechercher
										</button>
										<button
											class="fr-btn--menu fr-btn"
											data-fr-opened="${this._isMenuOpen}"
											aria-controls="modal-header"
											title="Menu"
											@click=${this._toggleMenu}
										>
											Menu
										</button>
									</div>
								</div>
								${
                  this.serviceTitle
                    ? html`
									<div class="fr-header__service">
										<a href="${this.homeLink}" title="Accueil - ${this.serviceTitle}">
											<p class="fr-header__service-title">
												${this.serviceTitle}
											</p>
										</a>
										${this.serviceTagline ? html`<p class="fr-header__service-tagline">${this.serviceTagline}</p>` : nothing}
									</div>
								`
                    : nothing
                }
							</div>
							<div class="fr-header__tools">
								<div class="fr-header__tools-links">
									${
                    this.toolsLinks.length > 0
                      ? html`
										<ul class="fr-btns-group">
											${this.toolsLinks.map(
                        (link) => html`
												<li>
													<a class="fr-btn ${link.icon || ""}" href="${link.href}">
														${link.text}
													</a>
												</li>
											`,
                      )}
										</ul>
									`
                      : html`<slot name="tools"></slot>`
                  }
								</div>
								<div class="fr-header__search fr-modal ${this._isSearchOpen ? "fr-modal--opened" : ""}" id="modal-search" aria-labelledby="button-search">
									 <div class="fr-container fr-container-lg--fluid">
										<button class="fr-btn--close fr-btn" aria-controls="modal-search" title="Fermer" @click=${this._toggleSearch}>Fermer</button>
										<slot name="search"></slot>
									 </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Navigation Menu -->
				<div class="fr-header__menu fr-modal ${this._isMenuOpen ? "fr-modal--opened" : ""}" id="modal-header" aria-labelledby="button-menu">
					<div class="fr-container">
						<button class="fr-btn--close fr-btn" aria-controls="modal-header" title="Fermer" @click=${this._toggleMenu}>Fermer</button>
						<div class="fr-header__menu-links">
							<!-- Helper for mobile: duplicate tools links here if needed,
								 then we expect users to slot them correctly or use a specialized component -->
						</div>
						<nav class="fr-nav" role="navigation" aria-label="Menu principal">
							<ul class="fr-nav__list">
								${this.navigation.map(
                  (item) => html`
									<li class="fr-nav__item">
										<a class="fr-nav__link" href="${item.href}" target="${item.target || "_self"}" ?aria-current=${item.active ? "page" : undefined}>
											${item.text}
										</a>
									</li>
								`,
                )}
							</ul>
						</nav>
					</div>
				</div>
			</header>
		`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-header": DsfrHeader;
  }
}

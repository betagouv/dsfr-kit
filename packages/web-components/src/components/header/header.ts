import buttonStyles from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import headerStyles from "@gouvfr/dsfr/dist/component/header/header.min.css?inline";
import linkStyles from "@gouvfr/dsfr/dist/component/link/link.min.css?inline";
import logoStyles from "@gouvfr/dsfr/dist/component/logo/logo.min.css?inline";
import modalStyles from "@gouvfr/dsfr/dist/component/modal/modal.min.css?inline";
import navStyles from "@gouvfr/dsfr/dist/component/navigation/navigation.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import iconsStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";

import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export interface HeaderNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderToolLink {
  label: string;
  href: string;
  icon?: string;
}

/**
 * @summary DSFR Header component
 */
@customElement("dsfr-header")
export class DsfrHeader extends LitElement {
  @property({ type: String })
  brandLogoTitle = "République<br>Française";

  @property({ type: String })
  brandLinkHref = "/";

  @property({ type: String })
  brandLinkTitle = "Retour à l’accueil du site - République Française";

  @property({ type: String })
  brandServiceTitle = "";

  @property({ type: String })
  brandServiceTagline = "";

  @property({ type: String })
  operatorLogoSrc = "";

  @property({ type: String })
  operatorLogoAlt = "";

  @property({ type: String })
  operatorLogoStyle = "width: 3.5rem";

  @property({ type: Array })
  navigation: HeaderNavItem[] = [];

  @property({ type: Array })
  toolsLinks: HeaderToolLink[] = [];

  @property({ type: String })
  searchLabel = "Rechercher";

  @property({ type: String })
  searchPlaceholder = "Rechercher";

  @state()
  private _isMenuOpen = false;

  @state()
  private _isSearchOpen = false;

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(logoStyles),
    unsafeCSS(linkStyles),
    unsafeCSS(iconsStyles),
    unsafeCSS(buttonStyles),
    unsafeCSS(headerStyles),
    unsafeCSS(modalStyles),
    unsafeCSS(navStyles),
  ];

  private _toggleMenu() {
    this._isMenuOpen = !this._isMenuOpen;
    if (this._isMenuOpen) this._isSearchOpen = false;
  }

  private _toggleSearch() {
    this._isSearchOpen = !this._isSearchOpen;
    if (this._isSearchOpen) this._isMenuOpen = false;
  }

  render() {
    const linkPosition = this.brandServiceTitle
      ? "service"
      : this.operatorLogoSrc
        ? "operator"
        : "logo";

    return html`
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                    <p class="fr-logo">
                      ${unsafeHTML(this.brandLogoTitle)}
                    </p>
                  </div>
                  ${
                    this.operatorLogoSrc
                      ? html`
                        <div class="fr-header__operator">
                          <img class="fr-responsive-img" src="${this.operatorLogoSrc}" alt="${this.operatorLogoAlt}" style="${this.operatorLogoStyle}" />
                        </div>
                      `
                      : nothing
                  }
                  <div class="fr-header__navbar">
                    <button
                      class="fr-btn--search fr-btn"
                      data-fr-opened="${this._isSearchOpen}"
                      aria-controls="modal-search"
                      title="${this.searchLabel}"
                      @click=${this._toggleSearch}
                    >
                      ${this.searchLabel}
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
                  this.brandServiceTitle
                    ? html`
                      <div class="fr-header__service">
                        <p class="fr-header__service-title">
                          ${this.brandServiceTitle}
                        </p>
                        ${this.brandServiceTagline ? html`<p class="fr-header__service-tagline">${this.brandServiceTagline}</p>` : nothing}
                      </div>
                    `
                    : nothing
                }
                ${
                  linkPosition === "service"
                    ? html`<a href="${this.brandLinkHref}" title="${this.brandLinkTitle}"></a>`
                    : nothing // In our web component we just put a transparent link on top if simplified, but let's try to match native logic
                }
              </div>
              <div class="fr-header__tools">
                <div class="fr-header__tools-links">
                  <ul class="fr-btns-group">
                    ${this.toolsLinks.map(
                      (link) => html`
                        <li>
                          <a class="fr-btn ${link.icon ? `fr-icon-${link.icon}` : ""}" href="${link.href}">
                            ${link.label}
                          </a>
                        </li>
                      `,
                    )}
                    <slot name="tools"></slot>
                  </ul>
                </div>
                <div class="fr-header__search fr-modal ${this._isSearchOpen ? "fr-modal--opened" : ""}" id="modal-search">
                  <div class="fr-container fr-container-lg--fluid">
                    <button class="fr-btn--close fr-btn" aria-controls="modal-search" title="Fermer" @click=${this._toggleSearch}>Fermer</button>
                    <div class="fr-search-bar" id="header-search" role="search">
                      <label class="fr-label" for="search-input">${this.searchLabel}</label>
                      <input class="fr-input" placeholder="${this.searchPlaceholder}" type="search" id="search-input" name="search-input">
                      <button class="fr-btn" title="${this.searchLabel}">${this.searchLabel}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fr-header__menu fr-modal ${this._isMenuOpen ? "fr-modal--opened" : ""}" id="modal-header">
          <div class="fr-container">
            <button class="fr-btn--close fr-btn" aria-controls="modal-header" title="Fermer" @click=${this._toggleMenu}>Fermer</button>
            <div class="fr-header__menu-links"></div>
            <nav class="fr-nav" role="navigation" aria-label="Menu principal">
              <ul class="fr-nav__list">
                ${this.navigation.map(
                  (item) => html`
                    <li class="fr-nav__item">
                      <a class="fr-nav__link" href="${item.href}" ?aria-current=${item.active ? "page" : undefined}>
                        ${item.label}
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

import {
  coreStyles,
  iconsStyles,
  linkStyles,
  logoStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import footerCss from "@gouvfr/dsfr/dist/component/footer/footer.min.css?inline";

import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export interface FooterLink {
  label: string;
  href: string;
  blank?: boolean;
}

/**
 * @summary DSFR Footer component
 */
@customElement("dsfr-footer")
export class DsfrFooter extends LitElement {
  @property({ type: String })
  brandLogoTitle = "République<br>Française";

  @property({ type: String })
  brandLinkHref = "/";

  @property({ type: String })
  brandLinkTitle = "Retour à l’accueil du site - République Française";

  @property({ type: String })
  operatorLogoSrc = "";

  @property({ type: String })
  operatorLogoAlt = "";

  @property({ type: String })
  operatorLogoStyle = "width: 3.5rem";

  @property({ type: String })
  contentDescription = "";

  @property({ type: Array })
  contentLinks: FooterLink[] = [
    { label: "info.gouv.fr", href: "https://info.gouv.fr", blank: true },
    {
      label: "service-public.gouv.fr",
      href: "https://service-public.gouv.fr",
      blank: true,
    },
    {
      label: "legifrance.gouv.fr",
      href: "https://legifrance.gouv.fr",
      blank: true,
    },
    { label: "data.gouv.fr", href: "https://data.gouv.fr", blank: true },
  ];

  @property({ type: Array })
  bottomLinks: FooterLink[] = [];

  @property({ type: String })
  bottomCopyright =
    'Sauf mention explicite de propriété intellectuelle détenue par des tiers, les contenus de ce site sont proposés sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank" rel="noopener external" title="Licence etalab - nouvelle fenêtre">licence etalab-2.0</a>';

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    logoStyles,
    linkStyles,
    unsafeCSS(footerCss),
  ];

  render() {
    return html`
      <footer class="fr-footer" role="contentinfo" id="footer">
        <div class="fr-footer__top">
          <div class="fr-container">
            <slot name="top-links"></slot>
          </div>
        </div>

        <div class="fr-container">
          <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
              <a href="${this.brandLinkHref}" title="${this.brandLinkTitle}">
                <p class="fr-logo">${unsafeHTML(this.brandLogoTitle)}</p>
              </a>
              ${
                this.operatorLogoSrc
                  ? html`
                    <a class="fr-footer__brand-link" href="${this.brandLinkHref}" title="${this.brandLinkTitle}">
                      <img class="fr-footer__logo" style="${this.operatorLogoStyle}" src="${this.operatorLogoSrc}" alt="${this.operatorLogoAlt}" />
                    </a>
                  `
                  : nothing
              }
            </div>
            <div class="fr-footer__content">
              ${this.contentDescription ? html`<p class="fr-footer__content-desc">${unsafeHTML(this.contentDescription)}</p>` : nothing}
              <ul class="fr-footer__content-list">
                ${this.contentLinks.map(
                  (link) => html`
                    <li class="fr-footer__content-item">
                      <a
                        class="fr-footer__content-link"
                        href="${link.href}"
                        target="${ifDefined(link.blank ? "_blank" : undefined)}"
                        rel="${ifDefined(link.blank ? "noopener external" : undefined)}"
                      >${link.label}</a>
                    </li>
                  `,
                )}
              </ul>
            </div>
          </div>

          <div class="fr-footer__partners">
            <slot name="partners"></slot>
          </div>

          <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
              ${this.bottomLinks.map(
                (link) => html`
                  <li class="fr-footer__bottom-item">
                    <a class="fr-footer__bottom-link" href="${link.href}">${link.label}</a>
                  </li>
                `,
              )}
              <slot name="bottom-links"></slot>
            </ul>
            <div class="fr-footer__bottom-copy">
              <p>${unsafeHTML(this.bottomCopyright)}</p>
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

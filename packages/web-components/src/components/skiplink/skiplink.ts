import {
  coreStyles,
  iconsStyles,
  linkStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import skiplinkCss from "@gouvfr/dsfr/dist/component/skiplink/skiplink.min.css?inline";

import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

export interface SkiplinkLink {
  label: string;
  href: string;
}

/**
 * @summary DSFR Skiplink Container
 */
@customElement("dsfr-skiplink")
export class DsfrSkiplink extends LitElement {
  @property({ type: Array })
  links: SkiplinkLink[] = [];

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    linkStyles,
    unsafeCSS(skiplinkCss),
  ];

  render() {
    return html`
      <div class="fr-skiplinks">
        <nav class="fr-container" role="navigation" aria-label="Accès rapide">
          <ul class="fr-skiplinks__list">
            ${this.links.map(
              (link) => html`
                <li>
                  <a class="fr-link" href="${link.href}">${link.label}</a>
                </li>
              `,
            )}
            <slot></slot>
          </ul>
        </nav>
      </div>
    `;
  }
}

/**
 * @summary DSFR Skiplink Item
 */
@customElement("dsfr-skiplink-item")
export class DsfrSkiplinkItem extends LitElement {
  @property({ type: String })
  href = "#";

  @property({ type: String })
  label = "";

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    linkStyles,
    unsafeCSS(skiplinkCss),
  ];

  render() {
    return html`
      <li>
        <a class="fr-link" href="${this.href}">${this.label}</a>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-skiplink": DsfrSkiplink;
    "dsfr-skiplink-item": DsfrSkiplinkItem;
  }
}

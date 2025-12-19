import linkStyles from "@gouvfr/dsfr/dist/component/link/link.min.css?inline";
import skiplinkStyles from "@gouvfr/dsfr/dist/component/skiplink/skiplink.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";

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
    unsafeCSS(coreStyles),
    unsafeCSS(linkStyles),
    unsafeCSS(skiplinkStyles),
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
    unsafeCSS(coreStyles),
    unsafeCSS(linkStyles),
    unsafeCSS(skiplinkStyles),
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

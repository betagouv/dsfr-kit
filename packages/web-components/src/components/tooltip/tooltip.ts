import tooltipStyles from "@gouvfr/dsfr/dist/component/tooltip/tooltip.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary DSFR Tooltip component
 */
@customElement("dsfr-tooltip")
export class DsfrTooltip extends LitElement {
  @property({ type: String })
  content = "";

  @property({ type: String })
  label = "";

  @property({ type: String })
  kind: "hover" | "click" = "hover";

  @property({ type: Boolean })
  link = false;

  @property({ type: String })
  id = `tooltip-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [unsafeCSS(coreStyles), unsafeCSS(tooltipStyles)];

  render() {
    const buttonId = `button-${this.id}`;

    if (this.link) {
      return html`
            <a
                class="fr-link"
                id=${buttonId}
                aria-describedby=${this.id}
                href="#"
            >
                ${this.label}
            </a>
            <span
                class="fr-tooltip fr-placement"
                id=${this.id}
                role="tooltip"
                aria-hidden="true"
            >
                ${this.content}
            </span>
        `;
    }

    return html`
      <button
        class="fr-btn fr-btn--tooltip"
        id=${buttonId}
        aria-describedby=${this.id}
      >
        ${this.label}
      </button>
      <span
        class="fr-tooltip fr-placement"
        id=${this.id}
        role="tooltip"
        aria-hidden="true"
      >
        ${this.content}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-tooltip": DsfrTooltip;
  }
}

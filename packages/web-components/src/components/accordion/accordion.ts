import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import accordionCss from "@gouvfr/dsfr/dist/component/accordion/accordion.min.css?inline";
import { html, LitElement, type TemplateResult, unsafeCSS } from "lit";
import { customElement, property, state } from "lit/decorators.js";

const accordionStyles = unsafeCSS(accordionCss);

@customElement("dsfr-accordion")
export class DsfrAccordion extends LitElement {
  static override styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    accordionStyles,
    unsafeCSS(`
      :host {
        display: block;
      }
      .fr-collapse {
        transition: max-height 0.3s ease-out, opacity 0.3s, visibility 0.3s;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        visibility: hidden;
      }
      .fr-collapse--expanded {
        max-height: 500px;
        opacity: 1;
        visibility: visible;
        overflow: auto;
      }
    `),
  ];

  @property({ type: String })
  label = "";

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: String, attribute: "heading-level" })
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h3";

  @state()
  private _uniqueId = `accordion-${Math.random().toString(36).substr(2, 9)}`;

  private toggle() {
    this.expanded = !this.expanded;
    this.dispatchEvent(
      new CustomEvent("dsfr-expanded-change", {
        bubbles: true,
        composed: true,
        detail: { expanded: this.expanded },
      }),
    );
  }

  render() {
    const contentId = this.id || this._uniqueId;

    // Render the button separately to easily reuse it
    const button = html`
            <button
                class="fr-accordion__btn"
                aria-expanded="${this.expanded}"
                aria-controls="${contentId}"
                @click=${this.toggle}
                type="button"
            >
                ${this.label}
            </button>
        `;

    // Dynamic heading
    let heading: TemplateResult;
    switch (this.headingLevel) {
      case "h1":
        heading = html`<h1 class="fr-accordion__title">${button}</h1>`;
        break;
      case "h2":
        heading = html`<h2 class="fr-accordion__title">${button}</h2>`;
        break;
      case "h4":
        heading = html`<h4 class="fr-accordion__title">${button}</h4>`;
        break;
      case "h5":
        heading = html`<h5 class="fr-accordion__title">${button}</h5>`;
        break;
      case "h6":
        heading = html`<h6 class="fr-accordion__title">${button}</h6>`;
        break;
      default:
        heading = html`<h3 class="fr-accordion__title">${button}</h3>`;
    }

    return html`
			<section class="fr-accordion">
                ${heading}
				<div class="fr-collapse ${this.expanded ? "fr-collapse--expanded" : ""}" id="${contentId}">
					<slot></slot>
				</div>
			</section>
		`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-accordion": DsfrAccordion;
  }
}

import style1 from "@gouvfr/dsfr/dist/component/accordion/accordion.min.css?inline";
import style0 from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import style2 from "@gouvfr/dsfr/dist/scheme/scheme.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dsfr-accordion-gen")
export class DsfrAccordionGen extends LitElement {
  @property({ type: String }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) content = "";
  @property({ type: Boolean }) isExpanded = false;
  @property({ type: String }) prefix = "fr";

  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    return html`
      <style>
        ${unsafeCSS(style0)}
        ${unsafeCSS(style1)}
        ${unsafeCSS(style2)}
      </style>




<section class="${this.prefix}-accordion">
  <h3 class="${this.prefix}-accordion__title">
    <button type="button" class="${this.prefix}-accordion__btn" aria-expanded="${this.isExpanded}" aria-controls="${this.id}" @click="${this.toggle}">${this.label}</button>
  </h3>
  <div class="${this.dsfrClasses || ""}" ${this.dsfrAttributes || ""}>

      ${this.content}

  </div>
</section>
    `;
  }
}

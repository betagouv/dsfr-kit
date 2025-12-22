
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  coreStyles,
  schemeStyles,
  utilityStyles,
  iconsStyles,
  formStyles,
  linkStyles,
  logoStyles
} from '@dsfr-kit/styles';
import style0 from '@gouvfr/dsfr/dist/component/accordion/accordion.min.css?inline';

@customElement('dsfr-accordion-gen')
export class DsfrAccordionGen extends LitElement {
  static override styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    formStyles,
    linkStyles,
    logoStyles,
    unsafeCSS(style0)
  ];

  @property({ type: String }) id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) content = "";
  @property({ type: Boolean }) isExpanded = false;
  @property({ type: String }) prefix = "fr";
  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.dispatchEvent(new CustomEvent('dsfr-toggle', {
      detail: { isExpanded: this.isExpanded },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      



<section class="${this.prefix}-accordion">
  <h3 class="${this.prefix}-accordion__title">
    <button type="button" class="${this.prefix}-accordion__btn" aria-expanded="${this.isExpanded}" aria-controls="${this.id}" @click="${this.toggle}">${unsafeHTML(this.label)}</button>
  </h3>
  <div class="${this.prefix}-collapse ${this.isExpanded ? this.prefix + "-collapse--expanded" : ""} ${this.dsfrClasses || ""}" id="${this.id}" ${this.dsfrAttributes || ""}>
    
      ${unsafeHTML(this.content)}
    
  </div>
</section>
    `;
  }
}

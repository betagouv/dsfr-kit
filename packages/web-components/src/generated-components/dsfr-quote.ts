
import { html, LitElement, unsafeCSS, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { coreStyles, schemeStyles, utilityStyles, iconsStyles, formStyles, linkStyles, logoStyles } from '@dsfr-kit/styles';
import style0 from '@gouvfr/dsfr/dist/component/quote/quote.min.css?inline';

@customElement('dsfr-quote-gen')
export class DsfrQuoteGen extends LitElement {
  static override styles = [coreStyles, schemeStyles, utilityStyles, iconsStyles, formStyles, linkStyles, logoStyles, unsafeCSS(style0)];
  @property({ type: String }) size = "";
  @property({ type: String }) text = "";
  @property({ type: Object }) image = {};
  @property({ type: String }) href = "";
  @property({ type: String }) author = "";
  @property({ type: String }) accent = "";
  @property({ type: Array }) sources = [];
  @property({ type: String }) prefix = "fr";
  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";

  render() {
    return html`%>




<figure <dsfr-ejs-include data-include="includeAttrs(quoteAttrs)"> <!-- TODO: Include includeClasses(quoteClasses) -->>
  <blockquote <dsfr-ejs-include data-include="includeAttrs(blockAttrs)">>
    <p <dsfr-ejs-include data-include="includeClasses(sizeClasses)">>« ${unsafeHTML(this.text)} »</p>
  </blockquote>
  <figcaption>
    ${this.author ? html`
      <p class="${this.prefix}-quote__author">${unsafeHTML(this.author)}</p>
    `) : nothing }

    ${this.sources && this.sources.length > 1 ? html`
      <ul class="${this.prefix}-quote__source">
      ${true /* Unsupported: source in this.sources */ ? html`
        <li>${unsafeHTML(this.sources[source])}</li>
      `) : nothing }
      </ul>
    
      <div class="${this.prefix}-quote__source">
        ${unsafeHTML(this.sources[0])}
      </div>
    `) : nothing }

    ${this.image ? html`
      <div class="${this.prefix}-quote__image">
          <!-- TODO: Include include('../../../../core/template/ejs/media/responsive-img.ejs', {media: image}); -->
      </div>
    `) : nothing }
  </figcaption>
</figure>`;
  }
}

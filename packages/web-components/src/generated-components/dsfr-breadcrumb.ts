
import { html, LitElement, unsafeCSS, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { coreStyles, schemeStyles, utilityStyles, iconsStyles, formStyles, linkStyles, logoStyles } from '@dsfr-kit/styles';
import style0 from '@gouvfr/dsfr/dist/component/breadcrumb/breadcrumb.min.css?inline';

@customElement('dsfr-breadcrumb-gen')
export class DsfrBreadcrumbGen extends LitElement {
  static override styles = [coreStyles, schemeStyles, utilityStyles, iconsStyles, formStyles, linkStyles, logoStyles, unsafeCSS(style0)];
  @property({ type: String }) id = "";
  @property({ type: Array }) segments = [];
  @property({ type: String }) prefix = "fr";
  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";

  render() {
    return html`



<nav role="navigation" class="${this.prefix}-breadcrumb" aria-label="vous êtes ici :">
  <button type="button" class="${this.prefix}-breadcrumb__button" aria-expanded="false" aria-controls="${this.this.id}">${unsafeHTML(this.button)}</button>
  <div class="${this.prefix}-collapse" id="${this.this.id}">
    <ol class="${this.prefix}-breadcrumb__list">
      
      <li>
        <${unsafeHTML(markup)} class="${unsafeHTML(this.prefix)}-breadcrumb__link" <!-- TODO: Include includeAttrs(segmentAttrs); -->>${unsafeHTML(segment.label)}</${unsafeHTML(markup)}>
      </li>
      
    </ol>
  </div>

</nav>`;
  }
}

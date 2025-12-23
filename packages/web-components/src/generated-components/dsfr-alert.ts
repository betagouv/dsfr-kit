
import { html, LitElement, unsafeCSS, nothing } from 'lit';
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
import style0 from '@gouvfr/dsfr/dist/component/alert/alert.min.css?inline';

@customElement('dsfr-alert-gen')
export class DsfrAlertGen extends LitElement {
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
  @property({ type: String }) title = "";
  @property({ type: String }) text = "";
  @property({ type: String }) type = "";
  @property({ type: String }) size = "";
  @property({ type: Array }) classes = [];
  @property({ type: Object }) attribute = {};
  @property({ type: Boolean }) dismissible = false;
  @property({ type: Boolean }) expanded = false;
  @property({ type: Object }) button = {};
  @property({ type: Boolean }) alert = false;
  @property({ type: String }) markup = "";
  @property({ type: String }) prefix = "fr";
  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";

  render() {
    return html`
      %>




<div ${this.dsfrAttributes || ""} class="${this.dsfrClasses || ""}">

  ${this.title ? html`
    <${unsafeHTML(this.markup)} class="${unsafeHTML(this.prefix)}-alert__title">${unsafeHTML(this.title)}</${unsafeHTML(this.markup)}>
  ` : nothing }

  ${this.text ? html`
    <p>${unsafeHTML(this.text)}</p>
  ` : nothing }

  ${this.dismissible ? html`
    <!-- TODO: Include include('../../../button/template/ejs/button', {button: {size: 'md', classes: [`${prefix}-btn--close`], ...alert.button}}) -->
  ` : nothing }
</div>
    `;
  }
}

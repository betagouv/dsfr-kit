
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
import style0 from '@gouvfr/dsfr/dist/component/badge/badge.min.css?inline';

@customElement('dsfr-badge-gen')
export class DsfrBadgeGen extends LitElement {
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

  @property({ type: Object }) badge = {};
  @property({ type: String }) label = "";
  @property({ type: String }) type = "";
  @property({ type: String }) accent = "";
  @property({ type: String }) markup = "p";
  @property({ type: Array }) classes = [];
  @property({ type: Object }) attrs = {};
  @property({ type: String }) icon = "";
  @property({ type: Boolean }) ellipsis = false;
  @property({ type: String }) prefix = "fr";
  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";
  @property({ type: String }) size = "";

  get _classes() {
    const classes = [this.prefix + '-badge'];
    if (this.size === 'sm') classes.push(this.prefix + '-badge--sm');
    if (this.type) classes.push(this.prefix + '-badge--' + this.type);
    else if (this.accent) classes.push(this.prefix + '-badge--' + this.accent);

    if (this.icon === "false") {
        classes.push(this.prefix + '-badge--no-icon');
    } else if (this.icon) {
        classes.push(this.prefix + '-icon-' + this.icon);
        classes.push(this.prefix + '-badge--icon-left');
    }

    if (this.classes) classes.push(this.classes);
    if (this.dsfrClasses) classes.push(this.dsfrClasses);
    return classes.join(' ');
  }

  render() {
    return html`
      



<${unsafeHTML(this.markup)} ${this.dsfrAttributes || ""} class="${this._classes}">${unsafeHTML(this.label)}</${unsafeHTML(this.markup)}>
    `;
  }
}

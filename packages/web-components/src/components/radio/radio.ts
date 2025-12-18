import formStyles from "@gouvfr/dsfr/dist/component/form/form.min.css?inline";
import radioStyles from "@gouvfr/dsfr/dist/component/radio/radio.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Radio component
 */
@customElement("dsfr-radio")
export class DsfrRadio extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  value = "";

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  hint = "";

  @property({ type: Boolean, reflect: true })
  rich = false;

  @property({ type: String })
  radioId = `radio-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(formStyles),
    unsafeCSS(radioStyles),
  ];

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new CustomEvent("dsfr-change", {
        detail: { checked: this.checked, value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const groupClasses = {
      "fr-radio-group": true,
      "fr-radio-rich": this.rich,
    };

    return html`
            <div class=${classMap(groupClasses)}>
                <input
                    type="radio"
                    id=${this.radioId}
                    name=${this.name}
                    value=${this.value}
                    ?checked=${this.checked}
                    ?disabled=${this.disabled}
                    @change=${this._handleChange}
                >
                <label class="fr-label" for=${this.radioId}>
                    ${this.label}
                    ${this.hint ? html`<span class="fr-hint-text">${this.hint}</span>` : nothing}
                </label>
                ${
                  this.rich
                    ? html`
                    <div class="fr-radio-rich__pictogram">
                        <slot name="pictogram"></slot>
                    </div>
                `
                    : nothing
                }
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-radio": DsfrRadio;
  }
}

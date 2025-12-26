import {
  coreStyles,
  formStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import selectCss from "@gouvfr/dsfr/dist/component/select/select.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/**
 * @summary DSFR Select component
 */
@customElement("dsfr-select")
export class DsfrSelect extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  name = "";

  @property({ type: String })
  value = "";

  @property({ type: Array })
  options: SelectOption[] = [];

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  hint = "";

  @property({ type: String })
  error = "";

  @property({ type: String })
  valid = "";

  @property({ type: String })
  selectId = `select-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    formStyles,
    unsafeCSS(selectCss),
  ];

  private _handleChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("dsfr-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const groupClasses = {
      "fr-select-group": true,
      "fr-select-group--error": !!this.error,
      "fr-select-group--valid": !!this.valid,
      "fr-select-group--disabled": this.disabled,
    };

    const describedBy: string[] = [];
    if (this.hint) describedBy.push(`${this.selectId}-hint`);
    if (this.error) describedBy.push(`${this.selectId}-error`);
    if (this.valid) describedBy.push(`${this.selectId}-valid`);

    return html`
      <div class=${classMap(groupClasses)}>
        <label class="fr-label" for=${this.selectId}>
          ${this.label}
          ${this.hint ? html`<span class="fr-hint-text" id="${this.selectId}-hint">${this.hint}</span>` : nothing}
        </label>
        <select
          class="fr-select"
          id=${this.selectId}
          name=${ifDefined(this.name || undefined)}
          aria-describedby=${ifDefined(describedBy.length > 0 ? describedBy.join(" ") : undefined)}
          ?disabled=${this.disabled}
          .value=${this.value}
          @change=${this._handleChange}
        >
          <option value="" disabled ?selected=${!this.value} hidden>Sélectionner une option</option>
          ${this.options.map(
            (opt) => html`
              <option value=${opt.value} ?disabled=${opt.disabled} ?selected=${this.value === opt.value}>
                ${opt.label}
              </option>
            `,
          )}
        </select>
        ${
          this.error
            ? html`<div class="fr-messages-group" id="${this.selectId}-error-messages" aria-live="polite"><p class="fr-message fr-message--error" id="${this.selectId}-error">${this.error}</p></div>`
            : nothing
        }
        ${
          this.valid
            ? html`<div class="fr-messages-group" id="${this.selectId}-valid-messages" aria-live="polite"><p class="fr-message fr-message--valid" id="${this.selectId}-valid">${this.valid}</p></div>`
            : nothing
        }
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-select": DsfrSelect;
  }
}

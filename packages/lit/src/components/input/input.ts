import {
  coreStyles,
  formStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import inputCss from "@gouvfr/dsfr/dist/component/input/input.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Input component
 */
@customElement("dsfr-input")
export class DsfrInput extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  value = "";

  @property({ type: String })
  type = "text";

  @property({ type: String })
  name = "";

  @property({ type: String })
  autocomplete = "";

  @property({ type: Boolean, attribute: "dsfr-spellcheck" })
  dsfrSpellcheck?: boolean;

  @property({ type: String })
  placeholder = "";

  @property({ type: String })
  hint = "";

  @property({ type: String })
  error = "";

  @property({ type: String })
  valid = "";

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  required = false;

  @property({ type: String })
  icon = "";

  @property({ type: String })
  inputId = `input-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    formStyles,
    unsafeCSS(inputCss),
  ];

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("dsfr-change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleInput(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.dispatchEvent(
      new CustomEvent("dsfr-input", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const groupClasses = {
      "fr-input-group": true,
      "fr-input-group--error": !!this.error,
      "fr-input-group--valid": !!this.valid,
      "fr-input-group--disabled": this.disabled,
    };

    const inputClasses = {
      "fr-input": true,
      "fr-input--error": !!this.error,
      "fr-input--valid": !!this.valid,
    };

    const describedBy: string[] = [];
    if (this.hint) describedBy.push(`${this.inputId}-hint`);
    if (this.error) describedBy.push(`${this.inputId}-error`);
    if (this.valid) describedBy.push(`${this.inputId}-valid`);

    const iconClass =
      this.icon && !this.icon.startsWith("fr-icon-")
        ? `fr-icon-${this.icon}`
        : this.icon;

    const inputElement =
      this.type === "textarea"
        ? html`
        <textarea
          class=${classMap(inputClasses)}
          id=${this.inputId}
          name=${this.name || this.inputId}
          ?disabled=${this.disabled}
          ?required=${this.required}
          spellcheck=${ifDefined(this.dsfrSpellcheck !== undefined ? String(this.dsfrSpellcheck) : undefined)}
          placeholder=${ifDefined(this.placeholder || undefined)}
          autocomplete=${ifDefined(this.autocomplete || undefined)}
          aria-describedby=${ifDefined(describedBy.length > 0 ? describedBy.join(" ") : undefined)}
          .value=${this.value}
          @change=${this._handleChange}
          @input=${this._handleInput}
        ></textarea>
      `
        : html`
        <input
          class=${classMap(inputClasses)}
          id=${this.inputId}
          name=${this.name || this.inputId}
          type=${this.type}
          ?disabled=${this.disabled}
          ?required=${this.required}
          spellcheck=${ifDefined(this.dsfrSpellcheck !== undefined ? String(this.dsfrSpellcheck) : undefined)}
          placeholder=${ifDefined(this.placeholder || undefined)}
          autocomplete=${ifDefined(this.autocomplete || undefined)}
          aria-describedby=${ifDefined(describedBy.length > 0 ? describedBy.join(" ") : undefined)}
          .value=${this.value}
          @change=${this._handleChange}
          @input=${this._handleInput}
        />
      `;

    const wrappedInput = this.icon
      ? html`
        <div class="fr-input-wrap ${iconClass}">
          ${inputElement}
        </div>
      `
      : inputElement;

    return html`
      <div class=${classMap(groupClasses)}>
        <label class="fr-label" for=${this.inputId}>
          ${this.label}
          ${this.hint ? html`<span class="fr-hint-text" id="${this.inputId}-hint">${this.hint}</span>` : nothing}
        </label>
        ${wrappedInput}
        ${
          this.error
            ? html`<div class="fr-messages-group" id="${this.inputId}-error-messages" aria-live="polite"><p class="fr-message fr-message--error" id="${this.inputId}-error">${this.error}</p></div>`
            : nothing
        }
        ${
          this.valid
            ? html`<div class="fr-messages-group" id="${this.inputId}-valid-messages" aria-live="polite"><p class="fr-message fr-message--valid" id="${this.inputId}-valid">${this.valid}</p></div>`
            : nothing
        }
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-input": DsfrInput;
  }
}

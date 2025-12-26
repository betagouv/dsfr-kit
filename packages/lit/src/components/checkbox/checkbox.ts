import {
  coreStyles,
  formStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import checkboxCss from "@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Checkbox component
 */
@customElement("dsfr-checkbox")
export class DsfrCheckbox extends LitElement {
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
  size: "sm" | "md" = "md";

  @property({ type: String })
  hint = "";

  @property({ type: String })
  error = "";

  @property({ type: String })
  valid = "";

  @property({ type: String })
  checkboxId = `checkbox-${Math.random().toString(36).substring(2, 9)}`;

  @property({ type: Boolean })
  inline = false;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    formStyles,
    unsafeCSS(checkboxCss),
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
      "fr-checkbox-group": true,
      "fr-checkbox-group--sm": this.size === "sm",
      "fr-checkbox-group--error": !!this.error,
      "fr-checkbox-group--valid": !!this.valid,
    };

    const describedBy: string[] = [];
    const errorId = `${this.checkboxId}-error`;
    const validId = `${this.checkboxId}-valid`;

    if (this.error) describedBy.push(errorId);
    if (this.valid) describedBy.push(validId);

    return html`
      <div class=${classMap(groupClasses)}>
        <input
          name=${ifDefined(this.name || undefined)}
          value=${ifDefined(this.value || undefined)}
          id=${this.checkboxId}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          aria-describedby=${ifDefined(describedBy.length > 0 ? describedBy.join(" ") : undefined)}
          @change=${this._handleChange}
        >
        <label class="fr-label" for=${this.checkboxId}>
          ${this.label}
          ${this.hint ? html`<span class="fr-hint-text">${this.hint}</span>` : nothing}
        </label>
        ${
          this.error || this.valid
            ? html`
                <div class="fr-messages-group" id="${this.checkboxId}-messages" aria-live="polite">
                  ${this.error ? html`<p class="fr-message fr-message--error" id=${errorId}>${this.error}</p>` : nothing}
                  ${this.valid ? html`<p class="fr-message fr-message--valid" id=${validId}>${this.valid}</p>` : nothing}
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
    "dsfr-checkbox": DsfrCheckbox;
  }
}

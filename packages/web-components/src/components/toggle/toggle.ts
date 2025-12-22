import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import toggleCss from "@gouvfr/dsfr/dist/component/toggle/toggle.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Toggle (Interrupteur) component
 */
@customElement("dsfr-toggle")
export class DsfrToggle extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: Boolean, reflect: true })
  checked = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  hint = "";

  @property({ type: Boolean })
  state = false;

  @property({ type: Boolean })
  left = false;

  @property({ type: Boolean })
  border = false;

  @property({ type: String })
  error = "";

  @property({ type: String })
  valid = "";

  @property({ type: String })
  toggleId = `toggle-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(toggleCss),
  ];

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.checked = target.checked;
    this.dispatchEvent(
      new CustomEvent("dsfr-change", {
        detail: { checked: this.checked },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const classes = {
      "fr-toggle": true,
      "fr-toggle--label-left": this.left,
      "fr-toggle--border-bottom": this.border,
      "fr-toggle--error": !!this.error,
      "fr-toggle--valid": !!this.valid,
    };

    const describedby: string[] = [];
    if (this.hint) describedby.push(`${this.toggleId}-hint`);
    if (this.error) describedby.push(`${this.toggleId}-error`);
    if (this.valid) describedby.push(`${this.toggleId}-valid`);

    return html`
      <div class=${classMap(classes)}>
        <input
          type="checkbox"
          class="fr-toggle__input"
          aria-describedby=${ifDefined(describedby.length > 0 ? describedby.join(" ") : undefined)}
          id=${this.toggleId}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this._handleChange}
        >
        <label
          class="fr-toggle__label"
          for=${this.toggleId}
          data-fr-checked-label=${ifDefined(this.state ? "Activé" : undefined)}
          data-fr-unchecked-label=${ifDefined(this.state ? "Désactivé" : undefined)}
        >${this.label}</label>
        ${
          this.hint
            ? html`<p class="fr-hint-text" id="${this.toggleId}-hint">${this.hint}</p>`
            : nothing
        }
        ${
          this.error || this.valid
            ? html`
                <div class="fr-messages-group" id="${this.toggleId}-messages" aria-live="polite">
                  ${this.error ? html`<p class="fr-message fr-message--error" id="${this.toggleId}-error">${this.error}</p>` : nothing}
                  ${this.valid ? html`<p class="fr-message fr-message--valid" id="${this.toggleId}-valid">${this.valid}</p>` : nothing}
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
    "dsfr-toggle": DsfrToggle;
  }
}

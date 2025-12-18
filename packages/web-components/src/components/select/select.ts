import formStyles from "@gouvfr/dsfr/dist/component/form/form.min.css?inline";
import selectStyles from "@gouvfr/dsfr/dist/component/select/select.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
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

  @property({ type: String, reflect: true })
  state: "default" | "error" | "valid" = "default";

  @property({ type: String })
  message = "";

  @property({ type: String })
  selectId = `select-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(formStyles),
    unsafeCSS(selectStyles),
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
      "fr-select-group--error": this.state === "error",
      "fr-select-group--valid": this.state === "valid",
      "fr-select-group--disabled": this.disabled,
    };

    const messageClasses = {
      "fr-message": true,
      "fr-message--error": this.state === "error",
      "fr-message--valid": this.state === "valid",
    };

    const describedBy = [
      this.hint ? `${this.selectId}-hint` : undefined,
      this.message ? `${this.selectId}-message` : undefined,
    ]
      .filter(Boolean)
      .join(" ");

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
                    aria-describedby=${ifDefined(describedBy || undefined)}
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
                <div class="fr-messages-group" id="${this.selectId}-messages" aria-live="polite">
                    ${
                      this.message
                        ? html`<p class=${classMap(messageClasses)} id="${this.selectId}-message">${this.message}</p>`
                        : nothing
                    }
                </div>
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-select": DsfrSelect;
  }
}

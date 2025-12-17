import toggleStyles from "@gouvfr/dsfr/dist/component/toggle/toggle.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
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

  @property({ type: String, attribute: "checked-label" })
  checkedLabel = "Activé";

  @property({ type: String, attribute: "unchecked-label" })
  uncheckedLabel = "Désactivé";

  @property({ type: Boolean, attribute: "show-status-label" })
  showStatusLabel = true;

  @property({ type: Boolean, attribute: "label-left" })
  labelLeft = false;

  @property({ type: Boolean, attribute: "border-bottom" })
  borderBottom = false;

  @property({ type: String })
  toggleId = `toggle-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [unsafeCSS(coreStyles), unsafeCSS(toggleStyles)];

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
      "fr-toggle--label-left": this.labelLeft,
      "fr-toggle--border-bottom": this.borderBottom,
    };

    const hintId = this.hint ? `${this.toggleId}-hint` : undefined;

    return html`
            <div class=${classMap(classes)}>
                <input
                    type="checkbox"
                    class="fr-toggle__input"
                    aria-describedby=${ifDefined(hintId)}
                    id=${this.toggleId}
                    ?checked=${this.checked}
                    ?disabled=${this.disabled}
                    @change=${this._handleChange}
                >
                <label
                    class="fr-toggle__label"
                    for=${this.toggleId}
                    data-fr-checked-label=${ifDefined(this.showStatusLabel ? this.checkedLabel : undefined)}
                    data-fr-unchecked-label=${ifDefined(this.showStatusLabel ? this.uncheckedLabel : undefined)}
                >${this.label}</label>
                ${
                  this.hint
                    ? html`
                    <p class="fr-hint-text" id=${hintId}>${this.hint}</p>
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

import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import formStyles from "@gouvfr/dsfr/dist/component/form/form.min.css?inline";
import checkboxStyles from "@gouvfr/dsfr/dist/component/checkbox/checkbox.min.css?inline";
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

	@property({ type: Boolean, reflect: true })
	small = false;

	@property({ type: String })
	hint = "";

	@property({ type: String, reflect: true })
	state: "default" | "error" | "valid" = "default";

	@property({ type: String })
	message = "";

	@property({ type: String })
	checkboxId = `checkbox-${Math.random().toString(36).substring(2, 9)}`;

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(formStyles),
		unsafeCSS(checkboxStyles),
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
			"fr-checkbox-group--sm": this.small,
			"fr-checkbox-group--error": this.state === "error",
			"fr-checkbox-group--valid": this.state === "valid",
		};

		const messageClasses = {
			"fr-message": true,
			"fr-message--error": this.state === "error",
			"fr-message--valid": this.state === "valid",
		};

		const describedBy = [
			this.message ? `${this.checkboxId}-message` : undefined,
		]
			.filter(Boolean)
			.join(" ");

		return html`
            <div class=${classMap(groupClasses)}>
                <input
                    name=${ifDefined(this.name || undefined)}
                    value=${ifDefined(this.value || undefined)}
                    id=${this.checkboxId}
                    type="checkbox"
                    ?checked=${this.checked}
                    ?disabled=${this.disabled}
                    aria-describedby=${ifDefined(describedBy || undefined)}
                    @change=${this._handleChange}
                >
                <label class="fr-label" for=${this.checkboxId}>
                    ${this.label}
                    ${this.hint ? html`<span class="fr-hint-text">${this.hint}</span>` : nothing}
                </label>
                <div class="fr-messages-group" id="${this.checkboxId}-messages" aria-live="polite">
                    ${
											this.message
												? html`<p class=${classMap(messageClasses)} id="${this.checkboxId}-message">${this.message}</p>`
												: nothing
										}
                </div>
            </div>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-checkbox": DsfrCheckbox;
	}
}

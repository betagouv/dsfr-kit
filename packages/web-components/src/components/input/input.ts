import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import formStyles from "@gouvfr/dsfr/dist/component/form/form.min.css?inline";
import inputStyles from "@gouvfr/dsfr/dist/component/input/input.min.css?inline";
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
	placeholder = "";

	@property({ type: String })
	hint = "";

	@property({ type: String, reflect: true })
	state: "default" | "error" | "valid" = "default";

	@property({ type: String })
	message = "";

	@property({ type: Boolean, reflect: true })
	disabled = false;

	@property({ type: Boolean, reflect: true })
	textarea = false;

	@property({ type: String })
	icon = "";

	@property({ type: String })
	inputId = `input-${Math.random().toString(36).substring(2, 9)}`;

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(formStyles),
		unsafeCSS(inputStyles),
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
			"fr-input-group--error": this.state === "error",
			"fr-input-group--valid": this.state === "valid",
			"fr-input-group--disabled": this.disabled,
		};

		const inputClasses = {
			"fr-input": true,
			"fr-input--error": this.state === "error",
			"fr-input--valid": this.state === "valid",
		};

		const messageClasses = {
			"fr-message": true,
			"fr-message--error": this.state === "error",
			"fr-message--valid": this.state === "valid",
		};

		const describedBy = [
			this.hint ? `${this.inputId}-hint` : undefined,
			this.message ? `${this.inputId}-message` : undefined,
		]
			.filter(Boolean)
			.join(" ");

		const inputElement = this.textarea
			? html`
                <textarea
                    class=${classMap(inputClasses)}
                    id=${this.inputId}
                    name=${this.inputId}
                    ?disabled=${this.disabled}
                    placeholder=${ifDefined(this.placeholder || undefined)}
                    aria-describedby=${ifDefined(describedBy || undefined)}
                    .value=${this.value}
                    @change=${this._handleChange}
                    @input=${this._handleInput}
                ></textarea>
              `
			: html`
                <input
                    class=${classMap(inputClasses)}
                    id=${this.inputId}
                    name=${this.inputId}
                    type=${this.type}
                    ?disabled=${this.disabled}
                    placeholder=${ifDefined(this.placeholder || undefined)}
                    aria-describedby=${ifDefined(describedBy || undefined)}
                    .value=${this.value}
                    @change=${this._handleChange}
                    @input=${this._handleInput}
                />
              `;

		const wrappedInput = this.icon
			? html`
                <div class="fr-input-wrap ${this.icon}">
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
                <div class="fr-messages-group" id="${this.inputId}-messages" aria-live="polite">
                    ${
											this.message
												? html`<p class=${classMap(messageClasses)} id="${this.inputId}-message">${this.message}</p>`
												: nothing
										}
                </div>
            </div>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-input": DsfrInput;
	}
}

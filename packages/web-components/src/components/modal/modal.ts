import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import modalStyles from "@gouvfr/dsfr/dist/component/modal/modal.min.css?inline";
import buttonStyles from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Modal component
 */
@customElement("dsfr-modal")
export class DsfrModal extends LitElement {
	@property({ type: String })
	modalTitle = "";

	@property({ type: Boolean, reflect: true })
	open = false;

	@property({ type: String })
	size: "sm" | "md" | "lg" = "md";

	@property({ type: String })
	icon = "";

	@query("dialog")
	dialog!: HTMLDialogElement;

	@property({ type: String })
	modalId = `modal-${Math.random().toString(36).substring(2, 9)}`;

	static styles = [
		unsafeCSS(coreStyles),
		unsafeCSS(modalStyles),
		unsafeCSS(buttonStyles),
	];

	updated(changedProperties: Map<string, unknown>) {
		if (changedProperties.has("open")) {
			if (this.open) {
				this.dialog?.showModal();
			} else {
				this.dialog?.close();
			}
		}
	}

	private _handleClose() {
		this.open = false;
		this.dispatchEvent(
			new CustomEvent("dsfr-close", {
				bubbles: true,
				composed: true,
			}),
		);
	}

	private _handleDialogClose() {
		// Catch native close events (e.g. Escape key)
		if (this.open) {
			this.open = false;
			this.dispatchEvent(
				new CustomEvent("dsfr-close", {
					bubbles: true,
					composed: true,
				}),
			);
		}
	}

	private _handleBackdropClick(e: MouseEvent) {
		if (e.target === this.dialog) {
			this._handleClose();
		}
	}

	render() {
		const colClasses = {
			"fr-col-12": true,
			"fr-col-md-6": this.size === "sm",
			"fr-col-lg-4": this.size === "sm",
			"fr-col-md-8": this.size === "md",
			"fr-col-lg-6": this.size === "md",
			"fr-col-md-10": this.size === "lg",
			"fr-col-lg-8": this.size === "lg",
		};

		return html`
            <dialog
                id=${this.modalId}
                class="fr-modal"
                aria-labelledby=${`${this.modalId}-title`}
                @close=${this._handleDialogClose}
                @click=${this._handleBackdropClick}
            >
                <div class="fr-container fr-container--fluid fr-container-md">
                    <div class="fr-grid-row fr-grid-row--center">
                        <div class=${classMap(colClasses)}>
                            <div class="fr-modal__body">
                                <div class="fr-modal__header">
                                    <button
                                        class="fr-btn--close fr-btn"
                                        title="Fermer"
                                        @click=${this._handleClose}
                                    >
                                        Fermer
                                    </button>
                                </div>
                                <div class="fr-modal__content">
                                    <h1 id=${`${this.modalId}-title`} class="fr-modal__title">
                                        ${this.icon ? html`<span class="${this.icon} fr-icon--lg" aria-hidden="true"></span>` : nothing}
                                        ${this.modalTitle}
                                    </h1>
                                    <slot></slot>
                                </div>
                                <div class="fr-modal__footer">
                                    <slot name="footer"></slot>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"dsfr-modal": DsfrModal;
	}
}

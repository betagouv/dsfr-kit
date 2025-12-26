import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import buttonCss from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import modalCss from "@gouvfr/dsfr/dist/component/modal/modal.min.css?inline";
import { css, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { html, unsafeStatic } from "lit/static-html.js";

/**
 * @summary DSFR Modal component
 */
@customElement("dsfr-modal")
export class DsfrModal extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  titleMarkup = "h1";

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: String })
  icon = "";

  @property({ type: Boolean })
  top = false;

  @property({ type: Boolean })
  concealingBackdrop = true;

  @query("dialog")
  dialog!: HTMLDialogElement;

  @property({ type: String })
  modalId = `modal-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(modalCss),
    unsafeCSS(buttonCss),
    css`
      dialog[open] {
        display: flex !important;
      }
    `,
  ];

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("open")) {
      if (this.open) {
        if (!this.dialog.open) {
          this.dialog?.showModal();
          this.dialog.classList.add("fr-modal--opened");
        }
      } else {
        this.dialog?.close();
        this.dialog.classList.remove("fr-modal--opened");
      }
    }
  }

  private _handleClose() {
    this.open = false;
    this.dialog.classList.remove("fr-modal--opened");
    this.dispatchEvent(
      new CustomEvent("dsfr-close", {
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleDialogClose() {
    if (this.open) {
      this.open = false;
      this.dialog.classList.remove("fr-modal--opened");
      this.dispatchEvent(
        new CustomEvent("dsfr-close", {
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  private _handleBackdropClick(e: MouseEvent) {
    if (this.concealingBackdrop && e.target === this.dialog) {
      this._handleClose();
    }
  }

  render() {
    const modalClasses = {
      "fr-modal": true,
      "fr-modal--top": this.top,
    };

    const colClasses = {
      "fr-col-12": true,
      "fr-col-md-6": this.size === "sm",
      "fr-col-lg-4": this.size === "sm",
      "fr-col-md-8": this.size === "md",
      "fr-col-lg-6": this.size === "md",
      "fr-col-md-10": this.size === "lg",
      "fr-col-lg-8": this.size === "lg",
    };

    const iconName =
      this.icon && !this.icon.startsWith("fr-icon-")
        ? `fr-icon-${this.icon}`
        : this.icon;

    const titleMarkup = unsafeStatic(this.titleMarkup);

    return html`
      <dialog
        id=${this.modalId}
        class=${classMap(modalClasses)}
        aria-labelledby=${`${this.modalId}-title`}
        data-fr-concealing-backdrop=${this.concealingBackdrop}
        @close=${this._handleDialogClose}
        @click=${this._handleBackdropClick}
      >
        <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
            <div class=${classMap(colClasses)}>
              <div class="fr-modal__body">
                <div class="fr-modal__header">
                  <button class="fr-btn--close fr-btn" title="Fermer" @click=${this._handleClose}>Fermer</button>
                </div>
                <div class="fr-modal__content">
                  <${titleMarkup} id=${`${this.modalId}-title`} class="fr-modal__title">
                    ${this.icon ? html`<span class="${iconName} fr-icon--lg" aria-hidden="true"></span>` : nothing}
                    ${this.title}
                  </${titleMarkup}>
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

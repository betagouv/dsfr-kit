import stepperStyles from "@gouvfr/dsfr/dist/component/stepper/stepper.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";

import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * @summary DSFR Stepper component
 */
@customElement("dsfr-stepper")
export class DsfrStepper extends LitElement {
  @property({ type: Number })
  currentStep = 1;

  @property({ type: Number })
  steps = 1;

  @property({ type: String })
  currentTitle = "";

  @property({ type: String })
  nextTitle = "";

  static styles = [unsafeCSS(coreStyles), unsafeCSS(stepperStyles)];

  render() {
    return html`
            <div class="fr-stepper">
                <h2 class="fr-stepper__title">
                    <span class="fr-stepper__state">Étape ${this.currentStep} sur ${this.steps}</span>
                    ${this.currentTitle}
                </h2>
                <div
                    class="fr-stepper__steps"
                    data-fr-current-step="${this.currentStep}"
                    data-fr-steps="${this.steps}"
                ></div>
                ${
                  this.nextTitle
                    ? html`
                    <p class="fr-stepper__details">
                        <span class="fr-text--bold">Étape suivante&nbsp;:</span> ${this.nextTitle}
                    </p>
                `
                    : nothing
                }
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-stepper": DsfrStepper;
  }
}

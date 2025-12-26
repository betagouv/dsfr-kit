import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import stepperCss from "@gouvfr/dsfr/dist/component/stepper/stepper.min.css?inline";

import { LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { html, unsafeStatic } from "lit/static-html.js";

/**
 * @summary DSFR Stepper component
 */
@customElement("dsfr-stepper")
export class DsfrStepper extends LitElement {
  @property({ type: Number })
  currentStep = 1;

  @property({ type: Number })
  stepCount = 1;

  @property({ type: String })
  title = "";

  @property({ type: String })
  nextStep = "";

  @property({ type: String })
  markup = "h2";

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(stepperCss),
  ];

  render() {
    const tag = unsafeStatic(this.markup || "h2");

    return html`
      <div class="fr-stepper">
        <${tag} class="fr-stepper__title">
          ${this.title}
          <span class="fr-stepper__state">Étape ${this.currentStep} sur ${this.stepCount}</span>
        </${tag}>
        <div
          class="fr-stepper__steps"
          data-fr-current-step="${this.currentStep}"
          data-fr-steps="${this.stepCount}"
        ></div>
        ${
          this.nextStep
            ? html`
                <p class="fr-stepper__details">
                  <span class="fr-text--bold">Étape suivante&nbsp;:</span> ${this.nextStep}
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

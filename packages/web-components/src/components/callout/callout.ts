import calloutStyles from "@gouvfr/dsfr/dist/component/callout/callout.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, nothing, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Callout (Mise en avant) component
 */
@customElement("dsfr-callout")
export class DsfrCallout extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  icon = "";

  @property({ type: String, attribute: "button-label" })
  buttonLabel = "";

  @property({ type: String, attribute: "button-href" })
  buttonHref = "";

  @property({ type: String, attribute: "heading-level" })
  headingLevel = "h3";

  static styles = [unsafeCSS(coreStyles), unsafeCSS(calloutStyles)];

  render() {
    const classes = {
      "fr-callout": true,
      [`${this.icon}`]: !!this.icon,
    };

    const renderTitle = () => {
      if (!this.title) return nothing;
      // Using simple switch for heading level as per previous components
      switch (this.headingLevel) {
        case "h2":
          return html`<h2 class="fr-callout__title">${this.title}</h2>`;
        case "h4":
          return html`<h4 class="fr-callout__title">${this.title}</h4>`;
        case "h5":
          return html`<h5 class="fr-callout__title">${this.title}</h5>`;
        case "h6":
          return html`<h6 class="fr-callout__title">${this.title}</h6>`;
        default:
          return html`<h3 class="fr-callout__title">${this.title}</h3>`;
      }
    };

    return html`
            <div class=${classMap(classes)}>
                ${renderTitle()}
                <p class="fr-callout__text">
                    <slot></slot>
                </p>
                ${
                  this.buttonLabel
                    ? html`<button class="fr-btn" @click=${this._handleButtonClick}>${this.buttonLabel}</button>`
                    : // Note: If buttonHref is provided, it should likely be an anchor styled as a button or we use logic.
                      // DSFR docs show <button> in example, but usually "inciter à l'action" implies a link or action.
                      // If href provided, use <a> with fr-btn class?
                      // Let's support both.
                      nothing
                }
            </div>
        `;
  }

  private _handleButtonClick() {
    if (this.buttonHref) {
      window.location.href = this.buttonHref;
    } else {
      this.dispatchEvent(
        new CustomEvent("dsfr-click", { bubbles: true, composed: true }),
      );
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-callout": DsfrCallout;
  }
}

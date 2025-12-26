import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import buttonCss from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "tertiary-no-outline";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * @summary DSFR Button component
 */
@customElement("dsfr-button")
export class DsfrButton extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: Number })
  kind: 1 | 2 | 3 | 4 = 1;

  @property({ type: String })
  size: ButtonSize = "md";

  @property({ type: String })
  icon = "";

  @property({ type: String, attribute: "icon-place" })
  iconPlace: "left" | "right" | undefined = undefined;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  markup: "button" | "a" | "input" = "button";

  @property({ type: String })
  type: "button" | "submit" | "reset" = "button";

  @property({ type: String })
  href = "";

  @property({ type: String })
  target: "_self" | "_blank" = "_self";

  @property({ type: String })
  title = "";

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(buttonCss),
  ];

  render() {
    const classes = {
      "fr-btn": true,
      "fr-btn--secondary": this.kind === 2,
      "fr-btn--tertiary": this.kind === 3,
      "fr-btn--tertiary-no-outline": this.kind === 4,
      [`fr-btn--${this.size}`]: this.size !== "md",
      [`fr-icon-${this.icon}`]: !!this.icon,
      "fr-btn--icon-left": !!this.icon && this.iconPlace === "left",
      "fr-btn--icon-right": !!this.icon && this.iconPlace === "right",
    };

    const content = html`${this.label}<slot></slot>`;

    if (this.markup === "a") {
      return html`
        <a
          href=${this.href}
          target=${this.target}
          class=${classMap(classes)}
          title=${this.title || this.label}
          ?disabled=${this.disabled}
        >
          ${content}
        </a>
      `;
    }

    if (this.markup === "input") {
      return html`
        <input
          type=${this.type}
          class=${classMap(classes)}
          .value=${this.label}
          ?disabled=${this.disabled}
          title=${this.title || this.label}
        />
      `;
    }

    return html`
      <button
        type=${this.type}
        class=${classMap(classes)}
        ?disabled=${this.disabled}
        title=${this.title || this.label || (this.icon ? "Bouton" : "")}
      >
        ${content}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-button": DsfrButton;
  }
}

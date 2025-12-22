import {
  coreStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import tagCss from "@gouvfr/dsfr/dist/component/tag/tag.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Tag component
 */
@customElement("dsfr-tag")
export class DsfrTag extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  href = "";

  @property({ type: String })
  target: "_self" | "_blank" = "_self";

  @property({ type: String })
  size: "sm" | "md" = "md";

  @property({ type: String })
  icon = "";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  type: "default" | "clickable" | "pressable" | "dismissible" = "default";

  @property({ type: Boolean })
  pressed = false;

  @property({ type: String })
  accent: string | null = null;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    unsafeCSS(tagCss),
  ];

  render() {
    const classes = {
      "fr-tag": true,
      "fr-tag--sm": this.size === "sm",
      "fr-tag--dismiss": this.type === "dismissible",
      [`fr-tag--${this.accent}`]: !!this.accent,
      [`fr-icon-${this.icon}`]: !!this.icon,
      "fr-tag--icon-left": !!this.icon,
    };

    if (this.type === "clickable") {
      const hrefValue = this.disabled ? undefined : this.href;
      return html`
        <a
          href=${ifDefined(hrefValue)}
          target=${this.target}
          class=${classMap(classes)}
          aria-disabled=${ifDefined(this.disabled ? "true" : undefined)}
          role=${ifDefined(this.disabled ? "link" : undefined)}
        >
          ${this.label}
        </a>
      `;
    }

    if (this.type === "pressable" || this.type === "dismissible") {
      return html`
        <button
          type="button"
          class=${classMap(classes)}
          ?disabled=${this.disabled}
          aria-pressed=${ifDefined(this.type === "pressable" ? (this.pressed ? "true" : "false") : undefined)}
          aria-label=${ifDefined(this.type === "dismissible" ? `Retirer ${this.label}` : undefined)}
        >
          ${this.label}
        </button>
      `;
    }

    return html`
      <p class=${classMap(classes)}>
        ${this.label}
      </p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-tag": DsfrTag;
  }
}

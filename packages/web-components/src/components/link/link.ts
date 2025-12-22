import {
  coreStyles,
  iconsStyles,
  linkStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import { html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Link component
 */
@customElement("dsfr-link")
export class DsfrLink extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  href = "";

  @property({ type: String })
  target: "_self" | "_blank" = "_self";

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: String })
  icon = "";

  @property({ type: String, attribute: "icon-place" })
  iconPlace: "left" | "right" | undefined = undefined;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  download = false;

  @property({ type: String })
  detail = "";

  @property({ type: String })
  markup: "a" | "button" = "a";

  @property({ type: String })
  assess: string | boolean | undefined = undefined;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    linkStyles,
  ];

  render() {
    const classes = {
      "fr-link": true,
      [`fr-link--${this.size}`]: this.size !== "md",
      "fr-link--download": this.download,
      [`fr-icon-${this.icon}`]: !!this.icon,
      "fr-link--icon-left": !!this.icon && this.iconPlace === "left",
      "fr-link--icon-right": !!this.icon && this.iconPlace === "right",
    };

    const hrefValue = this.disabled ? undefined : this.href;
    const isExternal = this.target === "_blank";
    const relValue = isExternal ? "noopener external" : undefined;

    const labelContent = html`
      ${this.label}
      ${this.detail ? html`<span class="fr-link__detail">${this.detail}</span>` : nothing}
    `;

    if (this.markup === "button") {
      return html`
        <button
          class=${classMap(classes)}
          ?disabled=${this.disabled}
          title=${this.label}
        >
          ${labelContent}
        </button>
      `;
    }

    return html`
      <a
        href=${ifDefined(hrefValue)}
        target=${this.target}
        rel=${ifDefined(relValue)}
        class=${classMap(classes)}
        ?download=${this.download}
        aria-disabled=${ifDefined(this.disabled ? "true" : undefined)}
        role=${ifDefined(this.disabled ? "link" : undefined)}
        data-fr-assess-file=${ifDefined(typeof this.assess === "string" ? this.assess : this.assess ? "" : undefined)}
      >
        ${labelContent}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-link": DsfrLink;
  }
}

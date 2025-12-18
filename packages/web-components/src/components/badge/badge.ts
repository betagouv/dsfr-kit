import badgeStyles from "@gouvfr/dsfr/dist/component/badge/badge.min.css?inline";
import iconStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("dsfr-badge")
export class DsfrBadge extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  size: "sm" | "md" = "md";

  @property({ type: String })
  type: "success" | "error" | "info" | "warning" | "new" | null = null;

  @property({ type: String })
  accent: string | null = null;

  @property({ type: String })
  icon: string | null = null;

  @property({ type: Boolean, attribute: "no-icon" })
  noIcon = false;

  @property({ type: Boolean })
  ellipsis = false;

  render() {
    const classes = {
      "fr-badge": true,
      "fr-badge--sm": this.size === "sm",
      [`fr-badge--${this.type}`]: !!this.type,
      [`fr-badge--${this.accent}`]: !this.type && !!this.accent,
      "fr-badge--no-icon": this.noIcon,
      "fr-badge--icon-left": !!this.icon && !this.noIcon,
      [`fr-icon-${this.icon}`]: !!this.icon && !this.noIcon,
    };

    const labelContent = this.ellipsis
      ? html`<span class="fr-ellipsis">${this.label || html`<slot></slot>`}</span>`
      : html`<slot>${this.label}</slot>`;

    return html`
      <style>
        ${badgeStyles}
        ${iconStyles}
      </style>
      <p class="${classMap(classes)}">${labelContent}</p>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-badge": DsfrBadge;
  }
}

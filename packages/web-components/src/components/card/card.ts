import cardStyles from "@gouvfr/dsfr/dist/component/card/card.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import schemeStyles from "@gouvfr/dsfr/dist/scheme/scheme.min.css?inline";
import iconsStyles from "@gouvfr/dsfr/dist/utility/icons/icons.min.css?inline";
import utilityStyles from "@gouvfr/dsfr/dist/utility/utility.min.css?inline";
import { html, LitElement, nothing, type TemplateResult, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Card component
 *
 * @slot image - content for the card header (image), if not using imgSrc
 * @slot badge - badges to display in the card content start area
 * @slot tag - tags to display in the card content start area
 * @slot detail - details to display in the card content start area
 * @slot description - description text, if not using description prop
 * @slot footer - call to action buttons or links
 * @slot end - content for the end area of content
 */
@customElement("dsfr-card")
export class DsfrCard extends LitElement {
  @property({ type: String })
  title = "";

  @property({ type: String })
  href = "#";

  @property({ type: Boolean, attribute: "no-link" })
  noLink = false;

  @property({ type: String })
  description = "";

  @property({ type: String, attribute: "img-src" })
  imgSrc = "";

  @property({ type: String, attribute: "img-alt" })
  imgAlt = "";

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: String })
  horizontal: "tier" | "half" | boolean = false;

  @property({ type: Boolean })
  download = false;

  @property({ type: String })
  icon = "";

  @property({ type: Boolean, attribute: "no-icon" })
  noIcon = false;

  @property({ type: Boolean })
  enlarge = true;

  @property({ type: Array })
  variations: ("grey" | "no-border" | "no-background" | "shadow")[] = [];

  @property({ type: String, attribute: "heading-level" })
  headingLevel: "h2" | "h3" | "h4" | "h5" | "h6" = "h3";

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(schemeStyles),
    unsafeCSS(utilityStyles),
    unsafeCSS(iconsStyles),
    unsafeCSS(cardStyles),
  ];

  private renderHeading(): TemplateResult {
    const hasLink = !this.noLink && !!this.href;
    const content = hasLink
      ? html`<a href=${this.href}>${this.title}</a>`
      : html`${this.title}`;

    switch (this.headingLevel) {
      case "h2":
        return html`<h2 class="fr-card__title">${content}</h2>`;
      case "h4":
        return html`<h4 class="fr-card__title">${content}</h4>`;
      case "h5":
        return html`<h5 class="fr-card__title">${content}</h5>`;
      case "h6":
        return html`<h6 class="fr-card__title">${content}</h6>`;
      default:
        return html`<h3 class="fr-card__title">${content}</h3>`;
    }
  }

  render() {
    const classes = {
      "fr-card": true,
      "fr-card--horizontal":
        this.horizontal === true || typeof this.horizontal === "string",
      "fr-card--horizontal-tier": this.horizontal === "tier",
      "fr-card--horizontal-half": this.horizontal === "half",
      [`fr-card--${this.size}`]: this.size !== "md",
      "fr-card--download": this.download,
      "fr-card--no-icon": this.noIcon,
      "fr-enlarge-link": this.enlarge && !this.noLink,
      [`fr-icon-${this.icon}`]: !!this.icon,
    };

    if (this.variations) {
      for (const variation of this.variations) {
        classes[`fr-card--${variation}`] = true;
      }
    }

    return html`
      <div class=${classMap(classes)}>
        <div class="fr-card__body">
          <div class="fr-card__content">
            ${this.renderHeading()}
            ${
              this.description || this.hasSlot("description")
                ? html`<p class="fr-card__desc">${this.description || html`<slot name="description"></slot>`}</p>`
                : nothing
            }
            <div class="fr-card__start">
              <slot name="badge"></slot>
              <slot name="tag"></slot>
              <slot name="detail-start"></slot>
            </div>
            <div class="fr-card__end">
              <slot name="detail-end"></slot>
            </div>
          </div>
          <div class="fr-card__footer">
            <slot name="footer"></slot>
          </div>
        </div>
        <div class="fr-card__header">
          <slot name="header">
            ${
              this.imgSrc
                ? html`
                <div class="fr-card__img">
                  <img src=${this.imgSrc} class="fr-responsive-img" alt=${this.imgAlt} />
                </div>`
                : nothing
            }
          </slot>
        </div>
      </div>
    `;
  }

  private hasSlot(name: string) {
    return Array.from(this.children).some((child) => child.slot === name);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-card": DsfrCard;
  }
}

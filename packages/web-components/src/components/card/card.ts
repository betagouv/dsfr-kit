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

  @property({ type: Boolean, attribute: "has-description" })
  hasDescription = false;

  @property({ type: String })
  description = "";

  @property({ type: String, attribute: "img-src" })
  imgSrc = "";

  @property({ type: String, attribute: "img-alt" })
  imgAlt = "";

  @property({ type: Boolean, attribute: "has-detail-start" })
  hasDetailStart = false;

  @property({ type: String, attribute: "detail" })
  detail = "";

  @property({ type: String, attribute: "detail-icon" })
  detailIcon = "";

  @property({ type: Boolean, attribute: "has-detail-end" })
  hasDetailEnd = false;

  @property({ type: String, attribute: "end-detail" })
  endDetail = "";

  @property({ type: String, attribute: "end-detail-icon" })
  endDetailIcon = "";

  @property({ type: Boolean, attribute: "has-badge" })
  hasBadge = false;

  @property({ type: Boolean, attribute: "has-tag" })
  hasTag = false;

  @property({ type: String, attribute: "heading-level" })
  headingLevel: "h2" | "h3" | "h4" | "h5" | "h6" = "h3";

  @property({ type: Boolean, reflect: true })
  horizontal = false;

  @property({ type: String })
  size: "sm" | "md" | "lg" = "md";

  @property({ type: Boolean, attribute: "no-icon" })
  noIcon = false;

  @property({ type: Boolean, attribute: "enlarge-link" })
  enlargeLink = true;

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(schemeStyles),
    unsafeCSS(utilityStyles),
    unsafeCSS(iconsStyles),
    unsafeCSS(cardStyles),
  ];

  private renderHeading(): TemplateResult {
    const content = html`<a href=${this.href}>${this.title}</a>`;
    switch (this.headingLevel) {
      case "h2":
        return html`<h2 class="fr-card__title">${content}</h2>`;
      case "h3":
        return html`<h3 class="fr-card__title">${content}</h3>`;
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
      "fr-card--horizontal": this.horizontal,
      [`fr-card--${this.size}`]: this.size !== "md",
      "fr-card--no-icon": this.noIcon,
      "fr-enlarge-link": this.enlargeLink,
    };

    // "Start" area contains badges, tags, and start-detail.
    const showStart = this.hasBadge || this.hasTag || this.hasDetailStart;

    return html`
            <div class=${classMap(classes)}>
                <div class="fr-card__body">
                    <div class="fr-card__content">
                        ${this.renderHeading()}

                        ${
                          this.hasDescription
                            ? html`
                            <p class="fr-card__desc">
                                ${this.description ? this.description : html`<slot name="description"></slot>`}
                            </p>`
                            : nothing
                        }

                        ${
                          showStart
                            ? html`
                            <div class="fr-card__start">
                                ${this.hasBadge ? html`<slot name="badge"></slot>` : nothing}
                                ${this.hasTag ? html`<slot name="tag"></slot>` : nothing}
                                ${
                                  this.hasDetailStart
                                    ? html`
                                    <slot name="detail">
                                        <p class="fr-card__detail ${this.detailIcon}">${this.detail}</p>
                                    </slot>`
                                    : nothing
                                }
                            </div>`
                            : nothing
                        }

                        ${
                          this.hasDetailEnd
                            ? html`
                            <div class="fr-card__end">
                                <slot name="end">
                                    <p class="fr-card__detail ${this.endDetailIcon}">${this.endDetail}</p>
                                </slot>
                            </div>`
                            : nothing
                        }
                    </div>
                    <div class="fr-card__footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
                <div class="fr-card__header">
                    <slot name="image">
                        ${
                          this.imgSrc
                            ? html`
                            <div class="fr-card__img">
                                <img class="fr-responsive-img" src=${this.imgSrc} alt=${this.imgAlt} />
                            </div>`
                            : nothing
                        }
                    </slot>
                </div>
            </div>
        `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-card": DsfrCard;
  }
}

import {
  coreStyles,
  formStyles,
  iconsStyles,
  schemeStyles,
  utilityStyles,
} from "@dsfr-kit/styles";
import buttonCss from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import inputCss from "@gouvfr/dsfr/dist/component/input/input.min.css?inline";
import searchCss from "@gouvfr/dsfr/dist/component/search/search.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Search Bar component
 */
@customElement("dsfr-search")
export class DsfrSearch extends LitElement {
  @property({ type: String })
  inputLabel = "Rechercher";

  @property({ type: String })
  inputPlaceholder = "Rechercher";

  @property({ type: String })
  value = "";

  @property({ type: String })
  buttonLabel = "Rechercher";

  @property({ type: String })
  buttonTitle = "Rechercher";

  @property({ type: String })
  size: "md" | "lg" = "md";

  @property({ type: String })
  inputId = `search-input-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    formStyles,
    unsafeCSS(buttonCss),
    unsafeCSS(inputCss),
    unsafeCSS(searchCss),
  ];

  private _handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
  }

  private _handleSearch() {
    this.dispatchEvent(
      new CustomEvent("dsfr-search", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      this._handleSearch();
    }
  }

  render() {
    const barClasses = {
      "fr-search-bar": true,
      "fr-search-bar--lg": this.size === "lg",
    };

    return html`
      <div class=${classMap(barClasses)} id=${ifDefined(this.id)} role="search">
        <label class="fr-label" for=${this.inputId}>
          ${this.inputLabel}
        </label>
        <input
          class="fr-input"
          id=${this.inputId}
          type="search"
          placeholder=${this.inputPlaceholder}
          .value=${this.value}
          @input=${this._handleChange}
          @keydown=${this._handleKeyDown}
        />
        <button class="fr-btn" title=${this.buttonTitle} @click=${this._handleSearch}>
          ${this.buttonLabel}
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-search": DsfrSearch;
  }
}

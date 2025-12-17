import buttonStyles from "@gouvfr/dsfr/dist/component/button/button.min.css?inline";
import formStyles from "@gouvfr/dsfr/dist/component/form/form.min.css?inline";
import inputStyles from "@gouvfr/dsfr/dist/component/input/input.min.css?inline";
import searchStyles from "@gouvfr/dsfr/dist/component/search/search.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import { html, LitElement, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @summary DSFR Search Bar component
 */
@customElement("dsfr-search")
export class DsfrSearch extends LitElement {
  @property({ type: String })
  label = "Rechercher";

  @property({ type: String })
  placeholder = "Rechercher";

  @property({ type: String })
  value = "";

  @property({ type: String })
  buttonLabel = "Rechercher";

  @property({ type: Boolean, reflect: true })
  large = false;

  @property({ type: String })
  searchId = `search-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(formStyles),
    unsafeCSS(buttonStyles),
    unsafeCSS(inputStyles),
    unsafeCSS(searchStyles),
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
      "fr-search-bar--lg": this.large,
    };

    return html`
            <div class=${classMap(barClasses)} role="search">
                <label class="fr-label" for=${this.searchId}>
                    ${this.label}
                </label>
                <input
                    class="fr-input"
                    id=${this.searchId}
                    type="search"
                    placeholder=${this.placeholder}
                    .value=${this.value}
                    @input=${this._handleChange}
                    @keydown=${this._handleKeyDown}
                >
                <button
                    class="fr-btn"
                    title=${this.buttonLabel}
                    @click=${this._handleSearch}
                >
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

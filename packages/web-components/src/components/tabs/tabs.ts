import tabStyles from "@gouvfr/dsfr/dist/component/tab/tab.min.css?inline";
import coreStyles from "@gouvfr/dsfr/dist/core/core.min.css?inline";
import utilityStyles from "@gouvfr/dsfr/dist/utility/utility.min.css?inline"; // For icons
import { html, LitElement, unsafeCSS } from "lit";
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @summary DSFR Tab Item Component
 */
@customElement("dsfr-tab")
export class DsfrTab extends LitElement {
  @property({ type: String })
  label = "";

  @property({ type: String })
  icon = "";

  @property({ type: Boolean, reflect: true })
  selected = false;

  @property({ type: String })
  panelId = `tabpanel-${Math.random().toString(36).substring(2, 9)}`;

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(tabStyles),
    unsafeCSS(utilityStyles),
  ];

  render() {
    const classes = {
      "fr-tabs__panel": true,
      "fr-tabs__panel--selected": this.selected,
    };

    return html`
            <div
                id=${this.panelId}
                class=${classMap(classes)}
                role="tabpanel"
                aria-labelledby=${`tab-${this.panelId}`}
                tabindex="0"
            >
                <slot></slot>
            </div>
        `;
  }
}

/**
 * @summary DSFR Tabs Container Component
 */
@customElement("dsfr-tabs")
export class DsfrTabs extends LitElement {
  @property({ type: String })
  label = "Onglets"; // aria-label for tablist

  @state()
  private _tabs: DsfrTab[] = [];

  @state()
  private _selectedIndex = 0;

  @queryAssignedElements()
  private _slottedTabs!: DsfrTab[];

  static styles = [
    unsafeCSS(coreStyles),
    unsafeCSS(tabStyles),
    unsafeCSS(utilityStyles),
  ];

  private _handleSlotChange() {
    this._tabs = [...this._slottedTabs];
    this._updateSelection();
  }

  private _selectTab(index: number) {
    if (index < 0 || index >= this._tabs.length) return;
    this._selectedIndex = index;
    this._updateSelection();
  }

  private _updateSelection() {
    this._tabs.forEach((tab, index) => {
      tab.selected = index === this._selectedIndex;
    });
    this.requestUpdate();
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowRight") {
      const nextIndex = (this._selectedIndex + 1) % this._tabs.length;
      this._selectTab(nextIndex);
      this._focusTab(nextIndex);
    } else if (e.key === "ArrowLeft") {
      const prevIndex =
        (this._selectedIndex - 1 + this._tabs.length) % this._tabs.length;
      this._selectTab(prevIndex);
      this._focusTab(prevIndex);
    }
  }

  private _focusTab(index: number) {
    const button = this.shadowRoot?.getElementById(
      `tab-${this._tabs[index].panelId}`,
    );
    button?.focus();
  }

  render() {
    return html`
      <div class="fr-tabs">
        <ul class="fr-tabs__list" role="tablist" aria-label=${ifDefined(this.label || undefined)} @keydown=${this._handleKeyDown}>
          ${this._tabs.map((tab, index) => {
            const isSelected = index === this._selectedIndex;
            const iconClass =
              tab.icon && !tab.icon.startsWith("fr-icon-")
                ? `fr-icon-${tab.icon}`
                : tab.icon;
            const btnClasses = {
              "fr-tabs__tab": true,
              "fr-tabs__tab--icon-left": !!tab.icon,
              [iconClass]: !!tab.icon,
            };

            return html`
              <li role="presentation">
                <button
                  id=${`tab-${tab.panelId}`}
                  class=${classMap(btnClasses)}
                  tabindex=${isSelected ? "0" : "-1"}
                  role="tab"
                  aria-selected=${isSelected}
                  aria-controls=${tab.panelId}
                  @click=${() => this._selectTab(index)}
                  type="button"
                >
                  ${tab.label}
                </button>
              </li>
            `;
          })}
        </ul>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dsfr-tabs": DsfrTabs;
    "dsfr-tab": DsfrTab;
  }
}

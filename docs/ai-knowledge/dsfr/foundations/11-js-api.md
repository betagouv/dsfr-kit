# DSFR JavaScript API

The DSFR provides a JavaScript layer to manage interactivity for components (modals, navigations, tabs, etc.).

## Initialization
The API is initialized automatically when `dsfr.module.min.js` is loaded. It adds `data-fr-js="true"` to the root HTML element.

### Configuration
Configure the API via `window.dsfr` **before** loading the script.

```html
<script>
  window.dsfr = {
    verbose: false, // Debug logs
    mode: 'auto',   // Execution mode
    production: false // Hide logs in production
  };
</script>
```

### Modes (`window.dsfr.mode`)
- `'auto'` (Default): Automatic selection.
- `'manual'`: No auto-start. Requires `dsfr.start()`.
- `'runtime'`: Starts immediately.
- `'loaded'`: Starts after page load.
- `'vue'`, `'angular'`, `'react'`: Disables DOM manipulation by DSFR (equivalent to manual start currently).

## Global Methods
- `dsfr.start()`: Start the engine (create instances).
- `dsfr.stop()`: Stop the engine.
- `dsfr.inspector.tree()`: Log instance tree to console.
- `dsfr.inspector.state()`: Log state to console.

## Component API
Interact with specific component instances attached to DOM elements.

**Syntax**: `dsfr(element).componentName.method()`

### Common Actions
- **Disclosure** (Modals, Accordions, Tabs, Tooltips):
  - `.disclose()`: Open/Show.
  - `.conceal()`: Close/Hide.
  - `.focus()`: Move focus to element.

### Examples
```javascript
const myModal = document.getElementById("my-modal");
dsfr(myModal).modal.disclose(); // Open modal

const myTab = document.getElementById("my-tab-panel");
dsfr(myTab).tabPanel.disclose(); // Switch to this tab
```

### Component Properties
Access state directly:
- `.index`: Selected index (e.g., `dsfr(el).tabsGroup.index`).
- `.current`: Current active instance.
- `.members`: Array of child instances.
- `.length`: Number of children.

## Events
Listen for DSFR events on the element or document root.

```javascript
element.addEventListener('dsfr.disclose', (e) => {
  console.log('Opened', e);
});
```

### Event List
| Event | Trigger | Targets |
|---|---|---|
| `dsfr.ready` | JS loaded | `document` |
| `dsfr.start` / `dsfr.stop` | Engine status | `document` |
| `dsfr.disclose` | Element opened | Collapse, Modal, TabPanel, etc. |
| `dsfr.conceal` | Element closed | Collapse, Modal, TabPanel, etc. |
| `dsfr.click` | Interactive click | Buttons, Toggles, Tags |
| `dsfr.scheme` | Theme changed | `document` |

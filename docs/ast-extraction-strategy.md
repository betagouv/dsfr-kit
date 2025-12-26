# DSFR Accordion Analysis & AST Strategy

## 1. Component Architecture

The DSFR Accordion is constructed using a standard "HTML + SCSS + JS" separation, orchestrated by EJS templates and a central JS API.

### Structure (EJS)
- **Files**: `template/ejs/accordion.ejs`, `template/ejs/accordions-group.ejs`
- **Pattern**:
    - Defines an "Interface" via comments (e.g., `* accordion.id (string, required)`).
    - Uses EJS Logic (`<% ... %>`) to handle defaults and conditional class injection.
    - Uses EJS Output (`<%- ... %>`) to inject content and attributes.
- **Key States**:
    - `isExpanded`: Controls the `aria-expanded` attribute and the `.fr-collapse--expanded` class.
    - `id`: Links the button (`aria-controls`) to the content container (`id`).

### Styling (SCSS)
- **File**: `style/_module.scss`
- **Pattern**:
    - Relies heavily on **Mixins** from the DSFR Core (`src/module/...`).
    - Uses a namespacing function `#{ns(accordion)}` (resolves to `.fr-accordion`).
    - Defines state-based styles: `#{ns(collapse)}--expanded` controls visibility/padding.

### Behavior (JS)
- **Files**: `script/accordion/accordion.js`, `accordions-group.js`
- **Pattern**:
    - **Inheritance**: Extends `api.core.Instance` and `api.core.CollapsesGroup`.
    - **Logic**: The component files themselves are thin wrappers. The actual "Click -> Toggle" and "Group Exclusive" logic resides in the generic `api.core` classes.
    - **Registration**: Uses `api.internals.ns.selector` to bind JS classes to DOM elements based on CSS classes.

## 2. AST Extraction Strategy

To generate components for other frameworks (React, Vue, Lit), we need an intermediate **Abstract Syntax Tree (AST)** that represents the component's *intent* rather than its *implementation*.

### Abstract Representation (Proposed Schema)

We propose a "Component Interface Description" (CID) JSON structure:

```json
{
  "name": "Accordion",
  "props": [
    { "name": "id", "type": "string", "required": true, "doc": "Unique identifier" },
    { "name": "label", "type": "string", "required": true, "doc": "Button label" },
    { "name": "isExpanded", "type": "boolean", "default": false }
  ],
  "slots": [
    { "name": "default", "doc": "Content of the collapse" }
  ],
  "state": [
    { "name": "expanded", "type": "boolean", "default": "props.isExpanded" }
  ],
  "structure": {
    "tag": "section",
    "class": ["fr-accordion"],
    "children": [
      {
        "tag": "h3",
        "class": ["fr-accordion__title"],
        "children": [
          {
            "tag": "button",
            "class": ["fr-accordion__btn"],
            "events": { "click": "toggleExpanded" },
            "attrs": {
              "aria-expanded": "{state.expanded}",
              "aria-controls": "{props.id}"
            },
            "content": "{props.label}"
          }
        ]
      },
      {
        "tag": "div",
        "class": ["fr-collapse", "{state.expanded ? 'fr-collapse--expanded' : ''}"],
        "attrs": { "id": "{props.id}" },
        "children": [{ "slot": "default" }]
      }
    ]
  }
}
```

### Extraction Pipeline

#### 1. HTML/Template Extraction (The "Skeleton")
- **Input**: `accordion.ejs`
- **Method**:
    - **Comment Parsing**: Use a dedicated parser or the EJS library's internal tokenizer.
    - **EJS Parsing Libraries**:
        - **`ejs` internal API**: The core `ejs` package has an internal `Template.parseTemplateText()` function. The `ejs-lint` library accesses this via `rewire` to get a token stream.
        - **`@markuplint/ejs-parser`**: A dedicated EJS parser for the `markuplint` linting tool. Can be repurposed for structural analysis.
        - **`eslint-plugin-ejs`**: An ESLint processor that identifies and strips EJS markers, useful for pre-processing.
    - **Recommended Approach**:
        1.  Use `ejs-lint`'s technique (via `rewire`) to access the EJS token stream.
        2.  Mask EJS blocks with unique placeholders.
        3.  Parse the resulting "template HTML" with `rehype` (unified ecosystem).
        4.  Re-attach the masked EJS logic as custom AST nodes (`LogicNode`).
- **Output**: The `structure` and `props` sections of the AST.

#### 2. Pattern Matching for Behavior (The "Soul")
- **Input**: `accordion.js` / EJS Binding Analysis
- **Method**:
    - Since JS logic is inherited, **Variable-Class Analysis** is more effective than parsing `accordion.js`.
    - Detect pairs: If a boolean prop `isExpanded` toggles a class `fr-collapse--expanded`, infer a "State Toggle" behavior.
    - If `aria-expanded` is present, infer it corresponds to that state.
- **Output**: The `state` and `events` sections.

#### 3. Style Association (The "Skin")
- **Input**: `_module.scss`
- **Method**:
    - Use a SCSS Parser (`postcss-scss`).
    - Extract selectors.
    - Map AST nodes to SCSS selectors by matching class names.
    - *Preservation*: For the Abstract representation, we shouldn't inline styles. We should just map "Node X uses Class Y". The target framework generator can then decide to import the original CSS or use a utility class.

## 3. Ecosystem Comparison

To build this extraction tool, we evaluated three ecosystems:

### Node.js (Recommended)
- **Libraries**:
    - **Parsing**: `unified` (rehype/unified), `cheerio` (for simple querying), `postcss` (for SCSS), `babel-parser` (for extracting JS metadata).
    - **EJS**: `ejs` library itself can parse to a token stream (though internal API).
- **Pros**:
    - Native "home" of the source code (JS/EJS).
    - `unified` ecosystem is extremely powerful for AST transformations (HAST).
    - Huge selection of HTML/CSS parsers.
- **Cons**: Performance is interpreted (but sufficient for build-time analysis).

### Python
- **Libraries**: `BeautifulSoup4` (HTML), `cssutils` (CSS), `slimit` (JS).
- **Pros**: Great for quick scripting and data extraction.
- **Cons**:
    - `BeautifulSoup` operates on *rendered* HTML best; dealing with EJS templates requires messy regex pre-processing.
    - SCSS parsing support is weak compared to Node.
    - JS parsing is disjointed.

### Rust
- **Libraries**: `swc` (JS/CSS), `html5ever` (HTML).
- **Pros**: Unmatched performance and correctness. `swc` is the state-of-the-art for web transpilation.
- **Cons**:
    - Higher development complexity.
    - `html5ever` is spec-compliant for *HTML*, which might choke on EJS tags (`<% %>`) without significant customization.

## 4. Conclusion & Next Steps

**We recommend building the extractor in Node.js.**
The primary reason is the **Unified** ecosystem/specification (HAST/Rehype) which maps closely to our desired AST. Handling EJS partials and JS/SCSS tokenization is significantly easier where the tooling is first-class.

### Immediate Action Plan
1.  **Prototype EJS Parser (Node)**: Write a script using `rehype` that:
    -   Masks EJS tags.
    -   Parses HTML.
    -   Unmasks tags into custom AST nodes (`LogicNode`).
2.  **Schema Definition**: Formalize the JSON schema for the AST.
3.  **Generator Logic**: Write a `Node` script that takes the AST and outputs a basic React functional component as a proof-of-concept.

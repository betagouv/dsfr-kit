import { HTMLElement, parse } from "node-html-parser";
import type { ComponentProperty, ParsedComponent } from "./ejs-parser.js";
import { generateJsAst } from "./js-parser.js";
import type { SourceLocation } from "./source-locator.js";
import { findStyles } from "./style-resolver.js";

function toClassName(str: string): string {
  return "Dsfr" + str.charAt(0).toUpperCase() + str.slice(1);
}

function toLitType(type: string): string {
  switch (type) {
    case "boolean":
      return "Boolean";
    case "number":
      return "Number";
    case "array":
      return "Array";
    case "object":
      return "Object";
    default:
      return "String";
  }
}

function defaultValue(prop: ComponentProperty): string {
  if (prop.default) return prop.default;
  switch (prop.type) {
    case "boolean":
      return "false";
    case "number":
      return "0";
    case "array":
      return "[]";
    case "object":
      return "{}";
    default:
      return '""';
  }
}

// Function to recursively replace EJS vars in an AST node
function traverseAndReplace(node: any, variableName: string) {
  // Replace in text content
  if (node.nodeType === 3) {
    // Text node
    let text = node.rawText; // Use rawText to preserve everything
    // Replace <%- variableName.prop %> -> ${unsafeHTML(this.prop)}
    text = text.replace(
      new RegExp(`<%[-=]\\s*${variableName}\\.([\\w]+)\\s*%>`, "g"),
      "${unsafeHTML(this.$1)}",
    );
    // Replace <%= prop %> -> ${unsafeHTML(this.prop)}
    text = text.replace(
      /<%[-=]\s*([a-zA-Z0-9_]+)\s*%>/g,
      "${unsafeHTML(this.$1)}",
    );

    if (text !== node.rawText) {
      node.rawText = text;
    }
  }

  // Replace in attributes
  if (node instanceof HTMLElement) {
    const attrs = node.attributes;
    for (const key in attrs) {
      const val = attrs[key];
      // Check for <%- includeClasses(...) %> in the key itself if parsed weirdly (as seen in test-parser.js)
      // node-html-parser might parse <div class="..." <%- include... %>> as an attribute key "<%- include..."

      // Handle standard value replacement
      let newVal = val.replace(
        new RegExp(`<%[-=]\\s*${variableName}\\.([\\w]+)\\s*%>`, "g"),
        "${this.$1}",
      );
      newVal = newVal.replace(/<%[-=]\s*([a-zA-Z0-9_]+)\s*%>/g, "${this.$1}");

      if (newVal !== val) {
        node.setAttribute(key, newVal);
      }

      // Handle "weird" keys from EJS tags in attributes
      if (key.includes("<%")) {
        // This is likely an includeAttrs or includeClasses that was parsed as an attribute name
        if (key.includes("includeAttrs")) {
          node.removeAttribute(key);
          // We want to add ${this.attributes || ""} to the tag output.
          // node-html-parser doesn't make it easy to inject arbitrary strings into the tag opening.
          // But we can add a dummy attribute and replace it in the final string?
          // Or we simply handle it by replacing the whole key with a 'token' attribute?
          node.setAttribute("__LIT_ATTRIBUTES__", "");
        } else if (key.includes("includeClasses")) {
          // Often parsing: class="..." <%- includeClasses %>
          // It might end up as an attribute key.
          node.removeAttribute(key);
          // We want to merge it into class.
          // If class exists:
          const currentClass = node.getAttribute("class") || "";
          node.setAttribute("class", `${currentClass} \${this.classes || ""}`);
        }
      }

      // Also check the value for includeClasses if it ended up there
      if (typeof val === "string" && val.includes("includeClasses")) {
        // It's inside a value? Unlikely for includeClasses usually distinct.
      }
    }
  }

  for (const child of node.childNodes) {
    traverseAndReplace(child, variableName);
  }
}

export function generateLitComponent(
  source: SourceLocation,
  parsed: ParsedComponent,
): string {
  const className = toClassName(source.componentName);
  const tagName = `dsfr-${source.componentName}`;

  let props = parsed.properties
    .map((p) => {
      return `@property({ type: ${toLitType(p.type)} }) ${p.name} = ${defaultValue(p)};`;
    })
    .join("\n  ");

  if (!parsed.properties.find((p) => p.name === "prefix")) {
    props += '\n  @property({ type: String }) prefix = "fr";';
  }
  props += '\n  @property({ type: String }) dsfrClasses = "";';
  props += '\n  @property({ type: String }) dsfrAttributes = "";';

  try {
    const _jsAst = generateJsAst(parsed.template);
    // console.log('DEBUG: JS AST generated successfully', _jsAst.program.body.length);
  } catch (e) {
    console.warn("Warning: Failed to parse embedded EJS logic as JS AST:", e);
  }

  // Pre-process template logic to make it HTML-parser friendly
  // specific helpers: includeClasses, includeAttrs
  let processedTemplate = parsed.template;
  processedTemplate = processedTemplate.replace(
    /<%-\s*includeClasses\(([^)]+)\);?\s*%>/g,
    'data-ejs-include-classes="$1"',
  );
  processedTemplate = processedTemplate.replace(
    /<%-\s*includeAttrs\(([^)]+)\);?\s*%>/g,
    'data-ejs-include-attrs="$1"',
  );

  // Transform Control Flow (if/for/include) to Custom Tags
  // We use a stack to handle nesting, but simple regex replacement might be tricky for closing brace.
  // We iterate through all <% ... %> tags.

  const fragments: string[] = [];
  let lastIndex = 0;
  let stack: string[] = [];
  const tagRegex = /<%([-=])?([\s\S]*?)%>/g;
  let match;

  // Helper to resolve variables in expressions
  const propNames = parsed.properties.map((p) => p.name);
  const resolveVars = (expr: string) => {
    // 1. Replace variableName.prop -> this.prop
    // e.g. alert.dismissible -> this.dismissible
    const varNameRegex = new RegExp(
      `\\b${source.variableName}\\.([a-zA-Z0-9_]+)\\b`,
      "g",
    );
    let resolved = expr.replace(varNameRegex, (m, prop) => {
      // We assume it maps to a property.
      return `this.${prop}`;
    });

    // 2. Replace identifiers that match property names with this.prop
    // Ignore if preceded by . (dot) ' or " or `
    resolved = resolved.replace(/(?<![\.\'\"`])\b([a-zA-Z0-9_]+)\b/g, (m) => {
      if (propNames.includes(m)) return `this.${m}`;
      return m;
    });
    return resolved;
  };

  while ((match = tagRegex.exec(processedTemplate)) !== null) {
    // Add text before the tag
    fragments.push(processedTemplate.substring(lastIndex, match.index));
    lastIndex = tagRegex.lastIndex;

    const isOutput = match[1] === "-" || match[1] === "=";
    const content = match[2].trim();

    if (isOutput) {
      // Check for include
      if (content.startsWith("include")) {
        // <%- include(path, params) %>
        fragments.push(
          `<dsfr-ejs-include data-include="${content.replace(/"/g, "'")}"></dsfr-ejs-include>`,
        );
      } else {
        // Standard output variable, keep as is for traverseAndReplace to handle?
        fragments.push(match[0]);
      }
    } else {
      // Scriptlet
      if (content.match(/^if\s*\(.*\)\s*\{$/)) {
        // if (cond) {
        const cond = content.match(/^if\s*\((.*)\)\s*\{$/)![1];
        const resolvedCond = resolveVars(cond);
        fragments.push(
          `<dsfr-logic-if condition="${resolvedCond.replace(/"/g, "&quot;")}">`,
        );
        stack.push("if");
      } else if (content.match(/^for\s*\(.*\)\s*\{$/)) {
        // for (let x of y) {
        const loop = content.match(/^for\s*\((.*)\)\s*\{$/)![1];
        // Only resolve variables in the loop expression that need it?
        // for (let x of y) -> x is def, y is prop?
        // resolveVars will replace y with this.y if it matches prop.
        const resolvedLoop = resolveVars(loop);
        fragments.push(
          `<dsfr-logic-for loop="${resolvedLoop.replace(/"/g, "&quot;")}">`,
        );
        stack.push("for");
      } else if (content === "}") {
        const type = stack.pop();
        if (type === "if") fragments.push(`</dsfr-logic-if>`);
        else if (type === "for") fragments.push(`</dsfr-logic-for>`);
        else {
          // Closing something else? switch?
        }
      } else if (content.startsWith("switch")) {
        // Switch support is harder.
      } else {
        // Arbitrary JS.
      }
    }
  }
  fragments.push(processedTemplate.substring(lastIndex));
  processedTemplate = fragments.join("");

  const root = parse(processedTemplate);

  // Traverse and replace bindings
  traverseAndReplace(root, source.variableName);

  let extraLogic = "";
  // ... (existing heuristics)

  // Heuristic: Toggle Logic
  const hasExpanded = parsed.properties.find((p) => p.name === "isExpanded");
  const hasId = parsed.properties.find((p) => p.name === "id");

  if (hasExpanded) {
    // Queries in AST are safer!
    const trigger = root.querySelector("[aria-expanded]");
    if (trigger) {
      // It has check if the attribute value binds to isExpanded?
      // We already replaced variables.
      const attrVal = trigger.getAttribute("aria-expanded");
      if (
        attrVal &&
        (attrVal.includes("${this.isExpanded}") ||
          attrVal.includes(source.variableName + ".isExpanded"))
      ) {
        trigger.setAttribute("@click", "${this.toggle}");
        extraLogic += `
  toggle() {
    this.isExpanded = !this.isExpanded;
    this.dispatchEvent(new CustomEvent('dsfr-toggle', {
      detail: { isExpanded: this.isExpanded },
      bubbles: true,
      composed: true
    }));
  }
`;
      }
    }
  }

  // Serialize back to string
  let litTemplate = root.toString();

  // Post-processing Logic Tags
  // 1. IF
  litTemplate = litTemplate.replace(
    /<dsfr-logic-if condition="([^"]*)">/g,
    (match, cond) => {
      const unescaped = cond.replace(/&quot;/g, '"');
      return `\${${unescaped} ? html\``;
    },
  );
  litTemplate = litTemplate.replace(/<\/dsfr-logic-if>/g, "` : nothing }");

  // 2. FOR
  // We assume `let item of items` syntax
  litTemplate = litTemplate.replace(
    /<dsfr-logic-for loop="([^"]*)">/g,
    (match, loop) => {
      const unescaped = loop.replace(/&quot;/g, '"');
      // Try to parse "let x of y" or "const x of y"
      const loopMatch = unescaped.match(/(?:let|const|var)\s+(.+)\s+of\s+(.+)/);
      if (loopMatch) {
        const item = loopMatch[1];
        const iterable = loopMatch[2];
        return `\${${iterable} ? ${iterable}.map(${item} => html\``;
      }
      // Fallback or other loop types?
      // If C-style, map is hard.
      return `\${/* Unsupported Loop: ${unescaped} */ html\``;
    },
  );
  litTemplate = litTemplate.replace(/<\/dsfr-logic-for>/g, "`) : nothing }");

  // 3. Include
  litTemplate = litTemplate.replace(
    /<dsfr-ejs-include data-include="([^"]*)"><\/dsfr-ejs-include>/g,
    (match, includeStr) => {
      return `<!-- TODO: Include ${includeStr} -->`;
    },
  );

  // Post-processing
  // Replace markers with actual Lit bindings
  // Handle class merging more gracefully
  // If we have existing classes, we want to append.
  // The regex replace is tricky because node-html-parser might have parsed it as a separate attribute if it was outside the class string.
  // But if it was inside, we need to be careful.
  // Assuming best effort: replace the marker. If the marker is the entire attribute, it replaces it.
  // If we want to support class="existing <%- includeClasses %>", we need to see how node-html-parser handled it.
  // If it was parsed as class="existing" data-ejs-include-classes="...", we need to merge.

  // Strategy:
  // 1. Find elements with data-ejs-include-classes
  // 2. See if they have a class attribute
  // 3. Merge and remove data-ejs-include-classes

  // Let's do it via regex on the string for simplicity but robustness is limited.
  // Better: do it in traverser if possible. But processedTemplate had markers.

  // Actually, we can fix the replace logic:
  // If we match `data-ejs-include-classes="..."`, we should check if there is a preceding `class="`.

  // Current behavior: `data-ejs-include-classes` is a standalone attribute in the string output.
  // We will replace it with `class="${this.dsfrClasses || ""}"`.
  // If the element ALREADY had a class attribute, we now have two.
  // Lit/Browsers will likely use the first or second.
  // If the original was `class="fr-collapse" data-ejs-include-classes="..."`,
  // We get `class="fr-collapse" class="${this.dsfrClasses}"`.

  // FIX: We need to merge them.
  // Ideally, we iterate the AST again before stringifying?
  // Let's add a post-traversal step to merge attributes.

  // For now, let's use a regex that tries to merge if adjacent? No.

  // Let's just fix the specific bug: The generator is REPLACING valid classes effectively because
  // the usage of includeClasses in EJS might have been the ONLY way classes were added, OR
  // maybe the parser is separating them.

  // Re-reading dsfr-accordion.ts: <div class="${this.dsfrClasses || ""}" ...>
  // The original template probably had `class="fr-collapse"` AND the include.

  // Let's modify the regex to NOT simply replace the attribute key/value but try to merge.
  // Actually, a better fix in `lit-generator.ts` is to find elements with this attribute and merge in the AST.

  // But I can't easily do AST manipulation here easily without re-parsing or changing the logic flow significantly.
  // Let's try to be smart with regex:
  // convert `class="A" ... data-ejs-include-classes="B"` to `class="A ${this.dsfrClasses}" ...`

  litTemplate = litTemplate.replace(
    /class="([^"]*)"([^>]*)data-ejs-include-classes="[^"]*"/g,
    'class="$1 ${this.dsfrClasses || ""}"$2',
  );

  // Fallback for when there is NO class attribute preceding it
  litTemplate = litTemplate.replace(
    /data-ejs-include-classes="[^"]*"/g,
    'class="${this.dsfrClasses || ""}"',
  );

  // Heuristic: If we have an accordion/collapse, we need to inject the specific state classes
  // that DSFR's EJS usually does inside local variables.
  if (hasExpanded) {
    // 1. Handle explicit fr-collapse in literal class
    litTemplate = litTemplate.replace(
      /class="([^"]*fr-collapse[^"]*)"/g,
      'class="$1 ${this.isExpanded ? "fr-collapse--expanded" : ""}"',
    );
    // 2. Handle cases where it's injected via dsfrClasses (like accordion)
    if (source.componentName === "accordion") {
      litTemplate = litTemplate.replace(
        /class="\${this\.dsfrClasses \|\| ""}"/g,
        'class="${this.prefix}-collapse ${this.isExpanded ? this.prefix + "-collapse--expanded" : ""} ${this.dsfrClasses || ""}"',
      );
    }
  }

  if (source.componentName === "badge") {
    // Add size property if missing (it is missing in JSDoc)
    if (!parsed.properties.find((p) => p.name === "size")) {
      props += '\n  @property({ type: String }) size = "";';
    }

    // Add computed classes logic
    extraLogic += `
  get _classes() {
    const classes = [this.prefix + '-badge'];
    if (this.size === 'sm') classes.push(this.prefix + '-badge--sm');
    if (this.type) classes.push(this.prefix + '-badge--' + this.type);
    else if (this.accent) classes.push(this.prefix + '-badge--' + this.accent);

    if (this.icon === "false") {
        classes.push(this.prefix + '-badge--no-icon');
    } else if (this.icon) {
        classes.push(this.prefix + '-icon-' + this.icon);
        classes.push(this.prefix + '-badge--icon-left');
    }

    if (this.classes) classes.push(this.classes);
    if (this.dsfrClasses) classes.push(this.dsfrClasses);
    return classes.join(' ');
  }
`;
    // Replace class binding
    // The previous regex replacement for data-ejs-include-classes used "${this.dsfrClasses || ""}"
    // We need to target that specific output if it happened, OR target the data-ejs attribute if it hasn't been replaced yet?
    // Wait, the previous replacements happen BEFORE this block in my code above?
    // No, I am inserting this code at line 248 approx.
    // The previous replacement (lines 235-244) ALREADY ran.
    // So existing output is `class="... ${this.dsfrClasses || ""}"` or `class="${this.dsfrClasses || ""}"`.

    // We replace `${this.dsfrClasses || ""}` with `${this._classes}`.
    litTemplate = litTemplate.replace(
      /\$\{this\.dsfrClasses \|\| ""\}/g,
      "${this._classes}",
    );
  }

  // For attributes, we want to inject into the tag.
  // node-html-parser outputs attributes as key="value".
  // data-ejs-include-attrs="attributes" -> ${this.attributes || ""}
  // We can just regex replace the whole attribute output.
  litTemplate = litTemplate.replace(
    /data-ejs-include-attrs="[^"]*"/g,
    '${this.dsfrAttributes || ""}',
  );

  // Heuristic: If we have an ID for a target controlled by aria-controls
  if (hasId && source.componentName === "accordion") {
    // Escape the $ for the regex
    const pattern = /\$\{this\.dsfrAttributes \|\| ""\}/g;
    litTemplate = litTemplate.replace(
      pattern,
      'id="${this.id}" ${this.dsfrAttributes || ""}',
    );
  }

  // Cleanup literal ${this...} if they were escaped? No, we fixed that.

  // Cleanup empty EJS tags if any remain
  litTemplate = litTemplate.replace(/<%[^=-].*?%>/gs, "");

  const styles = findStyles(source);
  const styleImports = styles
    .map((s, i) => `import style${i} from '${s}';`)
    .join("\n");
  const componentStyles = styles
    .map((s, i) => `unsafeCSS(style${i})`)
    .join(",\n    ");

  return `
import { html, LitElement, unsafeCSS, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  coreStyles,
  schemeStyles,
  utilityStyles,
  iconsStyles,
  formStyles,
  linkStyles,
  logoStyles
} from '@dsfr-kit/styles';
${styleImports}

@customElement('${tagName}-gen')
export class ${className}Gen extends LitElement {
  static override styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
    formStyles,
    linkStyles,
    logoStyles,
    ${componentStyles}
  ];

  ${props}
${extraLogic}
  render() {
    return html\`
      ${litTemplate}
    \`;
  }
}
`;
}

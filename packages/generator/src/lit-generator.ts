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
    /<%-\s*includeClasses\(([^)]+)\)\s*%>/g,
    'data-ejs-include-classes="$1"',
  );
  processedTemplate = processedTemplate.replace(
    /<%-\s*includeAttrs\(([^)]+)\)[^%]*%>/g,
    'data-ejs-include-attrs="$1"',
  );

  const root = parse(processedTemplate);

  // Traverse and replace bindings
  traverseAndReplace(root, source.variableName);

  let extraLogic = "";

  // Heuristic: Toggle Logic
  const hasExpanded = parsed.properties.find((p) => p.name === "isExpanded");
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
  }
`;
      }
    }
  }

  // Serialize back to string
  let litTemplate = root.toString();

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
  // But we are working on the string representation from root.toString().

  // Let's do it via regex on the string for simplicity but robustness is limited.
  // Better: do it in traverser if possible. But processedTemplate had markers.

  // Regex approach for now to fixing the current bug:
  // If we see `class="...` and `data-ejs-include-classes="..."` on the same tag, it's hard to regex.
  // Let's try to do it in the DOM before serialization if possible?
  // traverseAndReplace runs before serialization.

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

  // Manual fix for accordion collapse state:
  // We need to add `fr-collapse--expanded` when isExpanded is true.
  // Heuristic: If we see `fr-collapse` in the class, we append the conditional class.
  if (hasExpanded) {
    litTemplate = litTemplate.replace(
      /class="([^"]*fr-collapse[^"]*)"/g,
      'class="$1 ${this.isExpanded ? "fr-collapse--expanded" : ""}"',
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
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { coreStyles, schemeStyles, utilityStyles, iconsStyles } from '@dsfr-kit/styles';
${styleImports}

@customElement('${tagName}')
export class ${className} extends LitElement {
  static override styles = [
    coreStyles,
    schemeStyles,
    utilityStyles,
    iconsStyles,
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

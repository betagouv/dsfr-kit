import type { ComponentProperty, ParsedComponent } from "./ejs-parser.js";
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

function convertTemplate(template: string, variableName: string): string {
  let processed = template;

  // Replace <%- variableName.prop %> with ${this.prop}
  // e.g. <%- accordion.label %> -> ${this.label}
  const varRegex = new RegExp(
    `<%[-=]\\s*${variableName}\\.([\\w]+)\\s*%>`,
    "g",
  );
  // biome-ignore lint/suspicious/noGlobalIsNan: This rule is not applicable here, it's a regex replacement.
  processed = processed.replace(varRegex, "${this.$1}");

  // Replace direct variables like <%= isExpanded %> if they match properties
  // We need to know the list of properties to be safe, but for now specific regex
  // Let's assume standalone variables that look like props are props
  // But wait, the parser found 'isExpanded' as 'accordion.isExpanded' in comments?
  // No, the comment said * accordion.isExpanded.
  // But the template uses <%= isExpanded %>.
  // So we need to handle standalone variable access too.

  // Regex for <%= var %> where var is NOT namespaced
  processed = processed.replace(
    /<%[-=]\s*([a-zA-Z0-9_]+)\s*%>/g,
    (match, varName) => {
      // If we had the props list we could verify
      return `\${this.${varName}}`;
    },
  );

  // Handle includeClasses and includeAttrs - simplified for prototype
  // <%- includeClasses(arr) %> -> class=${...} ??
  // For now, let's just strip them or replace with safe defaults to prevent runtime errors
  // parsing "call-like" strings is hard with regex.
  // Assumption: they are inside tag attributes.
  processed = processed.replace(
    /<%-\s*includeClasses\([^)]+\)\s*%>/g,
    'class=${this.classes || ""}',
  );
  processed = processed.replace(
    /<%-\s*includeAttrs\([^)]+\)[^%]*%>/g,
    '${this.attributes || ""}',
  );

  // Handle complex EJS tags (eval, if, etc)
  // For now, strip them or comment them?
  // Strip lines starting with <%
  processed = processed.replace(/<%[^=-].*?%>/gs, "");

  return processed;
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

  // Add prefix default if not present (it usually isn't in props list)
  if (!parsed.properties.find((p) => p.name === "prefix")) {
    props += '\n  @property({ type: String }) prefix = "fr";';
  }

  // Heuristics for Logic
  let litTemplate = convertTemplate(parsed.template, source.variableName);
  let extraLogic = "";

  // 1. Toggle Logic
  // If we have 'isExpanded' prop and 'aria-expanded', let's bin a toggle
  const hasExpanded = parsed.properties.find((p) => p.name === "isExpanded");
  if (hasExpanded) {
    // Look for element with aria-expanded="${this.isExpanded}"
    // And add @click=${this.toggle}
    if (litTemplate.includes('aria-expanded="${this.isExpanded}"')) {
      litTemplate = litTemplate.replace(
        'aria-expanded="${this.isExpanded}"',
        'aria-expanded="${this.isExpanded}" @click=${this.toggle}',
      );

      extraLogic += `
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
`;
    }
  }

  const styles = findStyles(source);
  const styleImports = styles
    .map((s, i) => `import style${i} from '${s}';`)
    .join("\n");
  const styleInjections = styles
    .map((s, i) => `\${unsafeCSS(style${i})}`)
    .join("\n        ");

  return `
import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
${styleImports}

@customElement('${tagName}')
export class ${className} extends LitElement {
  ${props}
${extraLogic}
  render() {
    return html\`
      <style>
        ${styleInjections}
      </style>
      ${litTemplate}
    \`;
  }
}
`;
}

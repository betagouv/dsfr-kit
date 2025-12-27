import type {
  ComponentInterfaceDescription,
  GeneratorPlugin,
  PropDefinition,
} from "@dsfr-kit/generator-core";

export class LitGeneratorPlugin implements GeneratorPlugin {
  name = "lit";

  generate(cid: ComponentInterfaceDescription): string {
    const className = `Dsfr${capitalize(cid.name)}`;
    const tagName = `dsfr-${cid.name}`;

    // 1. Generate Props
    const props = cid.props.map((p) => this.generateProp(p)).join("\n  ");

    // 3. Generate Template
    const template = this.renderNode(cid.structure, cid.name);

    return `
import { html, LitElement, unsafeCSS } from 'lit';
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
  ];

  /* Props from CID */
  ${props}

  /* Core Props */
  @property({ type: String }) prefix = "fr";
  @property({ type: String }) dsfrClasses = "";
  @property({ type: String }) dsfrAttributes = "";

  render() {
    return html\`
      ${template}
    \`;
  }
}
`;
  }

  private generateProp(prop: PropDefinition): string {
    const litType = this.toLitType(prop.type);
    const defaultVal = prop.default
      ? JSON.stringify(prop.default)
      : this.getDefault(prop.type);
    return `@property({ type: ${litType} }) ${prop.name} = ${defaultVal};`;
  }

  private toLitType(type: string): string {
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

  private getDefault(type: string): string {
    switch (type) {
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

  private replaceEjsVars(text: string, componentName: string): string {
    // Replace <%- accordion.label %> -> ${unsafeHTML(this.label)}
    // Replace <%= accordion.id %> -> ${this.id}

    let processed = text;

    // Handle variable interpolation
    // RegExp to match <%- componentName.prop %> or <%= componentName.prop %>
    processed = processed.replace(
      new RegExp(`<%[-=]\\s*${componentName}\\.([\\w]+)\\s*%>`, "g"),
      "${this.$1}", // simplistic replacement
    );
    // Also match direct access if any
    processed = processed.replace(
      /<%[-=]\s*([a-zA-Z0-9_]+)\s*%>/g,
      "${this.$1}",
    );

    // Handle EJS Logic blocks (stripping them for now or handling basics?)
    // <% if ... %> -> logic is hard to map 1:1 without AST analysis.
    // For now, we strip unknown EJS tags to avoid syntax errors in Lit output,
    // BUT we must preserve content inside if blocks if possible?
    // This is the hard part. The original generator didn't handle `if` blocks well unless manually tweaked.

    // Strip remaining tags
    // processed = processed.replace(/<%[^=-].*?%>/gs, ""); // Risky if content is inside

    return processed;
  }

  private renderNode(node: any, componentName: string): string {
    if (!node) return "";

    switch (node.type) {
      case "text": {
        // Strip raw EJS logic blocks that are not output directives
        // If it starts with <% but not <%= or <%-
        if (node.content.trim().match(/^<%[^=-]/)) {
          return "";
        }
        return this.replaceEjsVars(node.content, componentName);
      }

      case "element": {
        if (node.tag === "fragment") {
          return node.children
            ? node.children
                .map((c: any) => this.renderNode(c, componentName))
                .join("")
            : "";
        }

        const attrs = node.attributes
          ? Object.entries(node.attributes)
              .map(([k, v]) => {
                if (k.includes("includeClasses")) {
                  return `class="\${this.dsfrClasses || ''}"`;
                }
                if (k.includes("includeAttrs")) {
                  return `\${this.dsfrAttributes || ''}`;
                }
                return `${k}="${this.replaceEjsVars(String(v), componentName)}"`;
              })
              .join(" ")
          : "";

        const classes = node.classes ? `class="${node.classes.join(" ")}"` : "";
        const allAttrs = [classes, attrs].filter(Boolean).join(" ");

        const children = node.children
          ? node.children
              .map((c: any) => this.renderNode(c, componentName))
              .join("")
          : "";

        // Self-closing handling if needed, but standard HTML is fine
        return `<${node.tag} ${allAttrs}>${children}</${node.tag}>`;
      }

      case "conditional": {
        const condition = this.replaceEjsVars(node.condition, componentName);
        // We wrap the branches in html`` to allow Lit to render sequences
        const trueContent = node.trueBranch
          .map((c: any) => this.renderNode(c, componentName))
          .join("");

        const falseContent = node.falseBranch
          ? node.falseBranch
              .map((c: any) => this.renderNode(c, componentName))
              .join("")
          : "";

        // Use standard Lit conditional: condition ? html`...` : html`...`
        return `\${${condition} ? html\`${trueContent}\` : ${falseContent ? `html\`${falseContent}\`` : "null"}}`;
      }

      case "loop": {
        const items = this.replaceEjsVars(node.items, componentName);
        const variable = node.variable;
        const children = node.children
          .map((c: any) => this.renderNode(c, componentName))
          .join("");

        // items.map(variable => html`...`)
        return `\${${items}.map(${variable} => html\`${children}\`)}`;
      }

      default:
        return "";
    }
  }
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

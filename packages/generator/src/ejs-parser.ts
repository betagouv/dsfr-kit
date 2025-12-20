import fs from "node:fs";

export interface ComponentProperty {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description?: string;
}

export interface ParsedComponent {
  properties: ComponentProperty[];
  template: string;
}

export function parseEjs(filePath: string): ParsedComponent {
  const content = fs.readFileSync(filePath, "utf-8");
  const properties: ComponentProperty[] = [];

  // 1. Extract comments block (DSFR convention: <%# ... %> at start)
  const headerMatch = content.match(/^<%#([\s\S]+?)%>/);
  let template = content;

  if (headerMatch) {
    const headerContent = headerMatch[1];
    template = content.substring(headerMatch[0].length).trim();

    // 2. Parse variable definitions
    // Regex matches: * namespace.paramName (type, options) ...
    // Example: * accordion.id (string, required) : ...
    const paramRegex = /\*\s+[\w]+\.([\w]+)\s+\(([^)]+)\)/g;
    let match: RegExpExecArray | null;

    // biome-ignore lint/suspicious/noAssignInExpressions: standard regex loop
    while ((match = paramRegex.exec(headerContent)) !== null) {
      const name = match[1];
      const details = match[2].toLowerCase(); // e.g. "string, required"

      const type = details.includes("string")
        ? "string"
        : details.includes("boolean")
          ? "boolean"
          : details.includes("number")
            ? "number"
            : "any";

      const required = !details.includes("optional");

      properties.push({
        name,
        type,
        required,
        description: "", // TODO: extract description after ':'
      });
    }
  }

  return {
    properties,
    template,
  };
}

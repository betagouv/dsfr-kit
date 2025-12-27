import fs from "node:fs";
import { parse as parseComments } from "comment-parser";
import type { LogicNode, PropDefinition } from "../cid.js";
import { TreeSitterMapper } from "./tree-sitter-mapper.js";

export interface ParsedEjs {
  props: PropDefinition[];
  template: string;
  structure: LogicNode;
}

export function parseEjsSource(ejsPath: string): ParsedEjs {
  const content = fs.readFileSync(ejsPath, "utf-8");

  // Regex to find the first block comment, assuming it's the documentation.
  const commentBlockRegex = /<%#([\s\S]*?)%>|^\s*\/\*([\s\S]*?)\*\//;
  const match = commentBlockRegex.exec(content);

  const props: PropDefinition[] = [];

  if (match) {
    const rawComment = match[1] || match[2];
    const fakeJsDoc = `/**\n${rawComment}\n*/`;
    const parsed = parseComments(fakeJsDoc)[0];

    if (parsed && parsed.source) {
      for (const sourceLine of parsed.source) {
        const line = sourceLine.source;
        // Parse: * accordion.id (string, required) : description
        const lineRegex =
          /^\s*\*?\s*(?:-\s*)?([\w.]+)\s*\(([^)]+)\).*?:\s*(.*)$/;
        const lineMatch = lineRegex.exec(line);

        if (lineMatch) {
          const fullPropName = lineMatch[1];
          const propName = fullPropName.split(".").pop() || fullPropName;

          // details contains "string, required" or "boolean, optional"
          const details = lineMatch[2].toLowerCase();

          let type: PropDefinition["type"] = "string";
          if (details.includes("boolean")) type = "boolean";
          else if (details.includes("number")) type = "number";
          else if (details.includes("array")) type = "array";
          else if (details.includes("object")) type = "object";

          const required = !details.includes("optional");
          const desc = lineMatch[3];

          props.push({
            name: propName,
            type,
            required,
            description: desc || "",
          });
        }
      }
    }
  }

  // Use Tree Sitter for the template structure
  const mapper = new TreeSitterMapper(content);
  const structure = mapper.parse();

  // Convert structure to string template for legacy compatibility
  // OR: update ParsedEjs interface to support structure
  // For now, we keep 'template' as string but we really want logical structure in CID
  // But parseEjsSource return type is ParsedEjs which has 'template: string'.
  // We need to return the structure.

  return {
    props,
    template: content,
    structure,
  };
}

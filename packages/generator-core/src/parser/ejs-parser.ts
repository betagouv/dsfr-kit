import fs from "node:fs";
import { parse as parseComments } from "comment-parser";
import type { PropDefinition } from "../cid.js";

export interface ParsedEjs {
  props: PropDefinition[];
  template: string;
}

export function parseEjsSource(ejsPath: string): ParsedEjs {
  const content = fs.readFileSync(ejsPath, "utf-8");

  // Regex to find the first block comment, assuming it's the documentation.
  const commentBlockRegex = /<%#([\s\S]*?)%>|^\s*\/\*([\s\S]*?)\*\//;
  const match = commentBlockRegex.exec(content);

  const props: PropDefinition[] = [];
  let template = content;

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

    // Remove the comment block from template to get just the HTML
    template = content.replace(match[0], "").trim();
  }

  return {
    props,
    template,
  };
}

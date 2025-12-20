import fs from "node:fs";
import { parse as parseComments } from "comment-parser";

export interface ComponentProperty {
  name: string;
  type: string;
  required: boolean;
  description: string;
  default?: string;
}

export interface ParsedComponent {
  properties: ComponentProperty[];
  template: string;
}

export function parseEjs(ejsPath: string): ParsedComponent {
  const content = fs.readFileSync(ejsPath, "utf-8");

  // 1. Separate the "header" comment from the "template"
  // DSFR EJS files usually start with <%# or <% /* or just /*
  // Actually, looking at accordion.ejs (and typically), it starts with:
  // <%#
  //  * ...
  //  %>
  // OR standard JS comments inside <% %>

  // We need to extract the comment block.
  // Regex to find the first block comment, assuming it's the documentation.
  const commentBlockRegex = /<%#([\s\S]*?)%>|^\s*\/\*([\s\S]*?)\*\//;
  const match = commentBlockRegex.exec(content);

  const properties: ComponentProperty[] = [];
  let template = content;

  if (match) {
    const rawComment = match[1] || match[2];
    // Form the comment as a standard JSDoc block for comment-parser to understand
    // It might lack the starting /**, so we construct it.
    // DSFR comments are usually:
    // * Parameters:
    // * - foo (String) : description

    // comment-parser expects /** ... */ style or at least tags.
    // DSFR comments are NOT standard JSDoc tags (@param). They use a custom list format.
    // " * - properties.id (string) [required] : id of the accordion"

    // Since comment-parser expects @tags, and DSFR uses unstructured lists,
    // comment-parser might not help much UNLESS we parse the text description?
    // Wait, the prompt approved "comment-parser".
    // Does comment-parser parse arbitrary text? No, it parses JSDoc tags.
    // If DSFR doesn't use @param, comment-parser returns "description" section.

    // Let's see if we can convert DSFR format to something parseable or just parse the 'description' part using lines.
    // But `comment-parser` is good for standardizing the blocks.

    // Actually, looking at the previous regex:
    // /^\s*\*\s*-\s*([\w.]+)\s*\(([\w]+)\)\s*(\[required\])?\s*:\s*(.*)$/gm
    // This implies lines like: " * - accordion.label (string) [required] : Label of..."

    // I shall parse the comment block using `comment-parser` to strip the `*` and get clean lines,
    // then process those lines.
    // We use 'parsed.source' to get the original lines because 'description' merges them.
    // parsed.source is structured as: { number: lineNum, source: " * line content", tokens: ... }
    const fakeJsDoc = `/**\n${rawComment}\n*/`;
    const parsed = parseComments(fakeJsDoc)[0];

    if (parsed && parsed.source) {
      for (const sourceLine of parsed.source) {
        const line = sourceLine.source;
        // Parse: * accordion.id (string, required) : description
        // OR: * - accordion.id ...
        // Regex:
        // Start with optional *, whitespace, optional -, whitespace
        // Capture name: ([\w.]+)
        // Capture parens: \(([^)]+)\)  <-- captures "string, required" mixed
        // Skip anything else until : (like [default: false] or [required])
        // Capture description: (.*)

        const lineRegex =
          /^\s*\*?\s*(?:-\s*)?([\w.]+)\s*\(([^)]+)\).*?:\s*(.*)$/;
        const lineMatch = lineRegex.exec(line);

        if (lineMatch) {
          const fullPropName = lineMatch[1];
          const propName = fullPropName.split(".").pop() || fullPropName;

          // details contains "string, required" or "boolean, optional"
          const details = lineMatch[2].toLowerCase();

          let type = "string";
          if (details.includes("boolean")) type = "boolean";
          else if (details.includes("number")) type = "number";

          // "required" might be in details
          const required = !details.includes("optional");

          // description
          const desc = lineMatch[3];

          properties.push({
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
    properties,
    template,
  };
}

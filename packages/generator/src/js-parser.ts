import { parse } from "@babel/parser";

// Types mimicking EJS internal structure
interface EjsToken {
  type: "string" | "tag" | "comment";
  content: string;
  lineNo: number;
}

const pattern = /(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_% >)/;

export function tokenizeEjs(template: string): string[] {
  // Simple split logic closer to EJS internals
  const result = template.split(pattern);
  return result;
}

// Convert raw tokens to structured nodes
interface AstNode {
  type: "TEXT" | "SCRIPTLET" | "OUTPUT_ESCAPED" | "OUTPUT_RAW" | "COMMENT";
  content: string;
  raw: string; // Original content for line counting
}

function parseTokens(tokens: string[]): AstNode[] {
  const nodes: AstNode[] = [];
  let inScriptlet = false;
  let mode: "EVAL" | "ESCAPED" | "RAW" | "COMMENT" | null = null;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!token) continue;

    // Check for opener
    if (pattern.test(token) && !token.includes(">")) {
      if (token === "<%%") {
        // Escaped opener, treat as text
        nodes.push({ type: "TEXT", content: "<%", raw: "<%%" });
        continue;
      }
      inScriptlet = true;
      if (token === "<%_") mode = "EVAL";
      else if (token === "<%") mode = "EVAL";
      else if (token === "<%=") mode = "ESCAPED";
      else if (token === "<%-") mode = "RAW";
      else if (token === "<%#") mode = "COMMENT";
      continue;
    }

    // Check for closer
    if (pattern.test(token) && token.includes(">")) {
      if (token === "%%>") {
        // Escaped closer
        nodes.push({ type: "TEXT", content: "%>", raw: "%%>" });
        continue;
      }
      if (inScriptlet) {
        inScriptlet = false;
        mode = null;
        continue;
      }
    }

    if (inScriptlet) {
      if (mode === "COMMENT") {
        nodes.push({ type: "COMMENT", content: token, raw: token });
      } else if (mode === "ESCAPED") {
        nodes.push({ type: "OUTPUT_ESCAPED", content: token, raw: token });
      } else if (mode === "RAW") {
        nodes.push({ type: "OUTPUT_RAW", content: token, raw: token });
      } else {
        nodes.push({ type: "SCRIPTLET", content: token, raw: token });
      }
    } else {
      nodes.push({ type: "TEXT", content: token, raw: token });
    }
  }
  return nodes;
}

export function generateJsAst(template: string): any {
  const tokens = tokenizeEjs(template);
  const nodes = parseTokens(tokens);

  let jsOnlyString = "";

  nodes.forEach((node) => {
    if (node.type === "TEXT") {
      // Replace every non-newline char with space to preserve layout
      jsOnlyString += node.raw.replace(/[^\n]/g, " ");
    } else if (node.type === "OUTPUT_ESCAPED" || node.type === "OUTPUT_RAW") {
      // Wrap in parens and semicolon to behave like statements
      // Strip trailing semicolon from content to avoid (expr;); syntax
      const cleanContent = node.content.trim().replace(/;$/, "");
      jsOnlyString += `(${cleanContent});`;
    } else if (node.type === "SCRIPTLET") {
      jsOnlyString += node.content;
    } else if (node.type === "COMMENT") {
      jsOnlyString += node.raw.replace(/[^\n]/g, " ");
    }
  });

  return parse(jsOnlyString, {
    sourceType: "module",
    allowReturnOutsideFunction: true,
  });
}

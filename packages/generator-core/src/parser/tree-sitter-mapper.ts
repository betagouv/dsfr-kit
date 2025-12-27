import type { SyntaxNode } from "tree-sitter";
import type {
  ConditionalNode,
  ElementNode,
  LogicNode,
  LoopNode,
  TextNode,
} from "../cid.js";
import { ejsParser, htmlParser, jsParser } from "./tree-sitter-setup.js";

export class TreeSitterMapper {
  private source: string;

  constructor(source: string) {
    this.source = source;
  }

  public parse(): LogicNode {
    const tree = ejsParser.parse(this.source);
    return this.mapRoot(tree.rootNode);
  }

  private mapRoot(node: SyntaxNode): LogicNode {
    const children = this.mapChildren(node);

    if (children.length === 1) return children[0];

    return {
      type: "element",
      tag: "fragment",
      children,
    } as ElementNode;
  }

  private mapChildren(node: SyntaxNode): LogicNode[] {
    const nodes: LogicNode[] = [];
    for (const child of node.namedChildren) {
      const mapped = this.mapNode(child);
      if (mapped) {
        if (Array.isArray(mapped)) {
          nodes.push(...mapped);
        } else {
          nodes.push(mapped);
        }
      }
    }
    return nodes;
  }

  private mapNode(node: SyntaxNode): LogicNode | LogicNode[] | null {
    if (node.type === "content") {
      return this.parseHtmlFragment(node.text);
    } else if (node.type === "code") {
      // <% code %> - usually control flow
      // We need to parse the content of the code tag
      const code = node.text
        .replace(/^<%_?|-?/, "")
        .replace(/-?%_?>$/, "")
        .trim();
      return this.analyzeJsCode(code);
    } else if (node.type === "directive") {
      // <%- include() %>
      return { type: "text", content: node.text } as TextNode;
    } else if (node.type === "output_directive") {
      // <%= ... %> or <%- ... %>
      const code = node.text
        .replace(/^<%-?|=/, "")
        .replace(/-?%>$/, "")
        .trim();
      return { type: "text", content: `\${${code}}` } as TextNode;
    }

    return null;
  }

  private parseHtmlFragment(text: string): LogicNode[] {
    const tree = htmlParser.parse(text);
    return this.mapHtmlNodes(tree.rootNode.namedChildren);
  }

  private mapHtmlNodes(nodes: SyntaxNode[]): LogicNode[] {
    const result: LogicNode[] = [];

    for (const node of nodes) {
      if (node.type === "element") {
        result.push(this.mapHtmlElement(node));
      } else if (node.type === "text") {
        if (node.text) {
          result.push({ type: "text", content: node.text } as TextNode);
        }
      }
    }
    return result;
  }

  private mapHtmlElement(node: SyntaxNode): ElementNode {
    const startTag = node.childForFieldName("start_tag");
    let tagName = "div";
    let classes: string[] = [];
    const attributes: Record<string, string> = {};

    if (startTag) {
      const tagNameNode = startTag.childForFieldName("name");
      if (tagNameNode) tagName = tagNameNode.text;

      for (const child of startTag.namedChildren) {
        if (child.type === "attribute") {
          const nameNode = child.childForFieldName("name");
          const valueNode = child.childForFieldName("value");
          if (nameNode) {
            const name = nameNode.text;
            let value = "";
            if (valueNode) {
              // Clean quotes
              value = valueNode.text.replace(/^['"]|['"]$/g, "");
            }

            if (name === "class") {
              classes = value.split(" ").filter(Boolean);
            } else {
              attributes[name] = value;
            }
          }
        }
      }
    }

    const children: LogicNode[] = [];
    for (const child of node.namedChildren) {
      if (child.type !== "start_tag" && child.type !== "end_tag") {
        // Basic text content inside element
        // But valid HTML tree structure does not recurse into nested EJS if it was split by embedded-template top-level?
        // Actually, if we parse a fragment "<div>HELLO</div>", it works.
        // If we parse "<div>HELLO <%= world %></div>", embedded-template splits it:
        // [content("<div>HELLO "), output_directive, content("</div>")]
        // So our MapRoot loop handles the sequence.
        // Issues arise when tags are split across EJS blocks.
        // e.g. <div <% if(x) { %> class="a" <% } %>>
        // embedded-template: content("<div "), code, content(" class..."), code, content(">")
        // The simple "mapRoot" treats them as siblings.
        // Implementing FULL robustness requires a custom state machine consuming the stream of tokens.
      }
    }

    // For this step, we just assume HTML fragments are mostly text/simple elements for now
    // This implementation is still "Text" heavy

    // TODO: Implement children mapping
    return {
      type: "element",
      tag: tagName,
      classes: classes.length ? classes : undefined,
      attributes: Object.keys(attributes).length ? attributes : undefined,
      children: undefined, // TODO
    };
  }

  private analyzeJsCode(code: string): LogicNode {
    // Analyze if it's a loop start, end, or conditional
    // Simple regex heuristic for now to map to CID types
    // Real impl would parse JS AST

    if (code.match(/if\s*\(/)) {
      return {
        type: "conditional",
        condition: code, // Extract condition
        trueBranch: [],
        falseBranch: undefined,
      } as ConditionalNode;
    }

    if (code.match(/\.forEach|\.map|for\s*\(/)) {
      return {
        type: "loop",
        items: "items", // placeholder
        variable: "item", // placeholder
        children: [],
      } as LoopNode;
    }

    return { type: "text", content: `\${ /* ${code} */ }` } as TextNode;
  }
}

import type { SyntaxNode } from "tree-sitter";
import type {
  ConditionalNode,
  ElementNode,
  LogicNode,
  LoopNode,
  TextNode,
} from "../cid.js";
import { ejsParser, htmlParser } from "./tree-sitter-setup.js";

// Helper to clean EJS tags
function cleanEjs(text: string): string {
  let clean = text.trim();
  // Remove opening tag
  clean = clean.replace(/^<%[-_=]?\s*/, "");
  // Remove closing tag
  clean = clean.replace(/\s*[-_]?%>$/, "");
  return clean.trim();
}

// Helper to check if a node is an EJS opener/closer
function isControlFlowStart(
  text: string,
): { type: "conditional" | "loop"; condition: string } | null {
  const clean = cleanEjs(text);

  // Simple heuristic for now
  if (/^if\s*\(/.test(clean) && clean.endsWith("{")) {
    return {
      type: "conditional",
      condition: clean.match(/^if\s*\((.*)\)/)?.[1] || "unknown",
    };
  }
  if (
    (/\.forEach/.test(clean) || /^for\s*\(/.test(clean)) &&
    clean.endsWith("{")
  ) {
    return { type: "loop", condition: clean };
  }
  return null;
}

function isControlFlowEnd(text: string): boolean {
  const clean = cleanEjs(text);
  // A closer "}" might be accompanied by ");" in forEach
  return clean === "}" || clean === "});" || clean === "})";
}

export class TreeSitterMapper {
  private source: string;

  constructor(source: string) {
    this.source = source;
  }

  public parse(): LogicNode {
    const tree = ejsParser.parse(this.source);
    // embedded-template root children are a flat list of content and code
    // We must iterate them and build a tree
    return this.buildTree(tree.rootNode.namedChildren);
  }

  private buildTree(nodes: SyntaxNode[]): LogicNode {
    const rootChildren: LogicNode[] = [];
    const stack: {
      type: "conditional" | "loop";
      node: any;
      children: LogicNode[];
    }[] = [];

    // We process nodes linearly
    for (const node of nodes) {
      if (node.type === "code" || node.type === "directive") {
        // Analyze code
        const text = node.text;
        const startInfo = isControlFlowStart(text);
        const isEnd = isControlFlowEnd(text);

        if (startInfo) {
          // Push new container to stack
          const newNode =
            startInfo.type === "conditional"
              ? ({
                  type: "conditional",
                  condition: startInfo.condition,
                  trueBranch: [],
                  falseBranch: undefined,
                } as ConditionalNode)
              : ({
                  type: "loop",
                  items: "items",
                  variable: "item",
                  children: [],
                } as LoopNode); // TODO: Parse loop vars

          stack.push({ type: startInfo.type, node: newNode, children: [] });
        } else if (isEnd) {
          // Pop from stack
          const context = stack.pop();
          if (context) {
            // Assign collected children to the node
            if (context.type === "conditional") {
              (context.node as ConditionalNode).trueBranch = context.children;
            } else {
              (context.node as LoopNode).children = context.children;
            }

            // Add completed node to parent (or root)
            const parentEntry = stack[stack.length - 1];
            if (parentEntry) {
              parentEntry.children.push(context.node);
            } else {
              rootChildren.push(context.node);
            }
          } else {
            // Unbalanced closing brace? Treat as TextNode if it's not structural
            const mapped = this.mapNode(node);
            if (mapped) {
              const targetList =
                stack.length > 0
                  ? stack[stack.length - 1].children
                  : rootChildren;
              if (Array.isArray(mapped)) targetList.push(...mapped);
              else targetList.push(mapped);
            }
          }
        } else {
          // Not start or end. Maybe 'else'?
          // Or just code. Check mapNode for fallback
          // If mapNode returns specific text logic?
          // If we treat it as code, mapNode currently returns "TextNode".
          // We probably want to add it as TextNode if it's not structural logic.

          const mapped = this.mapNode(node);
          if (mapped) {
            const targetList =
              stack.length > 0
                ? stack[stack.length - 1].children
                : rootChildren;
            if (Array.isArray(mapped)) {
              targetList.push(...mapped);
            } else {
              targetList.push(mapped);
            }
          }
        }
      } else {
        // Convert the node to LogicNode(s)
        const mapped = this.mapNode(node);
        if (mapped) {
          const targetList =
            stack.length > 0 ? stack[stack.length - 1].children : rootChildren;
          if (Array.isArray(mapped)) {
            targetList.push(...mapped);
          } else {
            targetList.push(mapped);
          }
        }
      }
    }

    // If root children > 1, wrap
    if (rootChildren.length === 1) return rootChildren[0];

    return {
      type: "element",
      tag: "fragment",
      children: rootChildren,
    } as ElementNode;
  }

  // Reusing existing mapNode logic for content/directives
  private mapNode(node: SyntaxNode): LogicNode | LogicNode[] | null {
    if (node.type === "content") {
      return this.parseHtmlFragment(node.text);
    } else if (node.type === "directive") {
      return { type: "text", content: node.text } as TextNode;
    } else if (node.type === "output_directive") {
      const code = node.text
        .replace(/^<%[-=]?/, "")
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
          // Clean newlines/spaces if needed?
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

    // We need to map children of the ELEMENT too
    // However, tree-sitter-html gives us full element structure.
    // E.g. <div><span>text</span></div> -> Element(div) with children Element(span).
    // So checking namedChildren recursively is correct.

    const children: LogicNode[] = [];
    for (const child of node.namedChildren) {
      if (child.type !== "start_tag" && child.type !== "end_tag") {
        // Recursive map
        const mapped = this.mapHtmlNodes([child]);
        // mapHtmlNodes returns array, push them
        children.push(...mapped);
      }
    }

    return {
      type: "element",
      tag: tagName,
      classes: classes.length ? classes : undefined,
      attributes: Object.keys(attributes).length ? attributes : undefined,
      children: children.length ? children : undefined,
    };
  }
}

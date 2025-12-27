import type { SyntaxNode } from "tree-sitter";
import type {
  ConditionalNode,
  ElementNode,
  LogicNode,
  LoopNode,
  TextNode,
} from "../cid.js";
import { ejsParser, htmlParser } from "./tree-sitter-setup.js";

interface Placeholder {
  id: string;
  type: "output" | "control_start" | "control_end" | "code";
  originalNode: SyntaxNode;
  data?: ControlFlowInfo;
}

interface ControlFlowInfo {
  type: "conditional" | "loop";
  condition?: string;
  items?: string;
  variable?: string;
}

interface MarkerNode {
  type: "marker";
  subtype: Placeholder["type"];
  data?: ControlFlowInfo;
  original: SyntaxNode;
}

type ParsedNode = LogicNode | MarkerNode;

export class TreeSitterMapper {
  private source: string;
  private placeholders: Map<string, Placeholder> = new Map();

  constructor(source: string) {
    this.source = source;
  }

  public parse(): LogicNode {
    // 1. Parse EJS to identify code blocks vs content
    const ejsTree = ejsParser.parse(this.source);

    // 2. Create Masked Source
    const maskedSource = this.createMaskedSource(
      ejsTree.rootNode.namedChildren,
    );

    // 3. Parse Masked Source as HTML
    const htmlTree = htmlParser.parse(maskedSource);

    // 4. Map HTML AST to LogicNodes, resolving markers
    // We expect a single root or a fragment
    // We start by mapping the root children
    const nodes = this.mapHtmlNodes(htmlTree.rootNode.namedChildren);
    // 5. Post-process to structure control flow (grouping by markers)
    const structured = this.structureControlFlow(nodes);

    if (structured.length === 1) return structured[0];
    return {
      type: "element",
      tag: "fragment",
      children: structured,
    } as ElementNode;
  }

  private createMaskedSource(nodes: SyntaxNode[]): string {
    let buffer = "";

    for (const node of nodes) {
      if (node.type === "content") {
        buffer += node.text;
      } else {
        // It's code, directive, or output_directive
        const text = node.text.trim();
        const id = `__EJS_${this.placeholders.size}__`;

        let type: Placeholder["type"] = "code";
        let marker = "";
        let data: ControlFlowInfo | undefined;

        // Analyze logic
        const startInfo = this.isControlFlowStart(text);
        const isEnd = this.isControlFlowEnd(text);
        const isOutput =
          text.startsWith("<%=") ||
          text.startsWith("<%-") ||
          node.type === "output_directive";

        if (startInfo) {
          type = "control_start";
          data = startInfo;
          // Use HTML comment for control flow to preserve structure
          marker = `<!--${id}-->`;
        } else if (isEnd) {
          type = "control_end";
          marker = `<!--${id}-->`;
        } else if (isOutput) {
          type = "output";
          // Output can be in attribute or text.
          // We use a safe string token.
          marker = id;
        } else {
          // Arbitrary code (e.g. let declarations)
          // Treat as comment to hide from HTML parser
          type = "code";
          marker = `<!--${id}-->`;
        }

        this.placeholders.set(id, { id, type, originalNode: node, data });
        buffer += marker;
      }
    }
    return buffer;
  }

  private mapHtmlNodes(nodes: SyntaxNode[]): ParsedNode[] {
    const result: ParsedNode[] = [];

    for (const node of nodes) {
      if (node.type === "element") {
        result.push(this.mapHtmlElement(node));
      } else if (node.type === "text") {
        // Check for markers in text
        // Text might contain __EJS_X__ (output) or NEWLINES or part of comments?
        // tree-sitter-html comments are separate nodes (usually).
        // But __EJS_X__ in text content needs simple replacement
        const content = this.resolveTextContent(node.text);
        if (content) {
          result.push({ type: "text", content } as TextNode);
        }
      } else if (node.type === "comment") {
        // Check if it is a marker <!--__EJS_X__-->
        const match = node.text.match(/<!--(__EJS_\d+__)-->/);
        if (match) {
          const id = match[1];
          const p = this.placeholders.get(id);
          if (p) {
            // It's a marker. Map it to a special "MarkerNode" (we'll define a temporary type or handled here)
            // We can return a placeholder LogicNode to be structured later
            result.push(this.markerToNode(p));
          }
        }
      }
    }
    return result;
  }

  private mapHtmlElement(node: SyntaxNode): ElementNode {
    // Find tag name
    let tagName = "div";
    const startTag = node.namedChildren.find((c) => c.type === "start_tag");
    if (startTag) {
      const nameChild = startTag.namedChildren.find(
        (c) => c.type === "tag_name",
      );
      if (nameChild) tagName = nameChild.text;
    }

    // Attributes
    const attributes: Record<string, string> = {};
    let classes: string[] = [];

    if (startTag) {
      for (const child of startTag.namedChildren) {
        if (child.type === "attribute") {
          let name = "";
          let value = "";
          for (const attrChild of child.namedChildren) {
            if (attrChild.type === "attribute_name") name = attrChild.text;
            else if (
              attrChild.type === "quoted_attribute_value" ||
              attrChild.type === "attribute_value"
            ) {
              value = attrChild.text.replace(/^['"]|['"]$/g, "");
            }
          }

          if (name) {
            // Validate value for placeholders
            // Resolve name (key) for placeholders too!
            name = this.resolveTextContent(name);
            value = this.resolveTextContent(value);

            if (name === "class") {
              classes = value.split(" ").filter(Boolean);
            } else {
              attributes[name] = value;
            }
          }
        }
      }
    }

    // Children
    // Filter out start/end tags from children logic
    const childrenNodes = node.namedChildren.filter(
      (c) => c.type !== "start_tag" && c.type !== "end_tag",
    );
    const mappedChildren = this.mapHtmlNodes(childrenNodes);
    // Structure the children (process markers)
    const structuredChildren = this.structureControlFlow(mappedChildren);

    return {
      type: "element",
      tag: tagName,
      classes: classes.length ? classes : undefined,
      attributes: Object.keys(attributes).length ? attributes : undefined,
      children: structuredChildren.length ? structuredChildren : undefined,
    };
  }

  private resolveTextContent(text: string): string {
    return text.replace(/__EJS_\d+__/g, (match) => {
      const p = this.placeholders.get(match);
      if (p && p.type === "output") {
        // Convert to interpolation
        const inner = this.cleanEjs(p.originalNode.text)
          .replace(/^=|-/, "")
          .trim();
        return `\${${inner}}`;
      }
      return match;
    });
  }

  private markerToNode(p: Placeholder): MarkerNode {
    return {
      type: "marker",
      subtype: p.type,
      data: p.data,
      original: p.originalNode,
    };
  }

  private structureControlFlow(nodes: ParsedNode[]): LogicNode[] {
    const result: LogicNode[] = [];
    let i = 0;

    while (i < nodes.length) {
      const node = nodes[i];
      if (node.type === "marker") {
        const marker = node;
        if (marker.subtype === "control_start") {
          // Start a block
          // Consume nodes until matching end
          const blockChildren: ParsedNode[] = [];
          let balance = 1;
          i++;
          while (i < nodes.length && balance > 0) {
            const next = nodes[i];
            if (next.type === "marker") {
              if (next.subtype === "control_start") balance++;
              if (next.subtype === "control_end") balance--;
            }

            if (balance > 0) {
              blockChildren.push(next);
              i++;
            }
          }
          // Now we have blockChildren (excluding the final end marker)
          // Recursive structure them
          const structuredBlock = this.structureControlFlow(blockChildren);

          // Create the LogicNode
          const info = marker.data;
          if (!info) {
            // Should not happen for control_start, but safety check
            i++;
            continue;
          }

          if (info.type === "conditional") {
            result.push({
              type: "conditional",
              condition: info.condition,
              trueBranch: structuredBlock,
            } as ConditionalNode);
          } else {
            result.push({
              type: "loop",
              items: info.items || "items",
              variable: info.variable || "item",
              children: structuredBlock,
            } as LoopNode);
          }

          // i is now at the end marker (or past), loop continues
          i++; // skip end marker
        } else if (marker.subtype === "control_end") {
          // Unbalanced end?
          // Should not happen if logic is correct, or just ignore
          i++;
        } else if (marker.subtype === "code") {
          // Code block (let ...). Ignore or add as Text?
          // Currently we strip them in output usually.
          // Or we can verify if it's important.
          // For now ignore.
          i++;
        } else {
          i++;
        }
      } else {
        result.push(node);
        i++;
      }
    }
    return result;
  }

  // Helpers
  private cleanEjs(text: string): string {
    return text
      .replace(/^<%[-_=]?\s*/, "")
      .replace(/\s*[-_]?%>$/, "")
      .trim();
  }

  private isControlFlowStart(text: string): ControlFlowInfo | null {
    const clean = this.cleanEjs(text);
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
      // Extract items/var logic similar to before
      const match = clean.match(/(.+)\.forEach\((?:function)?\(([^)]+)\)/);
      let items = "items";
      let variable = "item";
      if (match) {
        items = match[1].trim();
        variable = match[2].trim();
      }
      return { type: "loop", condition: clean, items, variable };
    }
    return null;
  }

  private isControlFlowEnd(text: string): boolean {
    const clean = this.cleanEjs(text);
    return clean === "}" || clean === "});" || clean === "})";
  }
}

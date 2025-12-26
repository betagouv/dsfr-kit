import { HTMLElement, Node, NodeType, parse } from "node-html-parser";
import { ElementNode, LogicNode, TextNode } from "../cid.js";

function convertNode(node: Node): LogicNode | null {
  if (node.nodeType === NodeType.ELEMENT_NODE) {
    const el = node as HTMLElement;
    const classes = el.getAttribute("class")?.split(" ").filter(Boolean) || [];
    const attributes: Record<string, string> = {};

    for (const key in el.attributes) {
      if (key !== "class") {
        attributes[key] = el.attributes[key];
      }
    }

    const children = el.childNodes
      .map(convertNode)
      .filter((n): n is LogicNode => n !== null);

    return {
      type: "element",
      tag: el.tagName.toLowerCase(),
      classes: classes.length > 0 ? classes : undefined,
      attributes: Object.keys(attributes).length > 0 ? attributes : undefined,
      children: children.length > 0 ? children : undefined,
    } as ElementNode;
  } else if (node.nodeType === NodeType.TEXT_NODE) {
    const content = node.rawText;
    if (!content.trim()) return null; // Skip empty whitespace? Or preserve?
    // For now preserve if it contains meaningful whitespace or chars
    if (content.trim().length === 0 && !content.includes("\n")) return null;

    return {
      type: "text",
      content,
    } as TextNode;
  }
  return null;
}

export function parseTemplateToStructure(template: string): LogicNode {
  // 0. Pre-process to handle some EJS quirks if needed (masking)
  // For now, simpler approach: rely on node-html-parser tolerance

  // 1. Parse HTML
  const root = parse(template);

  // 2. Convert to LogicNode tree
  // We wrap the list of root nodes in a Fragment or just a container div logic loop
  // Our Schema LogicNode is a single node. Usually a component has a root element.
  // If multiple roots, we might need a Fragment or just return the first one/array?
  // The CID structure expects ONE LogicNode.

  const convertedChildren = root.childNodes
    .map(convertNode)
    .filter((n): n is LogicNode => n !== null);

  if (convertedChildren.length === 1) {
    return convertedChildren[0];
  }

  // Wrap in a "Fragment" concept? Or a phantom element.
  // For now using a div-like wrapper but maybe introduce Fragment to schema later.
  return {
    type: "element",
    tag: "fragment",
    children: convertedChildren,
  } as ElementNode;
}

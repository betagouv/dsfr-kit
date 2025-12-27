import { describe, expect, it } from "vitest";
import { TreeSitterMapper } from "../src/parser/tree-sitter-mapper.js";

describe("TreeSitterMapper", () => {
  it("parses simple text", () => {
    const input = "Hello World";
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();

    // Expect a content node or text node
    expect(result.type).toBe("text");
    expect((result as any).content).toBe("Hello World");
  });

  it("parses output directive", () => {
    const input = "<%= props.title %>";
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();
    expect(result.type).toBe("text");
    expect((result as any).content).toContain("props.title");
  });

  it("parses simple conditional", () => {
    const input = `
            <% if (props.show) { %>
                <div>Visible</div>
            <% } %>
        `;
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();

    // Should return a Fragment or similar, checking children
    const children = (result as any).children || [result];
    const nodes = children.filter(
      (n: any) => n.type !== "text" || n.content.trim().length > 0,
    );

    expect(nodes[0].type).toBe("conditional");
    expect(nodes[0].condition).toContain("props.show");
    expect(nodes[0].trueBranch).toBeDefined();

    const branchNodes = (nodes[0] as any).trueBranch.filter(
      (n: any) => n.type !== "text" || n.content.trim(),
    );
    expect(branchNodes[0].type).toBe("element");
    expect(branchNodes[0].tag).toBe("div");
  });

  it("parses simple loop", () => {
    const input = `
            <% props.items.forEach(function(item) { %>
                <span><%= item %></span>
            <% }); %>
        `;
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();

    // If result is a fragment (multiple root nodes including newlines), find the loop
    let targetNode = result;
    if (result.type === "element" && result.tag === "fragment") {
      const nodes = result.children?.filter(
        (n: any) => n.type !== "text" || n.content.trim().length > 0,
      );
      if (nodes && nodes.length > 0) targetNode = nodes[0];
    }

    // For single loop result, result might be the LoopNode itself if surrounding whitespace is trimmed or handled
    // But our mapper includes surrounding text usually.
    // Let's rely on finding strict type.

    if (result.type === "loop") {
      targetNode = result;
    }

    expect(targetNode.type).toBe("loop");
    expect((targetNode as any).children).toBeDefined();
  });
});

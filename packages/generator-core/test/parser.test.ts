import { describe, expect, it } from "vitest";
import { TreeSitterMapper } from "../src/parser/tree-sitter-mapper.js";

describe("TreeSitterMapper", () => {
  it("parses simple text", () => {
    const input = "Hello World";
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();

    // Expect a content node or text node
    expect(result.type).toBe("text");
    if (result.type === "text") {
      expect(result.content).toBe("Hello World");
    }
  });

  it("parses output directive", () => {
    const input = "<%= props.title %>";
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();
    expect(result.type).toBe("text");
    if (result.type === "text") {
      expect(result.content).toContain("props.title");
    }
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
    let nodes: any[] = [];
    if (result.type === "element" && result.tag === "fragment") {
      nodes =
        result.children?.filter(
          (n) => n.type !== "text" || n.content.trim().length > 0,
        ) || [];
    } else {
      nodes = [result];
    }

    expect(nodes[0].type).toBe("conditional");
    const conditional = nodes[0] as import("../src/cid.js").ConditionalNode;
    expect(conditional.condition).toContain("props.show");
    expect(conditional.trueBranch).toBeDefined();

    const branchNodes = conditional.trueBranch.filter(
      (n) => n.type !== "text" || n.content.trim(),
    );
    const div = branchNodes[0] as import("../src/cid.js").ElementNode;
    expect(div.type).toBe("element");
    expect(div.tag).toBe("div");
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
        (n) => n.type !== "text" || n.content.trim().length > 0,
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

  it("parses accordion snippet with attribute interpolation", () => {
    const input = `
<section class="<%= prefix %>-accordion">
  <h3 class="<%= prefix %>-accordion__title">
  </h3>
</section>
`;
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();

    let element: any = result;
    if (element.type === "element" && element.tag === "fragment") {
      element = element.children.find(
        (c: any) => c.type === "element" && c.tag !== "fragment",
      );
    }

    expect(element).toBeDefined();
    expect(element.type).toBe("element");
    expect(element.tag).toBe("section");

    const classAttr = element.attributes?.class || element.classes?.join(" ");
    expect(classAttr).toContain("${prefix}-accordion");
  });
});

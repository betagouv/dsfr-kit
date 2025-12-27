import { describe, expect, it } from "vitest";
import { TreeSitterMapper } from "../src/parser/tree-sitter-mapper.js";

describe("TreeSitterMapper", () => {
  it("parses simple text", () => {
    const input = "Hello World";
    const mapper = new TreeSitterMapper(input);
    const result = mapper.parse();

    // Expect a content node or text node
    // Actually, embedded-template treats "Hello World" as one content node
    expect(result.type).toBe("text");
    expect((result as any).content).toBe("Hello World");
  });
});

import Parser from "tree-sitter";
import EmbeddedTemplate from "tree-sitter-embedded-template";
import Html from "tree-sitter-html";
import Javascript from "tree-sitter-javascript";

export function createParser(language: "ejs" | "html" | "javascript"): Parser {
  const parser = new Parser();
  let lang: any;

  switch (language) {
    case "ejs":
      lang = EmbeddedTemplate;
      break;
    case "html":
      lang = Html;
      break;
    case "javascript":
      lang = Javascript;
      break;
  }

  parser.setLanguage(lang);
  return parser;
}

export const ejsParser = createParser("ejs");
export const htmlParser = createParser("html");
export const jsParser = createParser("javascript");

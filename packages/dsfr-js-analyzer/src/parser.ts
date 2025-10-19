/**
 * TypeScript AST parser for DSFR JavaScript files
 */

import * as ts from "typescript";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * Parse a JavaScript/TypeScript file into an AST
 */
export function parseFile(filePath: string): ts.SourceFile {
  const absolutePath = resolve(filePath);
  const sourceCode = readFileSync(absolutePath, "utf-8");

  return ts.createSourceFile(
    absolutePath,
    sourceCode,
    ts.ScriptTarget.Latest,
    true // setParentNodes
  );
}

/**
 * Parse JavaScript source code into an AST
 */
export function parseSource(
  sourceCode: string,
  fileName = "source.js"
): ts.SourceFile {
  return ts.createSourceFile(
    fileName,
    sourceCode,
    ts.ScriptTarget.Latest,
    true
  );
}

/**
 * Visit all nodes in the AST with a callback
 */
export function visitNodes(
  node: ts.Node,
  visitor: (node: ts.Node) => void,
  sourceFile: ts.SourceFile
): void {
  visitor(node);
  ts.forEachChild(node, (child) => visitNodes(child, visitor, sourceFile));
}

/**
 * Get the line number for a node
 */
export function getLineNumber(
  node: ts.Node,
  sourceFile: ts.SourceFile
): number {
  const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
  return line + 1; // Convert to 1-indexed
}

/**
 * Get the text content of a node
 */
export function getNodeText(node: ts.Node, sourceFile: ts.SourceFile): string {
  return node.getText(sourceFile);
}

/**
 * Check if a node is a method call
 */
export function isMethodCall(node: ts.Node): node is ts.CallExpression {
  return ts.isCallExpression(node);
}

/**
 * Check if a node is a property access (e.g., obj.property)
 */
export function isPropertyAccess(
  node: ts.Node
): node is ts.PropertyAccessExpression {
  return ts.isPropertyAccessExpression(node);
}

/**
 * Check if a node is a variable declaration
 */
export function isVariableDeclaration(
  node: ts.Node
): node is ts.VariableDeclaration {
  return ts.isVariableDeclaration(node);
}

/**
 * Check if a node is a class declaration
 */
export function isClassDeclaration(node: ts.Node): node is ts.ClassDeclaration {
  return ts.isClassDeclaration(node);
}

/**
 * Extract method name from a call expression
 */
export function getMethodName(
  callExpr: ts.CallExpression,
  sourceFile: ts.SourceFile
): string {
  const expr = callExpr.expression;

  if (ts.isPropertyAccessExpression(expr)) {
    return expr.name.text;
  }

  if (ts.isIdentifier(expr)) {
    return expr.text;
  }

  return getNodeText(expr, sourceFile);
}

/**
 * Extract the object from a property access (e.g., 'obj' from 'obj.method()')
 */
export function getObjectFromPropertyAccess(
  propAccess: ts.PropertyAccessExpression,
  sourceFile: ts.SourceFile
): string {
  return getNodeText(propAccess.expression, sourceFile);
}

/**
 * Check if a string literal contains an ARIA attribute
 */
export function isAriaAttribute(text: string): boolean {
  return text.startsWith("aria-") || text.startsWith("role");
}

/**
 * Extract string literal value
 */
export function getStringLiteralValue(node: ts.Node): string | undefined {
  if (ts.isStringLiteral(node)) {
    return node.text;
  }
  return undefined;
}

/**
 * Find all nodes of a specific kind
 */
export function findNodesByKind(
  sourceFile: ts.SourceFile,
  kind: ts.SyntaxKind
): ts.Node[] {
  const nodes: ts.Node[] = [];

  visitNodes(
    sourceFile,
    (node) => {
      if (node.kind === kind) {
        nodes.push(node);
      }
    },
    sourceFile
  );

  return nodes;
}

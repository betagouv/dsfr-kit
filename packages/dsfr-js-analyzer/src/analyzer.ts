/**
 * DSFR JavaScript behavior analyzer
 */

import * as ts from "typescript";
import {
  getLineNumber,
  getMethodName,
  getNodeText,
  getObjectFromPropertyAccess,
  getStringLiteralValue,
  isAriaAttribute,
  isMethodCall,
  isPropertyAccess,
  parseFile,
  visitNodes,
} from "./parser.js";
import type {
  AriaChange,
  BehaviorPattern,
  DomManipulation,
  EventListener,
  StateTransition,
  StateVariable,
} from "./types.js";

/**
 * Analyze a JavaScript file for DSFR component behaviors
 */
export function analyzeFile(filePath: string): BehaviorPattern {
  const sourceFile = parseFile(filePath);
  return analyzeBehaviors(sourceFile, filePath);
}

/**
 * Analyze behaviors from a parsed source file
 */
export function analyzeBehaviors(
  sourceFile: ts.SourceFile,
  filePath: string
): BehaviorPattern {
  const eventListeners: EventListener[] = [];
  const stateVariables: StateVariable[] = [];
  const domManipulations: DomManipulation[] = [];
  const ariaChanges: AriaChange[] = [];
  const stateTransitions: StateTransition[] = [];
  const warnings: string[] = [];

  visitNodes(
    sourceFile,
    (node) => {
      // Detect event listeners
      const listener = detectEventListener(node, sourceFile);
      if (listener) {
        eventListeners.push(listener);
      }

      // Detect state variables
      const stateVar = detectStateVariable(node, sourceFile);
      if (stateVar) {
        stateVariables.push(stateVar);
      }

      // Detect DOM manipulations
      const domManip = detectDomManipulation(node, sourceFile);
      if (domManip) {
        domManipulations.push(domManip);

        // Check if it's an ARIA change
        if (isAriaAttribute(domManip.property)) {
          ariaChanges.push({
            attribute: domManip.property,
            target: domManip.target,
            value: domManip.value,
            lineNumber: domManip.lineNumber,
          });
        }
      }

      // Detect state transitions (simplified heuristic)
      const transition = detectStateTransition(node, sourceFile);
      if (transition) {
        stateTransitions.push(transition);
      }
    },
    sourceFile
  );

  return {
    componentName: extractComponentName(filePath),
    filePath,
    eventListeners,
    stateVariables,
    domManipulations,
    ariaChanges,
    stateTransitions,
    analyzedAt: new Date().toISOString(),
    warnings,
  };
}

/**
 * Detect event listener registration
 */
function detectEventListener(
  node: ts.Node,
  sourceFile: ts.SourceFile
): EventListener | null {
  if (isMethodCall(node)) {
      const methodName = getMethodName(node, sourceFile);

      // Detect addEventListener calls
      if (methodName === "addEventListener" && node.arguments.length >= 2) {
        const eventType = getStringLiteralValue(node.arguments[0]);

        if (!eventType) {
          return null;
        }

        const target = isPropertyAccess(node.expression)
          ? getObjectFromPropertyAccess(node.expression, sourceFile)
          : "unknown";

        const handler = getNodeText(node.arguments[1], sourceFile);

        return {
          eventType,
          target,
          handler,
          lineNumber: getLineNumber(node, sourceFile),
          action: "add",
        };
      }

      // Detect removeEventListener calls
      if (methodName === "removeEventListener" && node.arguments.length >= 2) {
        const eventType = getStringLiteralValue(node.arguments[0]);
        if (!eventType) {
          return null;
        }

        const target = isPropertyAccess(node.expression)
          ? getObjectFromPropertyAccess(node.expression, sourceFile)
          : "unknown";

        const handler = getNodeText(node.arguments[1], sourceFile);

        return {
          eventType,
          target,
          handler,
          lineNumber: getLineNumber(node, sourceFile),
          action: "remove",
        };
      }
  }

  // Detect inline event handlers (onclick, onfocus, etc.)
  if (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
    ts.isPropertyAccessExpression(node.left)
  ) {
      const propName = node.left.name.text;
      if (propName.startsWith("on")) {
        const eventType = propName.slice(2); // Remove 'on' prefix
        const target = getObjectFromPropertyAccess(node.left, sourceFile);

        return {
          eventType,
          target,
          handler: "inline",
          lineNumber: getLineNumber(node, sourceFile),
          action: "add",
        };
      }
  }

  return null;
}

/**
 * Detect state variable declarations
 */
/**
 * Detect state variable declarations
 */
function detectStateVariable(
  node: ts.Node,
  sourceFile: ts.SourceFile
): StateVariable | null {
  // Handle var/let/const declarations
  if (ts.isVariableDeclaration(node)) {
    const name = node.name.getText(sourceFile);
    const initialValue = node.initializer
      ? getNodeText(node.initializer, sourceFile)
      : undefined;

    // Determine scope
    let scope = "local";
    let parent: ts.Node | undefined = node.parent;
    while (parent) {
      if (ts.isClassDeclaration(parent)) {
        scope = "class";
        break;
      }
      if (ts.isSourceFile(parent)) {
        scope = "global";
        break;
      }
      parent = parent.parent;
    }

    return {
      name,
      initialValue,
      lineNumber: getLineNumber(node, sourceFile),
      scope,
    };
  }

  // Handle class property assignments in constructor: this.state = ...
  if (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.EqualsToken &&
    ts.isPropertyAccessExpression(node.left) &&
    node.left.expression.kind === ts.SyntaxKind.ThisKeyword
  ) {
    // Check if we are in a constructor
    let parent: ts.Node | undefined = node.parent;
    let inConstructor = false;
    while (parent) {
      if (ts.isConstructorDeclaration(parent)) {
        inConstructor = true;
        break;
      }
      parent = parent.parent;
    }

    if (inConstructor) {
      const name = node.left.name.text;

      // Filter for likely state variables
      if (name === "state" || name.startsWith("is") || name.startsWith("has")) {
          const initialValue = getNodeText(node.right, sourceFile);
          return {
            name,
            initialValue,
            lineNumber: getLineNumber(node, sourceFile),
            scope: "class",
          };
      }
    }
  }

  return null;
}

/**
 * Detect DOM manipulation operations
 */
function detectDomManipulation(
  node: ts.Node,
  sourceFile: ts.SourceFile
): DomManipulation | null {
  if (isMethodCall(node)) {
      const methodName = getMethodName(node, sourceFile);

      // Detect setAttribute calls
      if (methodName === "setAttribute" && node.arguments.length >= 2) {
        const property = getStringLiteralValue(node.arguments[0]);
        const value = getStringLiteralValue(node.arguments[1]);

        if (!property) {
          return null;
        }

        const target = isPropertyAccess(node.expression)
          ? getObjectFromPropertyAccess(node.expression, sourceFile)
          : "unknown";

        return {
          type: "setAttribute",
          target,
          property,
          value,
          lineNumber: getLineNumber(node, sourceFile),
        };
      }

      // Detect classList operations
      if (
        (methodName === "add" ||
          methodName === "remove" ||
          methodName === "toggle") &&
        isPropertyAccess(node.expression)
      ) {
        const obj = getObjectFromPropertyAccess(node.expression, sourceFile);
        if (obj.endsWith(".classList")) {
          const className = node.arguments[0]
            ? getStringLiteralValue(node.arguments[0])
            : undefined;

          return {
            type: `classList.${methodName}`,
            target: obj.replace(".classList", ""),
            property: "class",
            value: className,
            lineNumber: getLineNumber(node, sourceFile),
          };
        }
      }
  }

  // Detect direct property assignments (textContent, innerHTML, etc.)
  if (
    ts.isBinaryExpression(node) &&
    node.operatorToken.kind === ts.SyntaxKind.EqualsToken
  ) {
    if (isPropertyAccess(node.left)) {
      const propertyName = node.left.name.text;
      const target = getObjectFromPropertyAccess(node.left, sourceFile);
      const value = getNodeText(node.right, sourceFile);

      if (
        ["textContent", "innerHTML", "innerText", "value"].includes(
          propertyName
        )
      ) {
        return {
          type: "propertyAssignment",
          target,
          property: propertyName,
          value,
          lineNumber: getLineNumber(node, sourceFile),
        };
      }
    }
  }

  return null;
}

/**
 * Detect state transitions (simplified heuristic based on conditional logic)
 */
function detectStateTransition(
  node: ts.Node,
  sourceFile: ts.SourceFile
): StateTransition | null {
  // Look for patterns like: if (state === 'open') { state = 'closed'; }
  if (ts.isIfStatement(node)) {
    const condition = getNodeText(node.expression, sourceFile);

    // Try to find state assignments in the then/else blocks
    const stateChanges: string[] = [];
    const findAssignments = (block: ts.Node) => {
      visitNodes(
        block,
        (n) => {
          if (
            ts.isBinaryExpression(n) &&
            n.operatorToken.kind === ts.SyntaxKind.EqualsToken
          ) {
            let varName = "";
             if (ts.isIdentifier(n.left)) {
                varName = n.left.text;
             } else if (ts.isPropertyAccessExpression(n.left)) {
                varName = n.left.name.text;
             }

            if (varName) {
                const value = getNodeText(n.right, sourceFile);
                if (
                  varName.toLowerCase().includes("state") ||
                  varName.toLowerCase().includes("open")
                ) {
                  stateChanges.push(`${varName}=${value}`);
                }
            }
          }
        },
        sourceFile
      );
    };

    findAssignments(node.thenStatement);
    if (node.elseStatement) {
      findAssignments(node.elseStatement);
    }

    if (stateChanges.length > 0) {
      return {
        from: "unknown",
        to: stateChanges[0],
        trigger: "conditional",
        condition,
        lineNumber: getLineNumber(node, sourceFile),
      };
    }
  }

  return null;
}

/**
 * Extract component name from file path
 */
function extractComponentName(filePath: string): string {
  const parts = filePath.split("/");
  const fileName = parts[parts.length - 1];
  return fileName.replace(/\.(js|ts|mjs|cjs)$/, "");
}

/**
 * Type definitions for DSFR JavaScript behavior analysis
 */

/**
 * Represents an event listener detected in the component
 */
export interface EventListener {
  /** Event type (e.g., 'click', 'focus', 'blur', 'keydown') */
  eventType: string;
  /** Target element selector or description */
  target: string;
  /** Handler function name or description */
  handler: string;
  /** Line number in source file */
  lineNumber: number;
  /** Whether the listener is added or removed */
  action: 'add' | 'remove';
}

/**
 * Represents a state variable in the component
 */
export interface StateVariable {
  /** Variable name */
  name: string;
  /** Initial value (if detectable) */
  initialValue?: string;
  /** Variable type (if detectable) */
  type?: string;
  /** Line number where declared */
  lineNumber: number;
  /** Scope (e.g., 'class', 'function', 'global') */
  scope: string;
}

/**
 * Represents a DOM manipulation operation
 */
export interface DomManipulation {
  /** Type of manipulation (e.g., 'setAttribute', 'classList.add', 'textContent') */
  type: string;
  /** Target element selector or description */
  target: string;
  /** Property or attribute being modified */
  property: string;
  /** Value being set (if literal) */
  value?: string;
  /** Line number in source file */
  lineNumber: number;
}

/**
 * Represents an ARIA attribute change
 */
export interface AriaChange {
  /** ARIA attribute name (e.g., 'aria-expanded', 'aria-hidden') */
  attribute: string;
  /** Target element selector or description */
  target: string;
  /** New value (if literal) */
  value?: string;
  /** Line number in source file */
  lineNumber: number;
  /** Context (e.g., 'on click', 'on focus') */
  context?: string;
}

/**
 * Represents a state transition in the component
 */
export interface StateTransition {
  /** Starting state */
  from: string;
  /** Ending state */
  to: string;
  /** Trigger (e.g., 'click', 'timeout', 'external') */
  trigger: string;
  /** Condition (if any) */
  condition?: string;
  /** Line number in source file */
  lineNumber: number;
}

/**
 * Complete behavior pattern analysis result
 */
export interface BehaviorPattern {
  /** Component name or file name */
  componentName: string;
  /** Source file path */
  filePath: string;
  /** Detected event listeners */
  eventListeners: EventListener[];
  /** Detected state variables */
  stateVariables: StateVariable[];
  /** Detected DOM manipulations */
  domManipulations: DomManipulation[];
  /** Detected ARIA attribute changes */
  ariaChanges: AriaChange[];
  /** Detected state transitions */
  stateTransitions: StateTransition[];
  /** Analysis timestamp */
  analyzedAt: string;
  /** Analysis warnings or notes */
  warnings: string[];
}

/**
 * Analysis configuration options
 */
export interface AnalyzerOptions {
  /** Include detailed AST information */
  verbose?: boolean;
  /** Minimum confidence level for detections (0-1) */
  minConfidence?: number;
  /** Include source code snippets in output */
  includeSnippets?: boolean;
}

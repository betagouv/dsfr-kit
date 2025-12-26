export interface PropDefinition {
  name: string;
  type: "string" | "boolean" | "number" | "array" | "object";
  required: boolean;
  default?: any;
  description?: string;
}

export interface SlotDefinition {
  name: string;
  description?: string;
}

export interface StateDefinition {
  name: string;
  type: string;
  default?: string; // Expression or value
  description?: string;
}

export interface EventDefinition {
  name: string;
  description?: string;
}

export interface AttributeMap {
  [key: string]: string | boolean | number;
}

export type LogicNodeType =
  | "element"
  | "text"
  | "conditional"
  | "loop"
  | "slot";

export interface BaseNode {
  type: LogicNodeType;
}

export interface ElementNode extends BaseNode {
  type: "element";
  tag: string;
  classes?: string[];
  attributes?: AttributeMap;
  events?: Record<string, string>; // eventName -> handlerName
  children?: LogicNode[];
}

export interface TextNode extends BaseNode {
  type: "text";
  content: string; // Can contain interpolation patterns like {props.foo}
}

export interface SlotNode extends BaseNode {
  type: "slot";
  name: string;
}

export interface ConditionalNode extends BaseNode {
  type: "conditional";
  condition: string;
  trueBranch: LogicNode[];
  falseBranch?: LogicNode[];
}

export interface LoopNode extends BaseNode {
  type: "loop";
  items: string;
  variable: string;
  children: LogicNode[];
}

export type LogicNode =
  | ElementNode
  | TextNode
  | SlotNode
  | ConditionalNode
  | LoopNode;

export interface ComponentInterfaceDescription {
  name: string;
  tier: 1 | 2 | 3;
  props: PropDefinition[];
  slots: SlotDefinition[];
  state: StateDefinition[];
  events: EventDefinition[];
  structure: LogicNode;
}

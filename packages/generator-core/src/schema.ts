import { z } from "zod";

export const PropDefinitionSchema = z.object({
  name: z.string(),
  type: z.enum(["string", "boolean", "number", "array", "object"]),
  required: z.boolean(),
  default: z.any().optional(),
  description: z.string().optional(),
});

export const SlotDefinitionSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

export const StateDefinitionSchema = z.object({
  name: z.string(),
  type: z.string(),
  default: z.string().optional(),
  description: z.string().optional(),
});

export const EventDefinitionSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
});

// Recursive schema for LogicNode needs lazy evaluation
export const LogicNodeSchema: z.ZodType<any> = z.lazy(() =>
  z.union([
    ElementNodeSchema,
    TextNodeSchema,
    SlotNodeSchema,
    ConditionalNodeSchema,
    LoopNodeSchema,
  ]),
);

export const ElementNodeSchema = z.object({
  type: z.literal("element"),
  tag: z.string(),
  classes: z.array(z.string()).optional(),
  attributes: z
    .record(z.union([z.string(), z.boolean(), z.number()]))
    .optional(), // AttributeMap
  events: z.record(z.string()).optional(),
  children: z.array(LogicNodeSchema).optional(),
});

export const TextNodeSchema = z.object({
  type: z.literal("text"),
  content: z.string(),
});

export const SlotNodeSchema = z.object({
  type: z.literal("slot"),
  name: z.string(),
});

export const ConditionalNodeSchema = z.object({
  type: z.literal("conditional"),
  condition: z.string(),
  trueBranch: z.array(LogicNodeSchema),
  falseBranch: z.array(LogicNodeSchema).optional(),
});

export const LoopNodeSchema = z.object({
  type: z.literal("loop"),
  items: z.string(),
  variable: z.string(),
  children: z.array(LogicNodeSchema),
});

export const ComponentInterfaceDescriptionSchema = z.object({
  name: z.string(),
  tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  props: z.array(PropDefinitionSchema),
  slots: z.array(SlotDefinitionSchema),
  state: z.array(StateDefinitionSchema),
  events: z.array(EventDefinitionSchema),
  structure: LogicNodeSchema,
});

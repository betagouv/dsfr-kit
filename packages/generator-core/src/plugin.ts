import type { ComponentInterfaceDescription } from "./cid.js";

export interface GeneratorPlugin {
  name: string;
  generate(
    cid: ComponentInterfaceDescription,
    options?: any,
  ): Promise<string> | string;
}

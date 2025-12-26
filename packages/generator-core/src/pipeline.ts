import { ComponentInterfaceDescription } from "./cid.js";
import { parseEjsSource } from "./parser/ejs-parser.js";
import { parseTemplateToStructure } from "./parser/template-parser.js";
// import { ComponentInterfaceDescriptionSchema } from './schema.js';
import { GeneratorPlugin } from "./plugin.js";
import { findSource } from "./source-locator.js";

export async function runGeneratorPipeline(
  componentName: string,
  plugins: GeneratorPlugin[],
): Promise<Map<string, string>> {
  // 1. Locate Source
  const source = findSource(componentName);
  if (!source) throw new Error(`Source not found for ${componentName}`);

  // 2. Parse EJS
  const { props, template } = parseEjsSource(source.ejsPath);

  // 3. Parse Structure
  const structure = parseTemplateToStructure(template);

  // 4. Construct CID
  const cid: ComponentInterfaceDescription = {
    name: componentName,
    tier: 2, // TOOD: Infer complexity tier
    props,
    slots: [], // TODO: Infer slots from <content> or similar
    state: [], // TODO: Infer state from JS analysis
    events: [], // TODO: Infer events
    structure,
  };

  // 5. Validate
  // ComponentInterfaceDescriptionSchema.parse(cid);

  // 6. Generate
  const results = new Map<string, string>();
  for (const plugin of plugins) {
    const output = await plugin.generate(cid);
    results.set(plugin.name, output);
  }

  return results;
}

#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import {
  findSource,
  generateLitComponent,
  parseEjs,
} from "@dsfr-kit/generator";
import { Command } from "commander";

const program = new Command();

program
  .name("dsfr-kit")
  .description("Diff creation and management for dsfr-kit")
  .version("0.0.1");

program
  .command("generate")
  .description("Generate a DSFR web component")
  .argument("<component>", "Name of the component to generate")
  .option("-o, --output <dir>", "Output directory to write the file to")
  .action(async (component, options) => {
    console.log(`Generating component: ${component}`);
    const source = findSource(component);
    if (!source) {
      console.error(`Could not find source for ${component}`);
      process.exit(1);
    }

    console.log("Found source:", source);

    // Import dynamically to avoid circular issues or loading if not needed (though using sync logic in parser)
    // For now we use the exported function from generator
    // We need to import 'parseEjs' from the logic we just added.
    // Since we are running compiled code, we need to ensure the interface is available.
    const parsedEjs = parseEjs(source.ejsPath);
    console.log("Parsed EJS Props:", parsedEjs.properties);

    // Generate code
    // Dynamically import to get the new function if we didn't export it?
    // We updated index.ts to export it, so we can import it at top.
    const generatedCode = generateLitComponent(source, parsedEjs);

    if (options.output) {
      const outDir = path.resolve(process.cwd(), options.output);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }

      const fileName = `dsfr-${component}.ts`;
      const outFile = path.join(outDir, fileName);

      fs.writeFileSync(outFile, generatedCode);
      console.log(`Component written to: ${outFile}`);
    } else {
      console.log("Generated Code:", generatedCode);
    }

    // But first let's just log.
    // Wait, I need to update import statement.
    // Using import() here to avoid editing top of file repeatedly? No, explicit import is better.
    console.log("Parsed EJS Template Length:", parsedEjs.template.length);
  });

// Wait, I can't import inside the action easily without async import,
// but I can import at top level if I update the import statement.
// The skeleton index.ts in cli already imports findSource. I need to update it to import parseEjs.

program.parse();

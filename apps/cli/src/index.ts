#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { runGeneratorPipeline } from "@dsfr-kit/generator-core";
import { LitGeneratorPlugin } from "@dsfr-kit/generator-lit";
import { Command } from "commander";

const program = new Command();

program
  .name("dsfr-kit")
  .description("Diff creation and management for dsfr-kit")
  .version("0.0.1");

program
  .command("generate")
  .description("Generate a DSFR lit component")
  .argument("<component>", "Name of the component to generate")
  .option("-o, --output <dir>", "Output directory to write the file to")
  .action(async (component, options) => {
    console.log(`Generating component: ${component}`);

    try {
      const litPlugin = new LitGeneratorPlugin();
      const results = await runGeneratorPipeline(component, [litPlugin]);
      const computedCode = results.get("lit");

      if (!computedCode) {
        console.error("Lit plugin failed to produce output");
        process.exit(1);
      }

      if (options.output) {
        const outDir = path.resolve(process.cwd(), options.output);
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }

        const fileName = `dsfr-${component}.ts`;
        const outFile = path.join(outDir, fileName);

        fs.writeFileSync(outFile, computedCode);
        console.log(`Component written to: ${outFile}`);
      } else {
        console.log("Generated Code:\n", computedCode);
      }
    } catch (e: any) {
      console.error("Generation Failed:", e.message);
      process.exit(1);
    }
  });

program.parse();

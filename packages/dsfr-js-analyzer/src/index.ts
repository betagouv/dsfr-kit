#!/usr/bin/env node

/**
 * CLI entry point for DSFR JavaScript analyzer
 */

import { analyzeFile } from "./analyzer.js";

/**
 * Main CLI function
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Usage: dsfr-analyze <file-path> [options]");
    console.error("");
    console.error("Options:");
    console.error("  --verbose         Include detailed analysis information");
    console.error("  --min-confidence  Minimum confidence level (0-1)");
    process.exit(1);
  }

  const filePath = args[0];

  try {
    const result = analyzeFile(filePath);

    // Output JSON to stdout for Python integration
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error analyzing file:", error);
    process.exit(1);
  }
}

// Run CLI
main();

import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

export interface SourceLocation {
  componentName: string;
  ejsPath: string;
  variableName: string; // e.g. 'accordion' for 'accordion.ejs'
}

export function findSource(
  componentName: string,
  rootDir: string = process.cwd(),
): SourceLocation | null {
  let pkgPath: string | undefined;

  // Strategy 1: Standard resolution (from this package's node_modules)
  try {
    pkgPath = require.resolve("@gouvfr/dsfr/package.json");
  } catch (e) {
    // Strategy 2: Look in rootDir (monorepo root)
    try {
      pkgPath = require.resolve("@gouvfr/dsfr/package.json", {
        paths: [rootDir],
      });
    } catch (e2) {
      console.error(
        "Failed to resolve @gouvfr/dsfr from both default and root paths.",
      );
      return null;
    }
  }

  try {
    const dsfrRoot = path.dirname(pkgPath!); // pkgPath is guaranteed to be defined here
    // Construct common paths
    // e.g. src/dsfr/component/accordion/template/ejs/accordion.ejs
    const componentDir = path.join(
      dsfrRoot,
      "src",
      "dsfr",
      "component",
      componentName,
    );

    // Check EJS file
    const ejsPath = path.join(
      componentDir,
      "template",
      "ejs",
      `${componentName}.ejs`,
    );

    // Some components might have a plural directory name or different structure?
    // We can add more heuristics here later.

    if (fs.existsSync(ejsPath)) {
      return {
        componentName,
        ejsPath,
        variableName: componentName,
      };
    } else {
      console.error(`EJS file not found at ${ejsPath}`);
    }
  } catch (e) {
    console.error("Error locating component source:", e);
  }

  return null;
}

import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import type { SourceLocation } from "./source-locator.js";

const require = createRequire(import.meta.url);

export function findStyles(source: SourceLocation): string[] {
  const styles: string[] = [];

  // 1. Component specific style
  // Try to find dist/component/<name>/<name>.min.css
  try {
    const pkgPath = require.resolve("@gouvfr/dsfr/package.json");
    const dsfrRoot = path.dirname(pkgPath);

    const componentCssPath = path.join(
      dsfrRoot,
      "dist",
      "component",
      source.componentName,
      `${source.componentName}.min.css`,
    );

    if (fs.existsSync(componentCssPath)) {
      styles.push(
        `@gouvfr/dsfr/dist/component/${source.componentName}/${source.componentName}.min.css?inline`,
      );
    }
  } catch (e) {
    console.warn("Could not verify style existence", e);
  }

  return styles;
}

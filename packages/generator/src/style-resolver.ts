import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import type { SourceLocation } from "./source-locator.js";

const require = createRequire(import.meta.url);

export function findStyles(source: SourceLocation): string[] {
  const styles: string[] = [];

  // 1. Core styles (always needed)
  styles.push("@gouvfr/dsfr/dist/core/core.min.css?inline");

  // 2. Component specific style
  // Try to find dist/component/<name>/<name>.min.css
  // or dist/utility/<name>/<name>.min.css for some?

  // We need to locate the dsfr package root again or use the relative path strategy?
  // Since we are generating code that imports these, we just need the string import path.
  // BUT we should verify if the file exists to be safe.

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

    // What about 'utility' styles? or 'scheme'?
    // scheme is usually needed.
    styles.push("@gouvfr/dsfr/dist/scheme/scheme.min.css?inline");

    // icons? hard to know which ones without parsing HTML classes.
    // Heuristic: if 'fr-icon-' found in template, might need icons.
    // For now, let's keep it minimal.
  } catch (e) {
    console.warn("Could not verify style existence", e);
  }

  return styles;
}

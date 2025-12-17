/**
 * Test library demonstrating workspace package dependencies
 */

import { hello, version } from "@dsfr-kit/core";

export const greet = (): string => {
  return `${hello()} - Test lib using core v${version}`;
};

export const testWorkspace = (): boolean => {
  // Verify we can import from workspace package
  return typeof hello === "function" && typeof version === "string";
};

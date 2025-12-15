/**
 * Core utilities for DSFR component library
 */

export const hello = (): string => {
	return "Hello from @dsfr-kit/core";
};

export const version = "0.1.0";

// Test incremental rebuild
export const timestamp = (): string => {
	return new Date().toISOString();
};

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	build: {
		lib: {
			entry: "src/index.ts",
			name: "DsfrWebComponents",
			fileName: (format) => `dsfr-web-components.${format}.js`,
		},
		rollupOptions: {
			// Make sure to externalize deps that shouldn't be bundled/
			// into your library
			external: [],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {},
			},
		},
	},
	plugins: [dts({ rollupTypes: true })],
});

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "DsfrLit",
      fileName: (format) => `dsfr-lit.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["lit", /^lit\/.*/, "@lit/reactive-element", /^@lit\/.*/],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          lit: "Lit",
        },
      },
    },
  },
  plugins: [dts({ rollupTypes: true })],
});

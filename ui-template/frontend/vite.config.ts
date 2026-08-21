import { defineConfig } from "vite";

// No plugins needed for this minimal setup.
export default defineConfig({
  server: {
    port: 5173,
    strictPort: false
  },
  preview: {
    port: 5173,
    strictPort: false
  }
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: "./setupTests.js",
    environment: "jsdom",
    coverage: {
      reporter: ["text", "html"],
    },
  },
});

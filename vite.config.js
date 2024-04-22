import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./test-setup.js",
    coverage: {
      provider: "v8",
      exclude: ["**/*.config.js", "**/*.eslintrc.cjs", "**/main.jsx"],
    },
  },
});

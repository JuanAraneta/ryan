import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.ts", "**/*.test.tsx"],
    environment: "jsdom",
    reporters: "verbose",
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./") }],
  },
});

import { resolve } from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { getHtmlEntryPaths } from "./src/seo.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: getHtmlEntryPaths().map((entryPath) => resolve(entryPath)),
    },
  },
});

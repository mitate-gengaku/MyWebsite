// @ts-check
import path from "path";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  server: {
    port: 3000,
    host: true,
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(new URL(".", import.meta.url).pathname, "src"),
      },
    },
  },
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
  },
});

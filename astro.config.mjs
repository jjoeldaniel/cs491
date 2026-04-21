// @ts-check
import { defineConfig } from "astro/config";

import clerk from "@clerk/astro";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
      sessionKVBindingName: 'SESSION', 
    }),
  integrations: [clerk()],
  vite: {
    plugins: [tailwindcss()],
  },
});

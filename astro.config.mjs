// @ts-check
import { defineConfig } from "astro/config";

import clerk from "@clerk/astro";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [clerk()],
  vite: {
    plugins: [tailwindcss()],
  },
});
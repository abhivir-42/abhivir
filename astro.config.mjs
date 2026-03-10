import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare({
    imageService: "compile",
  }),
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [
    react(),
    tailwind(),
    mdx(),
  ],
});

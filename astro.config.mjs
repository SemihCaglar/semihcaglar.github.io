// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this if a custom domain is connected later; everything else
  // (sitemap, canonical URLs, Open Graph tags) derives from this value.
  site: 'https://semihcaglar.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});
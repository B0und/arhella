import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.arhella.xyz/',
  integrations: [mdx(), sitemap(), tailwind({
    config: {
      applyBaseStyles: true
    }
  }), react()]
});
// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';

import analogjsangular from '@analogjs/astro-angular';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [analogjsangular(), mdx({
    shikiConfig: {
      theme: 'night-owl',
      wrap: false,
    },
    gfm: false,
  }),],
  image: {
    service: sharpImageService(),
  },
  redirects: {
    '/tutorial': '/tutorial/01-welcome'
  },
  markdown: {
    shikiConfig: {
      theme: 'night-owl',
      wrap: false,
    },
  }
});

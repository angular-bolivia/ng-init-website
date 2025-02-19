// @ts-check
import { defineConfig, sharpImageService } from 'astro/config';

import analogjsangular from '@analogjs/astro-angular';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [analogjsangular()],
  image: {
    service: sharpImageService(),
  },
});

// @ts-check
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  server: {
    port: 3000,
    host: true
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
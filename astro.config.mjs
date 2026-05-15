// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://karstenvds.github.io',
  base: '/georgs_catering',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})
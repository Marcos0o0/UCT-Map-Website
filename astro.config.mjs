// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'http://teclab.uct.cl',
  base: '/~mgodoy2025/',
  vite: {
    plugins: [tailwindcss()]
  }
});
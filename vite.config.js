/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import faviconsPlugin from 'vite-plugin-favicon';
import tailwindPlugin from 'vite-plugin-tailwind';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    faviconsPlugin(),
    tailwindPlugin(),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});

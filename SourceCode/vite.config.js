// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: '/src/jQuery-plus-repeater.js',
      fileName: (format) => `jQuery-plus-repeater.min.js`,
      name: 'jQueryPlusRepeater'
    },
    minify: true,
    outDir: 'build'
  },
});
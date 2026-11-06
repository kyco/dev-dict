import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const isUmd = process.env.BUILD_UMD === 'true'

  return {
    plugins: [!isUmd && dts()],
    resolve: {
      alias: {
        '@': resolve(import.meta.dirname, './src'),
      },
    },
    build: {
      lib: {
        entry: process.env.BUILD_UMD
          ? resolve(import.meta.dirname, 'src/umd.ts')
          : {
              index: resolve(import.meta.dirname, 'src/index.ts'),
              'terms-entry': resolve(import.meta.dirname, 'src/terms-entry.ts'),
              'types-entry': resolve(import.meta.dirname, 'src/types-entry.ts'),
              'tags-entry': resolve(import.meta.dirname, 'src/tags-entry.ts'),
            },
        name: 'devdict',
        formats: process.env.BUILD_UMD ? ['umd'] : ['es'],
        fileName: process.env.BUILD_UMD ? () => 'dev-dict.min.js' : undefined,
      },
      rollupOptions: {
        output: process.env.BUILD_UMD
          ? {
              exports: 'named',
            }
          : {
              entryFileNames: '[name].js',
              exports: 'named',
            },
      },
      minify: true,
      sourcemap: true,
      outDir: 'dist',
      emptyOutDir: !process.env.BUILD_UMD,
    },
  }
})

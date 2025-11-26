import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'

  return {
    root: isDev ? 'examples' : undefined,
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@data': resolve(__dirname, './data/index.ts'),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'devdict',
        formats: ['es', 'umd'],
        fileName: (format) => (format === 'umd' ? 'dev-dict.min.js' : 'index.js'),
      },
      // rollupOptions: {
      //   external: [],
      //   output: {
      //     globals: {},
      //     exports: 'named',
      //   },
      // },
      minify: true,
      sourcemap: true,
      outDir: 'dist',
      emptyOutDir: true,
    },
  }
})

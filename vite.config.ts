import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  const isUmd = process.env.BUILD_UMD === 'true'

  return {
    root: isDev ? 'examples' : undefined,
    plugins: [!isUmd && dts()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    build: {
      lib: {
        entry: process.env.BUILD_UMD
          ? resolve(__dirname, 'src/umd.ts')
          : {
              index: resolve(__dirname, 'src/index.ts'),
              'terms-entry': resolve(__dirname, 'src/terms-entry.ts'),
              'types-entry': resolve(__dirname, 'src/types-entry.ts'),
              'tags-entry': resolve(__dirname, 'src/tags-entry.ts'),
              'utils-entry': resolve(__dirname, 'src/utils-entry.ts'),
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

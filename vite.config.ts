import { defineConfig } from 'vite-plus'
import { defineFmtConfig, defineLintConfig } from './src/index.ts'

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  pack: {
    dts: {
      tsgo: true
    },
    deps: {
      dts: {
        neverBundle: ['esbuild']
      }
    },
    exports: true
  },
  fmt: defineFmtConfig(),
  lint: defineLintConfig({
    jsdoc: {
      typescript: 'syntax',
      error: true
    },
    regexp: {}
  })
})

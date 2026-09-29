import { defineConfig } from 'vite-plus'
import { defineFmtConfig, defineLintConfig } from './src/index.ts'

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  pack: {
    dts: {
      generator: 'tsgo'
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

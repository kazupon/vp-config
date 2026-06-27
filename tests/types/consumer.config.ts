import { defineConfig } from 'vite-plus'
import { defineFmtConfig, defineLintConfig } from '../../src/index.ts'

export default defineConfig({
  lint: defineLintConfig({
    jsdoc: {},
    regexp: {},
    import: {},
    typescript: {},
    overrides: [
      {
        files: ['**/*.ts'],
        rules: {
          curly: 'warn'
        }
      }
    ]
  }),
  fmt: defineFmtConfig({
    printWidth: 100
  })
})

import { defineConfig } from 'vite-plus'
import { fmt, defineLintConfig } from './src/index.ts'
import tsdownConfig from './tsdown.config.ts'

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  pack: tsdownConfig,
  fmt,
  lint: defineLintConfig()
})

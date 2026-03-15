import { defineConfig } from 'vite-plus'
import { fmt } from './src/index.ts'
import tsdownConfig from './tsdown.config.ts'

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  fmt,
  pack: tsdownConfig,
  lint: { options: { typeAware: true, typeCheck: true } }
})

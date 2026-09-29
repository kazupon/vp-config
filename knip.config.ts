import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['src/index.ts', 'tests/**/*.test.ts', 'tests/types/**/*.ts', 'vite.config.ts'],
  ignoreDependencies: ['@kazupon/eslint-plugin', '@ox-jsdoc/eslint-plugin-jsdoc', 'pkg-pr-new'],
  // The `vite` catalog entry is referenced from `overrides` in pnpm-workspace.yaml
  ignoreIssues: {
    'pnpm-workspace.yaml': ['catalog']
  }
}

export default config

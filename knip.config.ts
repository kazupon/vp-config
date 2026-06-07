import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: [
    '@kazupon/eslint-plugin',
    '@ox-jsdoc/eslint-plugin-jsdoc',
    'pkg-pr-new',
    'vitest'
  ]
}

export default config

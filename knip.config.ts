import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['src/index.ts', 'tests/**/*.test.ts'],
  ignoreDependencies: [
    '@kazupon/eslint-plugin',
    '@ox-jsdoc/eslint-plugin-jsdoc',
    '@oxc-project/types',
    '@types/chai',
    '@types/deep-eql',
    'assertion-error',
    'oxfmt',
    'oxlint',
    'pkg-pr-new'
  ]
}

export default config

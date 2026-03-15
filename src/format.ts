/**
 * Default code formatting configuration for oxfmt in Vite Plus.
 *
 * @module format
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

// TODO: workaround for vite-plus-test DTS bundling issue (missing ./aria-role.js)
// import type { UserConfig } from 'vite-plus'
// const config: UserConfig['fmt'] = {
const config: {
  semi?: boolean
  singleQuote?: boolean
  trailingComma?: 'all' | 'none'
  endOfLine?: 'lf' | 'crlf' | 'cr'
  arrowParens?: 'always' | 'avoid'
} = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'lf',
  arrowParens: 'avoid'
}

export default config

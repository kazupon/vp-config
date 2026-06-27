/**
 * Default code formatting configuration for Vite Plus.
 *
 * This module provides utilities to define oxfmt configurations.
 *
 * @example
 * ```ts
 * import { defineConfig } from 'vite-plus'
 * import { defineFmtConfig } from '@kazupon/vp-config'
 *
 * export default defineConfig({
 *   fmt: defineFmtConfig({
 *     // Custom options of `vp fmt` (oxfmt) ...
 *   })
 * })
 * ```
 *
 * @module format
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { FmtConfigOptions, VpFmtConfig } from './types.ts'

/**
 * Default code formatting configuration for oxfmt in Vite Plus.
 */
export const defaultFmtConfig = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'lf',
  arrowParens: 'avoid',
  proseWrap: 'never'
} satisfies FmtConfigOptions

/**
 * Define format configuration for Vite Plus.
 *
 * If an options is not provided, the {@link defaultFmtConfig | default configuration} be used.
 *
 * @param options - {@link FmtConfigOptions} options for code formatting
 * @returns A {@link VpFmtConfig} plain configuration object for oxfmt in Vite Plus
 */
export function defineFmtConfig(options: FmtConfigOptions = {}): VpFmtConfig {
  return { ...defaultFmtConfig, ...options }
}

export type { FmtConfigOptions, VpFmtConfig } from './types.ts'

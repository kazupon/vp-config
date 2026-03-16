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

import type { UserConfig } from 'vite-plus'

type FormactConfig = NonNullable<UserConfig['fmt']>

/**
 * Default code formatting configuration for oxfmt in Vite Plus.
 */
export const defaultFmtConfig = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'lf',
  arrowParens: 'avoid'
} as const satisfies FormactConfig

/**
 * Define format configuration for Vite Plus.
 *
 * If an options is not provided, the {@link defaultFmtConfig | default configuration} be used.
 *
 * @param options - {@link FormactConfig} options for code formatting
 * @returns A {@link FormactConfig} configuration for oxfmt in Vite Plus
 */
export function defineFmtConfig(options: FormactConfig = {}): FormactConfig {
  return { ...defaultFmtConfig, ...options }
}

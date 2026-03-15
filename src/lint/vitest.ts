/**
 * Preset of Vitest related lint configuration
 *
 * @module lint/vitest
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { OxlintOverride } from 'vite-plus/lint'

/**
 * Lint options for {@link vitest}.
 */
export interface VitestLintOptions {
  /**
   * Additional files to include in the Vitest linting.
   * default, see {@link defaultVitestTargetFiles}
   */
  files?: OxlintOverride['files']
}

/**
 * Default files to include in the Vitest linting.
 */
export const defaultVitestTargetFiles = ['**/*.{test,spec}.{ts,tsx}'] as const satisfies string[]

/**
 * Lint Configuration for vitest plugin.
 *
 * @param options - {@link VitestLintOptions} to customize the Vitest lint configuration.
 * @returns An array of {@link OxlintOverride} for Vitest linting.
 */
export function vitest(options: VitestLintOptions = {}): OxlintOverride[] {
  const { files = defaultVitestTargetFiles } = options
  const overrides: OxlintOverride[] = [
    {
      files: ['**/*.{test,spec}.{ts,tsx}', ...files],
      plugins: ['vitest']
    }
  ]
  return overrides
}

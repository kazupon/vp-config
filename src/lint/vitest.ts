/**
 * Preset of Vitest related lint configuration
 *
 * @module lint/vitest
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import { normalizeFilePatterns } from './normalize.ts'

import type { FilePattern, LintOverrideOptions } from '../types.ts'

/**
 * Lint options for {@link vitest}.
 */
export interface VitestLintOptions {
  /**
   * Additional files to include in the Vitest linting.
   * default, see {@link defaultVitestTargetFiles}
   */
  files?: FilePattern
}

/**
 * Default files to include in the Vitest linting.
 */
export const defaultVitestTargetFiles = ['**/*.{test,spec}.{ts,tsx}'] satisfies FilePattern

/**
 * Lint Configuration for vitest plugin.
 *
 * @param options - {@link VitestLintOptions} to customize the Vitest lint configuration.
 * @returns An array of {@link LintOverrideOptions} for Vitest linting.
 */
export function vitest(options: VitestLintOptions = {}): LintOverrideOptions[] {
  const { files: userFiles } = options
  const files = userFiles
    ? ['**/*.{test,spec}.{ts,tsx}', ...normalizeFilePatterns(userFiles)]
    : defaultVitestTargetFiles
  const overrides: LintOverrideOptions[] = [
    {
      files,
      plugins: ['vitest']
    }
  ]
  return overrides
}

/**
 * Preset of TypeScript import related lint configuration
 *
 * @module lint/import
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import { normalizeFilePatterns } from './normalize.ts'

import type { FilePattern, LintOverrideOptions, RuleMap } from '../types.ts'

/**
 * Lint options for import rules.
 */
export interface ImportLintOptions {
  /**
   * Additional files to apply import-related linting.
   * default, see {@link defaultImportTargetFiles}
   */
  files?: FilePattern
  /**
   * Additional rules to merge into the import rule set.
   */
  rules?: RuleMap
}

/**
 * Default files to apply import linting.
 */
export const defaultImportTargetFiles = [
  '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
] satisfies FilePattern

/**
 * Default import lint rules.
 */
export const defaultImportRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level']
} satisfies RuleMap

/**
 * Lint configuration for import-related rules.
 *
 * @param options - {@link ImportLintOptions} to customize the import lint configuration.
 * @returns An array of {@link LintOverrideOptions} for import-related linting.
 */
export function imports(options: ImportLintOptions = {}): LintOverrideOptions[] {
  const { files = defaultImportTargetFiles, rules = {} } = options
  return [
    {
      files: normalizeFilePatterns(files),
      rules: {
        ...defaultImportRules,
        ...rules
      }
    }
  ]
}

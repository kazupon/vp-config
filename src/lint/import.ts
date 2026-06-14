/**
 * Preset of TypeScript import related lint configuration
 *
 * @module lint/import
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { OxlintConfig, OxlintOverride } from 'vite-plus/lint'

/**
 * Lint options for import rules.
 */
export interface ImportLintOptions {
  /**
   * Additional files to apply import-related linting.
   * default, see {@link defaultImportTargetFiles}
   */
  files?: OxlintOverride['files']
  /**
   * Additional rules to merge into the import rule set.
   */
  rules?: OxlintConfig['rules']
}

/**
 * Default files to apply import linting.
 */
export const defaultImportTargetFiles = [
  '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
] as const satisfies string[]

/**
 * Default import lint rules.
 */
export const defaultImportRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level']
} as const satisfies OxlintConfig['rules']

/**
 * Lint configuration for import-related rules.
 *
 * @param options - {@link ImportLintOptions} to customize the import lint configuration.
 * @returns An array of {@link OxlintOverride} for import-related linting.
 */
export function imports(options: ImportLintOptions = {}): OxlintOverride[] {
  const { files = defaultImportTargetFiles, rules = {} } = options
  return [
    {
      files,
      rules: {
        ...defaultImportRules,
        ...rules
      }
    }
  ]
}

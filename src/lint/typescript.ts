/**
 * Preset of TypeScript related lint configuration
 *
 * @module lint/typescript
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { OxlintConfig, OxlintOverride } from 'vite-plus/lint'

/**
 * Lint options for TypeScript.
 */
export interface TypeScriptLintOptions {
  /**
   * Additional files to apply TypeScript linting.
   * default, see {@link defaultTypeScriptTargetFiles}
   */
  files?: OxlintOverride['files']
  /**
   * Additional rules to merge into the TypeScript rule set.
   */
  rules?: OxlintConfig['rules']
}

/**
 * Default files to apply TypeScript linting.
 */
export const defaultTypeScriptTargetFiles = ['**/*.{ts,mts,cts,tsx}'] as const satisfies string[]

/**
 * Default TypeScript lint rules.
 */
export const defaultTypeScriptRules = {
  'typescript/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
  ]
} as const satisfies OxlintConfig['rules']

/**
 * Lint configuration for TypeScript.
 *
 * @param options - {@link TypeScriptLintOptions} to customize the TypeScript lint configuration.
 * @returns An array of {@link OxlintOverride} for TypeScript linting.
 */
export function typescript(options: TypeScriptLintOptions = {}): OxlintOverride[] {
  const { files = defaultTypeScriptTargetFiles, rules = {} } = options
  return [
    {
      files,
      rules: {
        ...defaultTypeScriptRules,
        ...rules
      }
    }
  ]
}

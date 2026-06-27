/**
 * Preset of TypeScript related lint configuration
 *
 * @module lint/typescript
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import { normalizeFilePatterns } from './normalize.ts'

import type { FilePattern, LintOverrideOptions, RuleMap } from '../types.ts'

/**
 * Lint options for TypeScript.
 */
export interface TypeScriptLintOptions {
  /**
   * Additional files to apply TypeScript linting.
   * default, see {@link defaultTypeScriptTargetFiles}
   */
  files?: FilePattern
  /**
   * Additional rules to merge into the TypeScript rule set.
   */
  rules?: RuleMap
}

/**
 * Default files to apply TypeScript linting.
 */
export const defaultTypeScriptTargetFiles = ['**/*.{ts,mts,cts,tsx}'] satisfies FilePattern

/**
 * Default TypeScript lint rules.
 */
export const defaultTypeScriptRules = {
  'typescript/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', fixStyle: 'separate-type-imports' }
  ]
} satisfies RuleMap

/**
 * Lint configuration for TypeScript.
 *
 * @param options - {@link TypeScriptLintOptions} to customize the TypeScript lint configuration.
 * @returns An array of {@link LintOverrideOptions} for TypeScript linting.
 */
export function typescript(options: TypeScriptLintOptions = {}): LintOverrideOptions[] {
  const { files = defaultTypeScriptTargetFiles, rules = {} } = options
  return [
    {
      files: normalizeFilePatterns(files),
      rules: {
        ...defaultTypeScriptRules,
        ...rules
      }
    }
  ]
}

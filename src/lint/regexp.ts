/**
 * Preset of regexp related lint configuration
 *
 * @module lint/regexp
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import regexpPlugin from 'eslint-plugin-regexp'

import { normalizeFilePatterns } from './normalize.ts'
import { resolveJSPluginSpecifier } from './resolve.ts'

import type { FilePattern, LintOverrideOptions, RuleMap } from '../types.ts'

/**
 * Allowed character range for `eslint-plugin-regexp` settings.
 */
export type RegexpAllowedCharacterRange = 'alphanumeric' | 'all' | `${string}-${string}`

/**
 * Plugin settings for `context.settings.regexp`.
 */
export interface RegexpPluginSettings {
  /**
   * Allowed character ranges for rules such as `regexp/no-obscure-range`
   * and `regexp/prefer-range`.
   *
   * @default 'alphanumeric'
   */
  allowedCharacterRanges?: RegexpAllowedCharacterRange | RegexpAllowedCharacterRange[]
  [key: string]: unknown
}

/**
 * Lint options for regexp.
 */
export interface RegexpLintOptions {
  /**
   * Additional files to apply regexp linting.
   * default, see {@link defaultRegexpTargetFiles}
   */
  files?: FilePattern
  /**
   * Additional rules to merge into the regexp rule set.
   */
  rules?: RuleMap
  /**
   * Plugin settings for `context.settings.regexp`.
   */
  settings?: RegexpPluginSettings
}

/**
 * Default files to apply regexp linting.
 */
export const defaultRegexpTargetFiles = [
  '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
] satisfies FilePattern

const unsupportedOxlintRules = new Set(['prefer-regex-literals'])
const recommendedRules = Object.fromEntries(
  Object.entries(regexpPlugin.configs['flat/recommended'].rules).filter(
    ([rule]) => !unsupportedOxlintRules.has(rule)
  )
) as RuleMap

/**
 * Lint Configuration for `eslint-plugin-regexp`.
 *
 * @param options - {@link RegexpLintOptions} to customize the regexp lint configuration.
 * @returns An array of {@link LintOverrideOptions} for regexp linting.
 */
export function regexp(options: RegexpLintOptions = {}): LintOverrideOptions[] {
  const { files = defaultRegexpTargetFiles, rules = {} } = options
  const overrides: LintOverrideOptions[] = [
    {
      files: normalizeFilePatterns(files),
      jsPlugins: [
        {
          name: 'regexp',
          specifier: resolveJSPluginSpecifier('eslint-plugin-regexp')
        }
      ],
      rules: {
        ...recommendedRules,
        ...rules
      }
    }
  ]
  return overrides
}

/**
 * Lint configuration utilities for Vite Plus.
 *
 * This module provides utilities to define oxlint configurations.
 *
 * @example
 * ```ts
 * import { defineConfig } from 'vite-plus'
 * import { defineLintConfig } from '@kazupon/vp-config'
 *
 * export default defineConfig({
 *   lint: defineLintConfig({
 *     // Custom options of `vp lint` (oxlint) and preset ...
 *   })
 * })
 * ```
 *
 * @module lint
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import { comments, vitest } from './lint/index.ts'

import type { OxlintConfig } from 'vite-plus/lint'
import type { CommentsLintOptions, VitestLintOptions } from './lint/index.ts'

export {
  defaultDirectivesOfPreferScopeOnTagCommentRule,
  defaultIgnoreFilesOfEnforceHeaderCommentRule,
  defaultTagsOfNoTagCommentsRule,
  defaultTagsOfPreferScopeOnTagCommentRule,
  defaultVitestTargetFiles
} from './lint/index.ts'

export type { CommentsLintOptions, VitestLintOptions } from './lint/index.ts'

/**
 * Options for {@link defineLintConfig}
 */
export type LintConfigOptions = OxlintConfig & {
  vitest?: VitestLintOptions
  comments?: CommentsLintOptions
}

/**
 * Default options for enabling oxlint builtin plugins in Vite Plus linting.
 */
export const defaultEnableOxlintOptions = {
  typeAware: true,
  typeCheck: true
} as const satisfies OxlintConfig['options']

/**
 * Default enable oxlint builtin plugins for Vite Plus linting.
 */
export const defaultEnableOxlintBuiltinPlugins = [
  'typescript',
  'import',
  'promise',
  'unicorn',
  'node'
] as const satisfies OxlintConfig['plugins']

/**
 * Default oxlint rules for Vite Plus linting.
 */
export const defaultEnableOxlintRules = {
  curly: 'error'
} as const satisfies OxlintConfig['rules']

/**
 * Define lint configuration for Vite Plus.
 *
 * @param options - {@link LintConfigOptions} to customize the lint configuration.
 * @returns An {@link OxlintConfig} configuration
 */
export function defineLintConfig(lintOptions: LintConfigOptions = {}): OxlintConfig {
  const {
    options = defaultEnableOxlintOptions,
    plugins = defaultEnableOxlintBuiltinPlugins,
    rules = defaultEnableOxlintRules,
    ignorePatterns = [],
    vitest: vitestOptions,
    comments: commentsOptions
  } = lintOptions

  return {
    options,
    plugins,
    rules,
    ignorePatterns,
    overrides: [...vitest(vitestOptions), ...comments(commentsOptions)]
  }
}

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

import { comments, jsdoc, vitest } from './lint/index.ts'

import type { OxlintConfig } from 'vite-plus/lint'
import type {
  CommentsLintOptions,
  JSDocLintOptions,
  JSDocPluginSettings,
  VitestLintOptions
} from './lint/index.ts'

type OxlintConfigSettings = NonNullable<OxlintConfig['settings']> & {
  jsdoc?: JSDocPluginSettings
}

export {
  defaultDirectivesOfPreferScopeOnTagCommentRule,
  defaultIgnoreFilesOfEnforceHeaderCommentRule,
  defaultTagsOfNoTagCommentsRule,
  defaultTagsOfPreferScopeOnTagCommentRule,
  defaultJSDocTargetFiles,
  defaultVitestTargetFiles
} from './lint/index.ts'

export type {
  CommentsLintOptions,
  JSDocLintOptions,
  JSDocPluginSettings,
  VitestLintOptions
} from './lint/index.ts'

/**
 * Options for {@link defineLintConfig}
 */
export type LintConfigOptions = OxlintConfig & {
  vitest?: VitestLintOptions
  comments?: CommentsLintOptions
  jsdoc?: JSDocLintOptions
}

/**
 * Default options for enabling oxlint built-in plugins in Vite Plus linting.
 */
export const defaultEnableOxlintOptions = {
  typeAware: true,
  typeCheck: true
} as const satisfies OxlintConfig['options']

/**
 * Default enable oxlint built-in plugins for Vite Plus linting.
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
 * @param lintOptions - {@link LintConfigOptions} to customize the lint configuration.
 * @returns An {@link OxlintConfig} configuration
 */
export function defineLintConfig(lintOptions: LintConfigOptions = {}): OxlintConfig {
  const {
    options = defaultEnableOxlintOptions,
    plugins = defaultEnableOxlintBuiltinPlugins,
    rules = defaultEnableOxlintRules,
    settings = {},
    ignorePatterns = [],
    jsdoc: jsdocOptions,
    vitest: vitestOptions,
    comments: commentsOptions
  } = lintOptions
  const settingsWithJSDoc = settings as OxlintConfigSettings
  const jsdocRules = jsdocOptions ? jsdoc(jsdocOptions) : []
  const jsdocSettings = jsdocOptions ? jsdocOptions.settings : undefined
  const hasJSDocSettings = jsdocOptions !== undefined || settingsWithJSDoc.jsdoc !== undefined
  const hasCustomSettings = Object.keys(settings).length > 0
  const mergedSettings = hasJSDocSettings
    ? {
        ...settings,
        jsdoc: {
          oxParseStrategy: 'batch',
          ...settingsWithJSDoc.jsdoc,
          ...jsdocSettings,
          tagNamePreference: {
            ...Object.assign(
              { template: 'typeParam' },
              settingsWithJSDoc.jsdoc?.tagNamePreference,
              jsdocSettings?.tagNamePreference
            )
          }
        }
      }
    : settings

  return {
    options,
    plugins,
    rules,
    ignorePatterns,
    overrides: [...vitest(vitestOptions), ...comments(commentsOptions), ...jsdocRules],
    ...(hasJSDocSettings || hasCustomSettings
      ? { settings: mergedSettings as OxlintConfig['settings'] }
      : {})
  }
}

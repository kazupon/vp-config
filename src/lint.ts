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

import { comments, imports, jsdoc, regexp, typescript, vitest } from './lint/index.ts'

import type { BaseLintConfigOptions, RuleMap, VpLintConfig } from './types.ts'
import type {
  CommentsLintOptions,
  ImportLintOptions,
  JSDocLintOptions,
  JSDocPluginSettings,
  RegexpLintOptions,
  RegexpPluginSettings,
  TypeScriptLintOptions,
  VitestLintOptions
} from './lint/index.ts'

type LintConfigSettings = Record<string, unknown> & {
  jsdoc?: JSDocPluginSettings
  regexp?: RegexpPluginSettings
}

export {
  defaultDirectivesOfPreferScopeOnTagCommentRule,
  defaultIgnoreFilesOfEnforceHeaderCommentRule,
  defaultTagsOfNoTagCommentsRule,
  defaultTagsOfPreferScopeOnTagCommentRule,
  defaultJSDocTargetFiles,
  defaultRegexpTargetFiles,
  defaultImportTargetFiles,
  defaultImportRules,
  defaultTypeScriptRules,
  defaultTypeScriptTargetFiles,
  defaultVitestTargetFiles
} from './lint/index.ts'

export type {
  BaseLintConfigOptions,
  FilePattern,
  JSPluginEntry,
  LintOverrideOptions,
  RuleConfig,
  RuleMap,
  RuleSeverity,
  VpLintConfig
} from './types.ts'

export type {
  ImportLintOptions,
  CommentsLintOptions,
  JSDocLintOptions,
  JSDocPluginSettings,
  RegexpAllowedCharacterRange,
  RegexpLintOptions,
  RegexpPluginSettings,
  TypeScriptLintOptions,
  VitestLintOptions
} from './lint/index.ts'

/**
 * Options for {@link defineLintConfig}
 */
export type LintConfigOptions = BaseLintConfigOptions & {
  typescript?: TypeScriptLintOptions
  import?: ImportLintOptions
  vitest?: VitestLintOptions
  comments?: CommentsLintOptions
  jsdoc?: JSDocLintOptions
  regexp?: RegexpLintOptions
}

/**
 * Default options for enabling oxlint built-in plugins in Vite Plus linting.
 */
export const defaultEnableOxlintOptions = {
  typeAware: true,
  typeCheck: true
} satisfies Record<string, unknown>

/**
 * Default enable oxlint built-in plugins for Vite Plus linting.
 */
export const defaultEnableOxlintBuiltinPlugins = [
  'typescript',
  'import',
  'promise',
  'unicorn',
  'node'
] satisfies string[]

/**
 * Default oxlint rules for Vite Plus linting.
 */
export const defaultEnableOxlintRules = {
  curly: 'error'
} satisfies RuleMap

/**
 * Define lint configuration for Vite Plus.
 *
 * @param lintOptions - {@link LintConfigOptions} to customize the lint configuration.
 * @returns A {@link VpLintConfig} plain configuration object for oxlint in Vite Plus
 */
export function defineLintConfig(lintOptions: LintConfigOptions = {}): VpLintConfig {
  const {
    options = defaultEnableOxlintOptions,
    plugins = defaultEnableOxlintBuiltinPlugins,
    rules: ruleOptions = {},
    settings = {},
    ignorePatterns = [],
    overrides = [],
    jsdoc: jsdocOptions,
    regexp: regexpOptions,
    typescript: typescriptOptions,
    import: importOptions,
    vitest: vitestOptions,
    comments: commentsOptions,
    ...restLintOptions
  } = lintOptions
  const settingsWithJSDoc = settings as LintConfigSettings
  const jsdocRules = jsdocOptions ? jsdoc(jsdocOptions) : []
  const regexpRules = regexpOptions ? regexp(regexpOptions) : []
  const jsdocSettings = jsdocOptions ? jsdocOptions.settings : undefined
  const regexpSettings = regexpOptions ? regexpOptions.settings : undefined
  const hasJSDocSettings = jsdocOptions !== undefined || settingsWithJSDoc.jsdoc !== undefined
  const hasRegexpSettings = regexpSettings !== undefined || settingsWithJSDoc.regexp !== undefined
  const hasCustomSettings = Object.keys(settings).length > 0
  const mergedSettings = {
    ...settings,
    ...(hasJSDocSettings
      ? {
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
      : {}),
    ...(hasRegexpSettings
      ? {
          regexp: {
            ...settingsWithJSDoc.regexp,
            ...regexpSettings
          }
        }
      : {})
  }

  return {
    ...restLintOptions,
    options,
    plugins,
    rules: {
      ...defaultEnableOxlintRules,
      ...ruleOptions
    },
    ignorePatterns,
    overrides: [
      ...typescript(typescriptOptions),
      ...imports(importOptions),
      ...vitest(vitestOptions),
      ...comments(commentsOptions),
      ...jsdocRules,
      ...regexpRules,
      ...overrides
    ],
    ...(hasJSDocSettings || hasRegexpSettings || hasCustomSettings
      ? { settings: mergedSettings }
      : {})
  }
}

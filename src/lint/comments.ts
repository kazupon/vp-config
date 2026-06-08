/**
 * Preset of comments related lint configuration
 *
 * @module lint/comments
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { OxlintOverride } from 'vite-plus/lint'

import { resolveJSPluginSpecifier } from './resolve.ts'

/**
 * Lint options for comments.
 */
export interface CommentsLintOptions {
  /**
   * `@kazupon/no-tag-comments` rule options.
   */
  noTagComments?: {
    /**
     * Tags to disallow in comments, such as `TODO`, `FIXME`, etc.
     * default, see {@link defaultTagsOfNoTagCommentsRule}
     */
    tags?: string[]
  }
  /**
   * `@kazupon/prefer-scope-on-tag-comment` rule options.
   */
  preferScopeOnTagComment?: {
    /**
     * Tags to enforce scope on, such as `TODO`, `FIXME`, etc.
     * default, see {@link defaultTagsOfPreferScopeOnTagCommentRule}
     */
    tags?: string[]
    /**
     * Directives to enforce scope on, such as `eslint-disable`, `@ts-ignore`, etc.
     * default, see {@link defaultDirectivesOfPreferScopeOnTagCommentRule}
     */
    directives?: string[]
  }
  /**
   * `@kazupon/enforce-header-comment` rule options.
   */
  enForceHeaderComment?: {
    /**
     * Files to ignore for the `@kazupon/enforce-header-comment` rule.
     * default, see {@link defaultIgnoreFilesOfEnforceHeaderCommentRule}
     */
    ignoreFiles?: string[]
  }
}

/**
 * Default `tags` of `@kazupon/no-tag-comments` rule.
 */
export const defaultTagsOfNoTagCommentsRule = ['TODO', 'FIXME', 'BUG'] as const satisfies string[]

/**
 * Default `tags` of `@kazupon/prefer-scope-on-tag-comment` rule.
 */
export const defaultTagsOfPreferScopeOnTagCommentRule = [
  'TODO',
  'FIXME',
  'HACK',
  'BUG',
  'NOTE'
] as const satisfies string[]

/**
 * Default `directives` of `@kazupon/prefer-scope-on-tag-comment` rule.
 * Extended with oxlint directives.
 */
export const defaultDirectivesOfPreferScopeOnTagCommentRule = [
  'oxlint-disable',
  'oxlint-disable-next-line',
  'oxlint-disable-line',
  '@ts-expect-error',
  '@ts-ignore',
  '@ts-nocheck',
  'eslint-disable',
  'eslint-disable-next-line',
  'eslint-disable-line'
] as const satisfies string[]

/**
 * Default `ignoreFiles` for `@kazupon/enforce-header-comment` rule.
 * Extended to include commonly ignored files such as markdown, config, and test files.
 */
export const defaultIgnoreFilesOfEnforceHeaderCommentRule = [
  '**/*.md',
  '**/*.md/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.config.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.{test,spec}-d.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
] as const satisfies string[]

/**
 * Lint configuration for comments.
 *
 * The below plugins  are included:
 * - `@kazupon/eslint-plugin` comment rules for JavaScript and TypeScript files.
 *
 * @param options - {@link CommentsLintOptions} to customize the comments lint configuration.
 * @returns An array of {@link OxlintOverride} for comments linting.
 */
export function comments(options: CommentsLintOptions = {}): OxlintOverride[] {
  const {
    noTagComments = {
      tags: defaultTagsOfNoTagCommentsRule
    },
    preferScopeOnTagComment = {
      tags: defaultTagsOfPreferScopeOnTagCommentRule,
      directives: defaultDirectivesOfPreferScopeOnTagCommentRule
    },
    enForceHeaderComment = {
      ignoreFiles: defaultIgnoreFilesOfEnforceHeaderCommentRule
    }
  } = options

  const overrides: OxlintOverride[] = [
    {
      files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      jsPlugins: [
        {
          name: '@kazupon',
          specifier: resolveJSPluginSpecifier('@kazupon/eslint-plugin')
        }
      ],
      rules: {
        '@kazupon/enforce-header-comment': 'warn',
        '@kazupon/no-tag-comments': [
          'warn',
          {
            tags: noTagComments.tags
          }
        ],
        '@kazupon/prefer-scope-on-tag-comment': [
          'warn',
          {
            tags: preferScopeOnTagComment.tags,
            directives: preferScopeOnTagComment.directives
          }
        ],
        '@kazupon/prefer-inline-code-words-comments': 'error'
      }
    },
    {
      files: enForceHeaderComment.ignoreFiles!,
      rules: {
        '@kazupon/enforce-header-comment': 'off'
      }
    }
  ]
  return overrides
}

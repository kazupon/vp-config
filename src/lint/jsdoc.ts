/**
 * Preset of jsdoc related lint configuration
 *
 * @module lint/jsdoc
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { OxlintConfig, OxlintOverride } from 'vite-plus/lint'

import { resolveJSPluginSpecifier } from './resolve.ts'

type JSDocRuleSeverity = 'warn' | 'error'
type OxlintRules = NonNullable<OxlintConfig['rules']>

/**
 * Plugin settings for `context.settings.jsdoc`.
 */
export interface JSDocPluginSettings {
  /**
   * JSDoc parser strategy for `@ox-jsdoc/eslint-plugin-jsdoc`.
   *
   * @default 'batch'
   */
  oxParseStrategy?: 'single' | 'batch'
  /**
   * JSDoc tag name preferences.
   */
  tagNamePreference?: {
    template?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

/**
 * Lint options for {@link jsdoc}.
 */
export interface JSDocLintOptions {
  /**
   * TypeScript preset for the plugin.
   * - `undefined`: `flat/recommended`
   * - `syntax`: `flat/recommended-typescript`
   * - `flavor`: `flat/recommended-typescript-flavor`
   *
   * @default undefined
   */
  typescript?: 'syntax' | 'flavor'
  /**
   * If true, all default jsdoc rules are reported as errors.
   *
   * @default false
   */
  error?: boolean
  /**
   * Additional files to apply jsdoc linting.
   * default, see {@link defaultJSDocTargetFiles}
   */
  files?: OxlintOverride['files']
  /**
   * Additional rules to merge into the jsdoc rule set.
   */
  rules?: OxlintConfig['rules']
  /**
   * Plugin settings for `context.settings.jsdoc`.
   */
  settings?: JSDocPluginSettings
}

/**
 * Default files to apply jsdoc linting.
 */
export const defaultJSDocTargetFiles = [
  '**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
] as const satisfies string[]

function createRecommendedRuleset(severity: JSDocRuleSeverity): OxlintRules {
  return {
    'ox-jsdoc/check-access': severity,
    'ox-jsdoc/check-alignment': severity,
    'ox-jsdoc/check-examples': 'off',
    'ox-jsdoc/check-indentation': 'off',
    'ox-jsdoc/check-line-alignment': 'off',
    'ox-jsdoc/check-param-names': severity,
    'ox-jsdoc/check-property-names': severity,
    'ox-jsdoc/check-syntax': 'off',
    'ox-jsdoc/check-tag-names': severity,
    'ox-jsdoc/check-template-names': 'off',
    'ox-jsdoc/check-types': severity,
    'ox-jsdoc/check-values': severity,
    'ox-jsdoc/convert-to-jsdoc-comments': 'off',
    'ox-jsdoc/empty-tags': severity,
    'ox-jsdoc/escape-inline-tags': severity,
    'ox-jsdoc/implements-on-classes': severity,
    'ox-jsdoc/imports-as-dependencies': 'off',
    'ox-jsdoc/informative-docs': 'off',
    'ox-jsdoc/lines-before-block': 'off',
    'ox-jsdoc/match-description': 'off',
    'ox-jsdoc/match-name': 'off',
    'ox-jsdoc/multiline-blocks': severity,
    'ox-jsdoc/no-bad-blocks': 'off',
    'ox-jsdoc/no-blank-block-descriptions': 'off',
    'ox-jsdoc/no-blank-blocks': 'off',
    'ox-jsdoc/no-defaults': severity,
    'ox-jsdoc/no-missing-syntax': 'off',
    'ox-jsdoc/no-multi-asterisks': severity,
    'ox-jsdoc/no-restricted-syntax': 'off',
    'ox-jsdoc/no-types': 'off',
    'ox-jsdoc/no-undefined-types': severity,
    'ox-jsdoc/prefer-import-tag': 'off',
    'ox-jsdoc/reject-any-type': severity,
    'ox-jsdoc/reject-function-type': severity,
    'ox-jsdoc/require-asterisk-prefix': 'off',
    'ox-jsdoc/require-description': 'off',
    'ox-jsdoc/require-description-complete-sentence': 'off',
    'ox-jsdoc/require-example': 'off',
    'ox-jsdoc/require-file-overview': 'off',
    'ox-jsdoc/require-hyphen-before-param-description': 'off',
    'ox-jsdoc/require-jsdoc': severity,
    'ox-jsdoc/require-next-description': 'off',
    'ox-jsdoc/require-next-type': severity,
    'ox-jsdoc/require-param': severity,
    'ox-jsdoc/require-param-description': severity,
    'ox-jsdoc/require-param-name': severity,
    'ox-jsdoc/require-param-type': severity,
    'ox-jsdoc/require-property': severity,
    'ox-jsdoc/require-property-description': severity,
    'ox-jsdoc/require-property-name': severity,
    'ox-jsdoc/require-property-type': severity,
    'ox-jsdoc/require-rejects': 'off',
    'ox-jsdoc/require-returns': severity,
    'ox-jsdoc/require-returns-check': severity,
    'ox-jsdoc/require-returns-description': severity,
    'ox-jsdoc/require-returns-type': severity,
    'ox-jsdoc/require-tags': 'off',
    'ox-jsdoc/require-template': 'off',
    'ox-jsdoc/require-template-description': 'off',
    'ox-jsdoc/require-throws': 'off',
    'ox-jsdoc/require-throws-description': 'off',
    'ox-jsdoc/require-throws-type': severity,
    'ox-jsdoc/require-yields': severity,
    'ox-jsdoc/require-yields-check': severity,
    'ox-jsdoc/require-yields-description': 'off',
    'ox-jsdoc/require-yields-type': severity,
    'ox-jsdoc/sort-tags': 'off',
    'ox-jsdoc/tag-lines': severity,
    'ox-jsdoc/text-escaping': 'off',
    'ox-jsdoc/ts-method-signature-style': 'off',
    'ox-jsdoc/ts-no-empty-object-type': severity,
    'ox-jsdoc/ts-no-unnecessary-template-expression': 'off',
    'ox-jsdoc/ts-prefer-function-type': 'off',
    'ox-jsdoc/type-formatting': 'off',
    'ox-jsdoc/valid-types': severity
  }
}

function createRecommendedTypeScriptRuleset(severity: JSDocRuleSeverity): OxlintRules {
  return {
    ...createRecommendedRuleset(severity),
    'ox-jsdoc/check-tag-names': [
      severity,
      {
        typed: true
      }
    ],
    'ox-jsdoc/no-types': severity,
    'ox-jsdoc/no-undefined-types': 'off',
    'ox-jsdoc/require-param-type': 'off',
    'ox-jsdoc/require-property-type': 'off',
    'ox-jsdoc/require-returns-type': 'off'
  }
}

function createRecommendedTypeScriptFlavorRuleset(severity: JSDocRuleSeverity): OxlintRules {
  return {
    ...createRecommendedRuleset(severity),
    'ox-jsdoc/no-undefined-types': 'off'
  }
}

function createRecommendedRules(
  typescript: JSDocLintOptions['typescript'],
  severity: JSDocRuleSeverity
): OxlintRules {
  if (typescript === 'syntax') {
    return createRecommendedTypeScriptRuleset(severity)
  }

  if (typescript === 'flavor') {
    return createRecommendedTypeScriptFlavorRuleset(severity)
  }

  return createRecommendedRuleset(severity)
}

function createProjectRules(): OxlintRules {
  return {
    'ox-jsdoc/require-jsdoc': [
      'error',
      {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: [
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature'
        ]
      }
    ],
    'ox-jsdoc/require-description': [
      'error',
      {
        contexts: [
          'ArrowFunctionExpression',
          'ClassDeclaration',
          'ClassExpression',
          'FunctionDeclaration',
          'FunctionExpression',
          'MethodDefinition',
          'PropertyDefinition',
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSPropertySignature',
          'TSMethodSignature'
        ]
      }
    ],
    'ox-jsdoc/tag-lines': [
      'error',
      'any',
      {
        startLines: 1,
        applyToEndTag: false
      }
    ],
    'ox-jsdoc/require-param': [
      'error',
      {
        checkDestructuredRoots: false
      }
    ],
    'ox-jsdoc/check-param-names': [
      'error',
      {
        checkDestructured: false
      }
    ],
    'ox-jsdoc/check-tag-names': [
      'error',
      {
        definedTags: ['typeParam', 'experimental']
      }
    ],
    'ox-jsdoc/require-hyphen-before-param-description': [
      'error',
      'always',
      {
        tags: {
          typeParam: 'always'
        }
      }
    ]
  }
}

/**
 * Lint Configuration for `@ox-jsdoc/eslint-plugin-jsdoc`.
 *
 * @param options - {@link JSDocLintOptions} to customize the JSDoc lint configuration.
 * @returns An array of {@link OxlintOverride} for jsdoc linting.
 */
export function jsdoc(options: JSDocLintOptions = {}): OxlintOverride[] {
  const {
    typescript,
    error = false,
    files = defaultJSDocTargetFiles,
    rules: overrideRules = {}
  } = options

  const severity = error ? 'error' : 'warn'
  const override: OxlintOverride[] = [
    {
      files,
      jsPlugins: [
        {
          name: 'ox-jsdoc',
          specifier: resolveJSPluginSpecifier('@ox-jsdoc/eslint-plugin-jsdoc')
        }
      ],
      rules: {
        ...createRecommendedRules(typescript, severity),
        ...createProjectRules(),
        ...overrideRules
      }
    }
  ]

  return override
}

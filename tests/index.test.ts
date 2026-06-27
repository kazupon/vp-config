import { isAbsolute } from 'node:path'
import { expect, test } from 'vite-plus/test'
import { defineFmtConfig, defineLintConfig } from '../src/index.ts'

type LintConfig = Record<string, unknown> & {
  overrides?: Array<{
    jsPlugins?: JSPluginEntry[] | null
  }>
}
type JSPluginEntry = {
  name: string
  specifier: string
}

function normalizeLintConfig(config: LintConfig): LintConfig {
  return JSON.parse(
    JSON.stringify(config, (key, value) =>
      key === 'specifier' && typeof value === 'string' ? '<resolved-plugin>' : value
    )
  ) as LintConfig
}

function isJSPluginEntry(entry: unknown): entry is JSPluginEntry {
  return (
    typeof entry === 'object' &&
    entry !== null &&
    'name' in entry &&
    'specifier' in entry &&
    typeof entry.name === 'string' &&
    typeof entry.specifier === 'string'
  )
}

test('defineFmtConfig', () => {
  expect(defineFmtConfig()).matchSnapshot()
})

test('defineLintConfig', () => {
  expect(normalizeLintConfig(defineLintConfig())).matchSnapshot()
})

test('defineLintConfig with jsdoc', () => {
  expect(
    normalizeLintConfig(
      defineLintConfig({
        jsdoc: {
          typescript: 'syntax',
          error: true
        }
      })
    )
  ).matchSnapshot()
})

test('defineLintConfig with regexp', () => {
  expect(
    normalizeLintConfig(
      defineLintConfig({
        regexp: {}
      })
    )
  ).matchSnapshot()
})

test('defineLintConfig resolves js plugin specifiers from package context', () => {
  const config = defineLintConfig({
    jsdoc: {},
    regexp: {}
  }) as LintConfig
  const pluginEntries =
    config.overrides?.flatMap(override => override.jsPlugins ?? []).filter(isJSPluginEntry) ?? []

  expect(pluginEntries).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ name: '@kazupon' }),
      expect.objectContaining({ name: 'ox-jsdoc' }),
      expect.objectContaining({ name: 'regexp' })
    ])
  )
  for (const entry of pluginEntries) {
    expect(isAbsolute(entry.specifier)).toBe(true)
  }
})

test('defineLintConfig merges TypeScript rules', () => {
  const config = defineLintConfig({
    typescript: {
      rules: {
        'typescript/consistent-type-imports': 'warn'
      }
    }
  })

  expect(config).toEqual(
    expect.objectContaining({
      overrides: expect.arrayContaining([
        expect.objectContaining({
          rules: expect.objectContaining({
            'typescript/consistent-type-imports': 'warn'
          })
        })
      ])
    })
  )
})

test('defineLintConfig merges top-level rules', () => {
  const config = defineLintConfig({
    rules: {
      'vite-plus/prefer-vite-plus-imports': 'error'
    }
  })

  expect(config).toEqual(
    expect.objectContaining({
      rules: {
        curly: 'error',
        'vite-plus/prefer-vite-plus-imports': 'error'
      }
    })
  )
})

test('defineLintConfig deep merges jsdoc tagNamePreference', () => {
  const config = defineLintConfig({
    settings: {
      jsdoc: {
        tagNamePreference: {
          params: 'arg'
        }
      }
    },
    jsdoc: {
      settings: {
        tagNamePreference: {
          returns: 'result'
        }
      }
    }
  })

  expect(config).toEqual(
    expect.objectContaining({
      settings: expect.objectContaining({
        jsdoc: expect.objectContaining({
          tagNamePreference: {
            template: 'typeParam',
            params: 'arg',
            returns: 'result'
          }
        })
      })
    })
  )
})

test('defineLintConfig merges regexp settings and rules', () => {
  const config = defineLintConfig({
    settings: {
      regexp: {
        allowedCharacterRanges: 'all'
      }
    },
    regexp: {
      settings: {
        allowedCharacterRanges: ['alphanumeric', 'A-Z']
      },
      rules: {
        'regexp/no-useless-character-class': 'off'
      }
    }
  })

  expect(config).toEqual(
    expect.objectContaining({
      settings: expect.objectContaining({
        regexp: {
          allowedCharacterRanges: ['alphanumeric', 'A-Z']
        }
      }),
      overrides: expect.arrayContaining([
        expect.objectContaining({
          rules: expect.objectContaining({
            'regexp/no-useless-character-class': 'off'
          })
        })
      ])
    })
  )
})

test('defineLintConfig merges jsdoc and regexp settings together', () => {
  const config = defineLintConfig({
    settings: {
      jsdoc: {
        tagNamePreference: {
          params: 'arg'
        }
      },
      regexp: {
        allowedCharacterRanges: 'all'
      }
    },
    jsdoc: {
      settings: {
        tagNamePreference: {
          returns: 'result'
        }
      }
    },
    regexp: {
      settings: {
        allowedCharacterRanges: ['alphanumeric', 'A-Z']
      }
    }
  })

  expect(config).toEqual(
    expect.objectContaining({
      settings: expect.objectContaining({
        jsdoc: expect.objectContaining({
          tagNamePreference: {
            template: 'typeParam',
            params: 'arg',
            returns: 'result'
          }
        }),
        regexp: {
          allowedCharacterRanges: ['alphanumeric', 'A-Z']
        }
      })
    })
  )
})

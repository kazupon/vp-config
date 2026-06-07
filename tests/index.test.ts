import { expect, test } from 'vite-plus/test'
import { defineFmtConfig, defineLintConfig } from '../src/index.ts'

test('defineFmtConfig', () => {
  expect(defineFmtConfig()).matchSnapshot()
})

test('defineLintConfig', () => {
  expect(defineLintConfig()).matchSnapshot()
})

test('defineLintConfig with jsdoc', () => {
  expect(
    defineLintConfig({
      jsdoc: {
        typescript: 'syntax',
        error: true
      }
    })
  ).matchSnapshot()
})

test('defineLintConfig with regexp', () => {
  expect(
    defineLintConfig({
      regexp: {}
    })
  ).matchSnapshot()
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

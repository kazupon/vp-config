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

import { expect, test } from 'vite-plus/test'
import { defineFmtConfig, defineLintConfig } from '../src/index.ts'

test('defineFmtConfig', () => {
  expect(defineFmtConfig()).matchSnapshot()
})

test('defineLintConfig', () => {
  expect(defineLintConfig()).matchSnapshot()
})

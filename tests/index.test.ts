import { expect, test } from 'vite-plus/test'
import { fmt, defineLintConfig } from '../src/index.ts'

test('fmt', () => {
  expect(fmt).toBeDefined()
})

test('defineLintConfig', () => {
  expect(defineLintConfig()).matchSnapshot()
})

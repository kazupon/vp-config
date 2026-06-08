# Variable: defaultDirectivesOfPreferScopeOnTagCommentRule

Default `directives` of `@kazupon/prefer-scope-on-tag-comment` rule. Extended with oxlint directives.

## Signature

```ts
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
```

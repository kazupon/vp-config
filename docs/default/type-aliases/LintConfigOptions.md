# Type Alias: LintConfigOptions

Options for [defineLintConfig](/docs/default/functions/defineLintConfig.md)

## Signature

```ts
export type LintConfigOptions = OxlintConfig & {
  vitest?: VitestLintOptions
  comments?: CommentsLintOptions
  jsdoc?: JSDocLintOptions
  regexp?: RegexpLintOptions
}
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `comments` _(optional)_ | [`CommentsLintOptions`](/docs/default/interfaces/CommentsLintOptions.md) |  |
| `jsdoc` _(optional)_ | [`JSDocLintOptions`](/docs/default/interfaces/JSDocLintOptions.md) |  |
| `regexp` _(optional)_ | [`RegexpLintOptions`](/docs/default/interfaces/RegexpLintOptions.md) |  |
| `vitest` _(optional)_ | [`VitestLintOptions`](/docs/default/interfaces/VitestLintOptions.md) |  |

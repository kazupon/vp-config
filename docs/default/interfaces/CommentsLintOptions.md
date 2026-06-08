# Interface: CommentsLintOptions

Lint options for comments.

## Signature

```ts
export interface CommentsLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `enForceHeaderComment` _(optional)_ | `{ ignoreFiles?: string[] }` | `@kazupon/enforce-header-comment` rule options. |
| `noTagComments` _(optional)_ | `{ tags?: string[] }` | `@kazupon/no-tag-comments` rule options. |
| `preferScopeOnTagComment` _(optional)_ | `{ tags?: string[]; directives?: string[] }` | `@kazupon/prefer-scope-on-tag-comment` rule options. |

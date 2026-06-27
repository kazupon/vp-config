# Interface: LintOverrideOptions

Lint override options.

## Signature

```ts
export interface LintOverrideOptions
```

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `files` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | File glob patterns to apply this override to. |
| `ignores` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | File glob patterns to ignore for this override. |
| `jsPlugins` _(optional)_ | `null` \| [`JSPluginEntry`](/docs/default/interfaces/JSPluginEntry.md)\[\] | JavaScript plugins for this override. |
| `plugins` _(optional)_ | `string[]` | Enabled built-in lint plugins for this override. |
| `rules` _(optional)_ | [`RuleMap`](/docs/default/type-aliases/RuleMap.md) | Rule configuration for this override. |
| `settings` _(optional)_ | `Record<string, unknown>` | Plugin settings for this override. |

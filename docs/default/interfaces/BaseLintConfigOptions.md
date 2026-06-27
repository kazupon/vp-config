# Interface: BaseLintConfigOptions

Base lint configuration options.

## Signature

```ts
export interface BaseLintConfigOptions
```

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `ignorePatterns` _(optional)_ | `string[]` | File glob patterns to ignore. |
| `jsPlugins` _(optional)_ | `null` \| [`JSPluginEntry`](/docs/default/interfaces/JSPluginEntry.md)\[\] | JavaScript plugins. |
| `options` _(optional)_ | `Record<string, unknown>` | Oxlint runtime options. |
| `overrides` _(optional)_ | [`LintOverrideOptions`](/docs/default/interfaces/LintOverrideOptions.md)\[\] | File-specific lint overrides. |
| `plugins` _(optional)_ | `string[]` | Enabled built-in lint plugins. |
| `rules` _(optional)_ | [`RuleMap`](/docs/default/type-aliases/RuleMap.md) | Top-level rule configuration. |
| `settings` _(optional)_ | `Record<string, unknown>` | Plugin settings. |

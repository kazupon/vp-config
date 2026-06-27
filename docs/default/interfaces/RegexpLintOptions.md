# Interface: RegexpLintOptions

Lint options for regexp.

## Signature

```ts
export interface RegexpLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `files` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | Additional files to apply regexp linting. default, see [defaultRegexpTargetFiles](/docs/default/variables/defaultRegexpTargetFiles.md) |
| `rules` _(optional)_ | [`RuleMap`](/docs/default/type-aliases/RuleMap.md) | Additional rules to merge into the regexp rule set. |
| `settings` _(optional)_ | [`RegexpPluginSettings`](/docs/default/interfaces/RegexpPluginSettings.md) | Plugin settings for `context.settings.regexp`. |

# Interface: RegexpLintOptions

Lint options for regexp.

## Signature

```ts
export interface RegexpLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `files` _(optional)_ | `OxlintOverride['files']` | Additional files to apply regexp linting. default, see [defaultRegexpTargetFiles](/docs/default/variables/defaultRegexpTargetFiles.md) |
| `rules` _(optional)_ | `OxlintConfig['rules']` | Additional rules to merge into the regexp rule set. |
| `settings` _(optional)_ | [`RegexpPluginSettings`](/docs/default/interfaces/RegexpPluginSettings.md) | Plugin settings for `context.settings.regexp`. |

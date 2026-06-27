# Interface: ImportLintOptions

Lint options for import rules.

## Signature

```ts
export interface ImportLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `files` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | Additional files to apply import-related linting. default, see [defaultImportTargetFiles](/docs/default/variables/defaultImportTargetFiles.md) |
| `rules` _(optional)_ | [`RuleMap`](/docs/default/type-aliases/RuleMap.md) | Additional rules to merge into the import rule set. |

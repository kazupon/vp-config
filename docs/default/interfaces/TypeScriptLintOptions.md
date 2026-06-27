# Interface: TypeScriptLintOptions

Lint options for TypeScript.

## Signature

```ts
export interface TypeScriptLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `files` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | Additional files to apply TypeScript linting. default, see [defaultTypeScriptTargetFiles](/docs/default/variables/defaultTypeScriptTargetFiles.md) |
| `rules` _(optional)_ | [`RuleMap`](/docs/default/type-aliases/RuleMap.md) | Additional rules to merge into the TypeScript rule set. |

# Interface: TypeScriptLintOptions

Lint options for TypeScript.

## Signature

```ts
export interface TypeScriptLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `files` _(optional)_ | `OxlintOverride['files']` | Additional files to apply TypeScript linting. default, see [defaultTypeScriptTargetFiles](/docs/default/variables/defaultTypeScriptTargetFiles.md) |
| `rules` _(optional)_ | `OxlintConfig['rules']` | Additional rules to merge into the TypeScript rule set. |

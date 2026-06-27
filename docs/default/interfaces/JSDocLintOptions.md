# Interface: JSDocLintOptions

Lint options for jsdoc.

## Signature

```ts
export interface JSDocLintOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `error` _(optional)_ | `boolean` | If true, all default jsdoc rules are reported as errors. **Default:** `false` |
| `files` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | Additional files to apply jsdoc linting. default, see [defaultJSDocTargetFiles](/docs/default/variables/defaultJSDocTargetFiles.md) |
| `rules` _(optional)_ | [`RuleMap`](/docs/default/type-aliases/RuleMap.md) | Additional rules to merge into the jsdoc rule set. |
| `settings` _(optional)_ | [`JSDocPluginSettings`](/docs/default/interfaces/JSDocPluginSettings.md) | Plugin settings for `context.settings.jsdoc`. |
| `typescript` _(optional)_ | `"syntax" \| "flavor"` | TypeScript preset for the plugin. - `undefined`: `flat/recommended` - `syntax`: `flat/recommended-typescript` - `flavor`: `flat/recommended-typescript-flavor` **Default:** `undefined` |

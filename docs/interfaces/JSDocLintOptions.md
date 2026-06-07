[**@kazupon/vp-config**](../index.md)

---

[@kazupon/vp-config](../index.md) / JSDocLintOptions

# Interface: JSDocLintOptions

Lint options for jsdoc.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| <a id="property-error"></a> `error?` | `boolean` | If true, all default jsdoc rules are reported as errors. **Default** `false` |
| <a id="property-files"></a> `files?` | `GlobSet` | Additional files to apply jsdoc linting. default, see [defaultJSDocTargetFiles](../variables/defaultJSDocTargetFiles.md) |
| <a id="property-rules"></a> `rules?` | `DummyRuleMap` | Additional rules to merge into the jsdoc rule set. |
| <a id="property-settings"></a> `settings?` | [`JSDocPluginSettings`](JSDocPluginSettings.md) | Plugin settings for `context.settings.jsdoc`. |
| <a id="property-typescript"></a> `typescript?` | `"syntax"` \| `"flavor"` | TypeScript preset for the plugin. - `undefined`: `flat/recommended` - `syntax`: `flat/recommended-typescript` - `flavor`: `flat/recommended-typescript-flavor` **Default** `undefined` |

[**@kazupon/vp-config**](../index.md)

---

[@kazupon/vp-config](../index.md) / RegexpLintOptions

# Interface: RegexpLintOptions

Lint options for regexp.

## Properties

| Property | Type | Description |
| --- | --- | --- |
| <a id="property-files"></a> `files?` | `GlobSet` | Additional files to apply regexp linting. default, see [defaultRegexpTargetFiles](../variables/defaultRegexpTargetFiles.md) |
| <a id="property-rules"></a> `rules?` | `DummyRuleMap` | Additional rules to merge into the regexp rule set. |
| <a id="property-settings"></a> `settings?` | [`RegexpPluginSettings`](RegexpPluginSettings.md) | Plugin settings for `context.settings.regexp`. |

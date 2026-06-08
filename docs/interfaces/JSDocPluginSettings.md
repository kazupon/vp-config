[**@kazupon/vp-config**](../index.md)

---

[@kazupon/vp-config](../index.md) / JSDocPluginSettings

# Interface: JSDocPluginSettings

Plugin settings for `context.settings.jsdoc`.

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| <a id="property-oxparsestrategy"></a> `oxParseStrategy?` | `"single"` \| `"batch"` | JSDoc parser strategy for `@ox-jsdoc/eslint-plugin-jsdoc`. **Default** `'batch'` |
| <a id="property-tagnamepreference"></a> `tagNamePreference?` | `object` | JSDoc tag name preferences. |
| `tagNamePreference.template?` | `string` | - |

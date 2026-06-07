[**@kazupon/vp-config**](../index.md)

---

[@kazupon/vp-config](../index.md) / RegexpPluginSettings

# Interface: RegexpPluginSettings

Plugin settings for `context.settings.regexp`.

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Property | Type | Description |
| --- | --- | --- |
| <a id="property-allowedcharacterranges"></a> `allowedCharacterRanges?` | \| [`RegexpAllowedCharacterRange`](../type-aliases/RegexpAllowedCharacterRange.md) \| [`RegexpAllowedCharacterRange`](../type-aliases/RegexpAllowedCharacterRange.md)[] | Allowed character ranges for rules such as `regexp/no-obscure-range` and `regexp/prefer-range`. **Default** `'alphanumeric'` |

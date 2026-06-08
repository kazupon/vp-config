# Interface: RegexpPluginSettings

Plugin settings for `context.settings.regexp`.

## Signature

```ts
export interface RegexpPluginSettings
```

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `allowedCharacterRanges` _(optional)_ | [`RegexpAllowedCharacterRange`](/docs/default/type-aliases/RegexpAllowedCharacterRange.md) \| [`RegexpAllowedCharacterRange`](/docs/default/type-aliases/RegexpAllowedCharacterRange.md)\[\] | Allowed character ranges for rules such as `regexp/no-obscure-range` and `regexp/prefer-range`. **Default:** `'alphanumeric'` |

# Interface: JSDocPluginSettings

Plugin settings for `context.settings.jsdoc`.

## Signature

```ts
export interface JSDocPluginSettings
```

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `oxParseStrategy` _(optional)_ | `"single" \| "batch"` | JSDoc parser strategy for `@ox-jsdoc/eslint-plugin-jsdoc`. **Default:** `'batch'` |
| `tagNamePreference` _(optional)_ | `{ template?: string; [key: string]: unknown }` | JSDoc tag name preferences. |

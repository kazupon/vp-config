# Interface: FmtOverrideOptions

Format override options.

## Signature

```ts
export interface FmtOverrideOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `excludeFiles` _(optional)_ | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | File glob patterns to exclude from this override. |
| `files` | [`FilePattern`](/docs/default/type-aliases/FilePattern.md) | File glob patterns to apply this override to. |
| `options` _(optional)_ | [`FmtFormatOptions`](/docs/default/interfaces/FmtFormatOptions.md) | Format options to apply for matched files. |

# Interface: FmtConfigOptions

Format configuration options.

## Extends

- [`FmtFormatOptions`](/docs/default/interfaces/FmtFormatOptions.md)

## Signature

```ts
export interface FmtConfigOptions extends FmtFormatOptions
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `ignorePatterns` _(optional)_ | `string[]` | File glob patterns to ignore. |
| `overrides` _(optional)_ | [`FmtOverrideOptions`](/docs/default/interfaces/FmtOverrideOptions.md)\[\] | File-specific format overrides. When a file matches multiple overrides, the later override takes precedence. |

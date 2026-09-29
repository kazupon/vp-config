# Interface: FmtFormatOptions

Format options of oxfmt.

## Signature

```ts
export interface FmtFormatOptions
```

## Indexable

```ts
[key: string]: unknown
```

## Properties

| Name | Type | Description |
| --- | --- | --- |
| `arrowParens` _(optional)_ | `"always" \| "avoid"` | Arrow function parentheses style. |
| `endOfLine` _(optional)_ | `"auto" \| "crlf" \| "lf" \| "cr"` | End-of-line style. |
| `proseWrap` _(optional)_ | `"always" \| "never" \| "preserve"` | Markdown prose wrapping style. |
| `semi` _(optional)_ | `boolean` | Whether to print semicolons. |
| `singleQuote` _(optional)_ | `boolean` | Whether to use single quotes. |
| `trailingComma` _(optional)_ | `"all" \| "es5" \| "none"` | Trailing comma style. |

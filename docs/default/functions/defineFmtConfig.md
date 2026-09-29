# Function: defineFmtConfig()

Define format configuration for Vite Plus.

If an options is not provided, the [default configuration](/docs/default/variables/defaultFmtConfig.md) be used. The `overrides` option is appended after the [default overrides](/docs/default/variables/defaultFmtOverrides.md).

## Signature

```ts
export function defineFmtConfig(options: FmtConfigOptions = {}): VpFmtConfig
```

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| `options` | [`FmtConfigOptions`](/docs/default/interfaces/FmtConfigOptions.md) | [FmtConfigOptions](/docs/default/interfaces/FmtConfigOptions.md) options for code formatting _(optional, default: {})_ |

## Returns

[`VpFmtConfig`](/docs/default/type-aliases/VpFmtConfig.md) — A [VpFmtConfig](/docs/default/type-aliases/VpFmtConfig.md) plain configuration object for oxfmt in Vite Plus

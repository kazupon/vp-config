# Function: defineFmtConfig()

Define format configuration for Vite Plus.

If an options is not provided, the [default configuration](/docs/default/variables/defaultFmtConfig.md) be used.

## Signature

```ts
export function defineFmtConfig(options: OxfmtConfig = {}): OxfmtConfig
```

## Parameters

| Name      | Type          | Description                                                       |
| --------- | ------------- | ----------------------------------------------------------------- |
| `options` | `OxfmtConfig` | OxfmtConfig options for code formatting _(optional, default: {})_ |

## Returns

`OxfmtConfig` — An OxfmtConfig configuration for oxfmt in Vite Plus

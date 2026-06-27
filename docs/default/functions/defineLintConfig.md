# Function: defineLintConfig()

Define lint configuration for Vite Plus.

## Signature

```ts
export function defineLintConfig(lintOptions: LintConfigOptions = {}): VpLintConfig
```

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| `lintOptions` | [`LintConfigOptions`](/docs/default/type-aliases/LintConfigOptions.md) | [LintConfigOptions](/docs/default/type-aliases/LintConfigOptions.md) to customize the lint configuration. _(optional, default: {})_ |

## Returns

[`VpLintConfig`](/docs/default/type-aliases/VpLintConfig.md) — A [VpLintConfig](/docs/default/type-aliases/VpLintConfig.md) plain configuration object for oxlint in Vite Plus

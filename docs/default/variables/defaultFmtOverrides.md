# Variable: defaultFmtOverrides

Default format overrides for oxfmt in Vite Plus.

Keep the prose wrapping of [coding agent instruction files](/docs/default/variables/defaultAgentInstructionFiles.md).

## Signature

```ts
export const defaultFmtOverrides = [
  {
    files: defaultAgentInstructionFiles,
    options: {
      proseWrap: 'preserve'
    }
  }
] satisfies FmtOverrideOptions[]
```

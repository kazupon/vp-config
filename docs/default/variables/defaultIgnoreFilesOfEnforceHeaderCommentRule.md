# Variable: defaultIgnoreFilesOfEnforceHeaderCommentRule

Default `ignoreFiles` for `@kazupon/enforce-header-comment` rule. Extended to include commonly ignored files such as markdown, config, and test files.

## Signature

```ts
export const defaultIgnoreFilesOfEnforceHeaderCommentRule = [
  '**/*.md',
  '**/*.md/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.config.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.{test,spec}-d.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
] as const satisfies string[]
```

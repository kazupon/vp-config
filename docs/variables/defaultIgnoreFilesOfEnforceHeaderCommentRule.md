[**@kazupon/vp-config**](../index.md)

---

[@kazupon/vp-config](../index.md) / defaultIgnoreFilesOfEnforceHeaderCommentRule

# Variable: defaultIgnoreFilesOfEnforceHeaderCommentRule

```ts
const defaultIgnoreFilesOfEnforceHeaderCommentRule: [
  '**/*.md',
  '**/*.md/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.config.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
  '**/*.{test,spec}-d.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
]
```

Default `ignoreFiles` for `@kazupon/enforce-header-comment` rule.
Extend for common files to ignore, such as markdown files, config files, test files, etc.

**@kazupon/vp-config**

---

# @kazupon/vp-config

Entry point of `@kazupon/vp-config` package.

## Variables

| Variable                                                                                                      | Description                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [defaultDirectivesOfPreferScopeOnTagCommentRule](variables/defaultDirectivesOfPreferScopeOnTagCommentRule.md) | Default `directives` of `@kazupon/prefer-scope-on-tag-comment` rule. Extend for oxlint directives.                                                          |
| [defaultEnableOxlintBuiltinPlugins](variables/defaultEnableOxlintBuiltinPlugins.md)                           | Default enable oxlint builtin plugins for Vite Plus linting.                                                                                                |
| [defaultEnableOxlintOptions](variables/defaultEnableOxlintOptions.md)                                         | Default options for enabling oxlint builtin plugins in Vite Plus linting.                                                                                   |
| [defaultEnableOxlintRules](variables/defaultEnableOxlintRules.md)                                             | Default oxlint rules for Vite Plus linting.                                                                                                                 |
| [defaultFmtConfig](variables/defaultFmtConfig.md)                                                             | Default code formatting configuration for oxfmt in Vite Plus.                                                                                               |
| [defaultIgnoreFilesOfEnforceHeaderCommentRule](variables/defaultIgnoreFilesOfEnforceHeaderCommentRule.md)     | Default `ignoreFiles` for `@kazupon/enforce-header-comment` rule. Extend for common files to ignore, such as markdown files, config files, test files, etc. |
| [defaultTagsOfNoTagCommentsRule](variables/defaultTagsOfNoTagCommentsRule.md)                                 | Default `tags` of `@kazupon/no-tag-comments` rule.                                                                                                          |
| [defaultTagsOfPreferScopeOnTagCommentRule](variables/defaultTagsOfPreferScopeOnTagCommentRule.md)             | Default `tags` of `@kazupon/prefer-scope-on-tag-comment` rule.                                                                                              |
| [defaultVitestTargetFiles](variables/defaultVitestTargetFiles.md)                                             | Default files to include in the Vitest linting.                                                                                                             |

## Functions

| Function                                          | Description                                |
| ------------------------------------------------- | ------------------------------------------ |
| [defineFmtConfig](functions/defineFmtConfig.md)   | Define format configuration for Vite Plus. |
| [defineLintConfig](functions/defineLintConfig.md) | Define lint configuration for Vite Plus.   |

## Interfaces

| Interface                                                | Description                |
| -------------------------------------------------------- | -------------------------- |
| [CommentsLintOptions](interfaces/CommentsLintOptions.md) | Lint options for comments. |
| [VitestLintOptions](interfaces/VitestLintOptions.md)     | Lint options for vitest.   |

## Type Aliases

| Type Alias                                             | Description                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| [LintConfigOptions](type-aliases/LintConfigOptions.md) | Options for [defineLintConfig](functions/defineLintConfig.md) |

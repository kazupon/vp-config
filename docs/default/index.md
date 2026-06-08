# default

Entry point of `@kazupon/vp-config` package.

_21 symbols · 2 functions · 6 interfaces · 2 types · 11 variables · 2 parameters · 21 members · 2 returns_

## Functions

| Function | Description |
| --- | --- |
| [defineFmtConfig](/docs/default/functions/defineFmtConfig.md) | Define format configuration for Vite Plus. |
| [defineLintConfig](/docs/default/functions/defineLintConfig.md) | Define lint configuration for Vite Plus. |

## Interfaces

| Interface | Description |
| --- | --- |
| [CommentsLintOptions](/docs/default/interfaces/CommentsLintOptions.md) | Lint options for comments. |
| [JSDocLintOptions](/docs/default/interfaces/JSDocLintOptions.md) | Lint options for jsdoc. |
| [JSDocPluginSettings](/docs/default/interfaces/JSDocPluginSettings.md) | Plugin settings for `context.settings.jsdoc`. |
| [RegexpLintOptions](/docs/default/interfaces/RegexpLintOptions.md) | Lint options for regexp. |
| [RegexpPluginSettings](/docs/default/interfaces/RegexpPluginSettings.md) | Plugin settings for `context.settings.regexp`. |
| [VitestLintOptions](/docs/default/interfaces/VitestLintOptions.md) | Lint options for vitest. |

## Type Aliases

| Type Alias | Description |
| --- | --- |
| [LintConfigOptions](/docs/default/type-aliases/LintConfigOptions.md) | Options for [defineLintConfig](/docs/default/functions/defineLintConfig.md) |
| [RegexpAllowedCharacterRange](/docs/default/type-aliases/RegexpAllowedCharacterRange.md) | Allowed character range for `eslint-plugin-regexp` settings. |

## Variables

| Variable | Description |
| --- | --- |
| [defaultDirectivesOfPreferScopeOnTagCommentRule](/docs/default/variables/defaultDirectivesOfPreferScopeOnTagCommentRule.md) | Default `directives` of `@kazupon/prefer-scope-on-tag-comment` rule. Extended with oxlint directives. |
| [defaultEnableOxlintBuiltinPlugins](/docs/default/variables/defaultEnableOxlintBuiltinPlugins.md) | Default enable oxlint built-in plugins for Vite Plus linting. |
| [defaultEnableOxlintOptions](/docs/default/variables/defaultEnableOxlintOptions.md) | Default options for enabling oxlint built-in plugins in Vite Plus linting. |
| [defaultEnableOxlintRules](/docs/default/variables/defaultEnableOxlintRules.md) | Default oxlint rules for Vite Plus linting. |
| [defaultFmtConfig](/docs/default/variables/defaultFmtConfig.md) | Default code formatting configuration for oxfmt in Vite Plus. |
| [defaultIgnoreFilesOfEnforceHeaderCommentRule](/docs/default/variables/defaultIgnoreFilesOfEnforceHeaderCommentRule.md) | Default `ignoreFiles` for `@kazupon/enforce-header-comment` rule. Extended to include commonly ignored files such as markdown, config, and test files. |
| [defaultJSDocTargetFiles](/docs/default/variables/defaultJSDocTargetFiles.md) | Default files to apply jsdoc linting. |
| [defaultRegexpTargetFiles](/docs/default/variables/defaultRegexpTargetFiles.md) | Default files to apply regexp linting. |
| [defaultTagsOfNoTagCommentsRule](/docs/default/variables/defaultTagsOfNoTagCommentsRule.md) | Default `tags` of `@kazupon/no-tag-comments` rule. |
| [defaultTagsOfPreferScopeOnTagCommentRule](/docs/default/variables/defaultTagsOfPreferScopeOnTagCommentRule.md) | Default `tags` of `@kazupon/prefer-scope-on-tag-comment` rule. |
| [defaultVitestTargetFiles](/docs/default/variables/defaultVitestTargetFiles.md) | Default files to include in the Vitest linting. |

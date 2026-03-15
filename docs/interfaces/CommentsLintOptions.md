[**@kazupon/vp-config**](../index.md)

---

[@kazupon/vp-config](../index.md) / CommentsLintOptions

# Interface: CommentsLintOptions

Lint options for comments.

## Properties

| Property                                                                 | Type       | Description                                                                                                                                                                                                |
| ------------------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="property-enforceheadercomment"></a> `enForceHeaderComment?`       | `object`   | `@kazupon/enforce-header-comment` rule options.                                                                                                                                                            |
| `enForceHeaderComment.ignoreFiles?`                                      | `string`[] | Files to ignore for the `@kazupon/enforce-header-comment` rule. default, see [defaultIgnoreFilesOfEnforceHeaderCommentRule](../variables/defaultIgnoreFilesOfEnforceHeaderCommentRule.md)                  |
| <a id="property-notagcomments"></a> `noTagComments?`                     | `object`   | `@kazupon/no-tag-comments` rule options.                                                                                                                                                                   |
| `noTagComments.tags?`                                                    | `string`[] | Tags to disallow in comments, such as `TODO`, `FIXME`, etc. default, see [defaultTagsOfNoTagCommentsRule](../variables/defaultTagsOfNoTagCommentsRule.md)                                                  |
| <a id="property-preferscopeontagcomment"></a> `preferScopeOnTagComment?` | `object`   | `@kazupon/prefer-scope-on-tag-comment` rule options.                                                                                                                                                       |
| `preferScopeOnTagComment.directives?`                                    | `string`[] | Directives to enforce scope on, such as `eslint-disable`, `@ts-ignore`, etc. default, see [defaultDirectivesOfPreferScopeOnTagCommentRule](../variables/defaultDirectivesOfPreferScopeOnTagCommentRule.md) |
| `preferScopeOnTagComment.tags?`                                          | `string`[] | Tags to enforce scope on, such as `TODO`, `FIXME`, etc. default, see [defaultTagsOfPreferScopeOnTagCommentRule](../variables/defaultTagsOfPreferScopeOnTagCommentRule.md)                                  |

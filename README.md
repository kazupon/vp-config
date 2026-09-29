# @kazupon/vp-config

[![npm version][npm-version-src]][npm-version-href] [![CI][ci-src]][ci-href]

Vite Plus configuration for @kazupon

## 🌟 Features

- `vp fmt` custom configuration
- `vp lint` custom configuration

## ✅ Requirements

- [Vite+](https://viteplus.dev) `^1.0.0`

If you are using Vite+ v0.x, please use `@kazupon/vp-config@0.5.x`.

## 💿 Installation

```sh
vp add -D @kazupon/vp-config
```

`@kazupon/vp-config` v1 is currently a release candidate. To try it, install it with the `next` tag:

```sh
vp add -D @kazupon/vp-config@next
```

## 🚀 Usage

### Configurations

```ts
// vite.config.ts
import { defineConfig } from 'vite-plus'
import { defineFmtConfig, defineLintConfig } from '@kazupon/vp-config'

export default defineConfig({
  // ... something config

  fmt: defineFmtConfig({
    // Custom options of `vp fmt` (oxfmt) ...
  }),

  lint: defineLintConfig({
    // Custom options of `vp lint` (oxlint) and preset ...
  })

  // and something here ...
})
```

In a monorepo, put `lint` and `fmt` in the workspace root `vite.config.ts`. `vp check` always uses the root config, so use `overrides` for package-specific settings.

## 🎨 Default format configuration

`defineFmtConfig` uses the following defaults for `vp fmt` (oxfmt):

| Option          | Value     |
| --------------- | --------- |
| `semi`          | `false`   |
| `singleQuote`   | `true`    |
| `trailingComma` | `'none'`  |
| `endOfLine`     | `'lf'`    |
| `arrowParens`   | `'avoid'` |
| `proseWrap`     | `'never'` |

### Coding agent instruction files

`vp config` regenerates coding agent instruction files with hard-wrapped lines. To keep `vp check` passing, the following files use `proseWrap: 'preserve'` by default:

- `AGENTS.md`
- `CLAUDE.md`
- `GEMINI.md`
- `.github/copilot-instructions.md`
- `.aiassistant/rules/viteplus.md`

Your `overrides` are applied after this default, so you can opt out:

```ts
// vite.config.ts
import { defineConfig } from 'vite-plus'
import { defineFmtConfig } from '@kazupon/vp-config'

export default defineConfig({
  fmt: defineFmtConfig({
    overrides: [{ files: ['**/CLAUDE.md'], options: { proseWrap: 'never' } }]
  })
})
```

## 🔨 Enable oxlint built-in plugins & preset configurations

### Enable oxlint built-in plugins

- typescript
- import
- promise
- unicorn
- node

### Preset configurations

The following preset configurations are supported:

| Preset | Powered by plugin or package | Need to install oxlint / eslint plugin or package? |
| --- | --- | --- |
| `comments` | [`@kazupon/eslint-plugin`(comment config)](https://www.npmjs.com/package/@kazupon/eslint-plugin) | no (built-in) |
| `jsdoc` | [`@ox-jsdoc/eslint-plugin-jsdoc`](https://www.npmjs.com/package/@ox-jsdoc/eslint-plugin-jsdoc) | no (built-in) |
| `regexp` | [`eslint-plugin-regexp`](https://www.npmjs.com/package/eslint-plugin-regexp) | no (included dependency) |
| `vitest` | oxlint built-in plugin | no (built-in) |

## 📚 API References

See the [API References](./docs/index.md)

## ©️ License

[MIT](http://opensource.org/licenses/MIT)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kazupon/vp-config?style=flat
[npm-version-href]: https://npmjs.com/package/@kazupon/vp-config
[ci-src]: https://github.com/kazupon/vp-config/actions/workflows/ci.yml/badge.svg
[ci-href]: https://github.com/kazupon/vp-config/actions/workflows/ci.yml

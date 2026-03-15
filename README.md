# @kazupon/vp-config

[![npm version][npm-version-src]][npm-version-href]
[![CI][ci-src]][ci-href]

Vite Plus configuration for @kazupon

## 🌟 Features

- `vp fmt` custom configuration
- `vp lint` custom cufiguration

## 💿 Installation

```sh
vp add -D @kazupon/vp-config
```

## 🚀 Usage

### Configurations

```ts
// vite.config.ts
import { defineConfig } from 'vite-plus'
import { fmt, defineLintConfig } from '@kazupon/vp-config'

export default defineConfig({
  // ... something config

  fmt,

  lint: defineLintConfig({
    // Custom options of `vp lint` (oxlint) and preset ...
  })

  // and something here ...
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

| Preset     | Powered by plugin or package                                                                     | Need to install oxlint / eslint plugin or package? |
| ---------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| `comments` | [`@kazupon/eslint-plugin`(comment config)](https://www.npmjs.com/package/@kazupon/eslint-plugin) | no (built-in)                                      |
| `vitest`   | oxlint built-in plugin                                                                           | no (built-in)                                      |

## ©️ License

[MIT](http://opensource.org/licenses/MIT)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kazupon/vp-config?style=flat
[npm-version-href]: https://npmjs.com/package/@kazupon/vp-config
[ci-src]: https://github.com/kazupon/vp-config/actions/workflows/ci.yml/badge.svg
[ci-href]: https://github.com/kazupon/vp-config/actions/workflows/ci.yml

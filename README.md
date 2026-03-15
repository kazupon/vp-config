# @kazupon/vp-config

[![npm version][npm-version-src]][npm-version-href]
[![CI][ci-src]][ci-href]

Vite Plus configuration for @kazupon

## 💿 Installation

```sh
npm i -D @kazupon/vp-config
```

## 🚀 Usage

### Configurations

```ts
// vite.config.ts
import { fmt } from '@kazupon/vp-config'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  // ... something config

  fmt

  // and something here ...
})
```

## ©️ License

[MIT](http://opensource.org/licenses/MIT)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@kazupon/vp-config?style=flat
[npm-version-href]: https://npmjs.com/package/@kazupon/vp-config
[ci-src]: https://github.com/kazupon/vp-config/actions/workflows/ci.yml/badge.svg
[ci-href]: https://github.com/kazupon/vp-config/actions/workflows/ci.yml

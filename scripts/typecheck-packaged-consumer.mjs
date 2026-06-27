/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'vp-config-packaged-consumer-'))
const vitePlusVersion = process.env.VITE_PLUS_VERSION ?? '0.2.1'

try {
  checkPackagedConsumer()
} finally {
  fs.rmSync(tmpRoot, { recursive: true, force: true })
}

function checkPackagedConsumer() {
  const packDir = path.join(tmpRoot, 'pack')
  const consumerDir = path.join(tmpRoot, 'consumer')

  fs.mkdirSync(packDir, { recursive: true })
  fs.mkdirSync(path.join(consumerDir, 'src'), { recursive: true })

  run('vp', ['pack'], { cwd: root })
  run('pnpm', ['pack', '--pack-destination', packDir], { cwd: root })

  const packedFile = fs
    .readdirSync(packDir)
    .find(file => file.startsWith('kazupon-vp-config-') && file.endsWith('.tgz'))

  if (!packedFile) {
    throw new Error(`Packed tarball was not found in ${packDir}`)
  }

  const packedSpecifier = `file:${path.posix.join('..', 'pack', packedFile)}`
  const tsgoVersion = packageJson.devDependencies['@typescript/native-preview']

  writeJson(path.join(consumerDir, 'package.json'), {
    name: 'vp-config-packaged-consumer',
    private: true,
    type: 'module',
    scripts: {
      check: 'vp check',
      typecheck: 'tsgo --noEmit'
    },
    dependencies: {
      '@kazupon/vp-config': packedSpecifier,
      'vite-plus': vitePlusVersion
    },
    devDependencies: {
      '@typescript/native-preview': tsgoVersion
    }
  })

  writeJson(path.join(consumerDir, 'tsconfig.json'), {
    compilerOptions: {
      target: 'esnext',
      lib: ['esnext'],
      module: 'preserve',
      moduleResolution: 'bundler',
      strict: true,
      noEmit: true,
      skipLibCheck: true
    },
    include: ['src', 'vite.config.ts']
  })

  fs.writeFileSync(
    path.join(consumerDir, 'vite.config.ts'),
    `import { defineConfig } from 'vite-plus'
import { defineFmtConfig, defineLintConfig } from '@kazupon/vp-config'

export default defineConfig({
  lint: defineLintConfig({
    ignorePatterns: ['node_modules', '**/node_modules/**'],
    options: {
      typeAware: true,
      typeCheck: true
    },
    regexp: {},
    import: {},
    typescript: {}
  }),
  fmt: defineFmtConfig({
    printWidth: 100
  })
})
`
  )

  fs.writeFileSync(
    path.join(consumerDir, 'src/index.ts'),
    `/**
 * @author packaged consumer
 * @license MIT
 */

/**
 * Packaged consumer smoke module.
 *
 * @returns A smoke value.
 */
export function smoke(): string {
  return 'ok'
}
`
  )

  fs.writeFileSync(path.join(consumerDir, '.gitignore'), `node_modules\n`)

  run('pnpm', ['install', '--ignore-scripts'], { cwd: consumerDir })
  run('pnpm', ['exec', 'tsgo', '--noEmit'], { cwd: consumerDir })
  run('pnpm', ['exec', 'vp', 'fmt'], { cwd: consumerDir })
  run('pnpm', ['exec', 'vp', 'check'], { cwd: consumerDir })

  console.log(`Packaged consumer compatibility passed with vite-plus@${vitePlusVersion}`)
}

function run(command, args, options) {
  execFileSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    ...options
  })
}

function writeJson(file, value) {
  fs.writeFileSync(`${file}`, `${JSON.stringify(value, null, 2)}\n`)
}

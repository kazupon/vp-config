/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateOxContentApiDocs } from 'vitepress-api-references'

const root = fileURLToPath(new URL('../', import.meta.url))
const outDir = path.join(root, 'docs')

await cleanGeneratedDocs(outDir)

const result = await generateOxContentApiDocs({
  root,
  tsconfig: 'tsconfig.json',
  entryPoints: [{ path: 'src/index.ts' }],
  outDir: 'docs',
  basePath: '/docs',
  extraction: {
    internal: false,
    private: false,
    typeParameters: true
  },
  markdown: {
    pathStrategy: 'typedoc',
    renderStyle: 'markdown',
    indexFormat: 'table',
    parametersFormat: 'table',
    interfacePropertiesFormat: 'table',
    typeAliasPropertiesFormat: 'table',
    typeDeclarationFormat: 'table',
    classPropertiesFormat: 'table',
    propertyMembersFormat: 'table',
    enumMembersFormat: 'table'
  },
  escapeHeadingAngleBrackets: true
})

for (const diagnostic of result.diagnostics) {
  console.error(diagnostic)
}

if (result.diagnostics.length > 0) {
  process.exitCode = 1
}

console.log(`Generated ${result.generatedFiles.length} API docs files`)

async function cleanGeneratedDocs(directory) {
  await Promise.all(
    ['index.md', 'default', 'functions', 'interfaces', 'type-aliases', 'variables'].map(file =>
      fs.rm(path.join(directory, file), { recursive: true, force: true })
    )
  )
}

import { defineConfig } from 'bumpp'
import { updateChangelog } from 'gh-changelogen'

export default defineConfig({
  all: true,
  commit: 'release: v%s',
  tag: true,
  push: true,
  execute: async operation => {
    // Generate the release notes before tagging, so CHANGELOG.md is part of the release commit
    await updateChangelog({
      repository: 'kazupon/vp-config',
      tagName: `v${operation.state.newVersion}`,
      source: 'generated-notes',
      targetCommitish: 'HEAD',
      output: 'CHANGELOG.md'
    })
  }
})

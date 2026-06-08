/**
 * Utilities for resolving lint plugin specifiers.
 *
 * @module lint/resolve
 */

/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import { fileURLToPath } from 'node:url'

/**
 * Resolve a JS plugin from this package context so consumers do not need to
 * install transitive plugin dependencies directly.
 *
 * @param specifier - Package specifier to resolve.
 * @returns A resolved plugin specifier for Oxlint JS plugin loading.
 */
export function resolveJSPluginSpecifier(specifier: string): string {
  const resolved = import.meta.resolve(specifier)
  return resolved.startsWith('file:') ? fileURLToPath(resolved) : resolved
}

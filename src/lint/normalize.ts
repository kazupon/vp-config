/**
 * @author kazuya kawaguchi (a.k.a. kazupon)
 * @license MIT
 */

import type { FilePattern } from '../types.ts'

/**
 * Normalize file glob patterns for generated lint overrides.
 *
 * @param patterns - File glob patterns.
 * @returns A copied array of file glob patterns.
 */
export function normalizeFilePatterns(patterns: FilePattern): string[] {
  return [...patterns]
}

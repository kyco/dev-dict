import { readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { describe, expect, it } from 'vitest'

import { LOCALES } from '@/common'
import { RAW_SOURCES } from '@/data'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Sources', () => {
  const sourcesDir = join(__dirname, '../data/term-sources')
  const sourceFiles = readdirSync(sourcesDir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('.ts', ''))

  it('should have all source files imported in RAW_SOURCES', () => {
    const rawSourceIds = Object.keys(RAW_SOURCES)
    const missingInRaw = sourceFiles.filter((file) => !rawSourceIds.includes(file))

    expect(missingInRaw, `Missing in RAW_SOURCES: ${missingInRaw.join(', ')}`).toHaveLength(0)
  })

  it('should not have extra imports in RAW_SOURCES', () => {
    const rawSourceIds = Object.keys(RAW_SOURCES)
    const extraInRaw = rawSourceIds.filter((id) => !sourceFiles.includes(id))

    expect(extraInRaw, `Extra in RAW_SOURCES: ${extraInRaw.join(', ')}`).toHaveLength(0)
  })

  it('should have all sources with required fields', () => {
    Object.entries(RAW_SOURCES).forEach(([id, source]) => {
      expect(source.id, `Source ${id} missing id field`).toBeDefined()
      expect(source.id, `Source ${id} has mismatched id`).toBe(id)
      expect(source.name, `Source ${id} missing name field`).toBeDefined()
    })
  })

  it('should have all sources with en-US name', () => {
    Object.entries(RAW_SOURCES).forEach(([id, source]) => {
      expect(source.name[LOCALES.EN_US], `Source ${id} missing en-US name`).toBeDefined()
      expect(source.name[LOCALES.EN_US], `Source ${id} has empty en-US name`).not.toBe('')
    })
  })

  it('should use valid ID naming convention (lowercase with underscores only)', () => {
    Object.keys(RAW_SOURCES).forEach((id) => {
      expect(id, `Source ID "${id}" contains invalid characters`).toMatch(/^[a-z0-9_]+$/)
      expect(id, `Source ID "${id}" contains dashes (use underscores)`).not.toContain('-')
    })
  })

  it('should have filename matching the source ID', () => {
    sourceFiles.forEach((filename) => {
      const source = RAW_SOURCES[filename as keyof typeof RAW_SOURCES]
      expect(
        source,
        `File "${filename}.ts" exists but source ID doesn't match. Expected source with id="${filename}" but found id="${source?.id || 'NOT_FOUND'}". Rename the file to match the ID.`,
      ).toBeDefined()

      if (source) {
        expect(
          source.id,
          `File "${filename}.ts" has mismatched ID. Filename is "${filename}" but source.id is "${source.id}". Rename the file to "${source.id}.ts"`,
        ).toBe(filename)
      }
    })
  })
})

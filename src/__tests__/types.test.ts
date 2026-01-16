import { readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '@/data/locales'
import { RAW_TYPES } from '@/data/types'

import * as typesEntry from '../types-entry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Types', () => {
  const typesDir = join(__dirname, '../data/types')
  const typeFiles = readdirSync(typesDir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('.ts', ''))

  it('should have all type files imported in RAW_TYPES', () => {
    const rawTypeIds = Object.keys(RAW_TYPES)
    const missingInRaw = typeFiles.filter((file) => !rawTypeIds.includes(file))

    expect(missingInRaw, `Missing in RAW_TYPES: ${missingInRaw.join(', ')}`).toHaveLength(0)
  })

  it('should have all types exported in types-entry.ts', () => {
    const entryExports = Object.keys(typesEntry)
    const missingInEntry = typeFiles.filter((file) => !entryExports.includes(file))

    expect(missingInEntry, `Missing in types-entry.ts: ${missingInEntry.join(', ')}`).toHaveLength(0)
  })

  it('should not have extra exports in types-entry.ts', () => {
    const entryExports = Object.keys(typesEntry)
    const extraInEntry = entryExports.filter((key) => !typeFiles.includes(key))

    expect(extraInEntry, `Extra in types-entry.ts: ${extraInEntry.join(', ')}`).toHaveLength(0)
  })

  it('should have all types with required fields', () => {
    Object.entries(RAW_TYPES).forEach(([id, type]) => {
      expect(type.id, `Type ${id} missing id field`).toBeDefined()
      expect(type.id, `Type ${id} has mismatched id`).toBe(id)
      expect(type.name, `Type ${id} missing name field`).toBeDefined()
    })
  })

  it('should have all types with en-US name', () => {
    Object.entries(RAW_TYPES).forEach(([id, type]) => {
      expect(type.name[LOCALES.EN_US], `Type ${id} missing en-US name`).toBeDefined()
      expect(type.name[LOCALES.EN_US], `Type ${id} has empty en-US name`).not.toBe('')
    })
  })

  it('should use valid ID naming convention (lowercase with underscores only)', () => {
    Object.keys(RAW_TYPES).forEach((id) => {
      expect(id, `Type ID "${id}" contains invalid characters`).toMatch(/^[a-z0-9_]+$/)
      expect(id, `Type ID "${id}" contains dashes (use underscores)`).not.toContain('-')
    })
  })

  it('should have filename matching the type ID', () => {
    typeFiles.forEach((filename) => {
      const type = RAW_TYPES[filename as keyof typeof RAW_TYPES]
      expect(
        type,
        `File "${filename}.ts" exists but type ID doesn't match. Expected type with id="${filename}" but found id="${type?.id || 'NOT_FOUND'}". Rename the file to match the ID.`,
      ).toBeDefined()

      if (type) {
        expect(
          type.id,
          `File "${filename}.ts" has mismatched ID. Filename is "${filename}" but type.id is "${type.id}". Rename the file to "${type.id}.ts"`,
        ).toBe(filename)
      }
    })
  })

  it('should have types-entry.ts exports in alphabetical order', () => {
    const exports = Object.keys(typesEntry)
    const sorted = [...exports].sort()

    exports.forEach((key, index) => {
      expect(key, `types-entry.ts export "${key}" is out of order (should be "${sorted[index]}")`).toBe(sorted[index])
    })
  })
})

import { readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '@/data/locales'
import { RAW_TAGS } from '@/data/tags'

import * as tagsEntry from '../tags-entry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Tags', () => {
  const tagsDir = join(__dirname, '../data/tags')
  const tagFiles = readdirSync(tagsDir)
    .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file) => file.replace('.ts', ''))

  it('should have all tag files imported in RAW_TAGS', () => {
    const rawTagIds = Object.keys(RAW_TAGS)
    const missingInRaw = tagFiles.filter((file) => !rawTagIds.includes(file))

    expect(missingInRaw, `Missing in RAW_TAGS: ${missingInRaw.join(', ')}`).toHaveLength(0)
  })

  it('should have all tags exported in tags-entry.ts', () => {
    const entryExports = Object.keys(tagsEntry)
    const missingInEntry = tagFiles.filter((file) => !entryExports.includes(file))

    expect(missingInEntry, `Missing in tags-entry.ts: ${missingInEntry.join(', ')}`).toHaveLength(0)
  })

  it('should not have extra exports in tags-entry.ts', () => {
    const entryExports = Object.keys(tagsEntry)
    const extraInEntry = entryExports.filter((key) => !tagFiles.includes(key))

    expect(extraInEntry, `Extra in tags-entry.ts: ${extraInEntry.join(', ')}`).toHaveLength(0)
  })

  it('should have all tags with required fields', () => {
    Object.entries(RAW_TAGS).forEach(([id, tag]) => {
      expect(tag.id, `Tag ${id} missing id field`).toBeDefined()
      expect(tag.id, `Tag ${id} has mismatched id`).toBe(id)
      expect(tag.name, `Tag ${id} missing name field`).toBeDefined()
    })
  })

  it('should have all tags with en-US name', () => {
    Object.entries(RAW_TAGS).forEach(([id, tag]) => {
      expect(tag.name[LOCALES.EN_US], `Tag ${id} missing en-US name`).toBeDefined()
      expect(tag.name[LOCALES.EN_US], `Tag ${id} has empty en-US name`).not.toBe('')
    })
  })

  it('should use valid ID naming convention (lowercase with underscores only)', () => {
    Object.keys(RAW_TAGS).forEach((id) => {
      expect(id, `Tag ID "${id}" contains invalid characters`).toMatch(/^[a-z0-9_]+$/)
      expect(id, `Tag ID "${id}" contains dashes (use underscores)`).not.toContain('-')
    })
  })

  it('should have filename matching the tag ID', () => {
    tagFiles.forEach((filename) => {
      const tag = RAW_TAGS[filename as keyof typeof RAW_TAGS]
      expect(
        tag,
        `File "${filename}.ts" exists but tag ID doesn't match. Expected tag with id="${filename}" but found id="${tag?.id || 'NOT_FOUND'}". Rename the file to match the ID.`,
      ).toBeDefined()

      if (tag) {
        expect(
          tag.id,
          `File "${filename}.ts" has mismatched ID. Filename is "${filename}" but tag.id is "${tag.id}". Rename the file to "${tag.id}.ts"`,
        ).toBe(filename)
      }
    })
  })

  it('should have tags-entry.ts exports in alphabetical order', () => {
    const exports = Object.keys(tagsEntry)
    const sorted = [...exports].sort()

    exports.forEach((key, index) => {
      expect(key, `tags-entry.ts export "${key}" is out of order (should be "${sorted[index]}")`).toBe(sorted[index])
    })
  })
})

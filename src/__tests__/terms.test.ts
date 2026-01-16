import { readdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { describe, expect, it } from 'vitest'

import { LOCALES } from '@/data/locales'
import { RAW_TERMS } from '@/data/terms'

import * as termsEntry from '../terms-entry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

describe('Terms', () => {
  const termsDir = join(__dirname, '../data/terms')
  const termFiles = readdirSync(termsDir)
    .filter((file: string) => file.endsWith('.ts') && file !== 'index.ts')
    .map((file: string) => file.replace('.ts', ''))

  it('should have all term files imported in RAW_TERMS', () => {
    const rawTermIds = Object.keys(RAW_TERMS)
    const missingInRaw = termFiles.filter((file: string) => !rawTermIds.includes(file))

    expect(missingInRaw, `Missing in RAW_TERMS: ${missingInRaw.join(', ')}`).toHaveLength(0)
  })

  it('should have all terms exported in terms-entry.ts', () => {
    const entryExports = Object.keys(termsEntry)
    const missingInEntry = termFiles.filter((file) => !entryExports.includes(file))

    expect(missingInEntry, `Missing in terms-entry.ts: ${missingInEntry.join(', ')}`).toHaveLength(0)
  })

  it('should not have extra exports in terms-entry.ts', () => {
    const entryExports = Object.keys(termsEntry)
    const extraInEntry = entryExports.filter((key) => !termFiles.includes(key))

    expect(extraInEntry, `Extra in terms-entry.ts: ${extraInEntry.join(', ')}`).toHaveLength(0)
  })

  it('should have all terms with required fields', () => {
    Object.entries(RAW_TERMS).forEach(([id, term]) => {
      expect(term.id, `Term ${id} missing id field`).toBeDefined()
      expect(term.id, `Term ${id} has mismatched id`).toBe(id)
      expect(term.name, `Term ${id} missing name field`).toBeDefined()
      expect(term.label, `Term ${id} missing label field`).toBeDefined()
      expect(term.definition, `Term ${id} missing definition field`).toBeDefined()
      expect(term.type, `Term ${id} missing type field`).toBeDefined()
      expect(term.tags, `Term ${id} missing tags field`).toBeDefined()
    })
  })

  it('should have all terms with en-US translations', () => {
    Object.entries(RAW_TERMS).forEach(([id, term]) => {
      expect(term.name[LOCALES.EN_US], `Term ${id} missing en-US name`).toBeDefined()
      expect(term.name[LOCALES.EN_US], `Term ${id} has empty en-US name`).not.toBe('')

      expect(term.label[LOCALES.EN_US], `Term ${id} missing en-US label`).toBeDefined()
      // Label can be empty string

      expect(term.definition[LOCALES.EN_US], `Term ${id} missing en-US definition`).toBeDefined()
      // Definition can be empty string
    })
  })

  it('should have terms with valid locale records', () => {
    const validLocales = Object.values(LOCALES)

    Object.entries(RAW_TERMS).forEach(([id, term]) => {
      const nameKeys = Object.keys(term.name)
      const invalidNameLocales = nameKeys.filter((locale) => !validLocales.includes(locale as any))
      expect(invalidNameLocales, `Term ${id} has invalid name locales: ${invalidNameLocales.join(', ')}`).toHaveLength(
        0,
      )

      const labelKeys = Object.keys(term.label)
      const invalidLabelLocales = labelKeys.filter((locale) => !validLocales.includes(locale as any))
      expect(
        invalidLabelLocales,
        `Term ${id} has invalid label locales: ${invalidLabelLocales.join(', ')}`,
      ).toHaveLength(0)

      const definitionKeys = Object.keys(term.definition)
      const invalidDefLocales = definitionKeys.filter((locale) => !validLocales.includes(locale as any))
      expect(
        invalidDefLocales,
        `Term ${id} has invalid definition locales: ${invalidDefLocales.join(', ')}`,
      ).toHaveLength(0)
    })
  })

  it('should have terms with website link if links are provided', () => {
    Object.entries(RAW_TERMS).forEach(([id, term]) => {
      if ('links' in term && term.links) {
        expect(term.links.website, `Term ${id} has links but missing website`).toBeDefined()
        expect(term.links.website, `Term ${id} has empty website URL`).not.toBe('')
      }
    })
  })

  it('should use valid ID naming convention (lowercase with underscores only)', () => {
    Object.keys(RAW_TERMS).forEach((id) => {
      expect(id, `Term ID "${id}" contains invalid characters`).toMatch(/^[a-z0-9_]+$/)
      expect(id, `Term ID "${id}" contains dashes (use underscores)`).not.toContain('-')
    })
  })

  it('should have filename matching the term ID', () => {
    termFiles.forEach((filename) => {
      const term = RAW_TERMS[filename as keyof typeof RAW_TERMS]
      expect(
        term,
        `File "${filename}.ts" exists but term ID doesn't match. Expected term with id="${filename}" but found id="${term?.id || 'NOT_FOUND'}". Rename the file to match the ID.`,
      ).toBeDefined()

      if (term) {
        expect(
          term.id,
          `File "${filename}.ts" has mismatched ID. Filename is "${filename}" but term.id is "${term.id}". Rename the file to "${term.id}.ts"`,
        ).toBe(filename)
      }
    })
  })

  it('should have terms-entry.ts exports in alphabetical order', () => {
    const exports = Object.keys(termsEntry)
    const sorted = [...exports].sort()

    exports.forEach((key, index) => {
      expect(key, `terms-entry.ts export "${key}" is out of order (should be "${sorted[index]}")`).toBe(sorted[index])
    })
  })
})

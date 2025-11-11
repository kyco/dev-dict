#!/usr/bin/env node
import { readFileSync, readdirSync } from 'fs'
import { basename, join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TAGS_DIR = join(__dirname, '../data/tags')
const SKIP_FILES = ['0-SCHEMA.json', '1-TEMPLATE.json']

interface TagData {
  id: string
  name: Record<string, string>
}

interface ValidationError {
  file: string
  error: string
}

function validateTags(): void {
  const files = readdirSync(TAGS_DIR).filter((file) => file.endsWith('.json') && !SKIP_FILES.includes(file))

  const errors: ValidationError[] = []
  const seenIds = new Map<string, string>()
  const seenNames = new Map<string, { file: string; locale: string }>()

  console.log(`Validating ${files.length} tag file(s)...\n`)

  // Load and validate all tags
  for (const file of files) {
    const filePath = join(TAGS_DIR, file)
    const fileNameWithoutExt = basename(file, '.json')

    try {
      const content = readFileSync(filePath, 'utf-8')
      const data: TagData = JSON.parse(content)

      // Check 1: ID must match filename
      if (data.id !== fileNameWithoutExt) {
        errors.push({
          file,
          error: `ID "${data.id}" does not match filename "${fileNameWithoutExt}"`,
        })
      }

      // Check 2: Duplicate IDs
      if (seenIds.has(data.id)) {
        errors.push({
          file,
          error: `Duplicate ID "${data.id}" (also found in ${seenIds.get(data.id)})`,
        })
      } else {
        seenIds.set(data.id, file)
      }

      // Check 3: Duplicate names (across all locales)
      for (const [locale, name] of Object.entries(data.name)) {
        const nameKey = `${locale}:${name.toLowerCase()}`
        if (seenNames.has(nameKey)) {
          const previous = seenNames.get(nameKey)!
          errors.push({
            file,
            error: `Duplicate name "${name}" in locale "${locale}" (also found in ${previous.file})`,
          })
        } else {
          seenNames.set(nameKey, { file, locale })
        }
      }
    } catch (error) {
      errors.push({
        file,
        error: `Failed to parse JSON: ${error instanceof Error ? error.message : String(error)}`,
      })
    }
  }

  // Print results
  if (errors.length > 0) {
    console.error(`❌ Found ${errors.length} validation error(s):\n`)
    for (const { file, error } of errors) {
      console.error(`  ${file}: ${error}`)
    }
    console.error('')
    process.exit(1)
  }

  console.log('✓ All cross-file validations passed!')
  console.log(`  - ${files.length} unique IDs`)
  console.log(`  - ${seenNames.size} unique names across all locales`)
  console.log(`  - All filenames match their IDs`)
}

validateTags()

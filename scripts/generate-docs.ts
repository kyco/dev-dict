import { mkdirSync, writeFileSync } from 'fs'

import { getTags, getTerms, getTypes } from '../dist/index.js'

const LOCALE = {
  EN_US: 'en-US',
  EN_GB: 'en-GB',
  DE_DE: 'de-DE',
} as const

const DEFAULT_LOCALE = LOCALE.EN_US

mkdirSync('./docs', { recursive: true })

const generateTable = (
  title: string,
  headers: string[],
  items: unknown[],
  rowGenerator: (item: any) => string,
): string => {
  let content = `# ${title}\n\n`
  content += `> This README is auto-generated. Do not edit manually.\n\n`
  content += `| ${headers.join(' | ')} |\n`
  content += `|${headers.map(() => '-------').join('|')}|\n`

  items.forEach((item) => {
    content += rowGenerator(item)
  })

  return content + '\n'
}

const generateTermsReadme = (): void => {
  const terms = [...getTerms({ localized: false })].sort((a, b) =>
    a.name[DEFAULT_LOCALE].localeCompare(b.name[DEFAULT_LOCALE]),
  )

  const content = generateTable(
    'Terms',
    [`Term`, 'ID', `Type`, `Label`, `Definition`, `Tags`, `Website`],
    terms,
    (value) => {
      const types = value.type.map((t: any) => t.name[DEFAULT_LOCALE]).join(', ')
      const tags = value.tags.map((t: any) => t.name[DEFAULT_LOCALE]).join(', ')
      return `| [${value.name[DEFAULT_LOCALE]}](../data/terms/${value.id}.ts) | \`${value.id}\` | ${types || '✘'} | ${value.label[DEFAULT_LOCALE]} | ${value.definition[DEFAULT_LOCALE] || '✘'} | ${tags || '✘'} | ${value.links?.website || '✘'} |\n`
    },
  )

  writeFileSync('./docs/TERMS.md', content, 'utf-8')
  console.log('✓ docs/TERMS.md')
}

const generateTypesReadme = (): void => {
  const types = [...getTypes({ localized: false })].sort((a, b) =>
    a.name[DEFAULT_LOCALE].localeCompare(b.name[DEFAULT_LOCALE]),
  )

  const content = generateTable(
    'Types',
    [`Type (${DEFAULT_LOCALE})`, 'ID', LOCALE.EN_GB, LOCALE.DE_DE],
    types,
    (value) => {
      return `| [${value.name[DEFAULT_LOCALE]}](../data/types/${value.id}.ts) | \`${value.id}\` | ${value.name[LOCALE.EN_GB] ? '✔' : '✘'} | ${value.name[LOCALE.DE_DE] ? '✔' : '✘'} |\n`
    },
  )

  writeFileSync('./docs/TYPES.md', content, 'utf-8')
  console.log('✓ docs/TYPES.md')
}

const generateTagsReadme = (): void => {
  const tags = [...getTags({ localized: false })].sort((a, b) =>
    a.name[DEFAULT_LOCALE].localeCompare(b.name[DEFAULT_LOCALE]),
  )

  const content = generateTable(
    'Tags',
    [`Tag (${DEFAULT_LOCALE})`, 'ID', LOCALE.EN_GB, LOCALE.DE_DE],
    tags,
    (value) => {
      return `| [${value.name[DEFAULT_LOCALE]}](../data/tags/${value.id}.ts) | \`${value.id}\` | ${value.name[LOCALE.EN_GB] ? '✔' : '✘'} | ${value.name[LOCALE.DE_DE] ? '✔' : '✘'} |\n`
    },
  )

  writeFileSync('./docs/TAGS.md', content, 'utf-8')
  console.log('✓ docs/TAGS.md')
}

console.log('Generating docs...\n')
generateTermsReadme()
generateTypesReadme()
generateTagsReadme()
console.log('\n✓ Done!')

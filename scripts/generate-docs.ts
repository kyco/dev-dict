import { mkdirSync, writeFileSync } from 'fs'

import { getTags, getTerms, getTypes } from '../dist/index.js'

const LOCALE = 'en-US'

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
  const terms = [...getTerms({ localized: false })].sort((a, b) => a.name.localeCompare(b.name))

  const content = generateTable('Terms', ['Term', 'ID', 'Type'], terms, (term) => {
    const types = term.type.map((t: any) => t.name[LOCALE]).join(', ')
    return `| [${term.name}](../data/terms/${term.id}.ts) | \`${term.id}\` | ${types} |\n`
  })

  writeFileSync('./docs/TERMS.md', content, 'utf-8')
  console.log('✓ docs/TERMS.md')
}

const generateTypesReadme = (): void => {
  const types = [...getTypes({ localized: false })].sort((a, b) => a.name[LOCALE].localeCompare(b.name[LOCALE]))

  const content = generateTable('Types', ['Type name', 'Type ID'], types, (type) => {
    return `| [${type.name[LOCALE]}](../data/types/${type.id}.ts) | \`${type.id}\` |\n`
  })

  writeFileSync('./docs/TYPES.md', content, 'utf-8')
  console.log('✓ docs/TYPES.md')
}

const generateTagsReadme = (): void => {
  const tags = [...getTags({ localized: false })].sort((a, b) => a.name[LOCALE].localeCompare(b.name[LOCALE]))

  const content = generateTable('Tags', ['Tag name', 'Tag ID'], tags, (tag) => {
    return `| [${tag.name[LOCALE]}](../data/tags/${tag.id}.ts) | \`${tag.id}\` |\n`
  })

  writeFileSync('./docs/TAGS.md', content, 'utf-8')
  console.log('✓ docs/TAGS.md')
}

console.log('Generating docs...\n')
generateTermsReadme()
generateTypesReadme()
generateTagsReadme()
console.log('\n✓ Done!')

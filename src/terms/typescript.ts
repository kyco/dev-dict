import { LOCALE } from '@/locales'
import { TERM_TAGS } from '@/term-tags'
import { TERM_TYPES } from '@/term-types'
import type { TTerm } from '@/types'

export default {
  id: 'typescript',

  term: 'TypeScript',

  type: [TERM_TYPES.language],

  label: {
    [LOCALE.EN_GB]: `High-Level Programming Language`,
    [LOCALE.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALE.EN_GB]: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.`,
    [LOCALE.DE_DE]: `TypeScript ist eine stark typisierte Programmiersprache, die auf JavaScript aufbaut und Ihnen bei jeder Größenordnung bessere Werkzeuge bietet.`,
  },

  tags: [TERM_TAGS.frontend, TERM_TAGS.backend, TERM_TAGS.open_source],

  links: {
    website: 'https://www.typescriptlang.org',
  },
} as const satisfies TTerm

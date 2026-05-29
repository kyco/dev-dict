import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `javascript`,

  name: {
    [LOCALES.EN_US]: `JavaScript`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `High-Level Programming Language`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALES.EN_US]: `JavaScript is a high-level, dynamically typed programming language and one of the three core technologies of the Web alongside HTML and CSS. Created by Brendan Eich in 1995, it runs in browsers for client-side scripting and on servers via runtimes like Node.js.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `JavaScript ist eine hochsprachige, dynamisch typisierte Programmiersprache und eine der drei Kerntechnologien des Webs neben HTML und CSS. Sie wurde 1995 von Brendan Eich entwickelt und läuft in Browsern für clientseitiges Scripting sowie auf Servern über Laufzeitumgebungen wie Node.js.`,
  },

  type: [TYPES.language],

  tags: [TAGS.frontend, TAGS.backend, TAGS.open_source],

  links: {
    official_website: 'https://tc39.es/ecma262',
    wikipedia: `https://en.wikipedia.org/wiki/JavaScript`,
  },

  sources: {
    label: [SOURCES.ai_generated],
    definition: [SOURCES.ai_generated],
  },
} as const satisfies TTerm

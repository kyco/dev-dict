import { LOCALE } from '@/locales'
import { TERM_TAGS } from '@/term-tags'
import { TERM_TYPES } from '@/term-types'
import type { TTerm } from '@/types'

export default {
  id: 'node_js',

  name: 'Node.js',

  type: [TERM_TYPES.runtime_environment],

  label: {
    [LOCALE.EN_US]: `JavaScript Runtime`,
    [LOCALE.DE_DE]: `JavaScript-Laufzeit`,
  },

  definition: {
    [LOCALE.EN_US]: `Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`,
    [LOCALE.DE_DE]: `Node.js ist eine kostenlose, Open-Source, plattformübergreifende JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, Server, Webanwendungen, Befehlszeilentools und Skripte zu erstellen.`,
  },

  tags: [TERM_TAGS.backend],

  links: {
    website: 'https://nodejs.org',
  },
} as const satisfies TTerm

import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `node_js`,

  name: {
    [LOCALES.EN_US]: `Node.js`,
  },

  label: {
    [LOCALES.EN_US]: `JavaScript Runtime`,
    [LOCALES.DE_DE]: `JavaScript-Laufzeit`,
  },

  definition: {
    [LOCALES.EN_US]: `Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`,
    [LOCALES.DE_DE]: `Node.js ist eine kostenlose, Open-Source, plattformübergreifende JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, Server, Webanwendungen, Befehlszeilentools und Skripte zu erstellen.`,
  },

  type: [TYPES.runtime_environment],

  tags: [TAGS.backend],

  links: {
    website: `https://nodejs.org`,
  },
} as const satisfies TTerm

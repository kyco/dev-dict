import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `node_js`,

  name: {
    [LOCALES.EN_US]: `Node.js`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `JavaScript Runtime`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `JavaScript-Laufzeit`,
  },

  definition: {
    [LOCALES.EN_US]: `Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Node.js ist eine kostenlose, Open-Source, plattformübergreifende JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, Server, Webanwendungen, Befehlszeilentools und Skripte zu erstellen.`,
  },

  type: [TYPES.runtime_environment],

  tags: [TAGS.backend],

  links: {
    official_website: `https://nodejs.org`,
  },

  sources: {
    label: [SOURCES.community],
    definition: [SOURCES.official_website],
  },
} as const satisfies TTerm

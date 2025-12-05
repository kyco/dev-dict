import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `node_js`,

  name: {
    [LOCALE.EN_US]: `Node.js`,
  },

  label: {
    [LOCALE.EN_US]: `JavaScript Runtime`,
    [LOCALE.DE_DE]: `JavaScript-Laufzeit`,
  },

  definition: {
    [LOCALE.EN_US]: `Node.js is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.`,
    [LOCALE.DE_DE]: `Node.js ist eine kostenlose, Open-Source, plattformübergreifende JavaScript-Laufzeitumgebung, die es Entwicklern ermöglicht, Server, Webanwendungen, Befehlszeilentools und Skripte zu erstellen.`,
  },

  type: [TYPE.runtime_environment],

  tags: [TAG.backend],

  links: {
    website: `https://nodejs.org`,
  },
} as const satisfies TTerm

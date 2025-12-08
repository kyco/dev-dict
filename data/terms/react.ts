import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { SOURCE } from '../sources'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `react`,

  name: {
    [LOCALE.EN_US]: `React`,
  },

  label: {
    [LOCALE.EN_US]: `JavaScript Library`,
    [LOCALE.DE_DE]: `JavaScript-Bibliothek`,
  },

  definition: {
    [LOCALE.EN_US]: `A JavaScript library for building component-based user interfaces.`,
    [LOCALE.DE_DE]: `Eine JavaScript-Bibliothek zum Erstellen komponentenbasierter Benutzeroberflächen.`,
  },

  type: [TYPE.library],

  tags: [TAG.frontend, TAG.backend, TAG.javascript, TAG.open_source, TAG.ui_library],

  links: {
    website: `https://react.dev`,
    npm: `https://www.npmjs.com/package/react`,
    github: `https://github.com/facebook/react`,
    wikipedia: `https://en.wikipedia.org/wiki/React_(software)`,
  },

  sources: {
    definition: SOURCE.official_website,
  },
} as const satisfies TTerm

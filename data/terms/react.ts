import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { SOURCES } from '../sources'
import { TAGS } from '../tags'
import { TYPES } from '../types'

export default {
  id: `react`,

  name: {
    [LOCALES.EN_US]: `React`,
  },

  label: {
    [LOCALES.EN_US]: `JavaScript Library`,
    [LOCALES.DE_DE]: `JavaScript-Bibliothek`,
  },

  definition: {
    [LOCALES.EN_US]: `A JavaScript library for building component-based user interfaces.`,
    [LOCALES.DE_DE]: `Eine JavaScript-Bibliothek zum Erstellen komponentenbasierter Benutzeroberflächen.`,
  },

  type: [TYPES.library],

  tags: [TAGS.frontend, TAGS.backend, TAGS.javascript, TAGS.open_source, TAGS.ui_library],

  links: {
    website: `https://react.dev`,
    npm: `https://www.npmjs.com/package/react`,
    github: `https://github.com/facebook/react`,
    wikipedia: `https://en.wikipedia.org/wiki/React_(software)`,
  },

  sources: {
    definition: SOURCES.official_website,
  },
} as const satisfies TTerm

import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
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
  },

  sources: {
    label: {
      [LOCALE.EN_US]: `Community`,
      [LOCALE.DE_DE]: `AI translation from en-US`,
    },
    definition: {
      [LOCALE.EN_US]: `https://react.dev`,
      [LOCALE.DE_DE]: `AI translation from en-US`,
    },
  },
} as const satisfies TTerm

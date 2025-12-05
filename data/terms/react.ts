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

  tags: [TAG.frontend, TAG.backend],

  links: {
    website: `https://react.dev`,
  },
} as const satisfies TTerm

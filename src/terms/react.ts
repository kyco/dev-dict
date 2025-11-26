import { LOCALE } from '@/locales'
import { TERM_TAGS } from '@/term-tags'
import { TERM_TYPES } from '@/term-types'
import type { TTerm } from '@/types'

export default {
  id: 'react',

  name: 'React',

  type: [TERM_TYPES.library],

  label: {
    [LOCALE.EN_GB]: `JavaScript Library`,
    [LOCALE.DE_DE]: `JavaScript-Bibliothek`,
  },

  definition: {
    [LOCALE.EN_GB]: `A JavaScript library for building component-based user interfaces.`,
    [LOCALE.DE_DE]: `Eine JavaScript-Bibliothek zum Erstellen komponentenbasierter Benutzeroberflächen.`,
  },

  tags: [TERM_TAGS.frontend, TERM_TAGS.backend],

  links: {
    website: 'https://react.dev',
  },
} as const satisfies TTerm

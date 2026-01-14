import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `haskell`,

  name: {
    [LOCALES.EN_US]: `Haskell`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.language],

  tags: [],
} as const satisfies TTerm

import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `golang`,

  name: {
    [LOCALES.EN_US]: `Go`,
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

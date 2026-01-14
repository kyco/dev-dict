import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `python`,

  name: {
    [LOCALES.EN_US]: `Python`,
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

import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `foundation`,

  name: {
    [LOCALES.EN_US]: `Foundation`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [],

  tags: [],
} as const satisfies TTerm

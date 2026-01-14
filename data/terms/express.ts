import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `express`,

  name: {
    [LOCALES.EN_US]: `Express`,
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

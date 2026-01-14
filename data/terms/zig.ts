import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `zig`,

  name: {
    [LOCALES.EN_US]: `Zig`,
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

import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `service_workers`,

  name: {
    [LOCALES.EN_US]: `Service Workers`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.standard, TYPES.concept],

  tags: [],
} as const satisfies TTerm

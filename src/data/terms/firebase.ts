import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `firebase`,

  name: {
    [LOCALES.EN_US]: `Firebase`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.platform, TYPES.database, TYPES.service],

  tags: [],
} as const satisfies TTerm

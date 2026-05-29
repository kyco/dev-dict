import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `expression_engine`,

  name: {
    [LOCALES.EN_US]: `ExpressionEngine`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.cms],

  tags: [],
} as const satisfies TTerm

import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TYPES } from '../types'

export default {
  id: `ruby`,

  name: {
    [LOCALES.EN_US]: `Ruby`,
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

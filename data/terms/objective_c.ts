import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TYPES } from '../types'

export default {
  id: `objective_c`,

  name: {
    [LOCALES.EN_US]: `Objective-C`,
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

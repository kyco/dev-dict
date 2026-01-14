import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TAGS } from '../tags'
import { TYPES } from '../types'

export default {
  id: `pathlogix`,

  name: {
    [LOCALES.EN_US]: `Pathlogix`,
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

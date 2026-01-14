import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TAGS } from '../tags'
import { TYPES } from '../types'

export default {
  id: `css`,

  name: {
    [LOCALES.EN_US]: `CSS`,
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

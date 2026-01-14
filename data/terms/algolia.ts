import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TAGS } from '../tags'
import { TYPES } from '../types'

export default {
  id: `algolia`,

  name: {
    [LOCALES.EN_US]: `Algolia`,
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

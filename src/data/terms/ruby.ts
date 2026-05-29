import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

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

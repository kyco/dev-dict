import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `google_analytics`,

  name: {
    [LOCALES.EN_US]: `Google Analytics`,
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

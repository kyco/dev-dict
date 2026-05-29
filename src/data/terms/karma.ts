import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `karma`,

  name: {
    [LOCALES.EN_US]: `Karma`,
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

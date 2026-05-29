import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `php`,

  name: {
    [LOCALES.EN_US]: `PHP`,
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

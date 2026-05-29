import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/term-sources'
import { TAGS } from '@/data/term-tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `big_js`,

  name: {
    [LOCALES.EN_US]: `Big.js`,
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

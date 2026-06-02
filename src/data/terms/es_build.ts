import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `es_build`,

  name: {
    [LOCALES.EN_US]: `esbuild`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.tool],

  tags: [],
} as const satisfies TTerm

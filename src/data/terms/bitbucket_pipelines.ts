import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `bitbucket_pipelines`,

  name: {
    [LOCALES.EN_US]: `Bitbucket Pipelines`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.service, TYPES.tool],

  tags: [],
} as const satisfies TTerm

import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

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

  type: [],

  tags: [],
} as const satisfies TTerm

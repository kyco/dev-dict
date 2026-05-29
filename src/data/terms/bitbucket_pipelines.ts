import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/term-types'

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

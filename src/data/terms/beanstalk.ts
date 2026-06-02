import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `beanstalk`,

  name: {
    [LOCALES.EN_US]: `Beanstalk`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.platform, TYPES.service],

  tags: [],
} as const satisfies TTerm

import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `contentful`,

  name: {
    [LOCALE.EN_US]: `Contentful`,
  },

  label: {
    [LOCALE.EN_US]: ``,
  },

  definition: {
    [LOCALE.EN_US]: ``,
  },

  type: [],

  tags: [],
} as const satisfies TTerm

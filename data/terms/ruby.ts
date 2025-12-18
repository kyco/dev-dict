import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TYPE } from '../types'

export default {
  id: `ruby`,

  name: {
    [LOCALE.EN_US]: `Ruby`,
  },

  label: {
    [LOCALE.EN_US]: ``,
  },

  definition: {
    [LOCALE.EN_US]: ``,
  },

  type: [TYPE.language],

  tags: [],
} as const satisfies TTerm

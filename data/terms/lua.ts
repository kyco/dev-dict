import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TYPE } from '../types'

export default {
  id: `lua`,

  name: {
    [LOCALE.EN_US]: `Lua`,
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

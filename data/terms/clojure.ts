import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TYPE } from '../types'

export default {
  id: `clojure`,

  name: {
    [LOCALE.EN_US]: `Clojure`,
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

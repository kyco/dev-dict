import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `expression_engine`,

  name: {
    [LOCALE.EN_US]: `ExpressionEngine`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: LOCALE.EN_US,
  },

  label: {
    [LOCALE.EN_US]: ``,
  },

  definition: {
    [LOCALE.EN_US]: ``,
  },

  type: [TYPE.cms],

  tags: [],
} as const satisfies TTerm

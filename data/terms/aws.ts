import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `aws`,

  name: {
    [LOCALE.EN_US]: `AWS`,
  },

  label: {
    [LOCALE.EN_US]: ``,
  },

  definition: {
    [LOCALE.EN_US]: ``,
  },

  type: [TYPE.platform],

  tags: [],

  links: {
    website: ``,
  },
} as const satisfies TTerm

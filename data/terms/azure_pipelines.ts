import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `azure_pipelines`,

  name: {
    [LOCALE.EN_US]: `Azure Pipelines`,
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

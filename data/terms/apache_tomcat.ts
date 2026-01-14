import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TAGS } from '../tags'
import { TYPES } from '../types'

export default {
  id: `apache_tomcat`,

  name: {
    [LOCALES.EN_US]: `Apache Tomcat`,
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

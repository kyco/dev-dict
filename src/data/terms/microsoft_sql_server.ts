import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `microsoft_sql_server`,

  name: {
    [LOCALES.EN_US]: `Microsoft SQL Server`,
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

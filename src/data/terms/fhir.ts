import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `fhir`,

  name: {
    [LOCALES.EN_US]: `FHIR`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.standard, TYPES.protocol],

  tags: [],
} as const satisfies TTerm

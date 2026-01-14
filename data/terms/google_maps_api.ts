import type { TTerm } from '@/types'
import { LOCALES, SOURCES, TAGS, TYPES } from '@data/index'

export default {
  id: `google_maps_api`,

  name: {
    [LOCALES.EN_US]: `Google Maps API`,
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

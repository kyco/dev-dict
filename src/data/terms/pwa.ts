import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data'

export default {
  id: `pwa`,

  name: {
    [LOCALES.EN_US]: `Progressive Web App`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  altName: {
    [LOCALES.EN_US]: `PWA`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
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

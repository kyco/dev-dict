import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `cloudflare`,

  name: {
    [LOCALES.EN_US]: `Cloudflare`,
  },

  label: {
    [LOCALES.EN_US]: ``,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.platform, TYPES.service],

  tags: [],
} as const satisfies TTerm

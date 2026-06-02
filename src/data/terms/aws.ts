import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES, TAGS, TYPES } from '@/data/raw'

export default {
  id: `aws`,

  name: {
    [LOCALES.EN_US]: `AWS`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  altName: {
    [LOCALES.EN_US]: `Amazon Web Services`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `Cloud Computing Platform`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Cloud-Computing-Plattform`,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.platform, TYPES.service],

  tags: [],

  links: {
    official_website: `https://aws.amazon.com/`,
  },
} as const satisfies TTerm

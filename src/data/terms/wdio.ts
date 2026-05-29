import type { TTerm } from '@/types'
import { LOCALES } from '@/common'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/term-types'

export default {
  id: `wdio`,

  name: {
    [LOCALES.EN_US]: `WebdriverIO`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  altName: {
    [LOCALES.EN_US]: `WDIO`,
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

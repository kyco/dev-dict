import type { TTerm } from '@/types'

import { LOCALES } from '../locales'
import { TAGS } from '../tags'
import { TYPES } from '../types'

export default {
  id: `javascript`,

  name: {
    [LOCALES.EN_US]: `JavaScript`,
  },

  label: {
    [LOCALES.EN_US]: `High-Level Programming Language`,
    [LOCALES.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALES.EN_US]: ``,
  },

  type: [TYPES.language],

  tags: [TAGS.frontend, TAGS.backend, TAGS.open_source],

  links: {
    website: 'https://tc39.es/ecma262',
    wikipedia: `https://en.wikipedia.org/wiki/JavaScript`,
  },
} as const satisfies TTerm

import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `javascript`,

  name: {
    [LOCALE.EN_US]: `JavaScript`,
  },

  label: {
    [LOCALE.EN_US]: `High-Level Programming Language`,
    [LOCALE.DE_DE]: `Hochsprache`,
  },

  definition: {
    [LOCALE.EN_US]: ``,
  },

  type: [TYPE.language],

  tags: [TAG.frontend, TAG.backend, TAG.open_source],

  links: {
    website: `https://en.wikipedia.org/wiki/JavaScript`,
  },
} as const satisfies TTerm

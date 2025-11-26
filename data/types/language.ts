import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: 'language',

  name: {
    [LOCALE.EN_US]: `Language`,
    [LOCALE.DE_DE]: `Sprache`,
  },
} as const satisfies TTermType

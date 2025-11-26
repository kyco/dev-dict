import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: 'library',

  name: {
    [LOCALE.EN_US]: `Library`,
    [LOCALE.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType

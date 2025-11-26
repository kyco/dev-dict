import type { TTermType } from '@/types'
import { LOCALE } from '@data'

export default {
  id: 'library',

  name: {
    [LOCALE.EN_US]: `Library`,
    [LOCALE.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType

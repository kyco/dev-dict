import { LOCALE } from '@/locales'
import type { TTermType } from '@/types'

export default {
  id: 'library',

  name: {
    [LOCALE.EN_US]: `Library`,
    [LOCALE.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType

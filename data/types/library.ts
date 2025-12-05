import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `library`,

  name: {
    [LOCALE.EN_US]: `Library`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType

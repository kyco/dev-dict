import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `language`,

  name: {
    [LOCALE.EN_US]: `Language`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Sprache`,
  },
} as const satisfies TTermType

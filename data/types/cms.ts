import type { TTermType } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `cms`,

  name: {
    [LOCALE.EN_US]: `Content Management System`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Content-Management-System`,
  },
} as const satisfies TTermType

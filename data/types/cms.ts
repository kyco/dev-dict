import type { TTermType } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `cms`,

  name: {
    [LOCALES.EN_US]: `Content Management System`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Content-Management-System`,
  },
} as const satisfies TTermType

import { LOCALE } from '@/locales'
import type { TTermTag } from '@/types'

export default {
  id: 'backend',

  name: {
    [LOCALE.EN_GB]: `Backend`,
    [LOCALE.DE_DE]: `Backend`,
  },
} as const satisfies TTermTag

import { LOCALE } from '@/locales'
import type { TTermTag } from '@/types'

export default {
  id: 'backend',

  name: {
    [LOCALE.EN_US]: `Backend`,
    [LOCALE.DE_DE]: `Backend`,
  },
} as const satisfies TTermTag

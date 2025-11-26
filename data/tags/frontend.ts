import type { TTermTag } from '@/types'
import { LOCALE } from '@data'

export default {
  id: 'frontend',

  name: {
    [LOCALE.EN_US]: `Frontend`,
    [LOCALE.DE_DE]: `Frontend`,
  },
} as const satisfies TTermTag

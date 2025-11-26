import { LOCALE } from '@/locales'
import type { TTermTag } from '@/types'

export default {
  id: 'frontend',

  name: {
    [LOCALE.EN_US]: `Frontend`,
    [LOCALE.DE_DE]: `Frontend`,
  },
} as const satisfies TTermTag

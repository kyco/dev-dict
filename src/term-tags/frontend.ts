import { LOCALE } from '@/locales'
import type { TTermTag } from '@/types'

export default {
  id: 'frontend',

  name: {
    [LOCALE.EN_GB]: `Frontend`,
    [LOCALE.DE_DE]: `Frontend`,
  },
} as const satisfies TTermTag

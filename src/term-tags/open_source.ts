import { LOCALE } from '@/locales'
import type { TTermTag } from '@/types'

export default {
  id: 'open_source',

  name: {
    [LOCALE.EN_GB]: `Open Source`,
    [LOCALE.DE_DE]: `Open Source`,
  },
} as const satisfies TTermTag

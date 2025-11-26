import { LOCALE } from '@/locales'
import type { TTermTag } from '@/types'

export default {
  id: 'open_source',

  name: {
    [LOCALE.EN_US]: `Open Source`,
    [LOCALE.DE_DE]: `Open Source`,
  },
} as const satisfies TTermTag

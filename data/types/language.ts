import { LOCALE } from '@/locales'
import type { TTermType } from '@/types'

export default {
  id: 'language',

  name: {
    [LOCALE.EN_US]: `Language`,
    [LOCALE.DE_DE]: `Sprache`,
  },
} as const satisfies TTermType

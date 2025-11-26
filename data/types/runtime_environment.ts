import { LOCALE } from '@/locales'
import type { TTermType } from '@/types'

export default {
  id: 'runtime_environment',

  name: {
    [LOCALE.EN_US]: `Runtime Environment`,
    [LOCALE.DE_DE]: `Laufzeitumgebung`,
  },
} as const satisfies TTermType

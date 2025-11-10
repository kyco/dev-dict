import { LOCALE } from '../locales'
import type { TTermType } from '../typings'

export default {
  id: 'runtime_environment',

  name: {
    [LOCALE.EN_GB]: `Runtime Environment`,
    [LOCALE.DE_DE]: `Laufzeitumgebung`,
  },
} as const satisfies TTermType

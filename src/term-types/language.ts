import { LOCALE } from '../locales'
import type { TTermType } from '../typings'

export default {
  id: 'language',

  name: {
    [LOCALE.EN_GB]: `Language`,
    [LOCALE.DE_DE]: `Sprache`,
  },
} as const satisfies TTermType

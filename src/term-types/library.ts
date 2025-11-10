import { LOCALE } from '../locales'
import type { TTermType } from '../typings'

export default {
  id: 'library',

  name: {
    [LOCALE.EN_GB]: `Library`,
    [LOCALE.DE_DE]: `Bibliothek`,
  },
} as const satisfies TTermType

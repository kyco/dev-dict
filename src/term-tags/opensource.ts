import { LOCALE } from '../locales'
import type { TTermTag } from '../typings'

export default {
  id: 'opensource',

  name: {
    [LOCALE.EN_GB]: `Open Source`,
    [LOCALE.DE_DE]: `Open Source`,
  },
} as const satisfies TTermTag

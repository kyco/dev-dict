import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `cryptography`,

  name: {
    [LOCALE.EN_US]: `Cryptography`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Kryptografie`,
  },
} as const satisfies TTermTag

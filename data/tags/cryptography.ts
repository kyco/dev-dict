import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `cryptography`,

  name: {
    [LOCALES.EN_US]: `Cryptography`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Kryptografie`,
  },
} as const satisfies TTermTag

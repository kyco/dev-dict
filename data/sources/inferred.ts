import type { TTermSource } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `inferred`,

  name: {
    [LOCALE.EN_US]: `Inferred from Context`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Aus dem Kontext abgeleitet`,
  },
} as const satisfies TTermSource

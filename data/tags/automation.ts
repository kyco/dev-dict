import type { TTermTag } from '@/types'

import { LOCALE } from '../locales'

export default {
  id: `automation`,

  name: {
    [LOCALE.EN_US]: `Automation`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Automatisierung`,
  },
} as const satisfies TTermTag

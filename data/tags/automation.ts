import type { TTermTag } from '@/types'

import { LOCALES } from '../locales'

export default {
  id: `automation`,

  name: {
    [LOCALES.EN_US]: `Automation`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Automatisierung`,
  },
} as const satisfies TTermTag

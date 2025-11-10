import { LOCALE } from '../locales'
import type { TTermTag } from '../typings'

export default {
  id: 'frontend',

  name: {
    [LOCALE.EN_GB]: `Frontend`,
    [LOCALE.DE_DE]: `Frontend`,
  },
} as const satisfies TTermTag

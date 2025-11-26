import { LOCALE } from '@/locales'
import type { TTermType } from '@/types'

export default {
  id: 'cms',

  name: {
    [LOCALE.EN_US]: `Content Management System`,
    [LOCALE.DE_DE]: `Content-Management-System`,
  },
} as const satisfies TTermType

import { LOCALE } from '../locales'
import type { TTermType } from '../typings'

export default {
  id: 'cms',

  name: {
    [LOCALE.EN_GB]: `Content Management System`,
    [LOCALE.DE_DE]: `Content-Management-System`,
  },
} as const satisfies TTermType

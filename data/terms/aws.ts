import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `aws`,

  name: {
    [LOCALE.EN_US]: `AWS`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: LOCALE.EN_US,
  },

  altName: {
    [LOCALE.EN_US]: `Amazon Web Services`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: LOCALE.EN_US,
  },

  label: {
    [LOCALE.EN_US]: `Cloud Computing Platform`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Cloud-Computing-Plattform`,
  },

  definition: {
    [LOCALE.EN_US]: ``,
  },

  type: [TYPE.platform],

  tags: [],

  links: {
    website: `https://aws.amazon.com/`,
  },
} as const satisfies TTerm

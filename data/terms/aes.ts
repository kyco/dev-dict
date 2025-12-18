import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `aes`,

  name: {
    [LOCALE.EN_US]: `AES`,
  },

  label: {
    [LOCALE.EN_US]: `Encryption Standard`,
  },

  definition: {
    [LOCALE.EN_US]: `Advanced Encryption Standard (AES) is a symmetric encryption algorithm established as a standard by the US National Institute of Standards and Technology (NIST) in 2001. It uses block cipher with key sizes of 128, 192, or 256 bits and is widely adopted for securing sensitive data in software applications, communications, and storage systems.`,
  },

  type: [TYPE.standard],

  tags: [TAG.security, TAG.cryptography],
} as const satisfies TTerm

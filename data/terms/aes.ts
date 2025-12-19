import type { TTerm } from '@/types'

import { LOCALE } from '../locales'
import { TAG } from '../tags'
import { TYPE } from '../types'

export default {
  id: `aes`,

  name: {
    [LOCALE.EN_US]: `AES`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: LOCALE.EN_US,
  },

  label: {
    [LOCALE.EN_US]: `Encryption Standard`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Verschlüsselungsstandard`,
  },

  definition: {
    [LOCALE.EN_US]: `Advanced Encryption Standard (AES) is a symmetric encryption algorithm established as a standard by the US National Institute of Standards and Technology (NIST) in 2001. It uses block cipher with key sizes of 128, 192, or 256 bits and is widely adopted for securing sensitive data in software applications, communications, and storage systems.`,
    [LOCALE.EN_GB]: LOCALE.EN_US,
    [LOCALE.DE_DE]: `Advanced Encryption Standard (AES) ist ein symmetrischer Verschlüsselungsalgorithmus, der im Jahr 2001 vom US-amerikanischen National Institute of Standards and Technology (NIST) als Standard festgelegt wurde. Er verwendet eine Blockchiffre mit Schlüssellängen von 128, 192 oder 256 Bit und wird weltweit zur Absicherung sensibler Daten in Softwareanwendungen, Kommunikationssystemen und Speichersystemen eingesetzt.`,
  },

  type: [TYPE.standard],

  tags: [TAG.security, TAG.cryptography],
} as const satisfies TTerm

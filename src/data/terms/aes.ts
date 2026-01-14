import type { TTerm } from '@/types'
import { LOCALES } from '@/data/locales'
import { SOURCES } from '@/data/sources'
import { TAGS } from '@/data/tags'
import { TYPES } from '@/data/types'

export default {
  id: `aes`,

  name: {
    [LOCALES.EN_US]: `AES`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  altName: {
    [LOCALES.EN_US]: `Advanced Encryption Standard`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: LOCALES.EN_US,
  },

  label: {
    [LOCALES.EN_US]: `Encryption Standard`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Verschlüsselungsstandard`,
  },

  definition: {
    [LOCALES.EN_US]: `Advanced Encryption Standard (AES) is a symmetric encryption algorithm established as a standard by the US National Institute of Standards and Technology (NIST) in 2001. It uses block cipher with key sizes of 128, 192, or 256 bits and is widely adopted for securing sensitive data in software applications, communications, and storage systems.`,
    [LOCALES.EN_GB]: LOCALES.EN_US,
    [LOCALES.DE_DE]: `Advanced Encryption Standard (AES) ist ein symmetrischer Verschlüsselungsalgorithmus, der im Jahr 2001 vom US-amerikanischen National Institute of Standards and Technology (NIST) als Standard festgelegt wurde. Er verwendet eine Blockchiffre mit Schlüssellängen von 128, 192 oder 256 Bit und wird weltweit zur Absicherung sensibler Daten in Softwareanwendungen, Kommunikationssystemen und Speichersystemen eingesetzt.`,
  },

  type: [TYPES.standard],

  tags: [TAGS.security, TAGS.cryptography],

  links: {
    website: `https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197-upd1.pdf`,
    wikipedia: `https://en.wikipedia.org/wiki/Advanced_Encryption_Standard`,
  },

  sources: {
    label: SOURCES.community,
    definition: SOURCES.ai_generated,
  },
} as const satisfies TTerm

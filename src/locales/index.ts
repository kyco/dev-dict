export const LOCALE = {
  EN_US: 'en-US',
  EN_GB: 'en-GB',
  DE_DE: 'de-DE',
} as const

export type TLocale = (typeof LOCALE)[keyof typeof LOCALE]

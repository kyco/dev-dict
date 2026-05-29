export const MISC = {
  TERM_INTERPOLATION_KEYS: ['name', 'altName', 'label', 'definition'],
}

export const LOCALES = {
  EN_US: 'en-US',
  EN_GB: 'en-GB',
  DE_DE: 'de-DE',
} as const

export const CONFIG = {
  DEFAULT_LOCALE: LOCALES.EN_US,
  POPULATE_EMPTY: true,
}

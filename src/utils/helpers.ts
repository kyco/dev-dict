import type { TLocale, TLocaleRecord } from '@/types'
import { CONFIG, LOCALES } from '@/common'

/**
 * This method will convert e.g. `[LOCALES.EN_GB]: LOCALES.EN_US` to the actual value
 * of the specified locale, in this case the value of `LOCALES.EN_US`.
 */
export const interpolateValue = ({
  obj,
  value,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: TLocaleRecord
  value: undefined | string
  populateEmpty?: boolean
}): string => {
  if (value && Object.values<string>(LOCALES).includes(value)) {
    return obj[value as TLocale] || (populateEmpty ? obj[LOCALES.EN_US] : '')
  }
  return value || (populateEmpty ? obj[LOCALES.EN_US] : '')
}

export const interpolateLocaleRecord = ({
  obj,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: TLocaleRecord
  populateEmpty?: boolean
}): TLocaleRecord => {
  const locales = Object.values<string>(LOCALES) as TLocale[]

  return Object.fromEntries(
    locales.map((locale) => [locale, interpolateValue({ obj, value: obj[locale], populateEmpty })]),
  ) as TLocaleRecord
}

export const interpolateValues = <T extends Record<string, any>>({
  obj,
  keys,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: T
  keys: string[]
  populateEmpty?: boolean
}): T => {
  return Object.fromEntries(
    Object.entries(obj).map(([itemKey, item]) => {
      const interpolatedFields = keys
        .filter((key) => key in item && typeof item[key] === 'object')
        .map((key) => [key, interpolateLocaleRecord({ obj: item[key], populateEmpty })])

      return [itemKey, { ...item, ...Object.fromEntries(interpolatedFields) }]
    }),
  ) as T
}

export const getValueLocalized = ({
  obj,
  locale = CONFIG.DEFAULT_LOCALE,
  populateEmpty = CONFIG.POPULATE_EMPTY,
}: {
  obj: TLocaleRecord
  locale?: TLocale
  populateEmpty?: boolean
}): string => {
  return interpolateValue({ obj, value: obj[locale], populateEmpty })
}

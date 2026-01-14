import type { TLocale, TLocaleRecord, TTermTag, TTermTagLocalized, TTermType, TTermTypeLocalized } from '@/types'
import { CONFIG } from '@/common'
import { LOCALES } from '@/data/locales'

export const interpolateValue = ({
  obj,
  value,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: TLocaleRecord
  value: undefined | string
  useFallback?: boolean
}): string => {
  if (value && Object.values<string>(LOCALES).includes(value)) {
    return obj[value as TLocale] || (useFallback ? obj[LOCALES.EN_US] : '')
  }
  return value || (useFallback ? obj[LOCALES.EN_US] : '')
}

export const interpolateLocaleRecord = ({
  obj,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: TLocaleRecord
  useFallback?: boolean
}): TLocaleRecord => {
  const locales = Object.values<string>(LOCALES) as TLocale[]

  return Object.fromEntries(
    locales.map((locale) => [locale, interpolateValue({ obj, value: obj[locale], useFallback })]),
  ) as TLocaleRecord
}

export const interpolateValues = <T extends Record<string, any>>({
  obj,
  keys,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: T
  keys: string[]
  useFallback?: boolean
}): T => {
  return Object.fromEntries(
    Object.entries(obj).map(([itemKey, item]) => {
      const interpolatedFields = keys
        .filter((key) => key in item && typeof item[key] === 'object')
        .map((key) => [key, interpolateLocaleRecord({ obj: item[key], useFallback })])

      return [itemKey, { ...item, ...Object.fromEntries(interpolatedFields) }]
    }),
  ) as T
}

export const getValueLocalized = ({
  obj,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  obj: TLocaleRecord
  locale?: TLocale
  useFallback?: boolean
}): string => {
  return interpolateValue({ obj, value: obj[locale], useFallback })
}

export const getTermTagLocalized = ({
  tag,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  tag: TTermTag
  locale?: TLocale
  useFallback?: boolean
}): TTermTagLocalized => {
  return {
    id: tag.id,
    name: getValueLocalized({ obj: tag.name, locale, useFallback }),
  }
}

export const getTermTypeLocalized = ({
  term,
  locale = CONFIG.DEFAULT_LOCALE,
  useFallback = CONFIG.USE_FALLBACK,
}: {
  term: TTermType
  locale?: TLocale
  useFallback?: boolean
}): TTermTypeLocalized => {
  return {
    id: term.id,
    name: getValueLocalized({ obj: term.name, locale, useFallback }),
  }
}
